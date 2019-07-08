<template>
    <DatePicker v-model="date"/>
</template>

<script>
    import DatePicker from '@/components/Calendar/DatePicker';

    export default {
        name: 'DatePickerStory',
        components: { DatePicker },
        data() {
            return {
                date: new Date()
            };
        }
    };
</script>
