<template>
    <TextField :is-focused="isFocused" :style="{width: width}">
        <input ref="input" v-model="text" type="text"
               :placeholder="placeholder" :maxlength="maxlength"
               @focus="onFocus" @blur="onBlur" @input="onInput">
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
            onFocus() {
                this.isFocused = true;
                this.$emit('focus');
            },
            onBlur() {
                this.isFocused = false;
                this.$emit('blur');
            }
        }
    };
</script>
