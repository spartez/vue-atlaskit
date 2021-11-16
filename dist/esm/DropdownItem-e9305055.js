import { pushScopeId, popScopeId, openBlock, createBlock, mergeProps, toHandlers, createVNode, renderSlot, withScopeId } from 'vue';

var script = {
  props: {
    value: {
      type: [Object, String, Number, Boolean]
    }
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-69dc2322");

pushScopeId("data-v-69dc2322");

const _hoisted_1 = {
  class: "dropdown-item-label"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", mergeProps({
    class: "dropdown-item"
  }, toHandlers(_ctx.$attrs), {
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('select', $props.value))
  }), [createVNode("span", _hoisted_1, [renderSlot(_ctx.$slots, "default")])], 16
  /* FULL_PROPS */
  );
});

script.render = render;
script.__scopeId = "data-v-69dc2322";
script.__file = "src/components/Dropdown/DropdownItem.vue";

export { script as s };
