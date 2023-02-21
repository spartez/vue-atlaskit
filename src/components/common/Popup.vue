<template>
    <Popper v-if="isOpen && targetElement"
            :target-element="targetElement"
            :placement="placement"
            :offset="offset"
            :boundaries-element="boundariesElement"
            :position-fixed="positionFixed"
            class="popper"
            spotlight-skip>
        <div class="popup">
            <slot/>
        </div>
    </Popper>
</template>

<script>
    import Popper from '../Popper/Popper.vue';

    export default {
        components: { Popper },
        props: {
            isOpen: {
                type: Boolean,
                default: false
            },
            targetElement: {
                type: HTMLElement,
                default: undefined
            },
            placement: {
                type: String,
                default: 'bottom-end'
            },
            flipBehavior: {
                type: [String, Array],
                default: 'flip'
            },
            offset: {
                type: String,
                default: '0,5'
            },
            transitionDelay: {
                type: Number,
                default: 0
            },
            boundariesElement: {
                type: [String, HTMLElement, Function],
                default: 'viewport'
            },
            positionFixed: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style scoped>
    .popup {
        background-color: var(--ds-surface-overlay, #FFFFFF);
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
        box-sizing: border-box;
        display: block;
        z-index: 400;
        border-radius: 3px;
        flex: 1 1 auto;
    }

    .popper {
        z-index: 10000;
    }
</style>
