'use strict';

var vue = require('vue');

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

const _withId = /*#__PURE__*/vue.withScopeId("data-v-0e9948e6");

vue.pushScopeId("data-v-0e9948e6");

const _hoisted_1 = {
  class: "menu-section"
};
const _hoisted_2 = {
  key: 0,
  class: "menu-section-label"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [$props.label ? (vue.openBlock(), vue.createBlock("div", _hoisted_2, vue.toDisplayString($props.label), 1
  /* TEXT */
  )) : vue.createCommentVNode("v-if", true), vue.renderSlot(_ctx.$slots, "default")]);
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

const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-a9346a3c");

vue.pushScopeId("data-v-a9346a3c");

const _hoisted_1$1 = {
  key: 0,
  class: "menu-item-icon-before"
};
const _hoisted_2$1 = {
  class: "menu-item-label"
};

vue.popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", vue.mergeProps({
    class: "menu-item",
    active: $props.active
  }, vue.toHandlers(_ctx.$attrs)), [_ctx.$slots['icon-before'] ? (vue.openBlock(), vue.createBlock("span", _hoisted_1$1, [vue.renderSlot(_ctx.$slots, "icon-before")])) : vue.createCommentVNode("v-if", true), vue.createVNode("span", _hoisted_2$1, [vue.renderSlot(_ctx.$slots, "default")])], 16
  /* FULL_PROPS */
  , ["active"]);
});

script$1.render = render$1;
script$1.__scopeId = "data-v-a9346a3c";
script$1.__file = "src/components/Menu/MenuItem.vue";

const _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-235e90af");

vue.pushScopeId("data-v-235e90af");

const _hoisted_1$2 = {
  class: "menu"
};

vue.popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache) => {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [vue.renderSlot(_ctx.$slots, "default")]);
});

const script$2 = {};

script$2.render = render$2;
script$2.__scopeId = "data-v-235e90af";
script$2.__file = "src/components/Menu/Menu.vue";

exports.script = script$2;
exports.script$1 = script$1;
exports.script$2 = script;
