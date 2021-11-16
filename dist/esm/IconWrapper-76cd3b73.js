import { openBlock, createBlock, renderSlot, withScopeId } from 'vue';

var script = {
  name: 'IconWrapper',
  props: {
    size: {
      type: String,
      default: 'medium'
    },
    primaryColor: {
      type: String,
      default: 'currentcolor'
    },
    secondaryColor: {
      type: String,
      default: '#fff'
    }
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-46dbbf54");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("span", {
    style: {
      color: $props.primaryColor,
      fill: $props.secondaryColor
    },
    size: $props.size
  }, [renderSlot(_ctx.$slots, "default")], 12
  /* STYLE, PROPS */
  , ["size"]);
});

script.render = render;
script.__scopeId = "data-v-46dbbf54";
script.__file = "src/components/Icon/IconWrapper.vue";

export { script as s };
