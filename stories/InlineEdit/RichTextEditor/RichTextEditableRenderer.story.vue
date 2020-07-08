<template>
    <RichTextEditableRenderer :value="value" @save-requested="onSaveRequested"/>
</template>

<script>
    import RichTextEditableRenderer from '@/components/field-renderers/RichTextEditableRenderer';

    export default {
        name: 'RichTextEditableRendererStory',
        components: { RichTextEditableRenderer },
        data() {
            return {
                value: '<p>adasdadasd</p>'
            };
        },
        methods: {
            onSaveRequested(content, callback) {
                this.value = content;
                callback();
            }
        }
    };
</script>

<style scoped>

</style>
