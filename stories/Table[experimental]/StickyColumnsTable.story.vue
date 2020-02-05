<template>
    <div class="wrapper">
        <Table ref="table" class="table" :columns="columns"
               :data="data"
               :sticky-header="true"
               :sticky-left-column="true" :sticky-right-column="true">
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
                    width: 70
                }, {
                    id: 'account',
                    name: 'Acc',
                    width: 120
                }, {
                    id: 'name',
                    name: 'Name'
                }, {
                    id: 'job',
                    name: 'Job',
                    minWidth: 250
                }, {
                    id: 'address',
                    name: 'Address',
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
                    account: faker.finance.account(),
                    name: faker.name.firstName(),
                    address: faker.address.country(),
                    email: faker.internet.email(),
                    job: faker.name.jobTitle()
                }))
            };
        },
        methods: {
            dropdownOpen(cellElement) {
                cellElement.setAttribute('with-dropdown', '');
            },
            dropdownClose(cellElement) {
                cellElement.removeAttribute('with-dropdown');
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
