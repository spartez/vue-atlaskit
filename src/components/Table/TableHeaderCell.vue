<template>
    <th class="table-header-cell"
        :sticky-header="stickyHeader"
        :sticky-left="stickyLeft"
        :sticky-right="stickyRight">
        {{ column.name }}
    </th>
</template>

<script>
    export default {
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
        padding: 8px 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom: 2px solid rgb(223, 225, 230);
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
</style>
