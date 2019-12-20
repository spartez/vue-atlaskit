<template>
    <div class="wrapper">
        <DatePicker v-model="date"/>
    </div>
</template>

<script>
    import DatePicker from '@/components/Calendar/DatePicker';

    export default {
        name: 'DatePickerStory',
        components: { DatePicker },
        data() {
            return {
                date: ''
            };
        }
    };
</script>
