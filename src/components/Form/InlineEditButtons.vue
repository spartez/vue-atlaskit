<template>
    <div class="buttons-wrapper">
        <Button spacing="none" class="box-shadow-wrapper" @click="onConfirm"
                @focus="onFocus" @blur="onBlur">
            <EditorDoneIcon slot="icon-before" size="small"/>
        </Button>
        <Button spacing="none" class="box-shadow-wrapper" @click="onCancel"
                @focus="onFocus" @blur="onBlur">
            <EditorCloseIcon slot="icon-before" size="small"/>
        </Button>
    </div>
</template>

<script>
    import EditorDoneIcon from '../Icon/EditorDoneIcon';
    import EditorCloseIcon from '../Icon/EditorCloseIcon';
    import Button from '../Button/Button';


    export default {
        name: 'InlineEditButtons',
        components: { EditorDoneIcon, Button, EditorCloseIcon },
        methods: {
            onConfirm() {
                this.$emit('confirm');
            },
            onCancel() {
                this.$emit('cancel');
            },
            onFocus(event) {
                this.$emit('focus', event);
            },
            onBlur(event) {
                this.$emit('blur', event);
            }
        }
    };
</script>

<style scoped>
    .buttons-wrapper {
        display: flex;
    }

    .box-shadow-wrapper {
        background-color: rgb(255, 255, 255);
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
        box-sizing: border-box;
        z-index: 200;
        border-radius: 3px;
    }

    .box-shadow-wrapper:last-child {
        margin-left: 4px;
    }
</style>
