<template>
    <div>
        <h5>Editable:</h5>
        <p>
            <NumberFloatEditableRenderer :value="value" @save-requested="onSave"/>
        </p>
        <h5>Editable - callback with error:</h5>
        <p>
            <NumberFloatEditableRenderer :value="value" @save-requested="onSaveError"/>
        </p>
        <h5>Limited width:</h5>
        <p class="limited-width">
            <NumberFloatEditableRenderer :value="value" @save-requested="onSave"/>
        </p>
        <h5>Non-editable:</h5>
        <p>
            <NumberFloatEditableRenderer :value="value" :editable="false"/>
        </p>
    </div>
</template>

<script>
    import NumberFloatEditableRenderer from '@/components/field-renderers/NumberFloatEditableRenderer';

    export default {
        components: { NumberFloatEditableRenderer },
        data() {
            return {
                value: (Math.random() * 1000).toString()
            };
        },
        methods: {
            onSave(value, callback) {
                this.value = value;
                callback();
            },

            onSaveError(value, callback) {
                callback(new Error('Something went wrong'));
            }
        }
    };
</script>

<style scoped>
    .limited-width {
        width: 300px;
    }
</style>
