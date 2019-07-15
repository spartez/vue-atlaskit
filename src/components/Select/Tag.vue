<template>
    <div class="tag">
        <div class="label">
            {{ tag.label }}
        </div>
        <div class="remove-tag" @mousedown.prevent @click="onRemove">
            <EditorCloseIcon primary-color="#000" size="xsmall"/>
        </div>
    </div>
</template>

<script>
    import EditorCloseIcon from '../Icon/EditorCloseIcon';

    export default {
        name: 'Tag',
        components: { EditorCloseIcon },
        props: {
            tag: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
            onRemove() {
                this.$emit('on-remove', this.tag.id);
            }
        }
    };
</script>

<style scoped>
.tag {
    background-color: rgb(223, 225, 230);
    display: inline-flex;
    align-items: center;
    min-width: 0px;
    box-sizing: border-box;
    color: rgb(66, 82, 110);
    max-width: 100%;
    border-radius: 2px;
    margin: 0px 2px;
    cursor: pointer;
}

.label {
    color: rgb(51, 51, 51);
    font-size: 85%;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    border-radius: 2px;
    overflow: hidden;
    padding: 2px 2px 2px 6px;
}

.remove-tag {
    display: flex;
    height: 20px;
    align-items: center;
    padding-left: 2px;
    padding-right: 2px;
    box-sizing: border-box;
    border-radius: 0px 2px 2px 0px;
}

.remove-tag:hover {
    background-color: #FFBDAD;
}
</style>
