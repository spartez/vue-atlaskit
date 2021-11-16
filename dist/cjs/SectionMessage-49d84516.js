'use strict';

var vue = require('vue');
var InfoIcon = require('./InfoIcon-af86f755.js');
var WarningIcon = require('./WarningIcon-dfe5a9da.js');
var QuestionCircleIcon = require('./QuestionCircleIcon-a3a57819.js');

var script = {
  components: {
    InfoIcon: InfoIcon.InfoIcon,
    WarningIcon: WarningIcon.WarningIcon,
    ErrorIcon: WarningIcon.ErrorIcon,
    'confirmation-icon': InfoIcon.CheckCircleIcon,
    'change-icon': QuestionCircleIcon.QuestionCircleIcon
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

const _withId = /*#__PURE__*/vue.withScopeId("data-v-2e5d524f");

vue.pushScopeId("data-v-2e5d524f");

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

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("section", {
    class: "message",
    appearance: $props.appearance
  }, [vue.createVNode("div", _hoisted_1, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(`${$props.appearance}-icon`)))]), vue.createVNode("div", _hoisted_2, [$props.title ? (vue.openBlock(), vue.createBlock("h1", _hoisted_3, vue.toDisplayString($props.title), 1
  /* TEXT */
  )) : vue.createCommentVNode("v-if", true), vue.createVNode("div", _hoisted_4, [vue.renderSlot(_ctx.$slots, "default")]), _ctx.$slots.actions ? (vue.openBlock(), vue.createBlock("div", _hoisted_5, [vue.renderSlot(_ctx.$slots, "actions")])) : vue.createCommentVNode("v-if", true)])], 8
  /* PROPS */
  , ["appearance"]);
});

script.render = render;
script.__scopeId = "data-v-2e5d524f";
script.__file = "src/components/SectionMessage/SectionMessage.vue";

exports.script = script;
