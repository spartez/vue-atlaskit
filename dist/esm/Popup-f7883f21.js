import { pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, createVNode, renderSlot, createCommentVNode, withScopeId } from 'vue';
import { s as script$1 } from './Popper-727f45db.js';

var script = {
  components: {
    Popper: script$1
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

const _withId = /*#__PURE__*/withScopeId("data-v-1da12110");

pushScopeId("data-v-1da12110");

const _hoisted_1 = {
  class: "popup"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Popper = resolveComponent("Popper");

  return $props.isOpen && $props.targetElement ? (openBlock(), createBlock(_component_Popper, {
    key: 0,
    "target-element": $props.targetElement,
    placement: $props.placement,
    offset: $props.offset,
    "boundaries-element": $props.boundariesElement,
    "position-fixed": $props.positionFixed,
    class: "popper",
    "spotlight-skip": ""
  }, {
    default: _withId(() => [createVNode("div", _hoisted_1, [renderSlot(_ctx.$slots, "default")])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["target-element", "placement", "offset", "boundaries-element", "position-fixed"])) : createCommentVNode("v-if", true);
});

script.render = render;
script.__scopeId = "data-v-1da12110";
script.__file = "src/components/common/Popup.vue";

export { script as s };
