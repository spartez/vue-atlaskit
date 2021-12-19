<template>
    <div ref="target">
        <TextField :is-focused="focused" :is-invalid="isInvalid" :is-loading="isLoading"
                   class="text-field" select tabindex="-1"
                   @click="click">
            <div ref="list" class="flex-wrapper"
                 @dragover.prevent>
                <input ref="input" class="search"
                       :value="search"
                       :disabled="isLoading" :style="{width: currentWidth}"
                       @keydown.down.prevent="onNextSuggestion"
                       @keydown.up.prevent="onPreviousSuggestion"
                       @keydown.right.prevent="toggleExpand"
                       @keydown.left.prevent="toggleExpand"
                       @keydown.enter="onSuggestionSelected"
                       @input="onInput"
                       @focus="onFocus"
                       @blur="onBlur"
                       @keyup.esc="onEsc"
                       @keydown.delete="removeOption">
            </div>
            <div v-if="!selected.length" class="text">
                <slot v-if="!search && selected && $slots['selected']" name="selected"
                      :ancestors="ancestors"
                      :selected="selected"/>
                <span v-else :placeholder="!search && !selected.label">
                    {{ input }}
                </span>
            </div>
            <Icons :is-selected="isAnyOptionSelected" :is-fetching="isFetching"
                   :is-clearable="isClearable" @clear="onClear"/>
        </TextField>
        <Popper v-if="isOpen && !isDirty" ref="menu" offset="0,0"
                :target-element="$refs.target"
                :boundaries-element="boundariesElement"
                placement="bottom-start">
            <SelectMenu :selected="selected" :options="options"
                        :current-suggestion-id="currentSuggestionId"
                        :is-fetching="isFetching"
                        :async="async"
                        :search="search"
                        :contains-query="!!search"
                        :style="{width: selectWidth}"
                        :has-suggestions="true"
                        :no-options-message="noOptionsMessage"
                        :placeholder="searchPromptText"
                        @mouseover="onMouseOverSuggestion"
                        @option-selected="onOptionSelected">
                <slot slot="option" slot-scope="{option, isCurrent}" name="option"
                      :is-current="isCurrent"
                      :option="option"/>
            </SelectMenu>
        </Popper>
    </div>
</template>

