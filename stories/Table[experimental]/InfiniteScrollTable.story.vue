<template>
    <div>
        <Table :columns="columns" :data="data" :infinite-scroll="infiniteScroll"
               @table-bottom-reached="loadMoreData"/>
    </div>
</template>

<script>
    import Table from '@/components/Table/Table';
    import faker from 'faker';

    export default {
        name: 'TableStory',
        components: { Table },
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
                    name: 'Job'
                }],
                data: Array.from({ length: 10 }).map((_, index) => ({
                    id: index,
                    name: faker.name.firstName(),
                    job: faker.name.jobTitle()
                })),
                infiniteScroll: true
            };
        },
        methods: {
            loadMoreData(callback) {
                setTimeout(() => {
                    const lastId = this.data[this.data.length - 1].id;
                    if (lastId > 30) {
                        this.infiniteScroll = false;
                    } else {
                        this.data = [...this.data, ...Array.from({ length: 10 }).map((_, index) => ({
                            id: lastId + 1 + index,
                            name: faker.name.firstName(),
                            job: faker.name.jobTitle()
                        }))];
                    }
                    callback();
                }, 1000);
            }
        }
    };
</script>
