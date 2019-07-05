<template>
    <table>
        <tbody>
            <tr v-for="(quarter,i) in monthsOfYear" :key="i">
                <td v-for="month in quarter" :key="month">
                    <Button appearance="subtle" class="month" @click="onMonthSelected(month)">
                        {{ month }}
                    </Button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import { chunk } from '../../utils/utils';
    import Button from '../Button/Button';

    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const MONTHS_PER_ROW = 3;

    export default {
        name: 'Months',
        components: { Button },
        computed: {
            monthsOfYear() {
                return chunk(MONTHS, MONTHS_PER_ROW);
            }
        },
        methods: {
            onMonthSelected(month) {
                const index = MONTHS.indexOf(month);
                this.$emit('month-selected', index);
            }
        }
    };
</script>

<style scoped>
table {
    border-collapse: collapse;
    width: 100%;
}

thead, tbody {
    border: none;
}

td {
    text-align: center;
}

.month {
    width: 100%;
}
</style>
