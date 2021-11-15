<template>
    <table>
        <tbody>
            <tr v-for="(half_decade,i) in decade" :key="i">
                <td v-for="year in half_decade" :key="year">
                    <Button appearance="subtle" class="year" @click="onYearSelected(year)">
                        {{ year }}
                    </Button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

    import { chunk } from '../../utils/utils';
    import Button from '../Button/Button.vue';

    const HALF_DECADE = 5;

    export default {
        name: 'Years',
        components: { Button },
        props: {
            yearsOfDecade: {
                type: Array,
                required: true
            }
        },
        computed: {
            decade() {
                return chunk(this.yearsOfDecade, HALF_DECADE);
            }
        },
        methods: {
            onYearSelected(year) {
                this.$emit('year-selected', year);
            }
        }
    };
</script>

<style scoped>
table {
    border-collapse: collapse;
    table-layout: fixed;
}

thead, tbody {
    border: none;
}

td {
    text-align: center;
    padding: 0;
}

tr:last-child > td:first-child {
    padding-right: 8px;
}

.year {
    width: 100%;
}
</style>
