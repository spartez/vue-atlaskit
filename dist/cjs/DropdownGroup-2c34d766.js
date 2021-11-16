'use strict';

var vue = require('vue');

var script = {
  props: {
    label: {
      type: String,
      required: true
    }
  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-08f90d00");

vue.pushScopeId("data-v-08f90d00");

const _hoisted_1 = {
  class: "dropdown-group"
};
const _hoisted_2 = {
  class: "title"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("div", _hoisted_2, vue.toDisplayString($props.label), 1
  /* TEXT */
  ), vue.renderSlot(_ctx.$slots, "default")]);
});

script.render = render;
script.__scopeId = "data-v-08f90d00";
script.__file = "src/components/Dropdown/DropdownGroup.vue";

exports.script = script;
