'use strict';

var vue = require('vue');

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

const _withId = /*#__PURE__*/vue.withScopeId("data-v-5e16ef05");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", {
    class: "tag",
    color: $props.color
  }, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.tag), {
    class: "text",
    href: $props.link
  }, {
    default: _withId(() => [vue.createTextVNode(vue.toDisplayString($props.label), 1
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

exports.script = script;
