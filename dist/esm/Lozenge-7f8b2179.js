import { openBlock, createBlock, createVNode, renderSlot, withScopeId } from 'vue';

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

const _withId = /*#__PURE__*/withScopeId("data-v-cc6d8ee6");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("span", null, [createVNode("span", {
    class: "lozenge",
    appearance: $props.appearance,
    bold: $props.isBold
  }, [renderSlot(_ctx.$slots, "default")], 8
  /* PROPS */
  , ["appearance", "bold"])]);
});

script.render = render;
script.__scopeId = "data-v-cc6d8ee6";
script.__file = "src/components/Lozenge/Lozenge.vue";

export { script as s };
