<template>
    <div class="rich-text-editor">
        <RichTextEditor content="" :on-focus="onFocus"/>
    </div>
</template>

<script>
    import RichTextEditor from '@/components/RichTextEditor/RichTextEditor';

    export default {
        name: 'RichTextEditorStory',
        components: { RichTextEditor },
        data() {
            return {
                editable: false
            };
        },
        methods: {
            onFocus() {
                console.log('focused');
            }
        }
    };
</script>

<style scoped>

</style>
