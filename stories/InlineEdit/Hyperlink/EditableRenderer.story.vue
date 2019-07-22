<template>
    <div>
        <h5>Editable:</h5>
        <p>
            <HyperlinkEditableRenderer :link="link" @save-requested="onSave"/>
        </p>
        <h5>Editable - callback with error:</h5>
        <p>
            <HyperlinkEditableRenderer :link="link" @save-requested="onSaveError"/>
        </p>
        <h5>Non-editable:</h5>
        <p>
            <HyperlinkEditableRenderer :link="link" :editable="false"/>
        </p>
    </div>
</template>

<script>
    import HyperlinkEditableRenderer from '@/components/field-renderers/HyperlinkEditableRenderer';

    export default {
        components: { HyperlinkEditableRenderer },
        data() {
            return {
                link: 'https://www.spartez.com'
            };
        },
        methods: {
            onSave(value, callback) {
                this.link = value;
                callback();
            },

            onSaveError(value, callback) {
                callback(new Error('Something went wrong'));
            }
        }
    };
</script>
