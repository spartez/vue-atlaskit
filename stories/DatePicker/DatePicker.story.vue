<template>
    <div class="wrapper">
        <DatePicker v-model="date"/>
        <h3>With time zones</h3>
        <div class="time-zones">
            <div>
                <p>Pacific/Auckland: {{ formatDate(date, 'Pacific/Auckland') }}</p>
                <DatePicker v-model="date" time-zone="Pacific/Auckland"/>
            </div>
            <div>
                <p>Default (system) time zone: {{ formatDate(date) }}</p>
                <DatePicker v-model="date"/>
            </div>
            <div>
                <p>Pacific/Honolulu: {{ formatDate(date, 'Pacific/Honolulu') }}</p>
                <DatePicker v-model="date" time-zone="Pacific/Honolulu"/>
            </div>
        </div>
        <h3>Disabled past dates</h3>
        <p>
            <DatePicker v-model="date" :disabled-range="noPastRange"/>
        </p>
        <h3>Disabled past and future dates</h3>
        <p>
            <DatePicker v-model="date" :disabled-range="noPastAndFutureRange"/>
        </p>
    </div>
</template>

<script>
    import DatePicker from '@/components/Calendar/DatePicker';
    import { subDays, addDays, format } from 'date-fns';
    import { utcToZonedTime } from 'date-fns-tz';

    export default {
        name: 'DatePickerStory',
        components: { DatePicker },
        data() {
            return {
                date: '',
                noPastRange: {
                    to: subDays(new Date(), 1)
                },
                noPastAndFutureRange: {
                    to: subDays(new Date(), 1),
                    from: addDays(new Date(), 4)
                }
            };
        },
        methods: {
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

    .time-zones > * {
        margin: 0 20px 0 0;
    }
</style>
