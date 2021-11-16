'use strict';

var vue = require('vue');

var script = {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: 0
    },
    showLabels: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: 'Processing'
    },
    transitionDuration: {
      type: String,
      default: undefined
    }
  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-8d4e17c6");

vue.pushScopeId("data-v-8d4e17c6");

const _hoisted_1 = {
  class: "progress-bar-wrapper"
};
const _hoisted_2 = {
  key: 0,
  ref: "labels",
  class: "labels"
};
const _hoisted_3 = {
  class: "label"
};
const _hoisted_4 = {
  class: "progress-bar"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [$props.showLabels ? (vue.openBlock(), vue.createBlock("div", _hoisted_2, [vue.createVNode("span", _hoisted_3, vue.toDisplayString($props.label), 1
  /* TEXT */
  ), vue.createVNode("span", null, vue.toDisplayString($props.progress) + "%", 1
  /* TEXT */
  )], 512
  /* NEED_PATCH */
  )) : vue.createCommentVNode("v-if", true), vue.createVNode("div", _hoisted_4, [vue.createVNode("span", {
    ref: "progress",
    class: "progress",
    style: {
      width: `${$props.progress}%`,
      transitionDuration: $props.transitionDuration
    }
  }, null, 4
  /* STYLE */
  )])]);
});

script.render = render;
script.__scopeId = "data-v-8d4e17c6";
script.__file = "src/components/ProgressBar/ProgressBar.vue";

exports.script = script;
