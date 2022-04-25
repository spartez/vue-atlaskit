<template>
    <transition name="fade" appear>
        <Popper
            :transition-delay="300"
            :boundaries-element="boundariesElement"
            :target-element="targetElement"
            :placement="placement"
            :offset="offset"
            :with-delay="withDelay">
            <span class="label">{{ label }}</span>
        </Popper>
    </transition>
</template>

<script>
    import Popper from '../Popper/Popper.vue';

    export default {
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
            },
            boundariesElement: {
                type: String,
                default: 'viewport'
            },
            targetElement: {
                type: HTMLElement,
                required: true
            },
            withDelay: {
                type: Boolean,
                default: true
            }
        }
    };
</script>

<style scoped>
.label {
    box-sizing: border-box;
    position: absolute;
    z-index: 999999;
    padding: 2px 10px;
    font-size: 12px;
    font-weight: 400;
    box-shadow: 0 1px 2px 1px rgba(0, 1, 0, 0.2);
    white-space: nowrap;
    pointer-events: none;
    background-color: #172b4d;
    border-radius: 3px;
    color: #ffffff;
    top: 0;
    left: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}

.fade-enter-active[with-delay] {
    transition-delay: .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
