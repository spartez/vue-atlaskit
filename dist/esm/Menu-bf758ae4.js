import { pushScopeId, popScopeId, openBlock, createBlock, toDisplayString, createCommentVNode, renderSlot, withScopeId, mergeProps, toHandlers, createVNode } from 'vue';

var script = {
  props: {
    label: {
      type: String,
      default: undefined
    },
    separator: {
      type: Boolean,
      default: false
    }
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-0e9948e6");

pushScopeId("data-v-0e9948e6");

const _hoisted_1 = {
  class: "menu-section"
};
const _hoisted_2 = {
  key: 0,
  class: "menu-section-label"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, [$props.label ? (openBlock(), createBlock("div", _hoisted_2, toDisplayString($props.label), 1
  /* TEXT */
  )) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")]);
});

script.render = render;
script.__scopeId = "data-v-0e9948e6";
script.__file = "src/components/Menu/MenuSection.vue";

var script$1 = {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-a9346a3c");

pushScopeId("data-v-a9346a3c");

const _hoisted_1$1 = {
  key: 0,
  class: "menu-item-icon-before"
};
const _hoisted_2$1 = {
  class: "menu-item-label"
};

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", mergeProps({
    class: "menu-item",
    active: $props.active
  }, toHandlers(_ctx.$attrs)), [_ctx.$slots['icon-before'] ? (openBlock(), createBlock("span", _hoisted_1$1, [renderSlot(_ctx.$slots, "icon-before")])) : createCommentVNode("v-if", true), createVNode("span", _hoisted_2$1, [renderSlot(_ctx.$slots, "default")])], 16
  /* FULL_PROPS */
  , ["active"]);
});

script$1.render = render$1;
script$1.__scopeId = "data-v-a9346a3c";
script$1.__file = "src/components/Menu/MenuItem.vue";

const _withId$2 = /*#__PURE__*/withScopeId("data-v-235e90af");

pushScopeId("data-v-235e90af");

const _hoisted_1$2 = {
  class: "menu"
};

popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache) => {
  return openBlock(), createBlock("div", _hoisted_1$2, [renderSlot(_ctx.$slots, "default")]);
});

const script$2 = {};

script$2.render = render$2;
script$2.__scopeId = "data-v-235e90af";
script$2.__file = "src/components/Menu/Menu.vue";

export { script$1 as a, script as b, script$2 as s };
