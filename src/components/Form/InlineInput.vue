<template>
    <div class="inline-edit-wrapper" @click.stop>
        <TextField v-if="isEditing" :is-focused="isFocused">
            <input v-model="editingValue" type="text" :placeholder="placeholder"
                   :maxlength="maxlength"
                   ref="input"
                   v-on="listeners"
                   @keyup="onKeyUp"
                   @focus="onFocus"
                   @blur="onBlur"
                   @input="onInput">
        </TextField>
        <div v-else class="value-display" tabindex="0" @keyup.enter="onFocus" @click="inlineEdit">
            {{savedValue}}
        </div>
        <div v-if="isEditing" class="buttons-wrapper">
            <Button class="box-shadow-wrapper" @click="saveInlineEdit">
                <EditorDoneIcon slot="icon-before"/>
            </Button>
            <Button class="box-shadow-wrapper" @click="cancelInlineEdit">
                <EditorCloseIcon slot="icon-before"/>
            </Button>
        </div>
    </div>
</template>

<script>
    import TextField from './TextField';
    import EditorCloseIcon from '../Icon/EditorCloseIcon';
    import EditorDoneIcon from '../Icon/EditorDoneIcon';
    import Button from '../Button/Button';


    const ENTER = 13;
    const ESC = 27;

    export default {
        name: 'InlineInput',
        components: {
            TextField,
            EditorCloseIcon,
            EditorDoneIcon,
            Button
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
                isFocused: false,
                isEditing: false,
                editingValue: '',
                savedValue: this.value,
                wasFocusReceivedSinceLastBlur: false
            };
        },
        watch: {
            isEditing(isEditing) {
                if (isEditing) {
                    document.addEventListener('click', this.saveInlineEdit)
                } else {
                    document.removeEventListener('click', this.saveInlineEdit);
                }
            }
        },
        computed: {
            listeners() {
                const { focus, blur, input, keyup, ...listeners } = this.$listeners;
                return listeners;
            }
        },
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value);
            },
            onFocus() {
                this.inlineEdit();
                this.$emit('focus');
            },
            onBlur() {
                this.isFocused = false;
                this.$emit('blur');
            },
            onKeyUp(e) {
                if (e.keyCode === ENTER) this.saveInlineEdit();
                if (e.keyCode === ESC) this.cancelInlineEdit();
            },
            inlineEdit() {
                this.isFocused = true;
                this.editingValue = this.savedValue;
                this.isEditing = true;
                this.$nextTick(() => this.$refs.input.focus())
            },
            saveInlineEdit() {
                this.savedValue = this.editingValue;
                this.isEditing = false;
                this.$refs.input.blur();
            },
            cancelInlineEdit() {
                this.isEditing = false;
                this.editingValue = '';
            }
        }
    };
</script>
<style>
    .value-display {
        display: inline-block;
        background-color: transparent;
        color: rgb(9, 30, 66);
        font-size: 14px;
        justify-content: space-between;
        line-height: 1.42857;
        overflow-wrap: break-word;
        border-radius: 3px;
        overflow: hidden;
        transition: background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;
        padding: 8px;
        outline: none;
        border: transparent;
    }

    .value-display:focus {
        border: 2px solid rgb(76, 154, 255);
        border-image: initial;
        background: rgb(255, 255, 255);
    }

    .value-display:hover {
        background-color: #EBECF0;
    }

    .inline-edit-wrapper {
        position: relative;
        display: inline-block;
    }

    .box-shadow-wrapper {
        background-color: rgb(255, 255, 255);
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
        box-sizing: border-box;
        width: 32px;
        z-index: 200;
        border-radius: 3px;
    }

    .buttons-wrapper {
        margin-top: 6px;
        position: absolute;
        right: 0;
        top: 100%;
    }

    .box-shadow-wrapper:last-child {
        margin-left: 4px;
    }
</style>
