'use strict';

var vue = require('vue');

var script = {
  props: {
    value: {
      type: [Object, String, Number, Boolean]
    }
  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-69dc2322");

vue.pushScopeId("data-v-69dc2322");

const _hoisted_1 = {
  class: "dropdown-item-label"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", vue.mergeProps({
    class: "dropdown-item"
  }, vue.toHandlers(_ctx.$attrs), {
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('select', $props.value))
  }), [vue.createVNode("span", _hoisted_1, [vue.renderSlot(_ctx.$slots, "default")])], 16
  /* FULL_PROPS */
  );
});

script.render = render;
script.__scopeId = "data-v-69dc2322";
script.__file = "src/components/Dropdown/DropdownItem.vue";

exports.script = script;
