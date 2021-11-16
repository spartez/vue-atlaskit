'use strict';

var vue = require('vue');
var Button = require('./Button-1b01afc6.js');
var CrossIcon = require('./CrossIcon-65616ef5.js');
var EditorDoneIcon = require('./EditorDoneIcon-9ada4211.js');
var SearchIcon = require('./SearchIcon-5009e112.js');
var InlineEdit = require('./InlineEdit-4a5f82df.js');
var Popper = require('./Popper-9e63994e.js');
var Checkbox = require('./Checkbox-33e4c068.js');
var DatePicker = require('./DatePicker-0ce3400b.js');
var UserRenderer = require('./UserRenderer-7eac727f.js');
var PromisedContentLoader = require('./PromisedContentLoader-e4d83698.js');

var script = {
  name: 'CheckboxRenderer',
  components: {
    Checked: EditorDoneIcon.Checked
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-24f80ab0");

vue.pushScopeId("data-v-24f80ab0");

const _hoisted_1 = {
  class: "input-label"
};
const _hoisted_2 = {
  key: 1,
  class: "icon"
};
const _hoisted_3 = {
  key: 2
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Checked = vue.resolveComponent("Checked");

  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [$props.value ? (vue.openBlock(), vue.createBlock(_component_Checked, {
    key: 0,
    size: "small",
    "primary-color": "#36B37E"
  })) : (vue.openBlock(), vue.createBlock("span", _hoisted_2)), $props.label ? (vue.openBlock(), vue.createBlock("span", _hoisted_3, vue.toDisplayString($props.label), 1
  /* TEXT */
  )) : vue.createCommentVNode("v-if", true)]);
});

script.render = render;
script.__scopeId = "data-v-24f80ab0";
script.__file = "src/components/field-renderers/CheckboxRenderer.vue";

var script$1 = {
  name: 'CheckboxEditableRenderer',
  components: {
    CheckboxRenderer: script,
    InlineEdit: InlineEdit.script$1,
    Checkbox: Checkbox.script
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    }
  },
  methods: {
    onSaveRequested(value, callback) {
      this.$emit('save-requested', value, callback);
    }

  }
};

const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-d08eaba8");

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Checkbox = vue.resolveComponent("Checkbox");

  const _component_CheckboxRenderer = vue.resolveComponent("CheckboxRenderer");

  const _component_InlineEdit = vue.resolveComponent("InlineEdit");

  return $props.editable ? (vue.openBlock(), vue.createBlock(_component_InlineEdit, {
    key: 0,
    value: $props.value,
    offset: "0,0",
    class: "checkbox-edit",
    placement: $props.placement,
    onSaveRequested: $options.onSaveRequested
  }, {
    default: _withId$1(() => [vue.createVNode(_component_Checkbox, {
      slot: "editor",
      "slot-scope": "props",
      size: "large",
      class: "checkbox",
      checked: _ctx.props.value,
      "is-focused": _ctx.props.isFocused,
      "is-invalid": _ctx.props.isInvalid,
      disabled: _ctx.props.isLoading,
      onInput: _ctx.props.input,
      onFocus: _ctx.props.focus,
      onBlur: _ctx.props.blur,
      onConfirm: _ctx.props.confirm,
      onKeyup: vue.withKeys(_ctx.props.cancel, ["esc"])
    }, null, 8
    /* PROPS */
    , ["checked", "is-focused", "is-invalid", "disabled", "onInput", "onFocus", "onBlur", "onConfirm", "onKeyup"]), vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode(_component_CheckboxRenderer, {
      value: $props.value
    }, null, 8
    /* PROPS */
    , ["value"])])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["value", "placement", "onSaveRequested"])) : (vue.openBlock(), vue.createBlock(_component_CheckboxRenderer, {
    key: 1,
    value: $props.value
  }, null, 8
  /* PROPS */
  , ["value"]));
});

script$1.render = render$1;
script$1.__scopeId = "data-v-d08eaba8";
script$1.__file = "src/components/field-renderers/CheckboxEditableRenderer.vue";

var script$2 = {
  name: 'MultiSelectRenderer',
  components: {
    Popper: Popper.script,
    Button: Button.script
  },
  props: {
    selectedValues: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      isOpen: false,
      visibleCount: this.selectedValues.length
    };
  },

  computed: {
    visibleValues() {
      return this.selectedValues.slice(0, this.visibleCount);
    },

    hiddenValues() {
      return this.selectedValues.slice(this.visibleCount);
    }

  },

  created() {
    this.onResize = UserRenderer.pDebounce_1(this.handleResize, 100);
    this.breakPoints = [];
  },

  mounted() {
    window.addEventListener('resize', this.onResize);
    this.checkOverflow();
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },

  updated() {
    this.checkOverflow();
  },

  methods: {
    handleResize() {
      this.checkOverflow();
    },

    checkOverflow() {
      const {
        overflowContainer
      } = this.$refs;
      const hasOverflow = overflowContainer.scrollWidth > overflowContainer.clientWidth;

      if (hasOverflow) {
        this.breakPoints[this.visibleCount] = overflowContainer.clientWidth;
        this.visibleCount -= 1;
      }

      while (overflowContainer.clientWidth > this.breakPoints[this.visibleCount + 1] && this.visibleCount < this.selectedValues.length) {
        this.visibleCount += 1;
      }
    },

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }

  }
};

const _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-75ee9f34");

vue.pushScopeId("data-v-75ee9f34");

const _hoisted_1$1 = {
  ref: "overflowContainer",
  class: "multiselect overflow-container"
};
const _hoisted_2$1 = {
  class: "dropdown-list"
};

