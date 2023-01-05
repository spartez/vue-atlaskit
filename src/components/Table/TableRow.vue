<template>
  <tr
    class="table-row"
    @click="onClick"
  >
    <TableRowCell
      v-for="(column, index) in columns"
      :key="column.id"
      :value="row[column.id]"
      :sticky-left="stickyLeft && index === 0"
      :sticky-right="stickyRight && index === (columns.length - 1)"
    >
      <slot
        slot-scope="props"
        :name="column.id"
        :row="row"
        v-bind="props"
      >
        <span class="table-row-cell-value">
          {{ row[column.id] }}
        </span>
      </slot>
    </TableRowCell>
  </tr>
</template>

<script>
    import TableRowCell from './TableRowCell';

    export default {
        components: { TableRowCell },
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
            },
            isActiveRow: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onClick(event) {
                this.$emit('click', event);
            }
        }
    };
</script>

<style scoped>
    .table-row {
        display: contents;
    }

    .table-row:hover > .table-row-cell {
        background-color: var(--ds-surface-hovered, rgb(250, 251, 252));
    }
</style>
