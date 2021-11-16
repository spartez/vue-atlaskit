'use strict';

var vue = require('vue');

var script = {
  props: {
    appearance: {
      type: String,
      validator: value => ['default', 'success', 'removed', 'inprogress', 'new', 'moved'].includes(value),
      default: 'default'
    },
    isBold: {
      type: Boolean,
      default: false
    }
  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-cc6d8ee6");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("span", null, [vue.createVNode("span", {
    class: "lozenge",
    appearance: $props.appearance,
    bold: $props.isBold
  }, [vue.renderSlot(_ctx.$slots, "default")], 8
  /* PROPS */
  , ["appearance", "bold"])]);
});

script.render = render;
script.__scopeId = "data-v-cc6d8ee6";
script.__file = "src/components/Lozenge/Lozenge.vue";

exports.script = script;
