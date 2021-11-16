import { openBlock, createBlock, mergeProps, renderSlot, withScopeId } from 'vue';

var script = {
  name: 'TextField'
};

const _withId = /*#__PURE__*/withScopeId("data-v-6f491952");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", mergeProps({
    class: "input-wrapper",
    "data-cy": "input-wrapper"
  }, _ctx.$attrs), [renderSlot(_ctx.$slots, "default")], 16
  /* FULL_PROPS */
  );
});

script.render = render;
script.__scopeId = "data-v-6f491952";
script.__file = "src/components/Form/TextField.vue";

export { script as s };
