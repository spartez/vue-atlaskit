<template>
    <div ref="container" class="content-editable-wrapper" :editing="isEditing">
        <div ref="text-field" class="content-editable" :compact="compact"
             :is-invalid="!!error">
            <slot v-if="isEditing"
                  name="editor"
                  :value="editingValue"
                  :input="onInput"
                  :blur="onBlur"
                  :focus="onFocus"
                  :confirm="confirmEditedValue"
                  :cancel="cancelInlineEdit"
                  :is-focused="isFocused"
                  :is-invalid="!!error"
                  :is-loading="isLoading"
                  :content-width="contentWidth"
                  :content-height="contentHeight">
                <TextField :is-focused="isFocused" :is-invalid="!!error"
                           :is-loading="isLoading"
                           :style="{ minWidth: `${contentWidth}px` }"
                           :is-disabled="isLoading" :compact="compact"
                           @click.stop
                           @hook:beforeMount="beforeTextFieldMount">
                    <input ref="input" v-model="editingValue"
                           :type="type" :step="step" class="input"
                           :maxlength="maxlength" :disabled="isLoading"
                           :align="align"
                           @keyup="onKeyUp"
                           @keydown.meta.enter="onKeyUp"
                           @keydown.exact="validate"
                           @focus="onFocus"
                           @blur="onBlur">
                </TextField>
            </slot>
            <InlineEditViewContent v-else ref="value" :compact="compact"
                                   :icon="icon"
                                   :align="align" @edit-requested="onEditRequested">
                <slot/>
            </InlineEditViewContent>
        </div>
        <Popper v-if="isEditing && !isLoading && confirm" ref="buttons" :offset="offset"
                :target-element="$refs['text-field']">
            <InlineEditButtons @confirm="confirmEditedValue" @cancel="cancelInlineEdit"
                               @blur="onBlur"/>
        </Popper>
        <InlineErrorMessage v-if="isValidationError" :error="error" :target-element="$refs['text-field']"
                            :placement="placement"/>
    </div>
</template>

<script>
    import TextField from './TextField';
    import InlineEditButtons from './InlineEditButtons';
    import InlineEditViewContent from './InlineEditViewContent';
    import InlineErrorMessage from './InlineErrorMessage';
    import Popper from '../Popper/Popper';

    const ENTER = 13;
    const ESC = 27;
    const BACKSPACE = 8;
    const TAB = 9;
    const Status = { VALIDATION_ERROR: 422 };

    export default {
        name: 'InlineEdit',
        components: {
            TextField,
            InlineEditButtons,
            InlineEditViewContent,
            InlineErrorMessage,
            Popper
        },
        props: {
            value: {
                type: [Number, String, Boolean, Array, Object],
                default: undefined
            },
            type: {
                type: String,
                default: 'text'
            },
            step: {
                type: String,
                default: 'any'
            },
            maxlength: {
                type: Number,
                default: undefined
            },
            compact: {
                type: Boolean,
                default: false
            },
            offset: {
                type: String,
                default: '0,5'
            },
            confirm: {
                type: Boolean,
                default: true
            },
            icon: {
                type: Boolean,
                default: true
            },
            align: {
                type: String,
                default: undefined
            },
            pattern: {
                type: String,
                default: ''
            },
            placement: {
                type: String,
                default: 'right'
            }
        },
        data() {
            return {
                isFocused: false,
                isEditing: false,
                isLoading: false,
                editingValue: this.value,
                error: undefined,
                isDirty: false,
                contentWidth: 0,
                contentHeight: 0
            };
        },
        computed: {
            isValidationError() {
                return this.error && (!this.error.status || this.error.status === Status.VALIDATION_ERROR);
            }
        },
        watch: {
            isEditing(isEditing) {
                if (!isEditing) {
                    this.$refs['text-field'].style['min-width'] = 'auto';
                    this.error = undefined;
                }
            },
            editingValue() {
                this.isDirty = true;
                this.$nextTick(() => {
                    if (this.$refs.buttons) {
                        this.$refs.buttons.update();
                    }
                });
            },
            value() {
                this.editingValue = this.value;
            }
        },
        methods: {
            onInput(value) {
                this.editingValue = value;
            },
            onBlur(event) {
                if (!this.confirm) {
                    this.confirmEditedValue();
                }
                const focusWithinComponent = this.$refs.container.contains(event.relatedTarget);

                if (!this.isEditing || this.isLoading) return;
                if (!focusWithinComponent) {
                    this.$nextTick(() => this.cancelInlineEdit());
                }
                this.isFocused = false;
            },
            onFocus() {
                this.isFocused = true;
            },
            onKeyUp(e) {
                if (e.keyCode === ENTER) this.confirmEditedValue();
                if (e.keyCode === ESC) this.cancelInlineEdit();
            },
            onEditRequested() {
                this.isEditing = true;
                this.isFocused = true;
                this.$nextTick(() => {
                    if (this.$refs.input) {
                        this.$refs.input.focus();
                    }
                });
            },
            saveInlineEdit(error) {
                this.isDirty = false;
                if (error) {
                    this.onValidateError(error);
                    return;
                }
                this.isLoading = false;
                this.isEditing = false;
                this.editingValue = this.value;
            },
            cancelInlineEdit() {
                this.isEditing = false;
                this.editingValue = this.value;
            },
            onValidateError(error) {
                this.isLoading = false;
                this.isFocused = false;
                this.error = error;
                this.$nextTick(() => {
                    this.isFocused = true;
                    if (this.$refs.input) {
                        this.$refs.input.focus();
                    }
                });
            },
            confirmEditedValue() {
                if (this.value === this.editingValue) {
                    this.isEditing = false;
                    this.error = undefined;
                    return;
                }
                if (!this.isLoading) {
                    if (this.isDirty) {
                        this.isLoading = true;
                        this.$emit('save-requested', this.editingValue, this.saveInlineEdit);
                    } else if (this.error) {
                        this.onValidateError(this.error);
                    }
                }
            },
            beforeTextFieldMount() {
                const { width, height } = this.$refs.value.$el.getBoundingClientRect();
                this.contentWidth = width;
                this.contentHeight = height;
            },
            validate(e) {
                if (!this.pattern) return;
                if (![TAB, BACKSPACE].includes(e.keyCode) && !this.isValidId(e.key)) {
                    e.preventDefault();
                }
            },
            isValidId(key) {
                const pattern = new RegExp(this.pattern);
                return pattern.test(key);
            }
        }
    };
</script>
<style scoped>
    .content-editable {
        margin: -8px;
    }

    .content-editable[compact=true] {
        margin: -2px;
    }

    input {
        font-family: inherit;
    }

    input[align="end"] {
        text-align: right;
    }
</style>
