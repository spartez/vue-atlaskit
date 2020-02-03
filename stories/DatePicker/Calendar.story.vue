<template>
    <div class="wrapper">
        <h3>Normal view</h3>
        <p>
            <Calendar :value="date"/>
        </p>
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
            }
        }
    };
</script>
