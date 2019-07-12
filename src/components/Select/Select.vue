<template>
    <div ref="target" class="multi-select">
        <TextField :is-focused="focused" :is-invalid="isInvalid" :is-loading="isLoading"
                   class="text-field"
                   select @click="onFocus">
            <template v-if="multi">
                <Tag v-for="tag in selected" :key="tag.id" :tag="tag"
                     @on-remove="onRemove"/>
            </template>
            <input ref="input" class="search" :value="search"
                   :disabled="isLoading" :style="{width: currentWidth}"
                   @keydown.down.prevent="onNextSuggestion"
                   @keydown.up.prevent="onPreviousSuggestion"
                   @keydown.enter.prevent="onSuggestionSelected"
                   @click="onClick"
                   @input="onInput"
                   @focus="onFocus"
                   @blur="onBlur"
                   @keyup.esc="onEsc"
                   @keydown.delete="removeOption">
            <div v-if="!multi && !selected.length" class="text">
                <slot v-if="!search && selected.value && $scopedSlots['selected']" name="selected" :selected="selected.value"/>
                <template v-else>
                    {{ input }}
                </template>
            </div>
            <div class="icons">
                <Spinner v-if="isFetching" size="icon"/>
                <Clear v-if="multi && selected.length" size="xsmall" class="clear-icon"
                       primary-color="#A5ADBA"
                       @click.native="onClear"/>
                <Caret size="xsmall" @click.native="onFocus"/>
            </div>
        </TextField>
        <Popper v-if="isOpen && options.length" offset="0,0" :target-element="$refs.target"
                placement="bottom-start">
            <SelectMenu :selected="selected" :options="suggestions"
                        :current-suggestion-index="currentSuggestionIndex"
                        :has-suggestions="hasSuggestions"
                        @mouseover="onMouseOverSuggestion"
                        @option-selected="onOptionSelected">
                <slot slot="option" slot-scope="{option}" name="option"
                      :option="option"/>
            </SelectMenu>
        </Popper>
    </div>
</template>

<script>
    import { escapedRegExp } from './utils';

    import TextField from '../Form/TextField';
    import SelectMenu from './SelectMenu';
    import Popper from '../Popper/Popper';
    import Tag from './Tag';
    import Spinner from '../Spinner/Spinner';
    import Caret from '../Icon/HipchatChevronDownIcon';
    import Clear from '../Icon/EditorErrorIcon';

    const INPUT_WIDTH = '5px';

    export default {
        components: {
            TextField, Popper, SelectMenu, Tag, Spinner, Caret, Clear
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
                default: ''
            },
            multi: {
                type: Boolean,
                default: false
            },
            filterPredicate: {
                type: Function,
                default: (label = '', input = '') => label.match(escapedRegExp(input))
            },
            normalizer: {
                type: Function,
                default: value => ({ id: value, label: value, value })
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
            }
        },
        data() {
            return {
                isOpen: false,
                search: '',
                focused: false,
                currentSuggestionIndex: undefined,
                currentWidth: INPUT_WIDTH
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
                this.$emit('search-change', this.search);
            },

            isOpen(open) {
                if (!open) {
                    this.currentSuggestionIndex = undefined;
                }
            }
        },
        methods: {
            onFocus(e) {
                if (this.isLoading) return;
                this.$refs.input.focus();
                this.focused = true;
                this.isOpen = true;
                this.$emit('focus', e);
            },

            onClick() {
                this.isOpen = true;
            },

            onBlur(e) {
                this.search = '';
                this.closeOptions();
                this.$emit('blur', e);
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
                this.$emit('input', []);
                this.$refs.input.focus();
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
            },

            onRemove(id) {
                if (!this.selected.length) return;
                const selected = this.selected
                    .filter(option => option.id !== id)
                    .map(option => option.value);
                this.isOpen = false;
                this.$emit('input', selected);
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

            onSuggestionSelected() {
                if (!this.hasSuggestions || !this.isOpen || this.currentSuggestionIndex === undefined) {
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
            }
        }
    };
</script>
<style scoped>
    .multi-select {
        position: relative;
    }

    .text {
        cursor: text;
        position: absolute;
        z-index: 2;
        left: 6px;
    }

    .clear-icon:hover {
        cursor: pointer;
    }

    .text-field {
        padding-right: 55px;
        flex-wrap: wrap;
        justify-content: normal;
    }

    .search {
        width: 100%;
        position: relative;
        z-index: 3;
    }

    .icons {
        display: inline-flex;
        position: absolute;
        right: 6px;
    }
</style>
