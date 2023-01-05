<template>
  <td
    class="day"
    :highlighted="isHighlighted"
    :range-start="isRangeStart"
    :range-end="isRangeEnd"
  >
    <Button
      appearance="subtle"
      class="date"
      :today="day.isToday"
      :disabled="isDisabled"
      :is-not-same-month="day.isNotSameMonth"
      :is-selected="day.isSelected"
      @click.stop="onDateSelected"
    >
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
            },
            isDisabled() {
                return this.day.isDisabled;
            },
            isHighlighted() {
                return this.day.isHighlighted;
            },
            isRangeStart() {
                return this.day.isRangeStart;
            },
            isRangeEnd() {
                return this.day.isRangeEnd;
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

[highlighted] {
    background-color: rgb(244, 245, 247);
}

[range-start] [selected] {
    border-radius: 3px 0 0 3px;
}

[range-end] [selected] {
    border-radius: 0 3px 3px 0;
}

[today] {
    font-weight: 500;
    background-color: transparent;
    position: relative;
    color: var(--ds-text-selected, #0052CC);
}

[today]::after {
    background-color: var(--ds-text-selected, #0052CC);
    bottom: 2px;
    content: "";
    display: block;
    height: 2px;
    left: 2px;
    position: absolute;
    right: 2px;
}

[is-not-same-month]:not([today]) {
    color: #cacaca;
}
</style>
