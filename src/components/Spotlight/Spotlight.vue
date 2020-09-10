<script>
    export default {
        inject: {
            $spotlight: {
                from: '$spotlight',
                default: undefined
            }
        },
        props: {
            step: {
                type: Number,
                required: true
            },
            placement: {
                type: String,
                default: 'right-start'
            },
            enabled: {
                type: Boolean,
                default: true
            },
            offset: {
                type: String,
                default: '-2,10'
            }
        },
        computed: {
            message() {
                return this.$slots.message;
            },
            target() {
                return this.$slots.default[0];
            },
            currentStep() {
                return this.$spotlight && this.$spotlight.currentSpotlight && this.$spotlight.currentSpotlight.step;
            }
        },
        watch: {
            currentStep(nextStep, prevStep) {
                if (nextStep === this.step) {
                    this.$emit('show');
                } else if (prevStep === this.step) {
                    this.$emit('leave');
                }
            }
        },
        mounted() {
            if (!this.$spotlight) return;
            this.$spotlight.registerSpotlight(this);
        },
        beforeDestroy() {
            if (!this.$spotlight) return;
            this.$spotlight.unRegisterSpotlight(this);
        },
        methods: {
            show() {
                if (!this.$spotlight) return;
                this.$spotlight.showSpotlight(this.step);
            }
        },
        render() {
            return this.$slots.default && this.$slots.default[0];
        }
    };
</script>
