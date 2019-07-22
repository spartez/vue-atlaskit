<template>
    <div>
        <h5>Editable:</h5>
        <p>
            <CheckboxEditableRenderer :value="value" @save-requested="onSave"/>
        </p>
        <h5>Editable - callback with error:</h5>
        <p>
            <CheckboxEditableRenderer :value="value" @save-requested="onSaveError"/>
        </p>
        <h5>Non-editable:</h5>
        <p>
            <CheckboxEditableRenderer :value="value" :editable="false"/>
        </p>
    </div>
</template>

<script>
    import CheckboxEditableRenderer from '@/components/field-renderers/CheckboxEditableRenderer';
    import faker from 'faker';

    export default {
        components: { CheckboxEditableRenderer },
        data() {
            faker.seed(1);
            return {
                value: '0'
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
