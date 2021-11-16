import { openBlock, createBlock, createVNode, withScopeId } from 'vue';

var script = {
  props: {
    size: {
      type: String,
      default: 'medium'
    }
  },
  computed: {
    dimensions() {
      switch (this.size) {
        case 'icon':
          return {
            px: 14,
            radius: 5
          };

        case 'small':
          return {
            px: 20,
            radius: 9
          };

        case 'medium':
          return {
            px: 30,
            radius: 13.5
          };

        case 'large':
          return {
            px: 50,
            radius: 22.5
          };

        default:
          return {
            name: 'medium',
            px: 30,
            radius: 13.5
          };
      }
    },

    origin() {
      return this.dimensions.px / 2;
    }

  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-8800befa");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    class: "spinner",
    size: $props.size
  }, [(openBlock(), createBlock("svg", {
    focusable: "false",
    size: $options.dimensions.px,
    height: $options.dimensions.px,
    width: $options.dimensions.px,
    viewBox: `0 0 ${$options.dimensions.px} ${$options.dimensions.px}`
  }, [createVNode("circle", {
    cx: $options.origin,
    cy: $options.origin,
    r: $options.dimensions.radius
  }, null, 8
  /* PROPS */
  , ["cx", "cy", "r"])], 8
  /* PROPS */
  , ["size", "height", "width", "viewBox"]))], 8
  /* PROPS */
  , ["size"]);
});

script.render = render;
script.__scopeId = "data-v-8800befa";
script.__file = "src/components/Spinner/Spinner.vue";

export { script as s };
