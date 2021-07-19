/* eslint-disable no-underscore-dangle */
import Vue from 'vue';
import TooltipContent from '../components/Tooltip/TooltipContent.vue';

function createTooltip(el, props) {
    const tooltipContainer = document.createElement('div');
    document.body.appendChild(tooltipContainer);
    return new Vue({
        el: tooltipContainer,
        data: {
            show: true,
            props
        },
        computed: {
            disabled() {
                return this.props.disabled;
            },
            isVisible() {
                return this.show && !this.props.disabled && this.props.label;
            }
        },
        watch: {
            disabled() {
                this.$destroy();
            }
        },
        destroyed() {
            document.body.removeChild(this.$el);
        },
        methods: {
            hide() {
                this.show = false;
                // hacky way to make sure that empty element is removed after transition
                setTimeout(() => {
                    this.$destroy();
                }, 300);
            }
        },
        render(h) {
            if (this.isVisible) {
                return h(TooltipContent, {
                    props: {
                        ...this.props,
                        targetElement: el
                    }
                });
            }
            return null;
        }
    });
}

function removeTooltip(el, immediate = false) {
    el._tooltip.hide(immediate);
    el._tooltip = undefined;
}

function getProps(binding) {
    const placement = ['top', 'left', 'right', 'bottom'].find(p => binding.modifiers[p]);
    if (typeof binding.value === 'object') {
        const {
            label, disabled, boundariesElement, withDelay, offset
        } = binding.value || {};
        return {
            placement, label, disabled, boundariesElement, withDelay, offset
        };
    }
    return {
        placement, label: binding.value
    };
}

export default Vue.directive('tooltip', {
    bind(el, binding) {
        el._tooltipProps = getProps(binding);
        el.addEventListener('mouseenter', () => {
            if (el._tooltip || el._tooltipProps.disabled) {
                return;
            }
            el._tooltip = createTooltip(el, el._tooltipProps);
        });
        el.addEventListener('mouseleave', () => {
            if (el._tooltip) {
                removeTooltip(el);
            }
        });
    },
    update(el, binding) {
        el._tooltipProps = getProps(binding);
        if (el._tooltip) {
            el._tooltip.$data.props = el._tooltipProps;
        }
    }
});
