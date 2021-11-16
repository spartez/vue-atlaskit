import { openBlock, createBlock, resolveDynamicComponent, createTextVNode, toDisplayString, withScopeId } from 'vue';

var script = {
  name: 'Tag',
  props: {
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'span'
    },
    link: {
      type: String,
      default: undefined
    }
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-5e16ef05");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    class: "tag",
    color: $props.color
  }, [(openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: "text",
    href: $props.link
  }, {
    default: _withId(() => [createTextVNode(toDisplayString($props.label), 1
    /* TEXT */
    )]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]))], 8
  /* PROPS */
  , ["color"]);
});

script.render = render;
script.__scopeId = "data-v-5e16ef05";
script.__file = "src/components/Tag/Tag.vue";

export { script as s };
