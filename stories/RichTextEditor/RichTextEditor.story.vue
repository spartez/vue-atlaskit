<template>
    <div class="rich-text-editor">
        <RichTextEditor v-model="json"/>
    </div>
</template>

<script>
    import RichTextEditor from '@/components/RichTextEditor/RichTextEditor';
    import json from './edit.json';

    export default {
        name: 'RichTextEditorStory',
        components: { RichTextEditor },
        data() {
            return {
                editable: false,
                json
            };
        }
    };
</script>

<style scoped>
.rich-text-editor >>> p, .rich-text-editor >>> h1, h2, h3, h4, h5, h6 {
    margin-top: 20px !important;
}
</style>
