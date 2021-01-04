<template>
    <RichTextEditableRenderer :value="value" :empty-field-text="emptyFieldText" @save-requested="onSaveRequested"/>
</template>

<script>
    import RichTextEditableRenderer from '@/components/field-renderers/RichTextEditableRenderer';
    import json from './edit';

    export default {
        name: 'RichTextEditableRendererStory',
        components: { RichTextEditableRenderer },
        data() {
            return {
                value: json,
                emptyFieldText: 'Sample text...'
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
