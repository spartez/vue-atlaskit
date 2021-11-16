'use strict';

var vue = require('vue');
var Popper = require('./Popper-9e63994e.js');

var script = {
  components: {
    Popper: Popper.script
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    targetElement: {
      type: HTMLElement,
      default: undefined
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
      type: [String, HTMLElement, Function],
      default: 'viewport'
    },
    positionFixed: {
      type: Boolean,
      default: false
    }
  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-1da12110");

vue.pushScopeId("data-v-1da12110");

const _hoisted_1 = {
  class: "popup"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Popper = vue.resolveComponent("Popper");

  return $props.isOpen && $props.targetElement ? (vue.openBlock(), vue.createBlock(_component_Popper, {
    key: 0,
    "target-element": $props.targetElement,
    placement: $props.placement,
    offset: $props.offset,
    "boundaries-element": $props.boundariesElement,
    "position-fixed": $props.positionFixed,
    class: "popper",
    "spotlight-skip": ""
  }, {
    default: _withId(() => [vue.createVNode("div", _hoisted_1, [vue.renderSlot(_ctx.$slots, "default")])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["target-element", "placement", "offset", "boundaries-element", "position-fixed"])) : vue.createCommentVNode("v-if", true);
});

script.render = render;
script.__scopeId = "data-v-1da12110";
script.__file = "src/components/common/Popup.vue";

exports.script = script;
