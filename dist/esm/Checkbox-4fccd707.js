import { pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, withDirectives, createVNode, vModelCheckbox, renderSlot, createCommentVNode, withScopeId } from 'vue';
import { a as CheckboxIcon, C as CheckboxIndeterminateIcon } from './CheckboxIcon-a2c30140.js';

var script = {
  name: 'Checkbox',
  components: {
    CheckboxIcon,
    CheckboxIndeterminateIcon
  },
  model: {
    prop: 'checked'
  },
  emits: ['update:modelValue', 'blur', 'focus'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Object, Number, Boolean],
      default: undefined
    },
    checked: {
      type: [Boolean, Array],
      required: false
    },
    isFocused: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    }
  },

  data() {
    return {
      id: undefined
    };
  },

  computed: {
    isChecked: {
      get() {
        return this.checked;
      },

      set(value) {
        this.$emit('update:modelValue', value);
      }

    }
  },
  watch: {
    isFocused: {
      handler(isFocused) {
        if (isFocused) {
          this.$nextTick(() => this.$refs.input.focus());
        }
      },

      immediate: true
    }
  },

  created() {
    // eslint-disable-next-line
    this.id = this._uuid;
  },

  methods: {
    onBlur(e) {
      if (!this.$refs.checkbox.contains(e.relatedTarget)) {
        this.$emit('blur', e);
      }
    },

    onFocus(e) {
      this.$emit('focus', e);
    }

  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-20811da2");

pushScopeId("data-v-20811da2");

const _hoisted_1 = {
  key: 2,
  class: "input-label"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_CheckboxIcon = resolveComponent("CheckboxIcon");

  const _component_CheckboxIndeterminateIcon = resolveComponent("CheckboxIndeterminateIcon");

  return openBlock(), createBlock("label", {
    ref: "checkbox",
    class: "checkbox-wrapper",
    for: $data.id,
    tabindex: "-1"
  }, [withDirectives(createVNode("input", {
    id: $data.id,
    ref: "input",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $options.isChecked = $event),
    value: $props.modelValue,
    type: "checkbox",
    "is-invalid": $props.isInvalid,
    disabled: $props.disabled,
    onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
    onBlur: _cache[3] || (_cache[3] = (...args) => $options.onBlur && $options.onBlur(...args))
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , ["id", "value", "is-invalid", "disabled"]), [[vModelCheckbox, $options.isChecked]]), !$props.indeterminate ? (openBlock(), createBlock(_component_CheckboxIcon, {
    key: 0,
    size: $props.size,
    class: "icon"
  }, null, 8
  /* PROPS */
  , ["size"])) : (openBlock(), createBlock(_component_CheckboxIndeterminateIcon, {
    key: 1,
    class: "indeterminate"
  })), _ctx.$slots['default'] ? (openBlock(), createBlock("span", _hoisted_1, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true)], 8
  /* PROPS */
  , ["for"]);
});

script.render = render;
script.__scopeId = "data-v-20811da2";
script.__file = "src/components/Checkbox/Checkbox.vue";

export { script as s };
