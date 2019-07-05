<template>
    <td class="day">
        <Button appearance="subtle" class="date" :today="day.isToday"
                :is-not-same-month="day.isNotSameMonth"
                :is-selected="day.isSelected" @click="onDateSelected">
            {{ date }}
        </Button>
    </td>
</template>

<script>
    import Button from '../Button/Button';

    export default {
        name: 'Day',
        components: { Button },
        props: {
            day: {
                type: Object,
                required: true
            }
        },
        computed: {
            date() {
                return this.day.date.getDate();
            }
        },
        methods: {
            onDateSelected() {
                this.$emit('date-selected', this.day);
            }
        }
    };
</script>

<style scoped>

.date{
    width: 100%;
}

[today] {
    font-weight: 500;
    background-color: transparent;
    position: relative;
    color: #0052CC;
}

[today]::after {
    background-color: #0052CC;
    bottom: 2px;
    content: "";
    display: block;
    height: 2px;
    left: 2px;
    position: absolute;
    right: 2px;
}

[today][isSelected]::after {
    background-color: rgb(37, 56, 88);
    color: #fff;
}

[today][isSelected]:hover {
    color: #172B4D;
}

[isNotSameMonth]:not([today]) {
    color: #cacaca;
}
</style>
