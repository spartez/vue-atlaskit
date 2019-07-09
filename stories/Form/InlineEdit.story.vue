<template>
    <div class="wrapper">
        <InlineEdit field="field" :value="date" type="text"
                    class="date-edit"
                    @save-requested="onSaveRequested">
            <DatePicker slot="editor" slot-scope="{ ...props }"
                        :value="props.value"
                        :is-focused="props.isFocused"
                        :is-invalid="props.isInvalid"
                        :is-loading="props.isLoading"
                        @input="props.input"
                        @blur="props.blur"
                        @confirm="props.confirm"
                        @keyup.esc="props.cancel"/>
            <span>{{ formattedValue }}</span>
        </InlineEdit>
    </div>
</template>

<script>
    import InlineEdit from '@/components/Form/InlineEdit';
    import DatePicker from '@/components/Calendar/DatePicker';
    import faker from 'faker';
    import format from 'date-fns/format';

    export default {
        name: 'InlineEditStory',
        components: { InlineEdit, DatePicker },
        data() {
            return {
                date: faker.date.recent().getTime()
            };
        },
        computed: {
            formattedValue() {
                return this.date && format(parseInt(this.date, 10), 'dd MMMM yyyy');
            }
        },
        methods: {
            onSaveRequested(value, callback) {
                this.date = value;
                setTimeout(() => callback(), 3000);
            }
        }
    };
</script>

<style scoped>
.wrapper {
    padding: 10px;
}
</style>
