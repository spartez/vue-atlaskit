'use strict';

var vue = require('vue');
var Button = require('./Button-1b01afc6.js');
var Checkbox = require('./Checkbox-33e4c068.js');

var script = {
  components: {
    Checkbox: Checkbox.script,
    Button: Button.script
  },
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    checked: {
      type: [Boolean, Array],
      required: true
    },
    value: {
      type: String,
      default: undefined
    }
  },
  computed: {
    isMulti() {
      return Array.isArray(this.checked) && this.value;
    }

  },
  methods: {
    onInput(value) {
      this.$emit('input', value);
    },

    onOnlyClicked() {
      this.$emit('input', [this.value]);
    }

  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-63cf6df6");

vue.pushScopeId("data-v-63cf6df6");

const _hoisted_1 = {
  class: "label-text"
};

const _hoisted_2 = /*#__PURE__*/vue.createTextVNode(" only ");

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Button = vue.resolveComponent("Button");

  const _component_Checkbox = vue.resolveComponent("Checkbox");

  return vue.openBlock(), vue.createBlock(_component_Checkbox, {
    class: "dropdown-checkbox-item",
    checked: $props.checked,
    value: $props.value,
    onInput: $options.onInput
  }, {
    default: _withId(() => [vue.createVNode("span", _hoisted_1, [vue.renderSlot(_ctx.$slots, "default")]), $options.isMulti ? (vue.openBlock(), vue.createBlock(_component_Button, {
      key: 0,
      class: "only-button",
      appearance: "subtle",
      spacing: "none",
      onClick: $options.onOnlyClicked
    }, {
      default: _withId(() => [_hoisted_2]),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["onClick"])) : vue.createCommentVNode("v-if", true)]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["checked", "value", "onInput"]);
});

script.render = render;
script.__scopeId = "data-v-63cf6df6";
script.__file = "src/components/Dropdown/DropdownCheckboxItem.vue";

exports.script = script;
