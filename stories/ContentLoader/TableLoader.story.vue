<template>
    <div>
        <p>
            <button @click="load">
                load
            </button>
            <button @click="resolve">
                resolve
            </button>
        </p>

        <TableLoader :is-loading="isLoading">
            <Table :columns="columns" :data="rows"/>
        </TableLoader>
    </div>
</template>

<script>
    import Table from '@/components/Table/Table';
    import faker from 'faker';
    import TableLoader from '../../src/components/ContentLoader/TableLoader';


    export default {
        name: 'TableLoaderStory',
        components: { TableLoader, Table },
        data() {
            return {
                isLoading: true,
                columns: [{
                    id: 'id',
                    name: 'ID',
                    width: 70
                }, {
                    id: 'name',
                    name: 'Name'
                }, {
                    id: 'job',
                    name: 'Job'
                }],
                rows: Array.from({ length: 10 }).map((_, index) => ({
                    id: index,
                    name: faker.name.firstName(),
                    job: faker.name.jobTitle()
                }))
            };
        },
        methods: {
            resolve() {
                this.isLoading = false;
            },
            load() {
                this.isLoading = true;
            }
        }
    };
</script>
