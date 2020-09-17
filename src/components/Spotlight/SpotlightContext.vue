<script>

    const ARROW_RIGHT = 39;
    const ARROW_LEFT = 37;
    const ESC = 27;

    export default {
        name: 'SpotlightContext',
        data() {
            return {
                spotlights: [],
                currentStep: undefined,
                overlay: undefined
            };
        },
        computed: {
            currentSpotlight() {
                return this.currentStep && this.enabledSpotlights[this.currentStep - 1];
            },
            currentTargets() {
                return this.currentSpotlight && this.currentSpotlight.components.map(comp => comp.target);
            },
            enabledSpotlights() {
                return this.spotlights.filter(spot => spot.components.length === 0 || spot.components.some(comp => comp.enabled));
            },
            lastStep() {
                return this.enabledSpotlights.length;
            }
        },
        watch: {
            currentTargets(newTargets, oldTargets) {
                if (oldTargets) {
                    this.clearClasses(oldTargets);
                }
                if (newTargets) {
                    this.addClasses(newTargets);
                }
            }
        },
        methods: {
            showSpotlight(step) {
                window.addEventListener('keyup', this.handleKeyPress);
                this.currentStep = step;
            },
            next() {
                if (this.currentStep < this.lastStep) {
                    this.currentStep += 1;
                } else {
                    this.currentStep = undefined;
                    this.$emit('finished');
                    window.removeEventListener('keyup', this.handleKeyPress);
                }
            },
            prev() {
                if (this.currentStep > 1) {
                    this.currentStep -= 1;
                }
            },
            registerSpotlight(component) {
                const { step } = component;
                const spotlight = this.spotlights.find(spot => spot.step === step);
                if (spotlight) {
                    spotlight.components.push(component);
                } else {
                    const spotlightIndex = this.spotlights.findIndex(spot => spot.step > step);
                    if (spotlightIndex === -1) {
                        this.spotlights.push({ components: [component], step });
                    } else {
                        this.spotlights.splice(spotlightIndex, 0, { components: [component], step });
                    }
                }
            },
            unRegisterSpotlight(component) {
                this.spotlights = this.spotlights.map(spotlightIndex => ({
                    ...spotlightIndex, components: spotlightIndex.components.filter(c => c !== component)
                }));
            },
            registerOverlay(overlay) {
                this.overlay = overlay;
            },
            addClasses(targets) {
                const elements = targets.map(target => target.elm);
                elements.forEach((element) => {
                    element.classList.add('spotlight-zindex');
                    const position = document.defaultView.getComputedStyle(element, null).getPropertyValue('position');
                    if (!['absolute', 'relative', 'fixed'].includes(position)) {
                        element.classList.add('spotlight-relative');
                    }
                    let parent = element.parentNode;
                    while (parent !== null) {
                        if (!parent.tagName || parent.tagName.toLowerCase() === 'body') break;

                        const zindex = document.defaultView.getComputedStyle(parent, null).getPropertyValue('z-index');
                        const transition = document.defaultView.getComputedStyle(parent, null).getPropertyValue('transition');
                        const parentPosition = document.defaultView.getComputedStyle(parent, null).getPropertyValue('position');
                        const skip = elements.includes(parent) || parent.hasAttribute('spotlight-skip');
                        if ((parseInt(zindex, 10) || transition) && !skip) {
                            parent.classList.add('spotlight-parentfix');
                        }
                        if (parentPosition === 'sticky') {
                            parent.classList.add('spotlight-relative');
                        }
                        parent = parent.parentNode;
                    }
                });
            },
            clearClasses(targets) {
                const elements = targets.map(target => target.elm);

                elements.forEach((element) => {
                    element.classList.remove('spotlight-zindex', 'spotlight-relative');
                });
                [...document.querySelectorAll('.spotlight-parentfix')].forEach(element => element.classList.remove('spotlight-parentfix'));
            },

            handleKeyPress(e) {
                switch (e.keyCode) {
                    case ARROW_RIGHT:
                        this.next();
                        break;
                    case ARROW_LEFT:
                        this.prev();
                        break;
                    case ESC:
                        this.currentStep = undefined;
                        window.removeEventListener('keyup', this.handleKeyPress);
                        break;
                    default:
                }
            }
        },
        provide() {
            return {
                $spotlight: this
            };
        },
        render() {
            return this.$slots.default[0];
        }
    };
</script>

<style scoped>
    >>> .spotlight-zindex {
        z-index: 999999 !important;
        pointer-events: none;
        border-radius: 3px;
        animation: 3000ms cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s infinite normal none running pulse,
        400ms ease-in-out 0s normal forwards shadowFadeIn;
    }

    >>> .spotlight-relative {
        position: relative !important;
    }

    >>> .spotlight-parentfix {
        z-index: auto !important;
        opacity: 1.0 !important;
        transform: none !important;
        transition: none !important;
    }

    @keyframes pulse {
        0%, 33% {
            box-shadow: inset 0 0 0 10000px #fff, rgb(101, 84, 192) 0px 0px 0px 2px, rgb(101, 84, 192) 0px 0px 0px 2px;
        }
        66%, 100% {
            box-shadow: inset 0 0 0 10000px #fff, rgb(101, 84, 192) 0px 0px 0px 2px, rgba(101, 84, 192, 0.01) 0px 0px 0px 10px;
        }
    }

    @keyframes shadowFadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
