import { pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, renderSlot, createTextVNode, toDisplayString, createVNode, withScopeId } from 'vue';
import { s as script$1 } from './Button-b4f025d8.js';
import { C as ChevronDownIcon } from './ChevronDownIcon-acb845c9.js';
import { s as script$2 } from './Popup-f7883f21.js';

var script = {
  components: {
    Button: script$1,
    ChevronDownIcon,
    Popup: script$2
  },
  props: {
    label: {
      type: String,
      default: 'Dropdown'
    },
    appearance: {
      type: String,
      default: 'default'
    },
    boundariesElement: {
      type: [String, HTMLElement, Function],
      default: 'viewport'
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnOutsideClick: {
      type: Boolean,
      default: true
    },
    closeOnEsc: {
      type: Boolean,
      default: true
    },
    positionFixed: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    appendToBody: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      open: false
    };
  },

  watch: {
    open(value) {
      if (value) {
        setTimeout(() => {
          document.addEventListener('click', this.onOutsideClick);
          document.addEventListener('keydown', this.onKeyDown);

          if (this.appendToBody) {
            document.body.appendChild(this.$refs.menu.$el);
            this.updatePopperPosition();
          }

          this.$emit('open');
        }, 0);
      } else {
        document.removeEventListener('click', this.onOutsideClick);
        document.removeEventListener('keydown', this.onKeyDown);
        this.$emit('close');
      }
    }

  },

  beforeUnmount() {
    document.removeEventListener('click', this.onOutsideClick);
  },

  methods: {
    onTriggerClick() {
      this.open = !this.open;
    },

    onMenuClick() {
      if (this.closeOnClick) {
        this.open = false;
      }
    },

    onOutsideClick(event) {
      if (this.$refs['dropdown-container'].contains(event.target)) return;

      if (this.closeOnOutsideClick) {
        this.open = false;
      }
    },

    onKeyDown(event) {
      if (event.keyCode === 27 && this.closeOnEsc) {
        this.open = false;
      }
    },

    updatePopperPosition() {
      if (this.$refs.menu) {
        const [popper] = this.$refs.menu.$children;
        popper.update();
      }
    }

  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-194b08ef");

pushScopeId("data-v-194b08ef");

const _hoisted_1 = {
  ref: "dropdown-container",
  class: "dropdown-container"
};
const _hoisted_2 = {
  class: "dropdown-menu"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");

  const _component_Button = resolveComponent("Button");

  const _component_Popup = resolveComponent("Popup");

  return openBlock(), createBlock("div", _hoisted_1, [_ctx.$slots.trigger ? renderSlot(_ctx.$slots, "trigger", {
    key: 0,
    isOpen: $data.open,
    toggle: $options.onTriggerClick
  }) : (openBlock(), createBlock(_component_Button, {
    key: 1,
    "is-selected": $data.open,
    appearance: $props.appearance,
    onClick: $options.onTriggerClick
  }, {
    default: _withId(() => [createTextVNode(toDisplayString($props.label) + " ", 1
    /* TEXT */
    ), createVNode(_component_ChevronDownIcon, {
      slot: "icon-after"
    })]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-selected", "appearance", "onClick"])), createVNode(_component_Popup, {
    ref: "menu",
    "is-open": $data.open,
    offset: "0,8",
    "target-element": _ctx.$refs['dropdown-container'],
    "boundaries-element": $props.boundariesElement,
    "position-fixed": $props.positionFixed,
    placement: $props.placement,
    onClick: $options.onMenuClick
  }, {
    default: _withId(() => [renderSlot(_ctx.$slots, "dropdown-menu", {
      toggle: $options.onTriggerClick
    }, () => [createVNode("div", _hoisted_2, [renderSlot(_ctx.$slots, "default")])])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["is-open", "target-element", "boundaries-element", "position-fixed", "placement", "onClick"])], 512
  /* NEED_PATCH */
  );
});

script.render = render;
script.__scopeId = "data-v-194b08ef";
script.__file = "src/components/Dropdown/Dropdown.vue";

export { script as s };
