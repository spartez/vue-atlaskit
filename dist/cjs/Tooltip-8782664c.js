'use strict';

var vue = require('vue');
var Popper = require('./Popper-9e63994e.js');

var script = {
  name: 'Tooltip',
  components: {
    Popper: Popper.script
  },
  props: {
    label: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    offset: {
      type: String,
      default: '0,5'
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    boundariesElement: {
      type: String,
      default: 'viewport'
    }
  },

  data() {
    return {
      show: false
    };
  },

  methods: {
    onMouseEnter() {
      this.show = true;

      if (this.appendToBody) {
        this.$nextTick(() => {
          this.append();
        });
      }
    },

    onMouseLeave() {
      if (this.appendToBody) {
        document.body.removeChild(this.$refs.label);
      }

      this.show = false;
    },

    append() {
      document.body.appendChild(this.$refs.label);
      setTimeout(() => {
        if (this.$refs.popper) {
          this.$refs.popper.update();
        }
      }, 0);
    }

  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-3a154857");

vue.pushScopeId("data-v-3a154857");

const _hoisted_1 = {
  class: "tooltip"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Popper = vue.resolveComponent("Popper");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("div", {
    ref: "target",
    class: "target",
    onMouseenter: _cache[1] || (_cache[1] = (...args) => $options.onMouseEnter && $options.onMouseEnter(...args)),
    onMouseleave: _cache[2] || (_cache[2] = (...args) => $options.onMouseLeave && $options.onMouseLeave(...args))
  }, [vue.renderSlot(_ctx.$slots, "default")], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), vue.createVNode(vue.Transition, {
    name: "fade"
  }, {
    default: _withId(() => [$data.show ? (vue.openBlock(), vue.createBlock(_component_Popper, {
      key: 0,
      ref: "popper",
      "transition-delay": 300,
      "boundaries-element": $props.boundariesElement,
      "target-element": _ctx.$refs.target,
      placement: $props.placement,
      offset: $props.offset
    }, {
      default: _withId(() => [vue.createVNode("span", {
        ref: "label",
        class: "label",
        disabled: $props.disabled
      }, vue.toDisplayString($props.label), 9
      /* TEXT, PROPS */
      , ["disabled"])]),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["boundaries-element", "target-element", "placement", "offset"])) : vue.createCommentVNode("v-if", true)]),
    _: 1
    /* STABLE */

  })]);
});

script.render = render;
script.__scopeId = "data-v-3a154857";
script.__file = "src/components/Tooltip/Tooltip.vue";

exports.script = script;
