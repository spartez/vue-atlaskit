<template>
    <div class="header">
        <Button appearance="subtle" spacing="none" @click="onPrev">
            <ChevronLeftLargeIcon slot="icon-before"/>
        </Button>
        <header>
            <transition :name="transition">
                <strong :key="interval.header" class="interval" :interval="currentInterval"
                        @click="changeInterval">
                    {{ interval.header }}
                </strong>
            </transition>
        </header>
        <Button appearance="subtle" spacing="none" @click="onNext">
            <ChevronRightLargeIcon slot="icon-before"/>
        </Button>
    </div>
</template>

<script>
    import {
        addMonths,
        addYears,
        subYears,
        subMonths
    } from 'date-fns';
    import ChevronLeftLargeIcon from '../Icon/ChevronLeftLargeIcon';
    import ChevronRightLargeIcon from '../Icon/ChevronRightLargeIcon';
    import Button from '../Button/Button';

    const DECADE = 10;

    export default {
        name: 'CalendarHeader',
        components: { ChevronLeftLargeIcon, ChevronRightLargeIcon, Button },
        props: {
            month: {
                type: String,
                required: true
            },
            year: {
                type: Number,
                required: true
            },
            decade: {
                type: String,
                required: true
            },
            currentInterval: {
                type: String,
                default: 'days'
            }
        },
        data() {
            return {
                transition: 'slide-top'
            };
        },
        computed: {
            interval() {
                switch (this.currentInterval) {
                    case 'days':
                        return {
                            header: `${this.month} ${this.year}`,
                            next: t => addMonths(t, 1),
                            prev: t => subMonths(t, 1)
                        };
                    case 'months':
                        return {
                            header: this.year,
                            next: t => addYears(t, 1),
                            prev: t => subYears(t, 1)
                        };
                    default:
                        return {
                            header: this.decade,
                            next: t => addYears(t, DECADE),
                            prev: t => subYears(t, DECADE)
                        };
                }
            }
        },
        methods: {
            onNext() {
                this.transition = 'slide-right';
                this.$emit('prev', this.interval.next);
            },
            onPrev() {
                this.transition = 'slide-left';
                this.$emit('next', this.interval.prev);
            },
            changeInterval() {
                this.transition = 'slide-top';
                const interval = this.currentInterval === 'days' ? 'months' : 'years';
                this.$emit('change-interval', interval);
            }
        }
    };
</script>

<style scoped>
.header {
    justify-content: stretch;
    align-items: center;
    display: flex;
    color: #172B4D;
    padding: 0 0 8px;
}

header {
    flex-grow: 1;
    text-align: center;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    height: 20px;
}

strong {
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.interval[interval="years"] {
    cursor: default;
}

.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-left-enter-active,
.slide-top-leave-active,
.slide-top-enter-active {
    transition: all 0.4s;
}

.slide-right-enter {
    opacity: 0;
    transform: translate(300px, -50%);
}

.slide-right-leave-to {
    opacity: 0;
    transform: translate(-300px, -50%);
}

.slide-left-enter {
    opacity: 0;
    transform: translate(-300px, -50%);
}

.slide-left-leave-to {
    opacity: 0;
    transform: translate(300px, -50%);
}

.slide-top-enter {
    opacity: 0;
    transform: translate(-50%, -100%);
}

.slide-top-leave-to {
    opacity: 0;
    transform: translate(-50%, 100%);
}
</style>
