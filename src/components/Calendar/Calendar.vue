<template>
    <div ref="calendar" class="calendar" tabindex="-1">
        <CalendarHeader :month="month" :year="year" :decade="decade"
                        :current-interval="currentInterval"
                        @change-interval="onIntervalChange"
                        @next="onNext" @prev="onPrev"/>
        <Weeks v-if="currentInterval === 'days'" :weeks="weeks" :disabled-range="disabledRange"
               @date-selected="onDateSelected"/>
        <Months v-else-if="currentInterval === 'months'" :disabled-range="disabledRange" @month-selected="onMonthSelected"/>
        <Years v-else :years-of-decade="yearsOfDecade" :disabled-range="disabledRange"
               @year-selected="onYearSelected"/>
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
        isBefore,
        isAfter,
        endOfDay,
        startOfDay,
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
            value: { type: [Date, Object], default: () => undefined },
            rangeValue: {
                type: Boolean,
                default: false
            },
            disabledRange: {
                type: Object,
                default: () => ({
                    from: undefined,
                    to: undefined
                })
            },
            visibleDate: {
                type: Date,
                default: undefined
            }
        },
        data() {
            return {
                today: TODAY,
                currentDate: undefined,
                selectedDate: undefined,
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
            },
            disabledFrom() {
                return this.disabledRange && this.disabledRange.from && startOfDay(this.disabledRange.from);
            },
            disabledTo() {
                return this.disabledRange && this.disabledRange.to && endOfDay(this.disabledRange.to);
            },
            rangeFrom() {
                return this.value && this.rangeValue && startOfDay(this.value.from);
            },
            rangeTo() {
                return this.value && this.rangeValue && endOfDay(this.value.to);
            }
        },
        watch: {
            value: {
                handler(date) {
                    this.selectedDate = this.rangeValue ? date.from : date;
                },
                immediate: true
            },
            visibleDate: {
                handler() {
                    this.currentDate = this.visibleDate || (this.rangeValue ? this.value.from : this.value) || TODAY;
                },
                immediate: true
            }
        },
        methods: {
            enrichDay(date) {
                return {
                    date,
                    isToday: isToday(date),
                    isNotSameMonth: !isSameMonth(this.currentDate, date),
                    isSelected: this.isSelected(date),
                    isDisabled: this.isDisabled(date),
                    isHighlighted: this.isHighlighted(date),
                    isRangeStart: isSameDay(date, this.rangeFrom),
                    isRangeEnd: isSameDay(date, this.rangeTo)
                };
            },
            isSelected(date) {
                if (this.rangeValue) {
                    return isSameDay(date, this.value.from) || isSameDay(date, this.value.to);
                }
                return isSameDay(this.selectedDate, date);
            },
            isDisabled(date) {
                if (!this.disabledFrom && !this.disabledTo) {
                    return false;
                } if (!this.disabledFrom) {
                    return !isAfter(date, this.disabledTo);
                } if (!this.disabledTo) {
                    return !isBefore(date, this.disabledFrom);
                }
                return !isAfter(date, this.disabledTo) && !isBefore(date, this.disabledFrom);
            },
            isHighlighted(date) {
                if (!this.rangeValue) {
                    return false;
                }
                return isAfter(date, this.rangeFrom) && isBefore(date, this.rangeTo);
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
                this.currentDate = day.date;
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
    padding: 15px;
    width: 301px;
}
</style>
