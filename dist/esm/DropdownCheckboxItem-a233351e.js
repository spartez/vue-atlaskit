import { pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, createVNode, renderSlot, createCommentVNode, withScopeId, createTextVNode } from 'vue';
import { s as script$2 } from './Button-b4f025d8.js';
import { s as script$1 } from './Checkbox-4fccd707.js';

var script = {
  components: {
    Checkbox: script$1,
    Button: script$2
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

const _withId = /*#__PURE__*/withScopeId("data-v-63cf6df6");

pushScopeId("data-v-63cf6df6");

const _hoisted_1 = {
  class: "label-text"
};

const _hoisted_2 = /*#__PURE__*/createTextVNode(" only ");

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Button = resolveComponent("Button");

  const _component_Checkbox = resolveComponent("Checkbox");

  return openBlock(), createBlock(_component_Checkbox, {
    class: "dropdown-checkbox-item",
    checked: $props.checked,
    value: $props.value,
    onInput: $options.onInput
  }, {
    default: _withId(() => [createVNode("span", _hoisted_1, [renderSlot(_ctx.$slots, "default")]), $options.isMulti ? (openBlock(), createBlock(_component_Button, {
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
    , ["onClick"])) : createCommentVNode("v-if", true)]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["checked", "value", "onInput"]);
});

script.render = render;
script.__scopeId = "data-v-63cf6df6";
script.__file = "src/components/Dropdown/DropdownCheckboxItem.vue";

export { script as s };
