<template>
    <TextField :is-focused="isFocused">
        <input ref="input" :value="value" :type="type"
               :placeholder="placeholder"
               :maxlength="maxlength" @input="onInput"
               @focus="onFocus" @blur="onBlur">
    </TextField>
</template>

<script>
    import TextField from './TextField';

    export default {
        name: 'Input',
        components: {
            TextField
        },
        props: {
            value: {
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
            }
        },
        data() {
            return {
                text: this.value,
                isFocused: false
            };
        },
        mounted() {
            if (this.autoFocus) {
                this.$refs.input.focus();
            }
        },
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value);
            },
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
