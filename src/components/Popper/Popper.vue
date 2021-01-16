<template>
    <span ref="element">
        <slot/>
    </span>
</template>
<script>
    import Popper from 'popper.js';

    export default {
        name: 'Popper',
        props: {
            targetElement: {
                type: HTMLElement,
                required: true
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
        },
        mounted() {
            this.$nextTick(() => {
                this.initPopper();
            });
        },
        beforeUnmount() {
            setTimeout(() => this.popper.destroy(), this.transitionDelay);
        },
        methods: {
            initPopper() {
                const boundariesElement = typeof this.boundariesElement === 'function' ? this.boundariesElement() : this.boundariesElement;
                this.popper = new Popper(this.targetElement, this.$refs.element, {
                    placement: this.placement,
                    positionFixed: this.positionFixed,
                    modifiers: {
                        offset: { offset: this.offset },
                        preventOverflow: {
                            boundariesElement
                        },
                        flip: {
                            behavior: this.flipBehavior
                        }
                    }
                });
            },
            update() {
                if (this.popper) {
                    this.popper.update();
                }
            }
        }
    };
</script>
