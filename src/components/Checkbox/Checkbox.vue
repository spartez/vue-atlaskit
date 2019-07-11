<template>
    <label ref="checkbox" class="checkbox-wrapper" :for="id"
           tabindex="-1">
        <input :id="id" ref="input" v-model="isChecked"
               type="checkbox" :is-invalid="isInvalid"
               :disabled="disabled" @focus="onFocus"
               @blur="onBlur">
        <CheckboxIcon class="icon"/>
        <span v-if="$slots['default']" class="label"><slot/></span>
    </label>
</template>

<script>
    import CheckboxIcon from '../Icon/CheckboxIcon';

    export default {
        name: 'Checkbox',
        components: { CheckboxIcon },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: Boolean,
                default: false
            },
            isFocused: {
                type: Boolean,
                default: false
            },
            isInvalid: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return { id: undefined };
        },
        computed: {
            isChecked: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit('input', value);
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
    position: relative;
    cursor: pointer;
    outline: none;
}

.label {
    padding: 2px 4px;
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

input:not([is-invalid]):focus + .icon >>> rect {
    stroke: #4c9aff;
}

input[is-invalid] + .icon >>> rect {
    stroke: #FF5630;
}

input[disabled] + .icon >>> rect {
    opacity: .5;
}

>>> rect {
    transition: 0.2s ease-in-out;
    stroke-width: 2px;
}

>>> path {
    transition: 0.2s ease-in-out;
}

</style>
