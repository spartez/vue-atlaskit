<template>
    <div class="tooltip">
        <div ref="target" class="target"
             @mouseenter="onMouseEnter"
             @mouseleave="onMouseLeave">
            <slot/>
        </div>
        <transition name="fade">
            <Popper v-if="show"
                    :transition-delay="300"
                    :target-element="$refs.target"
                    :placement="placement"
                    :offset="offset">
                <span class="label" :disabled="disabled">{{ label }}</span>
            </Popper>
        </transition>
    </div>
</template>

<script>
    import Popper from '../Popper/Popper';

    export default {
        name: 'Tooltip',
        components: { Popper },
        props: {
            label: {
                type: String,
                required: true
            },
            placement: {
                type: String,
                default: 'bottom'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            offset: {
                type: String,
                default: '0,5'
            }
        },
        data() {
            return {
                show: false
            };
        },
        methods: {
            onMouseEnter() {
                this.show = true;
            },
            onMouseLeave() {
                this.show = false;
            }
        }
    };
</script>

<style scoped>
    .tooltip {
        display: inline-block;
    }

    .label {
        box-sizing: border-box;
        padding: 2px 10px;
        font-size: 12px;
        font-weight: 400;
        box-shadow: 0 1px 2px 1px rgba(0, 1, 0, 0.2);
        white-space: nowrap;
        pointer-events: none;
        background-color: #172b4d;
        border-radius: 3px;
        color: #ffffff;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
