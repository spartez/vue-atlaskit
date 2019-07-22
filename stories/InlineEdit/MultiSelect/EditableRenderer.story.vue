<template>
    <div>
        <h5>Editable:</h5>
        <p>
            <MultiSelectEditableRenderer :selected-values="selectedValues" :allowed-values="allowedValues" @save-requested="onSave"/>
        </p>
        <h5>Editable - callback with error:</h5>
        <p>
            <MultiSelectEditableRenderer :selected-values="selectedValues" :allowed-values="allowedValues" @save-requested="onSaveError"/>
        </p>
        <h5>Limited width:</h5>
        <p class="limited-width">
            <MultiSelectEditableRenderer :selected-values="selectedValues" :allowed-values="allowedValues" @save-requested="onSave"/>
        </p>
        <h5>Non-editable:</h5>
        <p>
            <MultiSelectEditableRenderer :selected-values="selectedValues" :allowed-values="allowedValues" :editable="false"/>
        </p>
    </div>
</template>

<script>
    import MultiSelectEditableRenderer from '@/components/field-renderers/MultiSelectEditableRenderer';
    import faker from 'faker';

    const allowedValues = Array.from({ length: 10 }, () => faker.lorem.word());

    export default {
        components: { MultiSelectEditableRenderer },
        data() {
            faker.seed(1);
            return {
                selectedValues: allowedValues.slice(0, 3),
                allowedValues
            };
        },
        methods: {
            onSave(value, callback) {
                this.selectedValues = value;
                callback();
            },

            onSaveError(value, callback) {
                setTimeout(() => callback(new Error('Something went wrong')), 100);
            }
        }
    };
</script>

<style scoped>
    .limited-width {
        width: 300px;
    }
</style>