vue.popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Button = vue.resolveComponent("Button");

  const _component_Popper = vue.resolveComponent("Popper");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.visibleValues, (value, i) => {
    return vue.openBlock(), vue.createBlock("span", {
      key: i,
      ref: "tag",
      class: "tag",
      title: value
    }, vue.toDisplayString(value), 9
    /* TEXT, PROPS */
    , ["title"]);
  }), 128
  /* KEYED_FRAGMENT */
  )), $options.hiddenValues.length > 0 ? (vue.openBlock(), vue.createBlock(_component_Button, {
    key: 0,
    ref: "target",
    spacing: "none",
    onClick: $options.toggleDropdown
  }, {
    default: _withId$2(() => [vue.createTextVNode(" +" + vue.toDisplayString($options.hiddenValues.length), 1
    /* TEXT */
    )]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])) : vue.createCommentVNode("v-if", true), $data.isOpen ? (vue.openBlock(), vue.createBlock(_component_Popper, {
    key: 1,
    "target-element": _ctx.$refs.target.$el,
    offset: "0,5",
    placement: "right-start"
  }, {
    default: _withId$2(() => [vue.createVNode("div", _hoisted_2$1, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.hiddenValues, (value, i) => {
      return vue.openBlock(), vue.createBlock("div", {
        key: i,
        class: "item",
        title: value
      }, vue.toDisplayString(value), 9
      /* TEXT, PROPS */
      , ["title"]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["target-element"])) : vue.createCommentVNode("v-if", true)], 512
  /* NEED_PATCH */
  );
});

script$2.render = render$2;
script$2.__scopeId = "data-v-75ee9f34";
script$2.__file = "src/components/field-renderers/MultiSelectRenderer.vue";

var script$3 = {
  name: 'MultiSelectEditableRenderer',
  components: {
    MultiSelectRenderer: script$2,
    InlineEdit: InlineEdit.script$1,
    Select: UserRenderer.script
  },
  props: {
    selectedValues: {
      type: Array,
      default: () => []
    },
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    },
    allowedValues: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      options: this.allowedValues
    };
  },

  methods: {
    onSaveRequested(value, callback) {
      try {
        if (Array.isArray(value)) {
          this.$emit('save-requested', value, callback);
        } else {
          callback(new Error('Value should be an array'));
        }
      } catch (error) {
        callback(error);
      }
    }

  }
};

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Select = vue.resolveComponent("Select");

  const _component_MultiSelectRenderer = vue.resolveComponent("MultiSelectRenderer");

  const _component_InlineEdit = vue.resolveComponent("InlineEdit");

  return $props.editable ? (vue.openBlock(), vue.createBlock(_component_InlineEdit, {
    key: 0,
    value: $props.selectedValues,
    placement: $props.placement,
    onSaveRequested: $options.onSaveRequested
  }, {
    default: vue.withCtx(() => [vue.createVNode(_component_Select, {
      slot: "editor",
      "slot-scope": "props",
      value: _ctx.props.value,
      multi: true,
      options: $data.options,
      "is-invalid": _ctx.props.isInvalid,
      "is-focused": _ctx.props.isFocused,
      "is-loading": _ctx.props.isLoading,
      onInput: _ctx.props.input,
      onBlur: _ctx.props.blur,
      onConfirm: _ctx.props.confirm,
      onFocus: _ctx.props.focus,
      onCancel: _ctx.props.cancel
    }, null, 8
    /* PROPS */
    , ["value", "options", "is-invalid", "is-focused", "is-loading", "onInput", "onBlur", "onConfirm", "onFocus", "onCancel"]), vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode(_component_MultiSelectRenderer, {
      "selected-values": $props.selectedValues
    }, null, 8
    /* PROPS */
    , ["selected-values"])])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["value", "placement", "onSaveRequested"])) : (vue.openBlock(), vue.createBlock(_component_MultiSelectRenderer, {
    key: 1,
    "selected-values": $props.selectedValues
  }, null, 8
  /* PROPS */
  , ["selected-values"]));
}

script$3.render = render$3;
script$3.__file = "src/components/field-renderers/MultiSelectEditableRenderer.vue";

var script$4 = {
  name: 'ImageRenderer',
  components: {
    Button: Button.script,
    SearchIcon: SearchIcon.SearchIcon
  },
  props: {
    url: {
      type: String,
      default: undefined
    },
    height: {
      type: [Number, String],
      default: 24
    },
    width: {
      type: [Number, String],
      default: 24
    },
    showActions: {
      type: Boolean,
      default: false
    },
    zoomable: {
      type: Boolean,
      default: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    placeholderSize() {
      const height = +this.height || Number.POSITIVE_INFINITY;
      const width = +this.width || Number.POSITIVE_INFINITY;
      const size = Math.min(width, height) || 100;
      return size;
    }

  }
};

const _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-742071ac");

vue.pushScopeId("data-v-742071ac");

const _hoisted_1$2 = {
  key: 2,
  class: "actions"
};

vue.popScopeId();

const render$4 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_SearchIcon = vue.resolveComponent("SearchIcon");

  const _component_Button = vue.resolveComponent("Button");

  return vue.openBlock(), vue.createBlock("div", {
    class: "image-container",
    loading: $props.isLoading
  }, [$props.url ? (vue.openBlock(), vue.createBlock("img", {
    key: 0,
    class: "image",
    src: $props.url,
    alt: "attached image",
    height: $props.height,
    width: $props.width
  }, null, 8
  /* PROPS */
  , ["src", "height", "width"])) : (vue.openBlock(), vue.createBlock("div", {
    key: 1,
    class: "placeholder",
    style: {
      width: `${$options.placeholderSize}px`,
      height: `${$options.placeholderSize}px`
    }
  }, null, 4
  /* STYLE */
  )), $props.showActions && ($props.url || _ctx.$slots.actions) ? (vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [$props.url && $props.zoomable ? (vue.openBlock(), vue.createBlock("a", {
    key: 0,
    href: $props.url,
    target: "_blank"
  }, [vue.createVNode(_component_Button, {
    class: "action-button",
    appearance: "subtle"
  }, {
    default: _withId$3(() => [vue.createVNode(_component_SearchIcon)]),
    _: 1
    /* STABLE */

  })], 8
  /* PROPS */
  , ["href"])) : vue.createCommentVNode("v-if", true), vue.renderSlot(_ctx.$slots, "actions")])) : vue.createCommentVNode("v-if", true)], 8
  /* PROPS */
  , ["loading"]);
});

