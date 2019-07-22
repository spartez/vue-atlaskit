<template>
    <div>
        <h5>Editable:</h5>
        <p>
            <DateEditableRenderer :date="date" @save-requested="onSave"/>
        </p>
        <h5>Editable - callback with error:</h5>
        <p>
            <DateEditableRenderer :date="date" @save-requested="onSaveError"/>
        </p>
        <h5>Non-editable:</h5>
        <p>
            <DateEditableRenderer :date="date" :editable="false"/>
        </p>
    </div>
</template>

<script>
    import DateEditableRenderer from '@/components/field-renderers/DateEditableRenderer';
    import faker from 'faker';

    export default {
        components: { DateEditableRenderer },
        data() {
            faker.seed(1);
            return {
                date: faker.date.recent().getTime()
            };
        },
        methods: {
            onSave(value, callback) {
                this.date = value;
                callback();
            },

            onSaveError(value, callback) {
                callback(new Error('Something went wrong'));
            }
        }
    };
</script>
