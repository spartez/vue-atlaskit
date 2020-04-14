<template>
    <div ref="target">
        <TextField :is-focused="focused" :is-invalid="isInvalid" :is-loading="isLoading"
                   class="text-field" select tabindex="-1"
                   @click="click">
            <div ref="list" class="flex-wrapper" :gap="multi && !!selected.length"
                 @dragover.prevent>
                <template v-if=" multi">
                    <Tag v-for="(tag,i) in selected" :key="`${tag.id}-${i}`" :tag="tag"
                         :index="i"
                         @dragend="onDragEnd"
                         @drag="handleDrag"
                         @dragstart="onDragStart"
                         @on-remove="onRemove">
                        <slot name="tag" :tag="tag"/>
                    </Tag>
                </template>
                <input ref="input" class="search"
                       :value="search"
                       :disabled="isLoading" :style="{width: currentWidth}"
                       @keydown.down.prevent="onNextSuggestion"
                       @keydown.up.prevent="onPreviousSuggestion"
                       @keydown.enter="onSuggestionSelected"
                       @input="onInput"
                       @focus="onFocus"
                       @blur="onBlur"
                       @keyup.esc="onEsc"
                       @keydown.delete="removeOption">
            </div>
            <div v-if="!selected.length" class="text">
                <slot v-if="!search && selected && $scopedSlots['selected'] && !multi" name="selected" :selected="selected"/>
                <span v-else :placeholder="!search && !selected.label">
                    {{ input }}
                </span>
            </div>
            <Icons :is-selected="isAnyOptionSelected" :is-fetching="isFetching"
                   @clear="onClear"/>
        </TextField>
        <Popper v-if="isOpen && !isDirty" ref="menu" offset="0,0"
                :target-element="$refs.target"
                :boundaries-element="boundariesElement"
                placement="bottom-start">
            <SelectMenu :selected="selected" :options="suggestions"
                        :current-suggestion-id="currentSuggestionId"
                        :is-fetching="isFetching"
                        :async="async"
                        :multi="multi"
                        :contains-query="!!search"
                        :style="{width: selectWidth}"
                        :has-suggestions="hasSuggestions"
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
    import Tag from '../Tag';
    import Icons from '../Icons';


    const INPUT_WIDTH = '5px';

    export default {
        components: {
            TextField, Popper, SelectMenu, Tag, Icons
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
            multi: {
                type: Boolean,
                default: false
            },
            filterPredicate: {
                type: Function,
                default: (label = '', input = '') => label
                    .toString()
                    .toLowerCase()
                    .includes(input.toLowerCase().trim())
            },
            normalizer: {
                type: Function,
                default: value => ({
                    id: value, label: value, value, disabled: false
                })
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
            tree: {
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
                draggedElement: undefined,
                prevIndex: undefined,
                nextIndex: undefined,
                visibleNodesIds: [],
                index: undefined
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

            suggestions() {
                if (this.search && !this.async) {
                    return this.options
                        .filter(option => this.filterPredicate(option.label, this.search));
                }
                return this.options;
            },

            hasSuggestions() {
                return this.suggestions && this.suggestions.length > 0;
            },

            isAnyOptionSelected() {
                return (this.multi && !!this.selected.filter(o => !o.disabled).length) || !!this.selected.id;
            },

            disabledOptions() {
                return this.multi && this.selected.filter(o => o.disabled).map(o => o);
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
            },

            isOpen(open) {
                if (!open) {
                    this.currentSuggestionId = undefined;
                    this.$emit('close');
                } else {
                    const { width } = this.$refs.target.getBoundingClientRect();
                    this.selectWidth = `${width}px`;
                    this.$emit('open');
                    this.$nextTick(() => {
                        const visibleNodes = Array.from(this.$refs.menu.$el.querySelectorAll('input[type="checkbox"]'));
                        this.visibleNodesIds = visibleNodes.map(node => node.value);
                    });
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
                const empty = this.multi ? [...this.disabledOptions] : undefined;
                this.$emit('input', empty);
                this.isOpen = false;
                this.$nextTick(() => this.$refs.input.focus());
            },

            onOptionSelected(option) {
                this.search = '';
                this.focused = true;
                if (this.multi) {
                    this.isOpen = false;
                    this.$nextTick(() => this.$refs.input.focus());
                } else {
                    this.$refs.input.focus();
                    this.isOpen = false;
                }
                this.$emit('input', option);
            },

            onInput({ target }) {
                this.search = target.value;
                this.isOpen = true;
                this.resize();
                this.updatePopperPosition();
            },

            onRemove(id) {
                if (!this.selected.length) return;
                const selected = this.selected
                    .filter(option => option.id !== id || option.disabled)
                    .map(option => option);
                this.updatePopperPosition();
                this.$emit('input', selected);
                this.$nextTick(() => this.updatePopperPosition());
            },

            removeOption() {
                if (this.multi && this.selected.length === 0) return;
                if (!this.search && this.selected.length > 0) {
                    const lastItemId = this.selected[this.selected.length - 1].id;
                    this.onRemove(lastItemId);
                } else if (!this.search && this.selected) {
                    this.$emit('input', undefined);
                }
            },

            onNextSuggestion() {
                if (!this.isOpen) this.isOpen = true;
                if (!this.hasSuggestions) {
                    this.currentSuggestionId = undefined;
                    return;
                }
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
                if (!this.hasSuggestions) {
                    this.currentSuggestionId = undefined;
                    return;
                }
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

                if (!this.hasSuggestions && this.isOpen) {
                    return;
                }

                const option = this.nodes.find(node => node.id === this.currentSuggestionId);
                this.currentSuggestionId = undefined;
                this.$nextTick(() => {
                    this.$refs.input.focus();
                    this.onOptionSelected(option);
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
            handleDrag(e) {
                const x = e.clientX;
                const y = e.clientY;
                this.draggedElement.classList.add('ghost');
                const el = document.elementFromPoint(x, y);
                let swapItem = el === null ? this.draggedElement : el.closest('[draggable="true"]');
                if (swapItem) {
                    swapItem = swapItem !== this.draggedElement.nextSibling ? swapItem : swapItem.nextSibling;
                    this.$refs.list.insertBefore(this.draggedElement, swapItem);
                }
            },
            onDragEnd() {
                this.dragging = false;
                const nextIndex = [...this.$refs.list.children].indexOf(this.draggedElement);
                this.draggedElement.classList.remove('ghost');
                const list = [...this.selected];
                const [item] = list.splice(this.prevIndex, 1);
                list.splice(nextIndex, 0, item);
                this.$emit('input', list.map(e => e.value));
                this.$refs.input.focus();
            },
            onDragStart(e, index) {
                this.dragging = true;
                this.isOpen = false;
                this.draggedElement = e.target;
                this.prevIndex = index;
            },

            getChildNodes(children = []) {
                return children.reduce((nodes, node) => {
                    if (node.children) {
                        return [...nodes, node, ...this.getChildNodes(node.children)];
                    }
                    return [...nodes, node];
                }, []);
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

    .flex-wrapper[gap] {
        margin-top: -4px;
    }

    .text [placeholder] {
        color: rgb(122, 134, 154);
    }

    .search {
        width: 100%;
        position: relative;
        z-index: 3;
    }

    [gap] .search {
        margin-top: 4px;
    }

    .ghost {
        opacity: .4;
        background-color: #fff;
        pointer-events: none;
    }
</style>
