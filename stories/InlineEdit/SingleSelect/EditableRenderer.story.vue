<template>
    <div class="wrapper">
        <h5>Editable:</h5>
        <p>
            <SingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" @save-requested="onSave"/>
        </p>
        <h5>Editable - callback with error:</h5>
        <p>
            <SingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" @save-requested="onSaveError"/>
        </p>
        <h5>Limited width:</h5>
        <p class="limited-width">
            <SingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" @save-requested="onSave"/>
        </p>
        <h5>Non-editable:</h5>
        <p>
            <SingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" :editable="false"/>
        </p>
    </div>
</template>

<script>
    import SingleSelectEditableRenderer from '@/components/field-renderers/SingleSelectEditableRenderer';
    import faker from 'faker';

    const allowedValues = Array.from({ length: 10 }, () => faker.lorem.word());
    const [selected] = allowedValues;

    export default {
        components: { SingleSelectEditableRenderer },
        data() {
            faker.seed(1);
            return {
                selectedValue: selected,
                allowedValues
            };
        },
        methods: {
            onSave(value, callback) {
                this.selectedValue = value;
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

    .wrapper {
        padding: 20px
    }
</style>
