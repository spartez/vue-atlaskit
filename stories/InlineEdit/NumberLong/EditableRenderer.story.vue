<template>
    <div>
        <h5>Editable:</h5>
        <p>
            <NumberLongEditableRenderer :value="value" @save-requested="onSave"/>
        </p>
        <h5>Editable - callback with error:</h5>
        <p>
            <NumberLongEditableRenderer :value="value" @save-requested="onSaveError"/>
        </p>
        <h5>Limited width:</h5>
        <p class="limited-width">
            <NumberLongEditableRenderer :value="value" @save-requested="onSave"/>
        </p>
        <h5>Non-editable:</h5>
        <p>
            <NumberLongEditableRenderer :value="value" :editable="false"/>
        </p>
    </div>
</template>

<script>
    import NumberLongEditableRenderer from '@/components/field-renderers/NumberLongEditableRenderer';
    import faker from 'faker';

    export default {
        components: { NumberLongEditableRenderer },
        data() {
            faker.seed(1);
            return {
                value: faker.random.number() * 1234
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
        width: 100px;
    }
</style>
