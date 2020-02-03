<template>
    <div class="wrapper">
        <DateRangePicker v-model="range" date-format="yyyy-MM-dd"/>
        <p>
            {{ range }}
        </p>
    </div>
</template>

<script>
    import DateRangePicker from '@/components/Calendar/DateRangePicker';

    export default {
        name: 'DateRangePickerStory',
        components: { DateRangePicker },
        data() {
            return {
                range: {
                    from: undefined,
                    to: undefined
                }
            };
        }
    };
</script>
