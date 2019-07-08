<template>
    <div ref="calendar" class="calendar" tabindex="-1">
        <CalendarHeader :month="month" :year="year" :decade="decade"
                        :current-interval="currentInterval"
                        @change-interval="onIntervalChange"
                        @next="onNext" @prev="onPrev"/>
        <Weeks v-if="currentInterval === 'days'" :weeks="weeks" @date-selected="onDateSelected"/>
        <Months v-else-if="currentInterval === 'months'" @month-selected="onMonthSelected"/>
        <Years v-else :years-of-decade="yearsOfDecade" @year-selected="onYearSelected"/>
    </div>
</template>

<script>
    import {
        startOfMonth,
        endOfMonth,
        startOfWeek,
        lastDayOfWeek,
        eachDayOfInterval,
        isToday,
        isSameMonth,
        isSameDay,
        startOfDecade,
        endOfDecade,
        setYear,
        setMonth
    } from 'date-fns';

    import { chunk } from '../../utils/utils';
    import CalendarHeader from './CalendarHeader';
    import Weeks from './Weeks';
    import Months from './Months';
    import Years from './Years';

    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DAYS_IN_WEEK = 7;
    const TODAY = new Date();

    export default {
        name: 'DatePicker',
        components: {
            CalendarHeader, Weeks, Months, Years
        },
        props: {
            value: { type: Date, default: undefined }
        },
        data() {
            return {
                today: TODAY,
                currentDate: TODAY,
                selectedDate: this.value,
                currentInterval: 'days'
            };
        },
        computed: {
            weeks() {
                return this.daysOfMonth;
            },
            month() {
                return MONTHS[this.currentDate.getMonth()];
            },
            year() {
                return this.currentDate.getFullYear();
            },
            decade() {
                const firstYearOfDecade = startOfDecade(this.currentDate).getFullYear();
                const lastYearOfDecade = endOfDecade(this.currentDate).getFullYear();
                return `${firstYearOfDecade} - ${lastYearOfDecade}`;
            },
            daysOfMonth() {
                const monthFirstDate = startOfMonth(this.currentDate);
                const monthLastDate = endOfMonth(this.currentDate);
                const daysOfMonth = eachDayOfInterval({
                    start: startOfWeek(monthFirstDate),
                    end: lastDayOfWeek(monthLastDate)
                });
                const enrichedDays = daysOfMonth.map(day => this.enrichDay(day));
                return chunk(enrichedDays, DAYS_IN_WEEK);
            },
            yearsOfDecade() {
                const start = startOfDecade(this.currentDate).getFullYear();
                const end = endOfDecade(this.currentDate).getFullYear();
                return Array(end - start + 1).fill().map((_, idx) => start + idx);
            }
        },
        watch: {
            value(date) {
                this.selectedDate = date;
                this.currentDate = date;
            }
        },
        methods: {
            enrichDay(date) {
                return {
                    date,
                    isToday: isToday(date),
                    isNotSameMonth: !isSameMonth(this.currentDate, date),
                    isSelected: isSameDay(this.selectedDate, date)
                };
            },
            onNext(callback) {
                this.currentDate = callback(this.currentDate, this.currentInterval);
            },
            onPrev(callback) {
                this.currentDate = callback(this.currentDate, this.currentInterval);
            },
            onMonthSelected(month) {
                this.currentInterval = 'days';
                this.currentDate = setMonth(this.currentDate, month);
            },
            onYearSelected(year) {
                this.currentInterval = 'months';
                this.currentDate = setYear(this.currentDate, year);
            },
            onDateSelected(day) {
                this.selectedDate = day.date;
                this.$emit('date-selected', this.selectedDate);
            },
            onIntervalChange(interval) {
                this.currentInterval = interval;
            }
        }
    };
</script>

<style scoped>
.calendar {
    display: inline-block;
    font-size: 14px;
    position: absolute;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
    border-radius: 3px;
    padding: 15px;
    outline: none;
    background-color: #fff;
    min-width: 300px;
    overflow: hidden;
    z-index: 1000;
}
</style>
