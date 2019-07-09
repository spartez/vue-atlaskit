<template>
    <table>
        <thead class="weekdays">
            <th v-for="weekday in weekdays" :key="weekday" class="weekday">
                {{ weekday }}
            </th>
        </thead>
        <tbody>
            <tr v-for="(week,i) in weeks" :key="i" class="week">
                <Day v-for="day in week" :key="day.date.getDate()" :day="day"
                     @date-selected="onDateSelected"/>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import Day from './Day';

    const WEEKDAYS_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    export default {
        name: 'Weeks',
        components: { Day },
        props: {
            weeks: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                weekdays: WEEKDAYS_LABELS
            };
        },
        methods: {
            onDateSelected(date) {
                this.$emit('date-selected', date);
            }
        }
    };
</script>

<style scoped>
.weekday {
    color: #6B778C;
    font-size: 11px;
    min-width: 40px;
    box-sizing: border-box;
    text-transform: uppercase;
    text-align: center;
    padding: 8px;
}

table {
    border-collapse: collapse;
    width: 100%;
}

thead, tbody {
    border: none;
}

td {
    padding: 0;
}
</style>
