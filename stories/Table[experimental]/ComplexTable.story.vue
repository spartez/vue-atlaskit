<template>
    <div class="wrapper">
        <Table ref="table" :columns="columns"
               :data="data"
               :sticky-header="true"
               :sticky-left-column="true" :sticky-right-column="true" :infinite-scroll="infiniteScroll"
               :sorted-by="sortedBy"
               :sorted-desc="sortedDesc"
               :busy="busy"
               @table-bottom-reached="loadMoreData"
               @sorted="onSorted">
            <template v-slot:email="{ value }">
                <a :href="`mailto:${value}`">{{ value }}</a>
            </template>
            <template v-slot:action="{ row, cellElement }">
                <Dropdown label="Actions" :boundaries-element="$refs.table && $refs.table.$el"
                          @open="dropdownOpen(cellElement)"
                          @close="dropdownClose(cellElement)">
                    <DropdownItem>Move {{ row.id }}</DropdownItem>
                    <DropdownItem>Edit {{ row.id }}</DropdownItem>
                    <DropdownItem>Delete {{ row.id }}</DropdownItem>
                </Dropdown>
            </template>
        </Table>
    </div>
</template>

<script>
    import Table from '@/components/Table/Table';
    import Dropdown from '@/components/Dropdown/Dropdown';
    import DropdownItem from '@/components/Dropdown/DropdownItem';
    import faker from 'faker';

    export default {
        name: 'TableStory',
        components: { Table, Dropdown, DropdownItem },
        data() {
            return {
                columns: [{
                    id: 'id',
                    name: 'ID',
                    width: 70,
                    sortable: true
                }, {
                    id: 'account',
                    name: 'Acc',
                    width: 120,
                    sortable: true
                }, {
                    id: 'name',
                    name: 'Name',
                    sortable: true
                }, {
                    id: 'job',
                    name: 'Job',
                    minWidth: 250,
                    sortable: true
                }, {
                    id: 'address',
                    name: 'Address',
                    minWidth: 250,
                    sortable: true
                }, {
                    id: 'email',
                    name: 'Email',
                    minWidth: 250
                }, {
                    id: 'action',
                    width: 130
                }],
                data: Array.from({ length: 10 }).map((_, index) => ({
                    id: index,
                    account: faker.finance.account(),
                    name: faker.name.firstName(),
                    address: faker.address.country(),
                    email: faker.internet.email(),
                    job: faker.name.jobTitle()
                })),
                infiniteScroll: true,
                sortedBy: 'id',
                sortedDesc: false,
                lastId: 10,
                busy: false
            };
        },
        methods: {
            dropdownOpen(cellElement) {
                if (cellElement) {
                    cellElement.setAttribute('with-dropdown', '');
                }
            },
            dropdownClose(cellElement) {
                if (cellElement) {
                    cellElement.removeAttribute('with-dropdown');
                }
            },
            loadMoreData(callback) {
                setTimeout(() => {
                    if (this.lastId > 30) {
                        this.infiniteScroll = false;
                    } else {
                        this.data = [...this.data, ...Array.from({ length: 10 }).map((_, index) => ({
                            id: this.lastId + index,
                            account: faker.finance.account(),
                            name: faker.name.firstName(),
                            address: faker.address.country(),
                            email: faker.internet.email(),
                            job: faker.name.jobTitle()
                        }))];
                        this.lastId += 10;
                    }
                    callback();
                }, 1000);
            },
            onSorted({ id, desc }) {
                this.busy = true;
                this.sortedBy = id;
                this.sortedDesc = desc;
                setTimeout(() => {
                    this.data = [...this.data].sort((a, b) => {
                        if (a[id] === b[id]) {
                            return 0;
                        }
                        const result = a[id] > b[id] ? 1 : -1;
                        return desc ? result * -1 : result;
                    });
                    this.busy = false;
                }, 1000);
            }
        }
    };
</script>

<style scoped>
    .wrapper {
        max-height: 500px;
        max-width: 900px;
        display: flex;
        flex-direction: column;
    }

    >>> .table-row-cell[with-dropdown] {
        z-index: 100;
    }
</style>
