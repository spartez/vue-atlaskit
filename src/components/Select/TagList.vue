<template>
    <div class="tag-list">
        <Tag v-for="tag in tags" :key="tag.id" :tag="tag"
             @on-remove="onRemove"/>
    </div>
</template>

<script>
    import Tag from './Tag';

    export default {
        name: 'TagList',
        components: { Tag },
        props: {
            tags: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            onRemove(id) {
                this.$emit('on-remove', id);
            }
        }
    };
</script>

<style scoped>
.tag-list {
    display: inline-block;
}
</style>