script$4.render = render$4;
script$4.__scopeId = "data-v-742071ac";
script$4.__file = "src/components/field-renderers/ImageRenderer.vue";

var script$5 = {
  name: 'StringLineRenderer',
  props: {
    value: {
      type: String,
      default: undefined
    }
  }
};

const _withId$4 = /*#__PURE__*/vue.withScopeId("data-v-41797d0a");

const render$5 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", {
    class: "string-line-wrapper",
    title: $props.value,
    textContent: vue.toDisplayString($props.value)
  }, null, 8
  /* PROPS */
  , ["title", "textContent"]);
});

script$5.render = render$5;
script$5.__scopeId = "data-v-41797d0a";
script$5.__file = "src/components/field-renderers/StringLineRenderer.vue";

var script$6 = {
  name: 'SingleSelectEditableRenderer',
  components: {
    Select: UserRenderer.script,
    StringLineRenderer: script$5,
    InlineEdit: InlineEdit.script$1
  },
  props: {
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    },
    value: {
      type: String,
      default: ''
    },
    allowedValues: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      options: this.allowedValues
    };
  },

  methods: {
    onSaveRequested(option, callback) {
      const value = option || '';
      this.$emit('save-requested', value, callback);
    }

  }
};

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Select = vue.resolveComponent("Select");

  const _component_StringLineRenderer = vue.resolveComponent("StringLineRenderer");

  const _component_InlineEdit = vue.resolveComponent("InlineEdit");

  return $props.editable ? (vue.openBlock(), vue.createBlock(_component_InlineEdit, {
    key: 0,
    value: $props.value,
    confirm: $props.confirm,
    placement: $props.placement,
    onSaveRequested: $options.onSaveRequested
  }, {
    default: vue.withCtx(() => [vue.createVNode(_component_Select, {
      slot: "editor",
      "slot-scope": "props",
      value: _ctx.props.value,
      options: $data.options,
      "is-invalid": _ctx.props.isInvalid,
      "is-focused": _ctx.props.isFocused,
      "is-loading": _ctx.props.isLoading,
      placeholder: $props.placeholder,
      "append-to-body": $props.appendToBody,
      onInput: _ctx.props.input,
      onBlur: _ctx.props.blur,
      onConfirm: _ctx.props.confirm,
      onFocus: _ctx.props.focus,
      onCancel: _ctx.props.cancel
    }, null, 8
    /* PROPS */
    , ["value", "options", "is-invalid", "is-focused", "is-loading", "placeholder", "append-to-body", "onInput", "onBlur", "onConfirm", "onFocus", "onCancel"]), vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode(_component_StringLineRenderer, {
      value: $props.value
    }, null, 8
    /* PROPS */
    , ["value"])])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["value", "confirm", "placement", "onSaveRequested"])) : (vue.openBlock(), vue.createBlock(_component_StringLineRenderer, {
    key: 1,
    value: $props.value
  }, null, 8
  /* PROPS */
  , ["value"]));
}

script$6.render = render$6;
script$6.__file = "src/components/field-renderers/SingleSelectEditableRenderer.vue";

var script$7 = {
  name: 'StringLineEditableRenderer',
  components: {
    StringLineRenderer: script$5,
    InlineEdit: InlineEdit.script$1
  },
  props: {
    value: {
      type: String,
      default: undefined
    },
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    },
    confirm: {
      type: Boolean,
      default: true
    },
    icon: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: undefined
    },
    pattern: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    onSaveRequested(...args) {
      this.$emit('save-requested', ...args);
    }

  }
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_StringLineRenderer = vue.resolveComponent("StringLineRenderer");

  const _component_InlineEdit = vue.resolveComponent("InlineEdit");

  return $props.editable ? (vue.openBlock(), vue.createBlock(_component_InlineEdit, {
    key: 0,
    value: $props.value,
    confirm: $props.confirm,
    icon: $props.icon,
    align: $props.align,
    pattern: $props.pattern,
    type: $props.type,
    placement: $props.placement,
    onSaveRequested: $options.onSaveRequested
  }, {
    default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode(_component_StringLineRenderer, {
      value: $props.value
    }, null, 8
    /* PROPS */
    , ["value"])])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["value", "confirm", "icon", "align", "pattern", "type", "placement", "onSaveRequested"])) : (vue.openBlock(), vue.createBlock(_component_StringLineRenderer, {
    key: 1,
    value: $props.value
  }, null, 8
  /* PROPS */
  , ["value"]));
}

script$7.render = render$7;
script$7.__file = "src/components/field-renderers/StringLineEditableRenderer.vue";

var script$8 = {
  name: 'UserEditableRenderer',
  components: {
    UserRenderer: UserRenderer.script$1,
    InlineEdit: InlineEdit.script$1,
    Select: UserRenderer.script
  },
  props: {
    user: {
      type: Object,
      default: undefined
    },
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    },
    avatarOnly: {
      type: Boolean,
      default: false
    },
    loadOptions: {
      type: Function,
      required: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    mapper: {
      type: Function,
      default: list => list
    },
    initialOptions: {
      type: Array,
      default: () => []
    },
    clearable: {
      type: Boolean,
      default: true
    },
    confirm: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      users: [],
      isFetching: false,
      debouncedGetUsers: undefined
    };
  },

  created() {
    this.debouncedGetUsers = UserRenderer.pDebounce_1(this.onSearchChange, 200);
  },

  methods: {
    async onSearchChange(query) {
      this.isFetching = true;
      const {
        data: users
      } = await this.loadOptions(query);
      this.users = this.mapper(users);
      this.isFetching = false;
    },

    onSaveRequested(user, callback) {
      this.$emit('save-requested', user, callback);
    },

    normalizer(user) {
      return {
        id: user && user.key,
        label: user && user.name,
        value: user
      };
    },

    loadInitialOptions() {
      this.users = this.initialOptions;
    }

  }
};

