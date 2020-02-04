<template>
    <tr class="table-row">
        <td v-for="(column, index) in columns" :key="column.id" class="table-row-cell"
            :sticky-left="stickyLeft && index === 0"
            :sticky-right="stickyRight && index === (columns.length - 1)">
            <slot :name="column.id" :row="row" :value="row[column.id]">
                <span class="table-row-cell-value">
                    {{ row[column.id] }}
                </span>
            </slot>
        </td>
    </tr>
</template>

<script>
    export default {
        props: {
            columns: {
                type: Array,
                required: true
            },
            row: {
                type: Object,
                default: () => ({})
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
    .table-row {
        display: contents;
    }

    .table-row-cell {
        align-items: center;
        position: relative;
        box-sizing: border-box;
        min-height: 40px;
        color: rgb(23, 43, 77);
        line-height: 20px;
        padding: 8px 25px;
        overflow: hidden;
        display: flex;
    }

    .table-row-cell-value {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .table-row-cell[sticky-left] {
        position: sticky;
        left: 0;
        z-index: 2;
        background: white;
    }

    .table-row-cell[sticky-right] {
        position: sticky;
        right: 0;
        z-index: 2;
        background: white;
    }
</style>
