<template>
    <div class="wrapper">
        <Table :columns="columns" :data="data">
            <template v-slot:email="{ value }">
                <a :href="`mailto:${value}`">{{ value }}</a>
            </template>
            <template v-slot:action="{ row }">
                <Button>Delete {{ row.id }}</Button>
            </template>
        </Table>
    </div>
</template>

<script>
    import Table from '@/components/Table/Table';
    import Button from '@/components/Button/Button';
    import faker from 'faker';

    export default {
        name: 'TableStory',
        components: { Table, Button },
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
                }))
            };
        }
    };
</script>

<style scoped>
    .wrapper {
        height: 300px;
    }
</style>
