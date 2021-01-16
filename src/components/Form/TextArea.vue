<template>
    <TextField :is-focused="focused" :is-invalid="isInvalid" :is-loading="isLoading"
               :disabled="isLoading">
        <textarea ref="textarea"
                  v-model="text"
                  v-bind="$attrs"
                  :rows="rows"
                  :disabled="isLoading"
                  :style="{ height: currentHeight, width, maxHeight }"
                  :auto="height === 'auto'"
                  v-on="listeners"
                  @keydown="resize" @input="resize"
                  @focus="onFocus" @blur="onBlur"/>
    </TextField>
</template>

<script>
    import TextField from './TextField';

    const ENTER = 13;
    export default {
        name: 'TextArea',
        components: { TextField },
        props: {
            value: {
                type: String,
                required: true
            },
            isFocused: {
                type: Boolean,
                default: false
            },
            isInvalid: {
                type: Boolean,
                default: false
            },
            isLoading: {
                type: Boolean,
                default: false
            },
            height: {
                type: [Number, String],
                default: 'auto'
            },
            maxHeight: {
                type: [Number, String],
                default: 'auto'
            },
            width: {
                type: [Number, String],
                default: '100%'
            },
            rows: {
                type: String,
                default: '1'
            },
            submitOnEnter: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                currentHeight: this.height,
                focused: this.isFocused
            };
        },
        computed: {
            listeners() {
                const { input, ...listeners } = this.$attrs;
                return listeners;
            },
            text: {
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
                handler() {
                    this.focused = this.isFocused;
                    if (this.focused) {
                        this.$nextTick(() => this.$refs.textarea.focus());
                    }
                },
                immediate: true
            }
        },
        mounted() {
            if (this.height === 'auto') {
                this.currentHeight = `${this.$refs.textarea.scrollHeight}px`;
            }
        },
        methods: {
            onBlur(event) {
                this.focused = false;
                this.$emit('blur', event);
            },
            onFocus(event) {
                this.focused = true;
                this.$emit('focus', event);
            },
            resize(e) {
                if (this.submitOnEnter && e.keyCode === ENTER) {
                    this.$emit('confirm');
                    return;
                }
                if (this.height === 'auto') {
                    this.currentHeight = 'auto';
                    this.$nextTick(() => {
                        if (this.$refs.textarea) {
                            this.currentHeight = `${this.$refs.textarea.scrollHeight}px`;
                        }
                    });
                }
            }
        }
    };
</script>

<style scoped>
    textarea {
        overflow: auto;
        resize: vertical;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        color: inherit;
    }

    textarea[auto] {
        resize: none;
    }
</style>
