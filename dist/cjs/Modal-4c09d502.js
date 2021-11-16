'use strict';

var vue = require('vue');
var Button = require('./Button-1b01afc6.js');
var WarningIcon = require('./WarningIcon-dfe5a9da.js');

var script = {
  name: 'Blanket',
  props: {
    zIndex: {
      type: Number,
      default: 999
    }
  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-df8071fe");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", {
    class: "blanket",
    style: {
      zIndex: $props.zIndex
    }
  }, [vue.renderSlot(_ctx.$slots, "default")], 4
  /* STYLE */
  );
});

script.render = render;
script.__scopeId = "data-v-df8071fe";
script.__file = "src/components/Modal/Blanket.vue";

var script$1 = {
  name: 'PositionerAbsolute',
  props: {
    width: {
      type: String,
      default: '600px'
    }
  }
};

const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-34592e9f");

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", {
    class: "positioner",
    style: {
      width: $props.width
    }
  }, [vue.renderSlot(_ctx.$slots, "default")], 4
  /* STYLE */
  );
});

script$1.render = render$1;
script$1.__scopeId = "data-v-34592e9f";
script$1.__file = "src/components/Modal/PositionerAbsolute.vue";

var script$2 = {
  name: 'Header',
  components: {
    WarningIcon: WarningIcon.WarningIcon,
    ErrorIcon: WarningIcon.ErrorIcon
  },
  props: {
    heading: {
      type: String,
      default: ''
    },
    appearance: {
      type: String,
      default: ''
    }
  },
  computed: {
    icon() {
      return this.appearance === 'danger' ? 'ErrorIcon' : 'WarningIcon';
    },

    color() {
      return this.appearance === 'danger' ? '#DE350B' : '#FF991F';
    }

  }
};

const _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-74d59cff");

vue.pushScopeId("data-v-74d59cff");

const _hoisted_1 = {
  class: "header"
};
const _hoisted_2 = {
  class: "title"
};

vue.popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [$props.appearance ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($options.icon), {
    key: 0,
    class: "icon",
    "primary-color": $options.color
  }, null, 8
  /* PROPS */
  , ["primary-color"])) : vue.createCommentVNode("v-if", true), vue.createVNode("h3", _hoisted_2, vue.toDisplayString($props.heading), 1
  /* TEXT */
  )]);
});

script$2.render = render$2;
script$2.__scopeId = "data-v-74d59cff";
script$2.__file = "src/components/Modal/Header.vue";

var script$3 = {
  name: 'Footer',
  components: {
    Button: Button.script
  },
  props: {
    appearance: {
      type: String,
      default: 'primary'
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: () => ['Continue', 'Cancel']
    },
    pending: {
      type: Boolean,
      default: false
    },
    shouldAllowSubmit: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      submit: 'Continue',
      cancel: 'Cancel'
    };
  },

  watch: {
    actions: {
      handler(actions = ['Continue', 'Cancel']) {
        const [submit, cancel] = actions;
        this.submit = submit;
        this.cancel = cancel;
      },

      immediate: true
    }
  },
  methods: {
    onCancel() {
      this.$emit('cancel');
    }

  }
};

const _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-53a3390d");

vue.pushScopeId("data-v-53a3390d");

const _hoisted_1$1 = {
  class: "footer"
};

vue.popScopeId();