<script>
    import TextField from '../../Form/TextField';
    import SelectMenu from './SelectMenu';
    import Popper from '../../Popper/Popper';
    import Icons from '../Icons';
    import { EventBus } from '../../event-bus';

    const INPUT_WIDTH = '5px';

    export default {
        components: {
            TextField, Popper, SelectMenu, Icons
        },
        props: {
            value: {
                type: [Object, Array],
                default: () => ({})
            },
            options: {
                type: Array,
                default: () => []
            },
            placeholder: {
                type: String,
                default: 'Type to search...'
            },
            searchPromptText: {
                type: String,
                default: 'Type to search...'
            },
            isLoading: {
                type: Boolean,
                default: false
            },
            isFetching: {
                type: Boolean,
                default: false
            },
            isFocused: {
                type: Boolean,
                default: false
            },
            isInvalid: {
                type: Boolean,
                default: false
            },
            async: {
                type: Boolean,
                default: false
            },
            boundariesElement: {
                type: String,
                default: 'viewport'
            },
            noOptionsMessage: {
                type: String,
                default: 'No options'
            },
            isClearable: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                isOpen: false,
                search: '',
                focused: false,
                currentSuggestionId: undefined,
                currentWidth: INPUT_WIDTH,
                isDirty: false,
                selectWidth: 'auto',
                visibleNodesIds: [],
                index: undefined,
                ancestors: []
            };
        },
        computed: {
            selected() {
                return this.value;
            },

            nodes() {
                return this.getChildNodes(this.options);
            },

            input() {
                if (this.search) {
                    return '';
                }
                return this.selected.label || this.placeholder;
            },

            isAnyOptionSelected() {
                return !!this.selected.id;
            }
        },
        watch: {
            isFocused: {
                handler(isFocused) {
                    if (isFocused) {
                        this.$nextTick(() => this.$refs.input.focus());
                    }
                },
                immediate: true
            },

            search() {
                if (!this.search) this.currentWidth = INPUT_WIDTH;
                if (this.async && this.search) this.isDirty = true;
                this.$emit('search-change', this.search);
                this.updateVisibleNodes();
            },

            isOpen(open) {
                if (!open) {
                    this.currentSuggestionId = undefined;
                    this.$emit('close');
                } else {
                    const { width } = this.$refs.target.getBoundingClientRect();
                    this.selectWidth = `${width}px`;
                    this.$emit('open');
                    this.updateVisibleNodes();
                }
            },

            isFetching(isFetching) {
                if (!isFetching) {
                    this.isDirty = false;
                }
            },

            suggestions() {
                this.$nextTick(() => this.updatePopperPosition());
            },

            index(index) {
                this.currentSuggestionId = this.visibleNodesIds[index];
            }
        },
        methods: {
            onFocus(e) {
                if (this.isLoading) return;
                this.focused = true;
                if (!this.$refs.target.contains(e.relatedTarget)) {
                    this.isOpen = true;
                }
                this.$emit('focus', e);
            },

            onBlur(e) {
                if (!this.$refs.target.contains(e.relatedTarget)) {
                    this.search = '';
                    this.closeOptions();
                    this.$emit('blur', e);
                }
            },

            click() {
                this.isOpen = !this.isOpen;
                this.$refs.input.focus();
            },

            onEsc() {
                this.isOpen = false;
                this.$emit('cancel');
            },

            closeOptions() {
                this.isOpen = false;
                this.focused = false;
            },

            onClear() {
                this.$emit('input', undefined);
                this.isOpen = false;
                this.$nextTick(() => this.$refs.input.focus());
            },

            onOptionSelected(option, ancestors) {
                this.ancestors = ancestors;
                this.search = '';
                this.focused = true;
                this.$refs.input.focus();
                this.isOpen = false;
                this.$emit('input', option);
            },

            onInput({ target }) {
                this.search = target.value;
                this.isOpen = true;
                this.resize();
                this.updatePopperPosition();
            },

            removeOption() {
                if (!this.search && this.selected) {
                    this.$emit('input', undefined);
                }
            },

            onNextSuggestion() {
                if (!this.isOpen) this.isOpen = true;
                if (this.currentSuggestionId === undefined) {
                    this.index = 0;
                } else {
                    this.index = this.index + 1;
                    if (this.index > this.visibleNodesIds.length - 1) {
                        this.index = 0;
                    }
                }
            },

            onPreviousSuggestion() {
                if (!this.isOpen) this.isOpen = true;
                if (this.currentSuggestionId === undefined) {
                    this.index = this.visibleNodesIds.length - 1;
                } else {
                    this.index = this.index - 1;
                    if (this.index < 0) {
                        this.index = this.visibleNodesIds.length - 1;
                    }
                }
            },

            onMouseOverSuggestion(id) {
                this.currentSuggestionId = id;
            },

            onSuggestionSelected(e) {
                // if current index is undefined, means we don't want to select any value, just submit
                if (this.currentSuggestionId === undefined) {
                    this.$emit('confirm', e);
                    return;
                }
                e.preventDefault();
                EventBus.$emit('remote-select');
                this.currentSuggestionId = undefined;
                this.$nextTick(() => {
                    this.$refs.input.focus();
                });
            },

            resize() {
                this.$nextTick(() => {
                    if (this.$refs.input) {
                        this.currentWidth = `${this.$refs.input.scrollWidth}px`;
                    }
                });
            },

            updatePopperPosition() {
                if (this.$refs.menu) {
                    this.$refs.menu.update();
                }
            },

            getChildNodes(children = []) {
                return children.reduce((nodes, node) => {
                    if (node.children) {
                        return [...nodes, node, ...this.getChildNodes(node.children)];
                    }
                    return [...nodes, node];
                }, []);
            },

            toggleExpand() {
                EventBus.$emit('remote-expand');
                this.updateVisibleNodes();
            },

            updateVisibleNodes() {
                this.$nextTick(() => {
                    if (this.$refs.menu) {
                        const visibleNodes = Array.from(this.$refs.menu.$el
                            .querySelectorAll('input[type="checkbox"]'))
                            .filter(el => el.offsetHeight > 0);
                        this.visibleNodesIds = visibleNodes.map(node => node.value);
                    }
                });
            }


        }
    };
</script>
<style scoped>
    .text {
        cursor: text;
        position: absolute;
        z-index: 2;
        left: 6px;
        right: 45px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .text-field {
        flex-wrap: wrap;
        padding: 6px 45px 6px 6px;
        justify-content: normal;
        outline: none;
    }

    .text-field input {
        padding: 0;
    }

    .flex-wrapper {
        display: inline-flex;
        max-width: 100%;
        flex-wrap: wrap;
    }

    .flex-wrapper[gap=true] {
        margin-top: -4px;
    }

    .text [placeholder=true] {
        color: rgb(122, 134, 154);
    }

    .search {
        width: 100%;
        position: relative;
        z-index: 3;
    }

    [gap=true] .search {
        margin-top: 4px;
    }

    .ghost {
        opacity: .4;
        background-color: #fff;
        pointer-events: none;
    }
</style>
