<template>
    <TextField :is-focused="isFocused">
        <input v-model="text" type="text" :placeholder="placeholder"
               :maxlength="maxlength" v-on="listeners"
               ref="input"
               @focus="onFocus"
               @blur="onBlur"
               @input="onInput">
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
            }
        },
        data() {
            return {
                text: this.value,
                isFocused: false
            };
        },
        computed: {
            listeners() {
                const { focus, blur, input, ...listeners } = this.$listeners;
                return listeners;
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