const render$3 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Button = vue.resolveComponent("Button");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [vue.createVNode(_component_Button, {
    "auto-focus": $props.autoFocus,
    type: "submit",
    "is-disabled": $props.pending || !$props.shouldAllowSubmit,
    "is-loading": $props.pending,
    appearance: $props.appearance
  }, {
    default: _withId$3(() => [vue.createTextVNode(vue.toDisplayString($data.submit), 1
    /* TEXT */
    )]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["auto-focus", "is-disabled", "is-loading", "appearance"]), $data.cancel ? (vue.openBlock(), vue.createBlock(_component_Button, {
    key: 0,
    appearance: "subtle",
    "is-disabled": $props.pending,
    onClick: $options.onCancel
  }, {
    default: _withId$3(() => [vue.createTextVNode(vue.toDisplayString($data.cancel), 1
    /* TEXT */
    )]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-disabled", "onClick"])) : vue.createCommentVNode("v-if", true)]);
});

script$3.render = render$3;
script$3.__scopeId = "data-v-53a3390d";
script$3.__file = "src/components/Modal/Footer.vue";

const ESC = 27;
var script$4 = {
  name: 'Modal',
  components: {
    Blanket: script,
    PositionerAbsolute: script$1,
    Header: script$2,
    Footer: script$3
  },
  props: {
    heading: {
      type: String,
      default: ''
    },
    appearance: {
      type: String,
      default: undefined
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: () => ['Continue', 'Cancel']
    },
    pending: {
      type: Boolean,
      default: false
    },
    shouldAllowSubmit: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '600px'
    },
    zIndex: {
      type: Number,
      default: 999
    },
    closeOnEsc: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      mounted: false
    };
  },

  beforeMount() {
    document.addEventListener('keyup', this.onEsc);
  },

  beforeUnmount() {
    document.removeEventListener('keyup', this.onEsc);
  },

  methods: {
    onEsc(e) {
      if (e.keyCode === ESC && this.closeOnEsc && !this.pending) {
        this.$emit('cancel');
      }
    },

    onCancel() {
      this.$emit('cancel');
    },

    onSubmit() {
      this.$emit('submit');
    }

  }
};

const _withId$4 = /*#__PURE__*/vue.withScopeId("data-v-47db75aa");

vue.pushScopeId("data-v-47db75aa");

const _hoisted_1$2 = {
  class: "content"
};

vue.popScopeId();

const render$4 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Header = vue.resolveComponent("Header");

  const _component_Footer = vue.resolveComponent("Footer");

  const _component_PositionerAbsolute = vue.resolveComponent("PositionerAbsolute");

  const _component_Blanket = vue.resolveComponent("Blanket");

  return vue.openBlock(), vue.createBlock(vue.Transition, {
    name: "modal",
    appear: ""
  }, {
    default: _withId$4(() => [vue.createVNode(_component_Blanket, {
      class: "dialog",
      "z-index": $props.zIndex
    }, {
      default: _withId$4(() => [vue.createVNode(_component_PositionerAbsolute, {
        width: $props.width
      }, {
        default: _withId$4(() => [vue.createVNode("form", {
          class: "modal-container",
          novalidate: "",
          onSubmit: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.onSubmit && $options.onSubmit(...args), ["prevent"]))
        }, [vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode("header", null, [vue.renderSlot(_ctx.$slots, "header", {}, () => [vue.createVNode(_component_Header, {
          heading: $props.heading,
          appearance: $props.appearance
        }, null, 8
        /* PROPS */
        , ["heading", "appearance"])])]), vue.createVNode("div", _hoisted_1$2, [vue.renderSlot(_ctx.$slots, "content")]), vue.createVNode("footer", null, [vue.renderSlot(_ctx.$slots, "footer", {}, () => [vue.renderSlot(_ctx.$slots, "progress"), vue.createVNode(_component_Footer, {
          actions: $props.actions,
          "auto-focus": $props.autoFocus,
          appearance: $props.appearance,
          "should-allow-submit": $props.shouldAllowSubmit,
          pending: $props.pending,
          onCancel: $options.onCancel
        }, null, 8
        /* PROPS */
        , ["actions", "auto-focus", "appearance", "should-allow-submit", "pending", "onCancel"])])])])], 32
        /* HYDRATE_EVENTS */
        )]),
        _: 3
        /* FORWARDED */

      }, 8
      /* PROPS */
      , ["width"])]),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["z-index"])]),
    _: 1
    /* STABLE */

  });
});

script$4.render = render$4;
script$4.__scopeId = "data-v-47db75aa";
script$4.__file = "src/components/Modal/Modal.vue";

exports.script = script$4;