const _withId$5 = /*#__PURE__*/vue.withScopeId("data-v-51ba6b34");

vue.pushScopeId("data-v-51ba6b34");

const _hoisted_1$3 = {
  slot: "option",
  "slot-scope": "{option}",
  class: "label"
};
const _hoisted_2$2 = {
  slot: "selected",
  "slot-scope": "{selected}",
  class: "label"
};

vue.popScopeId();

const render$8 = /*#__PURE__*/_withId$5((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_UserRenderer = vue.resolveComponent("UserRenderer");

  const _component_Select = vue.resolveComponent("Select");

  const _component_InlineEdit = vue.resolveComponent("InlineEdit");

  return $props.editable && !$props.avatarOnly ? (vue.openBlock(), vue.createBlock(_component_InlineEdit, {
    key: 0,
    value: $props.user,
    class: "user-inline-edit",
    confirm: $props.confirm,
    placement: $props.placement,
    onSaveRequested: $options.onSaveRequested
  }, {
    default: _withId$5(() => [vue.createVNode(_component_Select, {
      slot: "editor",
      "slot-scope": "props",
      value: _ctx.props.value,
      options: $data.users,
      "is-clearable": $props.clearable,
      async: true,
      placeholder: "Type to search...",
      normalizer: $options.normalizer,
      "is-invalid": _ctx.props.isInvalid,
      "is-focused": _ctx.props.isFocused,
      "is-loading": _ctx.props.isLoading,
      "is-fetching": $data.isFetching,
      onOpen: $options.loadInitialOptions,
      onSearchChange: $data.debouncedGetUsers,
      onInput: _ctx.props.input,
      onBlur: _ctx.props.blur,
      onConfirm: _ctx.props.confirm,
      onFocus: _ctx.props.focus,
      onCancel: _ctx.props.cancel
    }, {
      default: _withId$5(() => [vue.createVNode("div", _hoisted_1$3, [vue.createVNode(_component_UserRenderer, {
        tag: $props.tag,
        user: _ctx.option,
        "avatar-only": $props.avatarOnly
      }, null, 8
      /* PROPS */
      , ["tag", "user", "avatar-only"])]), vue.createVNode("div", _hoisted_2$2, [vue.createVNode(_component_UserRenderer, {
        tag: $props.tag,
        user: _ctx.selected,
        "avatar-only": $props.avatarOnly
      }, null, 8
      /* PROPS */
      , ["tag", "user", "avatar-only"])])]),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["value", "options", "is-clearable", "normalizer", "is-invalid", "is-focused", "is-loading", "is-fetching", "onOpen", "onSearchChange", "onInput", "onBlur", "onConfirm", "onFocus", "onCancel"]), vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode(_component_UserRenderer, {
      tag: $props.tag,
      user: $props.user,
      "avatar-only": $props.avatarOnly
    }, null, 8
    /* PROPS */
    , ["tag", "user", "avatar-only"])])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["value", "confirm", "placement", "onSaveRequested"])) : (vue.openBlock(), vue.createBlock(_component_UserRenderer, {
    key: 1,
    tag: $props.tag,
    user: $props.user,
    "avatar-only": $props.avatarOnly
  }, null, 8
  /* PROPS */
  , ["tag", "user", "avatar-only"]));
});

script$8.render = render$8;
script$8.__scopeId = "data-v-51ba6b34";
script$8.__file = "src/components/field-renderers/UserEditableRenderer.vue";

var script$9 = {
  name: 'UserRendererEnriched',
  components: {
    UserEditableRenderer: script$8,
    UserRenderer: UserRenderer.script$1,
    PromisedContentLoader: PromisedContentLoader.script,
    CrossIcon: CrossIcon.CrossIcon
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    avatarOnly: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    }
  }
};

const _withId$6 = /*#__PURE__*/vue.withScopeId("data-v-eccd2c90");

vue.pushScopeId("data-v-eccd2c90");

const _hoisted_1$4 = /*#__PURE__*/vue.createVNode("template", {
  slot: "loader-shape"
}, [/*#__PURE__*/vue.createVNode("circle", {
  cx: "12",
  cy: "12",
  r: 12
}), /*#__PURE__*/vue.createVNode("rect", {
  x: "28",
  y: "4",
  rx: 8,
  ry: 8,
  width: 45,
  height: 16
}), /*#__PURE__*/vue.createVNode("rect", {
  x: "78",
  y: "4",
  rx: 8,
  ry: 8,
  width: 70,
  height: 16
})], -1
/* HOISTED */
);

const _hoisted_2$3 = {
  class: "user-error"
};
const _hoisted_3$1 = {
  class: "avatar"
};

const _hoisted_4 = /*#__PURE__*/vue.createVNode("small", null, "(deleted)", -1
/* HOISTED */
);

vue.popScopeId();

const render$9 = /*#__PURE__*/_withId$6((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_UserEditableRenderer = vue.resolveComponent("UserEditableRenderer");

  const _component_CrossIcon = vue.resolveComponent("CrossIcon");

  const _component_PromisedContentLoader = vue.resolveComponent("PromisedContentLoader");

  return vue.openBlock(), vue.createBlock(_component_PromisedContentLoader, {
    width: 150,
    height: 24,
    value: $props.user.enriched,
    "pending-delay": 0
  }, {
    default: _withId$6(() => [vue.createVNode(_component_UserEditableRenderer, vue.mergeProps({
      "slot-scope": "{ value }",
      user: _ctx.value,
      "load-options": $props.user.getUsers,
      editable: $props.editable
    }, vue.toHandlers(_ctx.$attrs)), null, 16
    /* FULL_PROPS */
    , ["user", "load-options", "editable"]), _hoisted_1$4, (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.editable ? 'UserEditableRenderer' : 'UserRenderer'), vue.mergeProps({
      slot: "error-message",
      user: {
        key: $props.user.value
      },
      editable: true
    }, vue.toHandlers(_ctx.$attrs)), {
      default: _withId$6(() => [vue.createVNode("div", _hoisted_2$3, [vue.createVNode("div", _hoisted_3$1, [vue.createVNode(_component_CrossIcon, {
        size: "small"
      })]), vue.createVNode("span", null, [vue.createTextVNode(vue.toDisplayString($props.user.value) + " ", 1
      /* TEXT */
      ), _hoisted_4])])]),
      _: 1
      /* STABLE */

    }, 16
    /* FULL_PROPS */
    , ["user"]))]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value"]);
});

script$9.render = render$9;
script$9.__scopeId = "data-v-eccd2c90";
script$9.__file = "src/components/field-renderers/UserEditableRendererEnriched.vue";

var script$a = {
  name: 'UserRendererEnriched',
  components: {
    UserEditableRendererEnriched: script$9
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    avatarOnly: {
      type: Boolean,
      default: false
    }
  }
};

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_UserEditableRendererEnriched = vue.resolveComponent("UserEditableRendererEnriched");

  return vue.openBlock(), vue.createBlock(_component_UserEditableRendererEnriched, {
    user: $props.user,
    "avatar-only": $props.avatarOnly,
    editable: false
  }, null, 8
  /* PROPS */
  , ["user", "avatar-only"]);
}

script$a.render = render$a;
script$a.__file = "src/components/field-renderers/UserRendererEnriched.vue";

var script$b = {
  name: 'NumberFloatRenderer',
  props: {
    value: {
      type: Number,
      default: undefined
    }
  }
};

const _withId$7 = /*#__PURE__*/vue.withScopeId("data-v-63b7b864");

const render$b = /*#__PURE__*/_withId$7((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", {
    class: "number-float-wrapper",
    title: $props.value,
    textContent: vue.toDisplayString($props.value)
  }, null, 8
  /* PROPS */
  , ["title", "textContent"]);
});

