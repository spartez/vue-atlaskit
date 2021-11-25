<template>
    <div class="wrapper">
        <Table :columns="columns" :data="data">
            <template v-slot:header-id>
                <Checkbox :checked="isChecked" class="header-checkbox" @input="onChecked"/>
            </template>
        </Table>
    </div>
</template>

<script>
    import Table from '@/components/Table/Table';
    import Checkbox from '@/components/Checkbox/Checkbox';
    import faker from 'faker';

    export default {
        name: 'TableStory',
        components: { Table, Checkbox },
        data() {
            return {
                columns: [{
                    id: 'id',
                    name: 'ID',
                    width: 70
                }, {
                    id: 'name',
                    name: 'Name'
                }, {
                    id: 'job',
                    name: 'Job',
                    minWidth: 250
                }, {
                    id: 'email',
                    name: 'Email',
                    minWidth: 250
                }, {
                    id: 'action',
                    width: 130
                }],
                data: Array.from({ length: 100 }).map((_, index) => ({
                    id: index,
                    name: faker.name.firstName(),
                    email: faker.internet.email(),
                    job: faker.name.jobTitle()
                })),
                isChecked: false
            };
        },
        methods: {
            onChecked(isChecked) {
                this.isChecked = isChecked;
            }
        }
    };
</script>

<style scoped>
.wrapper {
    height: 300px;
}
.header-checkbox {
    margin-left: -8px;
}
</style>
