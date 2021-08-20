<template>
    <div class="wrapper">
        <h3>Normal view</h3>
        <p>
            <Calendar data-cy="calendar" :value="date" @date-selected="onDateSelected"/>
        </p>
        <h3>With time zones</h3>
        <div class="time-zones">
            <div>
                <p>Pacific/Auckland: {{ formatDate(date, 'Pacific/Auckland') }}</p>
                <Calendar :value="date" time-zone="Pacific/Auckland" @date-selected="onDateSelected"/>
            </div>
            <div>
                <p>Default (system) time zone: {{ formatDate(date) }}</p>
                <Calendar :value="date" @date-selected="onDateSelected"/>
            </div>
            <div>
                <p>Pacific/Honolulu: {{ formatDate(date, 'Pacific/Honolulu') }}</p>
                <Calendar :value="date" time-zone="Pacific/Honolulu" @date-selected="onDateSelected"/>
            </div>
        </div>
        <h3>Disabled past dates</h3>
        <p>
            <Calendar :value="date" :disabled-range="noPastRange"/>
        </p>
        <h3>Disabled future dates</h3>
        <p>
            <Calendar :value="date" :disabled-range="noFutureRange"/>
        </p>
        <h3>Date range</h3>
        <p>
            <Calendar :value="dateRange" :range-value="true"/>
        </p>
    </div>
</template>

<script>
    import Calendar from '@/components/Calendar/Calendar';
    import { addDays, subDays } from 'date-fns';
    import { format, utcToZonedTime } from 'date-fns-tz';

    export default {
        name: 'CalendarStory',
        components: { Calendar },
        data() {
            return {
                date: new Date(),
                dates: [
                    new Date(),
                    addDays(new Date(), 3)
                ],
                noFutureRange: {
                    from: addDays(new Date(), 1)
                },
                noPastRange: {
                    to: subDays(new Date(), 1)
                },
                dateRange: {
                    from: addDays(new Date(), 7),
                    to: addDays(new Date(), 21)
                }
            };
        },
        watch: {
            date() {
                console.log(this.date);
            }
        },
        methods: {
            onDateRangeSelected(value) {
                this.dateRange = value;
            },

            onDateSelected(value) {
                this.date = value;
            },

            formatDate(date, timeZone) {
                return date && format(utcToZonedTime(date, timeZone), 'yyyy-MM-dd HH:mm');
            }
        }
    };
</script>

<style scoped>
    .time-zones {
        display: flex;
    }
</style>
