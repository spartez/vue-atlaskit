<template>
    <div ref="container" class="content-editable-wrapper" :editing="isEditing">
        <div ref="text-field" class="content-editable" :compact="compact"
             @click.stop>
            <slot v-if="isEditing"
                  name="editor"
                  :value="editingValue"
                  :input="onInput"
                  :blur="onBlur"
                  :confirm="confirmEditedValue"
                  :cancel="cancelInlineEdit"
                  :focus="onFocus"
                  :is-focused="isFocused"
                  :is-invalid="!!error"
                  :is-loading="isLoading">
                <TextField v-if="isEditing" :is-focused="isFocused" :is-invalid="!!error"
                           :is-loading="isLoading"
                           :is-disabled="isLoading" :compact="compact"
                           @hook:beforeMount="beforeTextFieldMount">
                    <input ref="input" v-model="editingValue"
                           :type="type" :step="step" class="input"
                           :maxlength="maxlength" :disabled="isLoading"
                           @keyup="onKeyUp"
                           @focus="onFocus"
                           @blur="onBlur">
                </TextField>
            </slot>
            <InlineEditViewContent v-else ref="value" :compact="compact"
                                   @edit-requested="onEditRequested">
                <slot/>
            </InlineEditViewContent>
        </div>
        <Popper v-if="isEditing && !isLoading" :target-element="$refs['container']" placement="bottom-end">
            <InlineEditButtons @confirm="confirmEditedValue" @cancel="cancelInlineEdit"
                               @blur="onBlur"/>
        </Popper>
        <!--TODO error handling-->
        <Popper v-if="isValidationError" :target-element="$refs['text-field']" placement="right"
                :flip-behavior="['right', 'top-end']">
            <div ref="error-dialog" class="error-dialog">
                <template v-if="error.fieldErrors">
                    <div v-for="(fieldError,i) in error.fieldErrors" :key="i" class="error-message">
                        {{ fieldError.message }}
                    </div>
                </template>
                <template v-else>
                    {{ error.message }}
                </template>
            </div>
        </Popper>
    </div>
</template>

<script>
    import anime from 'animejs';
    import TextField from './TextField';
    import InlineEditButtons from './InlineEditButtons';
    import InlineEditViewContent from './InlineEditViewContent';
    import Popper from '../Popper/Popper';

    const ENTER = 13;
    const ESC = 27;
    const VALIDATION_ERROR = 422;

    export default {
        name: 'InlineEdit',
        components: {
            TextField,
            InlineEditButtons,
            InlineEditViewContent,
            Popper
        },
        props: {
            value: {
                type: [Number, String, Date, Boolean],
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
            }
        },
        data() {
            return {
                isFocused: false,
                isEditing: false,
                isLoading: false,
                editingValue: this.value,
                error: undefined,
                isDirty: false
            };
        },
        computed: {
            isValidationError() {
                return this.error && (!this.error.status || this.error.status === VALIDATION_ERROR);
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
            },
            cancelInlineEdit() {
                this.isEditing = false;
                this.editingValue = this.value;
            },
            onValidateError(error) {
                this.isLoading = false;
                this.isFocused = false;
                this.error = error;
                this.shake();
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
                    this.isLoading = true;
                    if (this.isDirty) {
                        this.$emit('save-requested', this.editingValue, this.saveInlineEdit);
                    } else if (this.error) {
                        this.onValidateError(this.error);
                    }
                }
            },
            beforeTextFieldMount() {
                const styles = getComputedStyle(this.$refs.value.$el);
                this.$refs['text-field'].style['min-width'] = styles.getPropertyValue('width');
            },
            shake() {
                anime({
                    targets: this.$refs['text-field'],
                    easing: 'linear',
                    translateX: [
                        { value: -10, duration: 40 },
                        { value: 10, duration: 85 },
                        { value: -10, duration: 80 },
                        { value: 10, duration: 85 },
                        { value: -5, duration: 85 },
                        { value: 5, duration: 85 },
                        { value: 0, duration: 40 }
                    ]
                });
            }
        }
    };
</script>
<style scoped>
    .content-editable {
        margin: -8px;
    }

    .content-editable[compact] {
        margin: -2px;
    }

    .error-dialog {
        color: #091E42;
        font-size: 14px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
        background: rgb(255, 255, 255);
        border-radius: 3px;
        padding: 4px 10px;
    }
</style>