script$b.render = render$b;
script$b.__scopeId = "data-v-63b7b864";
script$b.__file = "src/components/field-renderers/NumberFloatRenderer.vue";

var script$c = {
  name: 'NumberFloatEditableRenderer',
  components: {
    NumberFloatRenderer: script$b,
    InlineEdit: InlineEdit.script$1
  },
  props: {
    value: {
      type: Number,
      default: undefined
    },
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    }
  },
  methods: {
    onSaveRequested(...args) {
      this.$emit('save-requested', ...args);
    }

  }
};

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NumberFloatRenderer = vue.resolveComponent("NumberFloatRenderer");

  const _component_InlineEdit = vue.resolveComponent("InlineEdit");

  return $props.editable ? (vue.openBlock(), vue.createBlock(_component_InlineEdit, {
    key: 0,
    value: $props.value,
    type: "number",
    placement: $props.placement,
    onSaveRequested: $options.onSaveRequested
  }, {
    default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode(_component_NumberFloatRenderer, {
      value: $props.value
    }, null, 8
    /* PROPS */
    , ["value"])])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["value", "placement", "onSaveRequested"])) : (vue.openBlock(), vue.createBlock(_component_NumberFloatRenderer, {
    key: 1,
    value: $props.value
  }, null, 8
  /* PROPS */
  , ["value"]));
}

script$c.render = render$c;
script$c.__file = "src/components/field-renderers/NumberFloatEditableRenderer.vue";

var script$d = {
  name: 'NumberLongRenderer',
  props: {
    value: {
      type: Number,
      default: undefined
    }
  }
};

const _withId$8 = /*#__PURE__*/vue.withScopeId("data-v-0dfa12ca");

const render$d = /*#__PURE__*/_withId$8((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", {
    class: "number-long-wrapper",
    title: $props.value,
    textContent: vue.toDisplayString($props.value)
  }, null, 8
  /* PROPS */
  , ["title", "textContent"]);
});

script$d.render = render$d;
script$d.__scopeId = "data-v-0dfa12ca";
script$d.__file = "src/components/field-renderers/NumberLongRenderer.vue";

var script$e = {
  name: 'NumberLongEditableRenderer',
  components: {
    NumberLongRenderer: script$d,
    InlineEdit: InlineEdit.script$1
  },
  props: {
    value: {
      type: Number,
      default: undefined
    },
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    }
  },
  methods: {
    onSaveRequested(...args) {
      this.$emit('save-requested', ...args);
    }

  }
};

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NumberLongRenderer = vue.resolveComponent("NumberLongRenderer");

  const _component_InlineEdit = vue.resolveComponent("InlineEdit");

  return $props.editable ? (vue.openBlock(), vue.createBlock(_component_InlineEdit, {
    key: 0,
    value: $props.value,
    type: "number",
    step: "1",
    placement: $props.placement,
    onSaveRequested: $options.onSaveRequested
  }, {
    default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode(_component_NumberLongRenderer, {
      value: $props.value
    }, null, 8
    /* PROPS */
    , ["value"])])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["value", "placement", "onSaveRequested"])) : (vue.openBlock(), vue.createBlock(_component_NumberLongRenderer, {
    key: 1,
    value: $props.value
  }, null, 8
  /* PROPS */
  , ["value"]));
}

script$e.render = render$e;
script$e.__file = "src/components/field-renderers/NumberLongEditableRenderer.vue";

