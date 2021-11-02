<template>
    <TextField :is-focused="isFocused" :is-invalid="isInvalid" :is-loading="isLoading">
        <input ref="input" v-model="input" :type="type"
               :placeholder="placeholder"
               :step="step"
               v-bind="$attrs"
               :maxlength="maxlength"
               @focus="onFocus" @blur="onBlur">
    </TextField>
</template>

<script>
    import TextField from './TextField.vue';


    export default {
        name: 'Input',
        components: {
            TextField
        },
        emits: ['update:modelValue', 'focus', 'blur'],
        props: {
            modelValue: {
                type: [Number, String],
                default: undefined
            },
            maxlength: {
                type: Number,
                default: undefined
            },
            placeholder: {
                type: String,
                default: undefined
            },
            autoFocus: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '100%'
            },
            type: {
                type: String,
                default: 'text'
            },
            step: {
                type: String,
                default: '1'
            },
            allowedValues: {
                type: String,
                default: ''
            },
            isInvalid: {
                type: Boolean,
                default: false
            },
            isLoading: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isFocused: false
            };
        },
        computed: {
            input: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit('update:modelValue', value);
                }
            }
        },
        watch: {
            input() {
                if (this.allowedValues) {
                    this.input = this.input.replace(new RegExp(this.allowedValues, 'g'), '');
                }
            }
        },
        mounted() {
            if (this.autoFocus) {
                this.$refs.input.focus();
            }
        },
        methods: {
            onFocus(e) {
                this.isFocused = true;
                this.$emit('focus', e);
            },
            onBlur(e) {
                this.isFocused = false;
                this.$emit('blur', e);
            }
        }
    };
</script>
