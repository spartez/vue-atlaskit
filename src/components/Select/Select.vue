<template>
    <div ref="target" class="select" :disabled="isDisabled">
        <TextField :is-focused="focused" :is-invalid="isInvalid" :is-loading="isLoading"
                   class="text-field" :select="select" tabindex="-1"
                   @click="click">
            <div ref="list" class="flex-wrapper" :gap="multi && !!selected.length"
                 @dragover.prevent>
                <template v-if=" multi">
                    <Tag v-for="(tag,i) in selected" :key="`${tag.id}-${i}`" :tag="tag"
                         :index="i"
                         :count="selected.length"
                         :min="min"
                         data-cy="tag"
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
                <slot v-if="!search && selected.value && $scopedSlots['selected'] && !multi" name="selected" :selected="selected.value"/>
                <span v-else :placeholder="!search && !selected.label">
                    {{ input }}
                </span>
            </div>
            <Icons :is-selected="isAnyOptionSelected" :is-fetching="isFetching"
                   :createable="createable" :is-clearable="showClearIcon" @clear="onClear">
                <slot name="icon"/>
            </Icons>
        </TextField>
        <Popper v-if="shouldOpenMenu" ref="menu" offset="0,0"
                :target-element="$refs.target"
                :boundaries-element="boundariesElement"
                placement="bottom-start">
            <SelectMenu :selected="selected" :options="suggestions"
                        :current-suggestion-index="currentSuggestionIndex"
                        :is-fetching="isFetching"
                        :async="async"
                        :append-to-body="appendToBody"
                        :contains-query="!!search"
                        :style="{width: selectWidth}"
                        :has-suggestions="hasSuggestions"
                        :no-options-message="noOptionsMessage"
                        :placeholder="searchPromptText"
                        data-cy="select-menu"
                        @update-popper-position="updatePopperPosition"
                        @mouseover="onMouseOverSuggestion"
                        @option-selected="onOptionSelected">
                <slot slot="option" slot-scope="{option, isCurrent}" name="option"
                      :is-current="isCurrent"
                      :option="option"/>
                <slot name="custom-action"/>
            </SelectMenu>
        </Popper>
    </div>
</template>

