<template>
    <label ref="checkbox" class="checkbox-wrapper" :for="id"
           tabindex="-1">
        <input :id="id" ref="input" v-model="isChecked"
               :value="modelValue"
               type="checkbox" :is-invalid="isInvalid"
               :disabled="disabled" @focus="onFocus"
               @blur="onBlur">
        <CheckboxIcon v-if="!indeterminate" :size="size" class="icon"/>
        <CheckboxIndeterminateIcon v-else class="indeterminate"/>
        <span v-if="$slots['default']" class="input-label"><slot/></span>
    </label>
</template>

<script>
    import { CheckboxIndeterminateIcon, CheckboxIcon } from '../Icon';

    export default {
        name: 'Checkbox',
        components: { CheckboxIcon, CheckboxIndeterminateIcon },
        model: {
            prop: 'checked'
        },
        emits: ['update:modelValue', 'blur', 'focus'],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            modelValue: {
                type: [String, Object, Number, Boolean],
                default: undefined
            },
            checked: {
                type: [Boolean, Array],
                required: false
            },
            isFocused: {
                type: Boolean,
                default: false
            },
            isInvalid: {
                type: Boolean,
                default: false
            },
            indeterminate: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'medium'
            }
        },
        data() {
            return { id: undefined };
        },
        computed: {
            isChecked: {
                get() {
                    return this.checked;
                },
                set(value) {
                    this.$emit('update:modelValue', value);
                }
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
            }
        },
        created() {
            // eslint-disable-next-line
            this.id = this._uuid;
        },
        methods: {
            onBlur(e) {
                if (!this.$refs.checkbox.contains(e.relatedTarget)) {
                    this.$emit('blur', e);
                }
            },
            onFocus(e) {
                this.$emit('focus', e);
            }
        }
    };
</script>

<style scoped>
input[type="checkbox"] {
    left: 50%;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    cursor: pointer;
}

.checkbox-wrapper {
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    outline: none;
}

.input-label {
    padding: 2px 4px;
    display: flex;
    flex-grow: 1;
    min-width: 0;
}

input:checked + .icon >>> rect {
    color: #0052cc;
    stroke: #0052cc;
}

input + .icon >>> rect {
    color: #fafbfc;
    stroke: #dfe1e6;
}

label:hover input:not(:checked) + .icon >>> rect {
    fill: #EBECF0;
}

label:hover input:not(:checked) + .icon >>> path {
    fill: #EBECF0;
}

label:hover input:checked + .icon >>> rect {
    color: #0065ff;
    stroke: #0065ff;
}

input + .icon >>> path {
    fill: #fafbfc;
}

input:not([is-invalid=true]):focus + .icon >>> rect {
    stroke: #4c9aff;
}

input[is-invalid=true] + .icon >>> rect {
    stroke: #FF5630;
}

input[disabled=true] + .icon >>> rect {
    opacity: .5;
}

:not(.indeterminate) >>> rect {
    transition: 0.2s ease-in-out;
    stroke-width: 2px;
}

>>> path {
    transition: 0.2s ease-in-out;
}

</style>
