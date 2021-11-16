'use strict';

var vue = require('vue');
var Popup = require('./Popup-d34beb32.js');

var script = {
  components: {
    Popup: Popup.script
  },
  props: {
    boundariesElement: {
      type: [String, HTMLElement, Function],
      default: 'viewport'
    },
    placement: {
      type: String,
      default: 'right-top'
    },
    offset: {
      type: String,
      default: '8,8'
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
        document.addEventListener('click', this.onOutsideClick);
        document.addEventListener('keydown', this.onKeyDown);
        this.$emit('open');
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

    onOutsideClick(event) {
      if (this.$refs['dialog-container'].contains(event.target)) return;

      if (this.closeOnOutsideClick) {
        this.open = false;
      }
    },

    onKeyDown(event) {
      if (event.keyCode === 27 && this.closeOnEsc) {
        this.open = false;
      }
    }

  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-e138a022");

vue.pushScopeId("data-v-e138a022");

const _hoisted_1 = {
  ref: "dialog-container"
};
const _hoisted_2 = {
  ref: "dialog-content",
  class: "dialog-content"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Popup = vue.resolveComponent("Popup");

  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [vue.renderSlot(_ctx.$slots, "trigger", {
    isOpen: $data.open,
    toggle: $options.onTriggerClick
  }), vue.createVNode(_component_Popup, {
    ref: "dialog",
    "is-open": $data.open,
    offset: $props.offset,
    "target-element": _ctx.$refs['dialog-container'],
    "boundaries-element": $props.boundariesElement,
    placement: $props.placement,
    "position-fixed": $props.positionFixed
  }, {
    default: _withId(() => [vue.createVNode("div", _hoisted_2, [vue.renderSlot(_ctx.$slots, "default")], 512
    /* NEED_PATCH */
    )]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["is-open", "offset", "target-element", "boundaries-element", "placement", "position-fixed"])], 512
  /* NEED_PATCH */
  );
});

script.render = render;
script.__scopeId = "data-v-e138a022";
script.__file = "src/components/InlineDialog/InlineDialog.vue";

exports.script = script;