<script>
    import TextField from '../Form/TextField';
    import SelectMenu from './SelectMenu';
    import Popper from '../Popper/Popper';
    import Tag from './Tag';
    import Icons from './Icons';


    const INPUT_WIDTH = '5px';

    export default {
        components: {
            TextField, Popper, SelectMenu, Tag, Icons
        },
        props: {
            value: {
                type: [String, Number, Object, Array],
                default: ''
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
            createable: {
                type: Boolean,
                default: false
            },
            isClearable: {
                type: Boolean,
                default: true
            },
            isValidOption: {
                type: Function,
                default: () => true
            },
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: Infinity
            },
            appendToBody: {
                type: Boolean,
                default: false
            },
            select: {
                type: Boolean,
                default: true
            },
            isDisabled: {
                type: Boolean,
                default: false
            },
            openOnFocus: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isOpen: false,
                search: '',
                focused: false,
                currentSuggestionIndex: undefined,
                currentWidth: INPUT_WIDTH,
                isDirty: false,
                selectWidth: 'auto',
                draggedElement: undefined,
                prevIndex: undefined,
                nextIndex: undefined
            };
        },
        computed: {
            selected() {
                return this.multi
                    ? this.value.map(e => this.normalizer(e))
                    : this.normalizer(this.value);
            },

            normalizedOptions() {
                return this.options.map(e => this.normalizer(e));
            },

            input() {
                return this.search ? '' : this.selected.label || this.placeholder;
            },

            nonSelectedSuggestions() {
                return this.multi
                    ? this.normalizedOptions
                        .filter(option => !this.selected.find(selected => option.id === selected.id))
                    : this.normalizedOptions;
            },

            suggestions() {
                if (this.search && !this.async) {
                    return this.nonSelectedSuggestions
                        .filter(option => this.filterPredicate(option.label, this.search));
                }
                return this.nonSelectedSuggestions;
            },

            hasSuggestions() {
                return this.suggestions && this.suggestions.length > 0;
            },

            isAnyOptionSelected() {
                return (this.multi && !!this.selected.filter(o => !o.disabled).length) || !!this.selected.value;
            },

            disabled() {
                return this.multi && this.selected.filter(o => o.disabled).map(o => o.value);
            },

            shouldBackspaceRemoveOption() {
                return !this.isClearable || (this.multi && this.selected.length === 0);
            },

            canRemoveLastTag() {
                return !this.search && this.selected.length > this.min;
            },

            canClearSelectedOption() {
                return !this.search && !this.multi && this.selected;
            },

            canCreateTag() {
                return this.createable && this.search && this.selected.length < this.max;
            },

            shouldOpenMenu() {
                return this.isOpen && !this.isDirty && !this.createable;
            },

            nonClearableOptions() {
                if (this.multi) {
                    const min = this.selected.slice(0, this.min).map(o => o.value);
                    return [...new Set([...this.disabled, ...min])];
                }
                return undefined;
            },

            showClearIcon() {
                if (this.multi) {
                    return this.selected.length > this.min;
                }
                return this.isClearable;
            }
        },
        watch: {
            isFocused: {
                handler(isFocused) {
                    if (isFocused) {
                        this.$nextTick(() => {
                            if (this.$refs.input) {
                                this.$refs.input.focus();
                            }
                        });
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
                    this.currentSuggestionIndex = undefined;
                    this.$emit('close');
                } else {
                    const { width } = this.$refs.target.getBoundingClientRect();
                    this.selectWidth = `${width}px`;
                    this.$emit('open');
                }
            },

            isFetching(isFetching) {
                if (!isFetching) {
                    this.isDirty = false;
                }
            },

            suggestions() {
                this.$nextTick(() => this.updatePopperPosition());
            }
        },
        methods: {
            onFocus(e) {
                if (this.isLoading) return;
                this.focused = true;
                if (this.openOnFocus && this.$refs.target && !this.$refs.target.contains(e.relatedTarget)) {
                    this.isOpen = true;
                }
                this.$emit('focus', e);
            },

            onBlur(e) {
                if (this.$refs.target && !this.$refs.target.contains(e.relatedTarget)) {
                    if (this.canCreateTag) {
                        this.createTag();
                    }
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
                this.$emit('input', this.nonClearableOptions);
                this.isOpen = false;
                this.$nextTick(() => this.$refs.input.focus());
            },

            onOptionSelected(option) {
                this.search = '';
                this.isOpen = false;
                this.focused = true;
                const selected = this.multi
                    ? [...this.selected.map(e => e.value), option.value]
                    : option.value;
                this.$emit('input', selected);
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
                    .map(option => option.value);
                this.updatePopperPosition();
                this.$emit('input', selected);
                this.$nextTick(() => this.updatePopperPosition());
            },

            removeOption() {
                if (this.shouldBackspaceRemoveOption) return;
                if (this.canRemoveLastTag) {
                    const { id } = this.selected[this.selected.length - 1];
                    this.onRemove(id);
                } else if (this.canClearSelectedOption) {
                    this.$emit('input', undefined);
                }
            },

            onNextSuggestion() {
                if (!this.isOpen) this.isOpen = true;
                if (!this.hasSuggestions) {
                    this.currentSuggestionIndex = undefined;
                    return;
                }
                if (this.currentSuggestionIndex === undefined) {
                    this.currentSuggestionIndex = 0;
                } else {
                    this.currentSuggestionIndex += 1;
                    if (this.currentSuggestionIndex > this.suggestions.length - 1) {
                        this.currentSuggestionIndex = 0;
                    }
                }
            },

            onPreviousSuggestion() {
                if (!this.isOpen) this.isOpen = true;
                if (!this.hasSuggestions) {
                    this.currentSuggestionIndex = undefined;
                    return;
                }
                if (this.currentSuggestionIndex === undefined) {
                    this.currentSuggestionIndex = this.suggestions.length - 1;
                } else {
                    this.currentSuggestionIndex -= 1;
                    if (this.currentSuggestionIndex < 0) {
                        this.currentSuggestionIndex = this.suggestions.length - 1;
                    }
                }
            },

            onMouseOverSuggestion(id) {
                this.currentSuggestionIndex = id;
            },

            onSuggestionSelected(e) {
                // if current index is undefined, means we don't want to select any value, just submit
                if (this.currentSuggestionIndex === undefined && !this.canCreateTag) {
                    this.$emit('confirm', e);
                    return;
                }
                if (this.canCreateTag) {
                    if (!this.isValidOption(this.search)) {
                        this.$emit('error');
                        return;
                    }
                    this.createTag();
                }
                e.preventDefault();

                if (!this.hasSuggestions && this.isOpen) {
                    return;
                }

                const option = this.suggestions[this.currentSuggestionIndex];
                this.currentSuggestionIndex = undefined;
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

            createTag() {
                const selected = this.multi ? [...this.selected.map(o => o.value), this.search] : this.search;
                this.search = '';
                this.$emit('input', selected);
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

    .select[disabled] {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .select[disabled] .text-field {
        pointer-events: none;
    }

    .select ~ .select {
        margin-top: 20px;
    }
</style>
