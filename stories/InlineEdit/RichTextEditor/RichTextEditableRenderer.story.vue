<template>
    <div>
        <h5>Editable - callback with error:</h5>
        <RichTextEditableRenderer :empty-field-text="emptyFieldText" @save-requested="onSaveError"/>

        <h5>Editable:</h5>
        <RichTextEditableRenderer :value="value" :empty-field-text="emptyFieldText" @save-requested="onSaveRequested"/>
    </div>
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
            },

            onSaveError(value, callback) {
                setTimeout(() => callback(new Error('Something went wrong')), 100);
            }
        }
    };
</script>

<style scoped>

</style>
