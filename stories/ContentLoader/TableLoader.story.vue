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
        <Table v-if="!isLoading" :columns="columns" :data="rows"/>
        <ContentLoader v-for="row in 10" v-else :key="row"
                       width="100%" height="40px" view-box="0 0 1260 40"
                       preserve-aspect-ratio="none">
            <rect x="30" y="13" rx="6"
                  ry="6" width="23" height="12"/>
            <rect x="70" y="13" rx="6"
                  ry="6" width="78" height="12"/>
            <rect x="210" y="13" rx="6"
                  ry="6" :width="117 * random()" height="12"/>
            <rect x="360" y="13" rx="6"
                  ry="6" width="83" height="12"/>
            <rect x="480" y="13" rx="6"
                  ry="6" :width="250 * random()" height="12"/>
            <rect x="750" y="13" rx="6"
                  ry="6" :width="500 * random()" height="12"/>
            <rect x="0" y="39" rx="6"
                  ry="6" width="1260" height="0.5"/>
        </ContentLoader>
    </div>
</template>

<script>
    import Table from '@/components/Table/Table';
    import faker from 'faker';
    import ContentLoader from '@/components/ContentLoader/ContentLoader';

    const random = () => Math.random() * (1 - 0.7) + 0.7;


    export default {
        name: 'TableLoaderStory',
        components: { Table, ContentLoader },
        data() {
            return {
                isLoading: true,
                random,
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