var script$f = {
  name: 'DateRenderer',
  props: {
    date: {
      type: [String, Number],
      default: undefined
    }
  },
  computed: {
    formattedDate() {
      return this.date && DatePicker.format(new Date(this.date), 'dd MMMM yyyy');
    }

  }
};

const _withId$9 = /*#__PURE__*/vue.withScopeId("data-v-7bf58b13");

const render$f = /*#__PURE__*/_withId$9((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", {
    class: "date",
    textContent: vue.toDisplayString($options.formattedDate)
  }, null, 8
  /* PROPS */
  , ["textContent"]);
});

script$f.render = render$f;
script$f.__scopeId = "data-v-7bf58b13";
script$f.__file = "src/components/field-renderers/DateRenderer.vue";

var script$g = {
  name: 'DateEditableRenderer',
  components: {
    DateRenderer: script$f,
    InlineEdit: InlineEdit.script$1,
    DatePicker: DatePicker.script
  },
  props: {
    date: {
      type: [Number, String],
      default: undefined
    },
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    timestamp() {
      return this.date && parseInt(this.date, 10);
    }

  },
  methods: {
    onSaveRequested(value, callback) {
      const timestamp = value.toString();
      this.$emit('save-requested', timestamp, callback);
    }

  }
};

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DatePicker = vue.resolveComponent("DatePicker");

  const _component_DateRenderer = vue.resolveComponent("DateRenderer");

  const _component_InlineEdit = vue.resolveComponent("InlineEdit");

  return $props.editable ? (vue.openBlock(), vue.createBlock(_component_InlineEdit, {
    key: 0,
    value: $options.timestamp,
    type: "date",
    placement: $props.placement,
    onSaveRequested: $options.onSaveRequested
  }, {
    default: vue.withCtx(() => [vue.createVNode(_component_DatePicker, {
      slot: "editor",
      "slot-scope": "props",
      value: _ctx.props.value,
      "is-invalid": _ctx.props.isInvalid,
      "is-focused": _ctx.props.isFocused,
      "is-loading": _ctx.props.isLoading,
      onInput: _ctx.props.input,
      onBlur: _ctx.props.blur,
      onFocus: _ctx.props.focus,
      onConfirm: _ctx.props.confirm,
      onKeyup: vue.withKeys(_ctx.props.cancel, ["esc"])
    }, null, 8
    /* PROPS */
    , ["value", "is-invalid", "is-focused", "is-loading", "onInput", "onBlur", "onFocus", "onConfirm", "onKeyup"]), vue.createVNode(_component_DateRenderer, {
      date: $options.timestamp
    }, null, 8
    /* PROPS */
    , ["date"])]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "placement", "onSaveRequested"])) : (vue.openBlock(), vue.createBlock(_component_DateRenderer, {
    key: 1,
    date: $options.timestamp
  }, null, 8
  /* PROPS */
  , ["date"]));
}

script$g.render = render$g;
script$g.__file = "src/components/field-renderers/DateEditableRenderer.vue";

var script$h = {
  name: 'HyperLinkRenderer',
  props: {
    link: {
      type: String,
      default: undefined
    }
  }
};

const _withId$a = /*#__PURE__*/vue.withScopeId("data-v-b8d9e592");

const render$h = /*#__PURE__*/_withId$a((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("a", {
    class: "hyperlink",
    target: "_top",
    href: $props.link,
    textContent: vue.toDisplayString($props.link)
  }, null, 8
  /* PROPS */
  , ["href", "textContent"]);
});

script$h.render = render$h;
script$h.__scopeId = "data-v-b8d9e592";
script$h.__file = "src/components/field-renderers/HyperlinkRenderer.vue";

var script$i = {
  name: 'HyperlinkEditableRenderer',
  components: {
    HyperlinkRenderer: script$h,
    InlineEdit: InlineEdit.script$1
  },
  props: {
    link: {
      type: String,
      default: undefined
    },
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    }
  },
  methods: {
    onSaveRequested(...args) {
      this.$emit('save-requested', ...args);
    }

  }
};

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HyperlinkRenderer = vue.resolveComponent("HyperlinkRenderer");

  const _component_InlineEdit = vue.resolveComponent("InlineEdit");

  return $props.editable ? (vue.openBlock(), vue.createBlock(_component_InlineEdit, {
    key: 0,
    value: $props.link,
    placement: $props.placement,
    onSaveRequested: $options.onSaveRequested
  }, {
    default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode(_component_HyperlinkRenderer, {
      link: $props.link
    }, null, 8
    /* PROPS */
    , ["link"])])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["value", "placement", "onSaveRequested"])) : (vue.openBlock(), vue.createBlock(_component_HyperlinkRenderer, {
    key: 1,
    link: $props.link
  }, null, 8
  /* PROPS */
  , ["link"]));
}

script$i.render = render$i;
script$i.__file = "src/components/field-renderers/HyperlinkEditableRenderer.vue";

var script$j = {
  name: 'IssuePriorityRenderer',
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  }
};

const _withId$b = /*#__PURE__*/vue.withScopeId("data-v-1ea4dcee");

vue.pushScopeId("data-v-1ea4dcee");

const _hoisted_1$5 = {
  class: "priority"
};

vue.popScopeId();

const render$j = /*#__PURE__*/_withId$b((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$5, [vue.createVNode("img", {
    class: "issue-priority-icon",
    src: $props.value.iconUrl,
    alt: $props.value.name,
    title: $props.value.name
  }, null, 8
  /* PROPS */
  , ["src", "alt", "title"]), vue.createVNode("span", null, vue.toDisplayString($props.value.name), 1
  /* TEXT */
  )]);
});

script$j.render = render$j;
script$j.__scopeId = "data-v-1ea4dcee";
script$j.__file = "src/components/field-renderers/IssuePriorityRenderer.vue";

