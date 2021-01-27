<template>
    <div class="wrapper">
        <DatePicker v-model="date"/>
        <h3>Disabled past dates</h3>
        <p>
            <DatePicker v-model="date" :disabled-range="noPastRange"/>
        </p>
    </div>
</template>

<script>
    import DatePicker from '@/components/Calendar/DatePicker';
    import { subDays } from 'date-fns';

    export default {
        name: 'DatePickerStory',
        components: { DatePicker },
        data() {
            return {
                date: '',
                noPastRange: {
                    to: subDays(new Date(), 1)
                }
            };
        }
    };
</script>
