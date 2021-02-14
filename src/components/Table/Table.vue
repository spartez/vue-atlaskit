<template>
    <div class="table-wrapper">
        <table ref="table" class="table">
            <thead>
                <tr class="table-header-row">
                    <TableHeaderCell v-for="(column, index) in columns" :key="column.id" :column="column"
                                     :sticky-left="stickyLeftColumn && index === 0"
                                     :sticky-right="stickyRightColumn && index === (columns.length - 1)"
                                     :sticky-header="stickyHeader"
                                     :sorted="sortedBy === column.id"
                                     :sorted-desc="sortedDesc"
                                     @sorted="onSorted(column)"/>
                </tr>
            </thead>
            <tbody>
                <TableRow v-for="row in data" :key="row.id"
                          :columns="columns"
                          :row="row"
                          :sticky-right="stickyRightColumn"
                          :sticky-left="stickyLeftColumn" @click="onRowClick(row, $event)">
                    <template v-for="column in columns" v-slot:[column.id]="props">
                        <slot :name="column.id" v-bind="props"/>
                    </template>
                </TableRow>
            </tbody>
            <tfoot v-show="infiniteScroll">
                <tr>
                    <td ref="infinite-scroll-loader" class="infinite-scroll-loader" :style="{ width: `${tableWidth}px` }">
                        <Spinner size="small"/>
                    </td>
                </tr>
            </tfoot>
        </table>
        <div class="busy-glass" :busy="busy">
            <Spinner/>
        </div>
    </div>
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
            },
            sortedBy: {
                type: String,
                default: undefined
            },
            sortedDesc: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                observer: undefined,
                tableWidth: 0,
                activeRowId: undefined
            };
        },
        watch: {
            columns: {
                handler() {
                    this.$nextTick(() => {
                        if (this.$refs.table) {
                            this.$refs.table.style.gridTemplateColumns = this.columns.map((column) => {
                                const width = column.width || this.defaultColumnWidth;
                                const minWidth = column.minWidth || column.width || this.defaultColumnMinWidth;
                                return `minmax(${withPxSuffix(minWidth)}, ${withPxSuffix(width)})`;
                            }).join(' ');
                            this.tableWidth = this.$refs.table.offsetWidth;
                        }
                    });
                },
                immediate: true
            }
        },
        async mounted() {
            this.createObserver();
        },
        methods: {
            onRowClick(row, event) {
                this.$emit('row-click', { row, event });
            },
            createObserver() {
                if (this.observer) {
                    this.observer.unobserve(this.$refs['infinite-scroll-loader']);
                }
                this.observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        this.tableBottomReached();
                    }
                });
                this.observer.observe(this.$refs['infinite-scroll-loader']);
            },
            tableBottomReached() {
                this.$emit('table-bottom-reached', () => {
                    this.createObserver();
                });
            },
            onSorted(column) {
                this.$emit('sorted', { id: column.id, desc: this.sortedBy === column.id ? !this.sortedDesc : false });
            }
        }
    };
</script>

<style scoped>
    .table-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .table {
        display: grid;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        grid-auto-rows: min-content;
        position: relative;
        overflow: auto;
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
        display: flex;
        justify-content: center;
        padding: 5px;
    }

    .table-wrapper .busy-glass {
        position: absolute;
        display: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
        z-index: 200;
    }

    .table-wrapper .busy-glass[busy] {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
