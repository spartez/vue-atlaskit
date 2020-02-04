<template>
    <table ref="table" class="table">
        <thead>
            <tr class="table-header-row">
                <TableHeaderCell v-for="(column, index) in columns" :key="column.id" :column="column"
                                 :sticky-left="stickyLeftColumn && index === 0"
                                 :sticky-right="stickyRightColumn && index === (columns.length - 1)"
                                 :sticky-header="stickyHeader"/>
            </tr>
        </thead>
        <tbody>
            <TableRow v-for="row in data" :key="row.id" :columns="columns"
                      :row="row"
                      :sticky-right="stickyRightColumn"
                      :sticky-left="stickyLeftColumn">
                <template v-for="column in columns" v-slot:[column.id]="{row, value}">
                    <slot :name="column.id" :row="row" :value="value"/>
                </template>
            </TableRow>
        </tbody>
        <tfoot v-show="infiniteScroll">
            <tr>
                <td ref="infinite-scroll-loader" class="infinite-scroll-loader">
                    <Spinner size="small"/>
                </td>
            </tr>
        </tfoot>
    </table>
</template>

<script>
    import TableHeaderCell from './TableHeaderCell';
    import TableRow from './TableRow';
    import Spinner from '../Spinner/Spinner';

    function withPxSuffix(value) {
        if (typeof value === 'number') return `${value}px`;
        return value;
    }

    export default {
        components: { TableHeaderCell, TableRow, Spinner },
        props: {
            columns: {
                type: Array,
                required: true
            },
            data: {
                type: Array,
                default: () => ([])
            },
            stickyHeader: {
                type: Boolean,
                default: false
            },
            stickyLeftColumn: {
                type: Boolean,
                default: false
            },
            stickyRightColumn: {
                type: Boolean,
                default: false
            },
            defaultColumnMinWidth: {
                type: [String, Number],
                default: 150
            },
            defaultColumnWidth: {
                type: [String, Number],
                default: '1fr'
            },
            infiniteScroll: {
                type: Boolean,
                default: false
            },
            busy: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            columns: {
                handler() {
                    this.$nextTick(() => {
                        this.$refs.table.style.gridTemplateColumns = this.columns.map((column) => {
                            const width = column.width || this.defaultColumnWidth;
                            const minWidth = column.minWidth || column.width || this.defaultColumnMinWidth;
                            return `minmax(${withPxSuffix(minWidth)}, ${withPxSuffix(width)})`;
                        }).join(' ');
                    });
                },
                immediate: true
            }
        },
        async mounted() {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    this.$emit('table-bottom-reached');
                }
            });
            observer.observe(this.$refs['infinite-scroll-loader']);
        }
    };
</script>

<style scoped>
    .table {
        display: grid;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        grid-auto-rows: min-content;
        position: relative;
    }

    .table tbody, .table thead, .table tfoot {
        display: contents;
    }

    .table-header-row {
        display: contents;
    }

    .table .infinite-scroll-loader {
        box-sizing: border-box;
        height: auto;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
    }
</style>
