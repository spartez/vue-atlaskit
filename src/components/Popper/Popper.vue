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
                type: [String, HTMLElement],
                default: 'viewport'
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.initPopper();
            });
        },
        beforeDestroy() {
            setTimeout(() => this.popper.destroy(), this.transitionDelay);
        },
        methods: {
            initPopper() {
                const [defaultSlot] = this.$slots.default;
                this.popper = new Popper(this.targetElement, defaultSlot.elm, {
                    placement: this.placement,
                    modifiers: {
                        offset: { offset: this.offset },
                        preventOverflow: {
                            boundariesElement: this.boundariesElement
                        },
                        flip: {
                            behavior: this.flipBehavior
                        }
                    }
                });
            },
            update() {
                this.popper.update();
            }
        },
        render() {
            const [defaultSlot] = this.$slots.default;
            return defaultSlot;
        }
    };
</script>
