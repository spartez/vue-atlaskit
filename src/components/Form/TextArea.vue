<template>
    <TextField :is-focused="isFocused">
        <textarea v-model="text" :rows="rows" maxlength="maxlength"
                  :placeholder="placeholder"
                  @focus="onFocus" @blur="onBlur" @input="onInput"/>
    </TextField>
</template>

<script>
    import TextField from './TextField';

    export default {
        name: 'TextArea',
        components: {
            TextField
        },
        props: {
            value: {
                type: [Number, String],
                default: undefined
            },
            rows: {
                type: Number,
                default: 10
            },
            maxlength: {
                type: Number,
                default: 1048576
            },
            placeholder: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                text: this.value,
                isFocused: false
            };
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