var script$k = {
  name: 'IssueStatusRenderer',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    statusName() {
      return this.value && this.value.name;
    },

    statusColor() {
      return this.value && this.value.statusCategory && this.value.statusCategory.colorName;
    }

  }
};

const _withId$c = /*#__PURE__*/vue.withScopeId("data-v-50049408");

vue.pushScopeId("data-v-50049408");

const _hoisted_1$6 = {
  class: "content"
};

vue.popScopeId();

const render$k = /*#__PURE__*/_withId$c((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("span", {
    class: "status",
    "status-color": $options.statusColor,
    title: $options.statusName
  }, [vue.createVNode("span", _hoisted_1$6, vue.toDisplayString($options.statusName), 1
  /* TEXT */
  )], 8
  /* PROPS */
  , ["status-color", "title"]);
});

script$k.render = render$k;
script$k.__scopeId = "data-v-50049408";
script$k.__file = "src/components/field-renderers/IssueStatusRenderer.vue";

var script$l = {
  name: 'IssueTypeRenderer',
  props: {
    value: {
      type: Object,
      required: true
    },
    compact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeName() {
      return this.value && this.value.name;
    },

    typeIconUrl() {
      return this.value && this.value.iconUrl;
    }

  }
};

const _withId$d = /*#__PURE__*/vue.withScopeId("data-v-fedd7df8");

vue.pushScopeId("data-v-fedd7df8");

const _hoisted_1$7 = {
  class: "type"
};
const _hoisted_2$4 = {
  key: 0
};

vue.popScopeId();

const render$l = /*#__PURE__*/_withId$d((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$7, [vue.createVNode("img", {
    class: "issue-type-icon",
    src: $options.typeIconUrl,
    alt: $options.typeName,
    title: $options.typeName
  }, null, 8
  /* PROPS */
  , ["src", "alt", "title"]), $props.compact ? (vue.openBlock(), vue.createBlock("span", _hoisted_2$4, vue.toDisplayString($props.value.name), 1
  /* TEXT */
  )) : vue.createCommentVNode("v-if", true)]);
});

script$l.render = render$l;
script$l.__scopeId = "data-v-fedd7df8";
script$l.__file = "src/components/field-renderers/IssueTypeRenderer.vue";

var script$m = {
  name: 'IssueRenderer',
  components: {
    IssueStatusRenderer: script$k,
    IssuePriorityRenderer: script$j,
    IssueTypeRenderer: script$l,
    User: UserRenderer.script$1,
    QuestionIcon: SearchIcon.QuestionIcon
  },
  props: {
    issue: {
      type: Object,
      default: undefined
    },
    baseUrl: {
      type: String,
      default: ''
    },
    appearance: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'compact', 'micro'].includes(value)
    }
  },
  computed: {
    fields() {
      return this.issue.fields || {};
    },

    issueType() {
      return this.fields.issuetype;
    },

    href() {
      return `${this.baseUrl}/browse/${this.issue.key}`;
    },

    status() {
      return this.fields.status;
    },

    isResolved() {
      return !!this.fields.resolution;
    },

    priority() {
      return this.fields.priority;
    },

    assignee() {
      const {
        assignee
      } = this.fields;

      if (!assignee) {
        return undefined;
      }

      return {
        name: assignee.displayName,
        avatar: assignee.avatarUrls && assignee.avatarUrls['48x48'],
        username: assignee.name
      };
    }

  }
};

const _withId$e = /*#__PURE__*/vue.withScopeId("data-v-691a242a");

vue.pushScopeId("data-v-691a242a");

const _hoisted_1$8 = {
  key: 1,
  class: "issue-type unknown-type"
};

vue.popScopeId();

const render$m = /*#__PURE__*/_withId$e((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_IssueTypeRenderer = vue.resolveComponent("IssueTypeRenderer");

  const _component_QuestionIcon = vue.resolveComponent("QuestionIcon");

  const _component_IssuePriorityRenderer = vue.resolveComponent("IssuePriorityRenderer");

  const _component_User = vue.resolveComponent("User");

  const _component_IssueStatusRenderer = vue.resolveComponent("IssueStatusRenderer");

  return $props.issue ? (vue.openBlock(), vue.createBlock("div", {
    key: 0,
    class: "issue",
    resolved: $options.isResolved,
    appearance: $props.appearance
  }, [$options.issueType ? (vue.openBlock(), vue.createBlock(_component_IssueTypeRenderer, {
    key: 0,
    class: "issue-type",
    value: $options.issueType
  }, null, 8
  /* PROPS */
  , ["value"])) : (vue.openBlock(), vue.createBlock("div", _hoisted_1$8, [vue.createVNode(_component_QuestionIcon, {
    size: "xsmall"
  })])), vue.createVNode("a", {
    class: "issue-key",
    href: $options.href,
    target: "_blank"
  }, vue.toDisplayString($props.issue.key), 9
  /* TEXT, PROPS */
  , ["href"]), $props.appearance !== 'micro' ? (vue.openBlock(), vue.createBlock("div", {
    key: 2,
    class: "issue-summary",
    title: $options.fields.summary
  }, vue.toDisplayString($options.fields.summary), 9
  /* TEXT, PROPS */
  , ["title"])) : vue.createCommentVNode("v-if", true), $props.appearance === 'normal' ? (vue.openBlock(), vue.createBlock(vue.Fragment, {
    key: 3
  }, [$options.priority ? (vue.openBlock(), vue.createBlock(_component_IssuePriorityRenderer, {
    key: 0,
    value: $options.priority
  }, null, 8
  /* PROPS */
  , ["value"])) : vue.createCommentVNode("v-if", true), $options.assignee ? (vue.openBlock(), vue.createBlock(_component_User, {
    key: 1,
    class: "issue-assignee",
    user: $options.assignee,
    "avatar-only": true
  }, null, 8
  /* PROPS */
  , ["user"])) : vue.createCommentVNode("v-if", true), $options.status ? (vue.openBlock(), vue.createBlock(_component_IssueStatusRenderer, {
    key: 2,
    class: "issue-status",
    value: $options.status
  }, null, 8
  /* PROPS */
  , ["value"])) : vue.createCommentVNode("v-if", true)], 64
  /* STABLE_FRAGMENT */
  )) : vue.createCommentVNode("v-if", true)], 8
  /* PROPS */
  , ["resolved", "appearance"])) : vue.createCommentVNode("v-if", true);
});

