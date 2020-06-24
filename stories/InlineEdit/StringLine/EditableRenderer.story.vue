<template>
    <div>
        <h5>Editable:</h5>
        <p>
            <StringLineEditableRenderer data-cy="editable" :value="value" @save-requested="onSave"/>
        </p>
        <h5>Editable - callback with error:</h5>
        <p>
            <StringLineEditableRenderer data-cy="editable-error" :value="value" @save-requested="onSaveError"/>
        </p>
        <h5>Limited width:</h5>
        <p class="limited-width">
            <StringLineEditableRenderer :value="value" @save-requested="onSave"/>
        </p>
        <h5>Non-editable:</h5>
        <p>
            <StringLineEditableRenderer data-cy="non-editable" :value="value" :editable="false"/>
        </p>
        <h5>Without confirmation:</h5>
        <p>
            <StringLineEditableRenderer :value="value" :confirm="false" align="end"
                                        :icon="false"
                                        type="number"
                                        @save-requested="onSave"/>
        </p>
    </div>
</template>

<script>
    import StringLineEditableRenderer from '@/components/field-renderers/StringLineEditableRenderer';
    import faker from 'faker';

    export default {
        components: { StringLineEditableRenderer },
        data() {
            faker.seed(1);
            return {
                value: faker.lorem.sentence()
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
