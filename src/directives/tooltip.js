/* eslint-disable no-underscore-dangle */
import TooltipContent from '../components/Tooltip/TooltipContent.vue';

function createTooltipComponent(el, context) {
    return context.$root.constructor.extend({
        data() {
            return {
                show: true,
                props: {}
            };
        },
        computed: {
            disabled() {
                return this.props.disabled;
            },
            isVisible() {
                return this.show && !this.props.disabled && Boolean(this.props.label);
            }
        },
        watch: {
            disabled(value) {
                if (value) {
                    this.$destroy();
                }
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
            },
            update(newProps) {
                this.props = newProps;
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

function createTooltip(TooltipComponent, props) {
    const tooltipContainer = document.createElement('div');
    document.body.appendChild(tooltipContainer);

    const tooltipInstance = new TooltipComponent();
    tooltipInstance.update(props);
    tooltipInstance.$mount(tooltipContainer);
    return tooltipInstance;
}

function removeTooltip(el) {
    el._tooltip.hide();
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

export default {
    bind(el, binding, vnode) {
        const TooltipComponent = createTooltipComponent(el, vnode.context);
        el._tooltipProps = getProps(binding);
        el.addEventListener('mouseenter', () => {
            if (el._tooltip || el._tooltipProps.disabled) {
                return;
            }
            el._tooltip = createTooltip(TooltipComponent, el._tooltipProps);
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
            el._tooltip.update(el._tooltipProps);
        }
    }
};