script$m.render = render$m;
script$m.__scopeId = "data-v-691a242a";
script$m.__file = "src/components/field-renderers/IssueRenderer.vue";

var script$n = {
  name: 'LinkedIssuesList',
  components: {
    IssueRenderer: script$m
  },
  props: {
    issues: {
      type: Array,
      default: () => []
    },
    baseUrl: {
      type: String,
      default: ''
    },
    appearance: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'compact', 'micro'].includes(value)
    }
  }
};

const _withId$f = /*#__PURE__*/vue.withScopeId("data-v-05a8f0f3");

const render$n = /*#__PURE__*/_withId$f((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_IssueRenderer = vue.resolveComponent("IssueRenderer");

  return vue.openBlock(), vue.createBlock("ul", null, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.issues, issue => {
    return vue.openBlock(), vue.createBlock("li", {
      key: issue.id
    }, [vue.createVNode(_component_IssueRenderer, {
      issue: issue,
      "base-url": $props.baseUrl,
      appearance: $props.appearance
    }, null, 8
    /* PROPS */
    , ["issue", "base-url", "appearance"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
});

script$n.render = render$n;
script$n.__scopeId = "data-v-05a8f0f3";
script$n.__file = "src/components/field-renderers/LinkedIssuesList.vue";

var script$o = {
  name: 'MultiLineRenderer',
  props: {
    value: {
      type: String,
      default: undefined
    }
  }
};

const _withId$g = /*#__PURE__*/vue.withScopeId("data-v-1ab6f1c4");

const render$o = /*#__PURE__*/_withId$g((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", {
    class: "multi-line-wrapper",
    title: $props.value,
    textContent: vue.toDisplayString($props.value)
  }, null, 8
  /* PROPS */
  , ["title", "textContent"]);
});

script$o.render = render$o;
script$o.__scopeId = "data-v-1ab6f1c4";
script$o.__file = "src/components/field-renderers/MultiLineRenderer.vue";

var script$p = {
  name: 'MultiLineEditableRenderer',
  components: {
    MultiLineRenderer: script$o,
    InlineEdit: InlineEdit.script$1,
    TextArea: InlineEdit.script
  },
  props: {
    value: {
      type: String,
      default: undefined
    },
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    },
    icon: {
      type: Boolean,
      default: true
    },
    submitOnEnter: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onSaveRequested(...args) {
      this.$emit('save-requested', ...args);
    }

  }
};

function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MultiLineRenderer = vue.resolveComponent("MultiLineRenderer");

  const _component_TextArea = vue.resolveComponent("TextArea");

  const _component_InlineEdit = vue.resolveComponent("InlineEdit");

  return $props.editable ? (vue.openBlock(), vue.createBlock(_component_InlineEdit, {
    key: 0,
    value: $props.value,
    icon: $props.icon,
    "pencil-style": "floating",
    placement: $props.placement,
    onSaveRequested: $options.onSaveRequested
  }, {
    default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode(_component_MultiLineRenderer, {
      value: $props.value
    }, null, 8
    /* PROPS */
    , ["value"])]), vue.createVNode(_component_TextArea, {
      slot: "editor",
      "slot-scope": "{ value, input, isFocused, isInvalid, isLoading, blur, focus, confirm, cancel }",
      value: $props.value,
      "is-focused": _ctx.isFocused,
      "is-invalid": _ctx.isInvalid,
      "is-loading": _ctx.isLoading,
      "submit-on-enter": $props.submitOnEnter,
      onConfirm: _ctx.confirm,
      onKeydown: vue.withKeys(vue.withModifiers(_ctx.confirm, ["meta"]), ["enter"]),
      onKeyup: vue.withKeys(_ctx.cancel, ["esc"]),
      onInput: _ctx.input,
      onBlur: _ctx.blur,
      onFocus: _ctx.focus
    }, null, 8
    /* PROPS */
    , ["value", "is-focused", "is-invalid", "is-loading", "submit-on-enter", "onConfirm", "onKeydown", "onKeyup", "onInput", "onBlur", "onFocus"])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["value", "icon", "placement", "onSaveRequested"])) : (vue.openBlock(), vue.createBlock(_component_MultiLineRenderer, {
    key: 1,
    value: $props.value
  }, null, 8
  /* PROPS */
  , ["value"]));
}

script$p.render = render$p;
script$p.__file = "src/components/field-renderers/MultiLineEditableRenderer.vue";

exports.script = script$1;
exports.script$1 = script;
exports.script$10 = script$a;
exports.script$11 = script$c;
exports.script$12 = script$b;
exports.script$13 = script$e;
exports.script$14 = script$d;
exports.script$15 = script$g;
exports.script$16 = script$f;
exports.script$17 = script$i;
exports.script$18 = script$h;
exports.script$19 = script$j;
exports.script$2 = script$3;
exports.script$20 = script$k;
exports.script$21 = script$l;
exports.script$22 = script$m;
exports.script$23 = script$n;
exports.script$24 = script$o;
exports.script$25 = script$p;
exports.script$3 = script$2;
exports.script$4 = script$4;
exports.script$5 = script$6;
exports.script$6 = script$7;
exports.script$7 = script$5;
exports.script$8 = script$8;
exports.script$9 = script$9;
