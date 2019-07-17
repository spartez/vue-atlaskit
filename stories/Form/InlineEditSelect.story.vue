<template>
    <div class="wrapper">
        <InlineEdit field="field" :value="selected" type="text"
                    class="date-edit"
                    @save-requested="onSaveRequested">
            <Select slot="editor" slot-scope="props"
                    :value="props.value"
                    :options="list"
                    :is-focused="props.isFocused"
                    :is-invalid="props.isInvalid"
                    :is-loading="props.isLoading"
                    @confirm="props.confirm"
                    @input="props.input"
                    @blur="props.blur"
                    @cancel="props.cancel"/>
            <span>{{ selected }}</span>
        </InlineEdit>
    </div>
</template>


<script>
    import InlineEdit from '@/components/Form/InlineEdit';
    import Select from '@/components/Select/Select';
    import faker from 'faker';
    import { many } from '../api-mocks/helpers';

    export default {
        name: 'InlineEditSelect',
        components: { InlineEdit, Select },
        props: {
            list: {
                type: Array,
                default: () => many(faker.address.city)({}, 10)
            }
        },
        data() {
            return {
                selected: this.list[0]
            };
        },
        methods: {
            onSaveRequested(value, callback) {
                this.selected = value;
                setTimeout(() => callback({ message: 'error' }), 1000);
            }
        }
    };
</script>

<style scoped>
.wrapper {
    padding: 20px;
}
</style>
