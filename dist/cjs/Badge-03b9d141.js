'use strict';

var vue = require('vue');

var script = {
  name: 'Badge',
  props: {
    value: {
      type: [String, Number],
      default: '-'
    }
  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-83f43ed2");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("span", null, vue.toDisplayString($props.value), 1
  /* TEXT */
  );
});

script.render = render;
script.__scopeId = "data-v-83f43ed2";
script.__file = "src/components/Badge/Badge.vue";

exports.script = script;
