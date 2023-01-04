<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot/>
  </transition>
</template>
<script>
    export default {
        name: 'TransitionExpand',
        props: {
            enterTransition: {
                type: Boolean,
                default: true
            },
            leaveTransition: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            afterEnter(element) {
                if (!this.enterTransition) {
                    return;
                }
                element.style.height = 'auto';
            },
            enter(element) {
                if (!this.enterTransition) {
                    return;
                }
                /* eslint-disable no-unused-vars */
                const { width } = getComputedStyle(element);
                /* eslint-disable no-param-reassign */
                element.style.position = 'absolute';
                element.style.visibility = 'hidden';
                element.style.height = 'auto';
                /* eslint-enable */
                const { height } = getComputedStyle(element);
                /* eslint-disable no-param-reassign */
                element.style.position = null;
                element.style.visibility = null;
                element.style.height = 0;
                /* eslint-enable */
                // Force repaint to make sure the
                // animation is triggered correctly.
                // eslint-disable-next-line no-unused-expressions
                getComputedStyle(element).height;
                requestAnimationFrame(() => {
                    // eslint-disable-next-line no-param-reassign
                    element.style.height = height;
                });
            },
            leave(element) {
                if (!this.leaveTransition) {
                    return;
                }
                const { height } = getComputedStyle(element);
                // eslint-disable-next-line no-param-reassign
                element.style.height = height;
                // Force repaint to make sure the
                // animation is triggered correctly.
                // eslint-disable-next-line no-unused-expressions
                getComputedStyle(element).height;
                requestAnimationFrame(() => {
                    // eslint-disable-next-line no-param-reassign
                    element.style.height = 0;
                });
            }
        }
    };
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
    transition: all 0.3s ease-in-out;
}

.expand-enter,
.expand-leave-to {
    height: 0;
}
</style>
