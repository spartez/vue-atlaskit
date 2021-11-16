import { pushScopeId, popScopeId, openBlock, createBlock, createVNode, resolveDynamicComponent, toDisplayString, createCommentVNode, renderSlot, withScopeId } from 'vue';
import { I as InfoIcon, C as CheckCircleIcon } from './InfoIcon-e9491f70.js';
import { W as WarningIcon, E as ErrorIcon } from './WarningIcon-ac3bce7f.js';
import { Q as QuestionCircleIcon } from './QuestionCircleIcon-9bc5afcc.js';

var script = {
  components: {
    InfoIcon,
    WarningIcon,
    ErrorIcon,
    'confirmation-icon': CheckCircleIcon,
    'change-icon': QuestionCircleIcon
  },
  props: {
    title: {
      type: String,
      default: undefined
    },
    appearance: {
      type: String,
      default: 'info',
      validator: value => ['info', 'warning', 'error', 'confirmation', 'change'].includes(value)
    }
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-2e5d524f");

pushScopeId("data-v-2e5d524f");

const _hoisted_1 = {
  class: "icon"
};
const _hoisted_2 = {
  class: "content-wrapper"
};
const _hoisted_3 = {
  key: 0,
  class: "title"
};
const _hoisted_4 = {
  class: "content"
};
const _hoisted_5 = {
  key: 1,
  class: "actions"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("section", {
    class: "message",
    appearance: $props.appearance
  }, [createVNode("div", _hoisted_1, [(openBlock(), createBlock(resolveDynamicComponent(`${$props.appearance}-icon`)))]), createVNode("div", _hoisted_2, [$props.title ? (openBlock(), createBlock("h1", _hoisted_3, toDisplayString($props.title), 1
  /* TEXT */
  )) : createCommentVNode("v-if", true), createVNode("div", _hoisted_4, [renderSlot(_ctx.$slots, "default")]), _ctx.$slots.actions ? (openBlock(), createBlock("div", _hoisted_5, [renderSlot(_ctx.$slots, "actions")])) : createCommentVNode("v-if", true)])], 8
  /* PROPS */
  , ["appearance"]);
});

script.render = render;
script.__scopeId = "data-v-2e5d524f";
script.__file = "src/components/SectionMessage/SectionMessage.vue";

export { script as s };
