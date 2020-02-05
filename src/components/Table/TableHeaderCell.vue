<template>
    <th class="table-header-cell"
        :sticky-header="stickyHeader"
        :sticky-left="stickyLeft"
        :sticky-right="stickyRight"
        :sortable="column.sortable"
        @click="onClick">
        <span class="table-header-label">
            {{ column.name }}
        </span>
        <template v-if="column.sortable">
            <ChevronDownIcon v-if="sorted && sortedDesc" size="small"/>
            <ChevronUpIcon v-if="sorted && !sortedDesc" size="small"/>
        </template>
    </th>
</template>

<script>
    import ChevronDownIcon from '../Icon/ChevronDownIcon';
    import ChevronUpIcon from '../Icon/ChevronUpIcon';

    export default {
        components: { ChevronDownIcon, ChevronUpIcon },
        props: {
            column: {
                type: Object,
                required: true
            },
            stickyHeader: {
                type: Boolean,
                default: false
            },
            stickyLeft: {
                type: Boolean,
                default: false
            },
            stickyRight: {
                type: Boolean,
                default: false
            },
            sorted: {
                type: Boolean,
                default: false
            },
            sortedDesc: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onClick() {
                if (this.column.sortable) {
                    this.$emit('sorted');
                }
            }
        }
    };
</script>

<style scoped>
    .table-header-cell {
        align-items: center;
        position: relative;
        box-sizing: border-box;
        min-height: 40px;
        font-weight: bold;
        font-size: 12px;
        line-height: 1.67;
        letter-spacing: -0.1px;
        color: rgb(94, 108, 132);
        padding: 9px 16px 7px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom: 2px solid rgb(223, 225, 230);
        display: flex;
        align-items: center;
    }

    .table-header-cell[sticky-header] {
        position: sticky;
        top: 0;
        z-index: 10;
        background: white;
    }

    .table-header-cell[sticky-left] {
        position: sticky;
        left: 0;
        z-index: 20;
        background: white;
    }

    .table-header-cell[sticky-right] {
        position: sticky;
        right: 0;
        z-index: 20;
        background: white;
    }

    .table-header-cell[sortable]:hover {
        background-color: rgb(244, 245, 247);
        cursor: pointer;
    }
</style>
