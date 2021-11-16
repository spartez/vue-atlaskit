'use strict';

var vue = require('vue');
var CrossIcon = require('./CrossIcon-65616ef5.js');
var EditorDoneIcon = require('./EditorDoneIcon-9ada4211.js');
var UnlockFilledIcon = require('./UnlockFilledIcon-e0a24b44.js');

var script = {
  name: 'LockSwitch',
  components: {
    LockFilledIcon: UnlockFilledIcon.LockFilledIcon,
    UnlockFilledIcon: UnlockFilledIcon.UnlockFilledIcon
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

const _withId = /*#__PURE__*/vue.withScopeId("data-v-063c74fa");

vue.pushScopeId("data-v-063c74fa");

const _hoisted_1 = {
  class: "slide-inner"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_LockFilledIcon = vue.resolveComponent("LockFilledIcon");

  const _component_UnlockFilledIcon = vue.resolveComponent("UnlockFilledIcon");

  return vue.openBlock(), vue.createBlock("label", {
    for: $data.id
  }, [vue.createVNode("input", {
    id: $data.id,
    type: "checkbox",
    checked: $props.value,
    onChange: _cache[1] || (_cache[1] = (...args) => $options.toggle && $options.toggle(...args))
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , ["id", "checked"]), vue.createVNode("div", {
    class: "slide",
    size: $props.size
  }, [vue.createVNode("div", _hoisted_1, [$props.value ? (vue.openBlock(), vue.createBlock(_component_LockFilledIcon, {
    key: 0,
    size: $options.iconSize,
    "primary-color": "White",
    class: "done"
  }, null, 8
  /* PROPS */
  , ["size"])) : (vue.openBlock(), vue.createBlock(_component_UnlockFilledIcon, {
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
    CrossIcon: CrossIcon.CrossIcon,
    EditorDoneIcon: EditorDoneIcon.Checked
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

const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-45624b0f");

vue.pushScopeId("data-v-45624b0f");

const _hoisted_1$1 = {
  class: "slide-inner"
};

vue.popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_EditorDoneIcon = vue.resolveComponent("EditorDoneIcon");

  const _component_CrossIcon = vue.resolveComponent("CrossIcon");

  return vue.openBlock(), vue.createBlock("label", {
    for: $data.id
  }, [vue.createVNode("input", {
    id: $data.id,
    type: "checkbox",
    checked: $props.value,
    onChange: _cache[1] || (_cache[1] = (...args) => $options.toggle && $options.toggle(...args))
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , ["id", "checked"]), vue.createVNode("div", {
    class: "slide",
    size: $props.size
  }, [vue.createVNode("div", _hoisted_1$1, [$props.value ? (vue.openBlock(), vue.createBlock(_component_EditorDoneIcon, {
    key: 0,
    "data-cy": "done",
    size: $options.iconSize,
    "primary-color": "White",
    class: "done"
  }, null, 8
  /* PROPS */
  , ["size"])) : (vue.openBlock(), vue.createBlock(_component_CrossIcon, {
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

exports.script = script$1;
exports.script$1 = script;
