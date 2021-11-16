import { pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, createVNode, withScopeId } from 'vue';
import { C as CrossIcon } from './CrossIcon-d96098bb.js';
import { C as Checked } from './EditorDoneIcon-5f2237f7.js';
import { L as LockFilledIcon, U as UnlockFilledIcon } from './UnlockFilledIcon-fcfbdad0.js';

var script = {
  name: 'LockSwitch',
  components: {
    LockFilledIcon,
    UnlockFilledIcon
  },
  props: {
    value: {
      type: [Number, String, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'regular'
    }
  },

  data() {
    return {
      id: undefined
    };
  },

  computed: {
    iconSize() {
      return this.size === 'large' ? 'xsmall' : 'xxsmall';
    }

  },

  created() {
    // eslint-disable-next-line
    this.id = this._uuid;
  },

  methods: {
    toggle() {
      if (this.disabled) return;
      this.$emit('input', !this.value);
    }

  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-063c74fa");

pushScopeId("data-v-063c74fa");

const _hoisted_1 = {
  class: "slide-inner"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_LockFilledIcon = resolveComponent("LockFilledIcon");

  const _component_UnlockFilledIcon = resolveComponent("UnlockFilledIcon");

  return openBlock(), createBlock("label", {
    for: $data.id
  }, [createVNode("input", {
    id: $data.id,
    type: "checkbox",
    checked: $props.value,
    onChange: _cache[1] || (_cache[1] = (...args) => $options.toggle && $options.toggle(...args))
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , ["id", "checked"]), createVNode("div", {
    class: "slide",
    size: $props.size
  }, [createVNode("div", _hoisted_1, [$props.value ? (openBlock(), createBlock(_component_LockFilledIcon, {
    key: 0,
    size: $options.iconSize,
    "primary-color": "White",
    class: "done"
  }, null, 8
  /* PROPS */
  , ["size"])) : (openBlock(), createBlock(_component_UnlockFilledIcon, {
    key: 1,
    size: $options.iconSize,
    "primary-color": "White",
    class: "close"
  }, null, 8
  /* PROPS */
  , ["size"]))])], 8
  /* PROPS */
  , ["size"])], 8
  /* PROPS */
  , ["for"]);
});

script.render = render;
script.__scopeId = "data-v-063c74fa";
script.__file = "src/components/Toggle/LockSwitch.vue";

var script$1 = {
  name: 'Toggle',
  components: {
    CrossIcon,
    EditorDoneIcon: Checked
  },
  props: {
    value: {
      type: [Number, String, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'regular'
    }
  },

  data() {
    return {
      id: undefined
    };
  },

  computed: {
    iconSize() {
      return this.size === 'large' ? 'small' : 'xsmall';
    }

  },

  created() {
    // eslint-disable-next-line
    this.id = this._uuid;
  },

  methods: {
    toggle() {
      if (this.disabled) return;
      this.$emit('update:value', !this.value);
    }

  }
};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-45624b0f");

pushScopeId("data-v-45624b0f");

const _hoisted_1$1 = {
  class: "slide-inner"
};

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_EditorDoneIcon = resolveComponent("EditorDoneIcon");

  const _component_CrossIcon = resolveComponent("CrossIcon");

  return openBlock(), createBlock("label", {
    for: $data.id
  }, [createVNode("input", {
    id: $data.id,
    type: "checkbox",
    checked: $props.value,
    onChange: _cache[1] || (_cache[1] = (...args) => $options.toggle && $options.toggle(...args))
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , ["id", "checked"]), createVNode("div", {
    class: "slide",
    size: $props.size
  }, [createVNode("div", _hoisted_1$1, [$props.value ? (openBlock(), createBlock(_component_EditorDoneIcon, {
    key: 0,
    "data-cy": "done",
    size: $options.iconSize,
    "primary-color": "White",
    class: "done"
  }, null, 8
  /* PROPS */
  , ["size"])) : (openBlock(), createBlock(_component_CrossIcon, {
    key: 1,
    "data-cy": "cross",
    size: $options.iconSize,
    "primary-color": "White",
    class: "close"
  }, null, 8
  /* PROPS */
  , ["size"]))])], 8
  /* PROPS */
  , ["size"])], 8
  /* PROPS */
  , ["for"]);
});

script$1.render = render$1;
script$1.__scopeId = "data-v-45624b0f";
script$1.__file = "src/components/Toggle/Toggle.vue";

export { script as a, script$1 as s };
