import { pushScopeId, popScopeId, openBlock, createBlock, createVNode, toDisplayString, renderSlot, withScopeId } from 'vue';

var script = {
  props: {
    label: {
      type: String,
      required: true
    }
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-08f90d00");

pushScopeId("data-v-08f90d00");

const _hoisted_1 = {
  class: "dropdown-group"
};
const _hoisted_2 = {
  class: "title"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("div", _hoisted_2, toDisplayString($props.label), 1
  /* TEXT */
  ), renderSlot(_ctx.$slots, "default")]);
});

script.render = render;
script.__scopeId = "data-v-08f90d00";
script.__file = "src/components/Dropdown/DropdownGroup.vue";

export { script as s };
