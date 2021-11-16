'use strict';

var vue = require('vue');
var TextField = require('./TextField-471e9801.js');

var script = {
  name: 'FieldGroup',
  props: {
    label: {
      type: String,
      default: undefined
    },
    errors: {
      type: Array,
      default: () => []
    }
  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-d4cafc20");

vue.pushScopeId("data-v-d4cafc20");

const _hoisted_1 = {
  class: "field-group"
};
const _hoisted_2 = {
  key: 0,
  class: "label field-group-label"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [$props.label ? (vue.openBlock(), vue.createBlock("span", _hoisted_2, vue.toDisplayString($props.label), 1
  /* TEXT */
  )) : vue.createCommentVNode("v-if", true), vue.renderSlot(_ctx.$slots, "default"), (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.errors, error => {
    return vue.openBlock(), vue.createBlock("div", {
      ref: "error",
      key: error,
      class: "error-message"
    }, vue.toDisplayString(error), 513
    /* TEXT, NEED_PATCH */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
});

script.render = render;
script.__scopeId = "data-v-d4cafc20";
script.__file = "src/components/Form/FieldGroup.vue";

var script$1 = {
  name: 'Input',
  components: {
    TextField: TextField.script
  },
  props: {
    value: {
      type: [Number, String],
      default: undefined
    },
    maxlength: {
      type: Number,
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '100%'
    },
    type: {
      type: String,
      default: 'text'
    },
    step: {
      type: String,
      default: '1'
    },
    allowedValues: {
      type: String,
      default: ''
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isFocused: false
    };
  },

  computed: {
    input: {
      get() {
        return this.value;
      },

      set(val) {
        this.$emit('update:value', val);
      }

    }
  },
  watch: {
    input() {
      if (this.allowedValues) {
        this.input = this.input.replace(new RegExp(this.allowedValues, 'g'), '');
      }
    }

  },

  mounted() {
    if (this.autoFocus) {
      this.$refs.input.focus();
    }
  },

  methods: {
    onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },

    onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    }

  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TextField = vue.resolveComponent("TextField");

  return vue.openBlock(), vue.createBlock(_component_TextField, {
    "is-focused": $data.isFocused,
    "is-invalid": $props.isInvalid,
    "is-loading": $props.isLoading
  }, {
    default: vue.withCtx(() => [vue.withDirectives(vue.createVNode("input", vue.mergeProps({
      ref: "input",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $options.input = $event),
      type: $props.type,
      placeholder: $props.placeholder,
      step: $props.step
    }, _ctx.$attrs, {
      maxlength: $props.maxlength,
      onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onBlur: _cache[3] || (_cache[3] = (...args) => $options.onBlur && $options.onBlur(...args))
    }), null, 16
    /* FULL_PROPS */
    , ["type", "placeholder", "step", "maxlength"]), [[vue.vModelDynamic, $options.input]])]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-focused", "is-invalid", "is-loading"]);
}

script$1.render = render$1;
script$1.__file = "src/components/Form/Input.vue";

exports.script = script;
exports.script$1 = script$1;
