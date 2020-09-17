<script>
    import SpotlightHint from './SpotlightHint.vue';

    export default {
        name: 'SpotlightOverlay',
        inject: ['$spotlight'],
        computed: {
            currentSpotlight() {
                return this.$spotlight.currentSpotlight;
            },
            components() {
                return (this.currentSpotlight && this.currentSpotlight.components) || [];
            },
            step() {
                return this.$spotlight.currentStep;
            },
            total() {
                return this.$spotlight.spotlights.length;
            }
        },
        mounted() {
            this.$spotlight.registerOverlay(this);
        },
        render(h) {
            return h('div', {
                class: 'spotlight-overlay',
                attrs: { visible: Boolean(this.currentSpotlight) },
                on: {
                    click: e => e.stopPropagation()
                }
            }, this.components.map((component, index) => {
                const {
                    target, message, placement, offset
                } = component;
                return h(SpotlightHint, {
                    class: 'spotlight-hint',
                    props: {
                        targetElement: target.elm,
                        step: this.$spotlight.currentStep,
                        total: this.$spotlight.lastStep,
                        placement,
                        offset
                    },
                    scopedSlots: message ? { default: () => message } : undefined,
                    key: `spotlight-hint-${this.$spotlight.currentStep}-${index}`,
                    on: {
                        next: this.$spotlight.next,
                        prev: this.$spotlight.prev,
                        close: this.$spotlight.close
                    }
                });
            }));
        }
    };
</script>

<style scoped>
    .spotlight-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(9, 30, 66, 0.54);
        z-index: 999998;
        display: none;
    }

    .spotlight-overlay[visible] {
        display: block;
    }

</style>
