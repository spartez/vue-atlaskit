import { resolveComponent, openBlock, createBlock, withDirectives, createVNode, mergeProps, toHandlers, vModelText, withScopeId, pushScopeId, popScopeId, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, withKeys, renderSlot, withModifiers, vModelDynamic } from 'vue';
import { s as script$7 } from './Button-b4f025d8.js';
import { E as EditFilledIcon } from './EditFilledIcon-dddb5113.js';
import { E as EditorCloseIcon } from './EditorCloseIcon-2ac45175.js';
import { C as Checked } from './EditorDoneIcon-5f2237f7.js';
import { s as script$5 } from './TextField-55b306ba.js';
import { s as script$6 } from './Popper-727f45db.js';

const ENTER = 13;
var script = {
  name: 'TextArea',
  components: {
    TextField: script$5
  },
  emits: ['blur', 'focus', 'confirm', 'update:modelValue'],
  props: {
    modelValue: {
      type: String,
      required: true
    },
    isFocused: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: 'auto'
    },
    maxHeight: {
      type: [Number, String],
      default: 'auto'
    },
    width: {
      type: [Number, String],
      default: '100%'
    },
    rows: {
      type: String,
      default: '1'
    },
    submitOnEnter: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentHeight: this.height,
      focused: this.isFocused
    };
  },

  computed: {
    listeners() {
      const {
        input,
        ...listeners
      } = this.$attrs;
      return listeners;
    },

    text: {
      get() {
        return this.modelValue;
      },

      set(value) {
        this.$emit('update:modelValue', value);
      }

    }
  },
  watch: {
    isFocused: {
      handler() {
        this.focused = this.isFocused;

        if (this.focused) {
          this.$nextTick(() => this.$refs.textarea.focus());
        }
      },

      immediate: true
    }
  },

  mounted() {
    if (this.height === 'auto') {
      this.currentHeight = `${this.$refs.textarea.scrollHeight}px`;
    }
  },

  methods: {
    onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },

    onFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },

    resize(e) {
      if (this.submitOnEnter && e.keyCode === ENTER) {
        this.$emit('confirm');
        return;
      }

      if (this.height === 'auto') {
        this.currentHeight = 'auto';
        this.$nextTick(() => {
          if (this.$refs.textarea) {
            this.currentHeight = `${this.$refs.textarea.scrollHeight}px`;
          }
        });
      }
    }

  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-21e949e5");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_TextField = resolveComponent("TextField");

  return openBlock(), createBlock(_component_TextField, {
    "is-focused": $data.focused,
    "is-invalid": $props.isInvalid,
    "is-loading": $props.isLoading,
    disabled: $props.isDisabled || $props.isLoading
  }, {
    default: _withId(() => [withDirectives(createVNode("textarea", mergeProps({
      ref: "textarea",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $options.text = $event)
    }, _ctx.$attrs, {
      rows: $props.rows,
      disabled: $props.isDisabled || $props.isLoading,
      style: {
        height: $data.currentHeight,
        width: $props.width,
        maxHeight: $props.maxHeight
      },
      auto: $props.height === 'auto'
    }, toHandlers($options.listeners), {
      onKeydown: _cache[2] || (_cache[2] = (...args) => $options.resize && $options.resize(...args)),
      onInput: _cache[3] || (_cache[3] = (...args) => $options.resize && $options.resize(...args)),
      onFocus: _cache[4] || (_cache[4] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onBlur: _cache[5] || (_cache[5] = (...args) => $options.onBlur && $options.onBlur(...args))
    }), null, 16
    /* FULL_PROPS */
    , ["rows", "disabled", "auto"]), [[vModelText, $options.text]])]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-focused", "is-invalid", "is-loading", "disabled"]);
});

script.render = render;
script.__scopeId = "data-v-21e949e5";
script.__file = "src/components/Form/TextArea.vue";

var script$1 = {
  name: 'InlineErrorMessage',
  components: {
    Popper: script$6
  },
  props: {
    error: {
      type: Error,
      required: true
    },
    targetElement: {
      type: HTMLElement,
      required: true
    },
    placement: {
      type: String,
      default: 'right'
    }
  }
};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-00c5fc3a");

pushScopeId("data-v-00c5fc3a");

const _hoisted_1 = {
  ref: "error-dialog",
  class: "error-dialog"
};

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Popper = resolveComponent("Popper");

  return openBlock(), createBlock(_component_Popper, {
    "target-element": $props.targetElement,
    placement: $props.placement,
    "flip-behavior": ['right', 'top-end']
  }, {
    default: _withId$1(() => [createVNode("div", _hoisted_1, [$props.error.fieldErrors ? (openBlock(true), createBlock(Fragment, {
      key: 0
    }, renderList($props.error.fieldErrors, (fieldError, i) => {
      return openBlock(), createBlock("div", {
        key: i,
        class: "error-message"
      }, toDisplayString(fieldError.message || $props.error.message), 1
      /* TEXT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    )) : $props.error.message ? (openBlock(), createBlock(Fragment, {
      key: 1
    }, [createTextVNode(toDisplayString($props.error.message), 1
    /* TEXT */
    )], 64
    /* STABLE_FRAGMENT */
    )) : createCommentVNode("v-if", true)], 512
    /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["target-element", "placement"]);
});

script$1.render = render$1;
script$1.__scopeId = "data-v-00c5fc3a";
script$1.__file = "src/components/Form/InlineErrorMessage.vue";

var script$2 = {
  name: 'InlineEditButtons',
  components: {
    EditorDoneIcon: Checked,
    Button: script$7,
    EditorCloseIcon
  },
  methods: {
    onConfirm() {
      this.$emit('confirm');
    },

    onCancel() {
      this.$emit('cancel');
    },

    onFocus(event) {
      this.$emit('focus', event);
    },

    onBlur(event) {
      this.$emit('blur', event);
    }

  }
};

const _withId$2 = /*#__PURE__*/withScopeId("data-v-ed063c7a");

pushScopeId("data-v-ed063c7a");

const _hoisted_1$1 = {
  class: "buttons-wrapper"
};

popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_EditorDoneIcon = resolveComponent("EditorDoneIcon");

  const _component_Button = resolveComponent("Button");

  const _component_EditorCloseIcon = resolveComponent("EditorCloseIcon");

  return openBlock(), createBlock("div", _hoisted_1$1, [createVNode(_component_Button, {
    spacing: "none",
    class: "box-shadow-wrapper",
    "data-cy": "submit-button",
    onClick: $options.onConfirm,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur
  }, {
    default: _withId$2(() => [createVNode(_component_EditorDoneIcon, {
      slot: "icon-before",
      size: "small"
    })]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick", "onFocus", "onBlur"]), createVNode(_component_Button, {
    spacing: "none",
    class: "box-shadow-wrapper",
    "data-cy": "cancel-button",
    onClick: $options.onCancel,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur
  }, {
    default: _withId$2(() => [createVNode(_component_EditorCloseIcon, {
      slot: "icon-before",
      size: "small"
    })]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick", "onFocus", "onBlur"])]);
});

script$2.render = render$2;
script$2.__scopeId = "data-v-ed063c7a";
script$2.__file = "src/components/Form/InlineEditButtons.vue";

const DRAG_THRESHOLD = 5;
var script$3 = {
  name: 'InlineEditViewContent',
  components: {
    EditFilledIcon
  },

  data() {
    return {
      startX: 0,
      startY: 0
    };
  },

  methods: {
    onMouseDown(e) {
      this.startX = e.clientX;
      this.startY = e.clientY;
    },

    onEnter() {
      this.$emit('edit-requested');
    },

    onClick(e) {
      if (this.mouseHasMoved(e)) return;
      this.$emit('edit-requested');
    },

    mouseHasMoved({
      clientX,
      clientY
    }) {
      return Math.abs(this.startX - clientX) >= DRAG_THRESHOLD || Math.abs(this.startY - clientY) >= DRAG_THRESHOLD;
    }

  }
};

const _withId$3 = /*#__PURE__*/withScopeId("data-v-94288c54");

pushScopeId("data-v-94288c54");

const _hoisted_1$2 = {
  class: "label",
  "data-cy": "label",
  tabindex: "-1"
};
const _hoisted_2 = {
  class: "pencil-icon"
};

popScopeId();

const render$3 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_EditFilledIcon = resolveComponent("EditFilledIcon");

  return openBlock(), createBlock("div", {
    tabindex: "0",
    "prevent-outline": "",
    "data-cy": "view-content",
    class: "view-content",
    onKeyup: _cache[1] || (_cache[1] = withKeys((...args) => $options.onEnter && $options.onEnter(...args), ["enter"])),
    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClick && $options.onClick(...args)),
    onMousedown: _cache[3] || (_cache[3] = (...args) => $options.onMouseDown && $options.onMouseDown(...args))
  }, [createVNode("div", _hoisted_1$2, [renderSlot(_ctx.$slots, "default"), createVNode("div", _hoisted_2, [createVNode(_component_EditFilledIcon, {
    size: "xsmall"
  })])])], 32
  /* HYDRATE_EVENTS */
  );
});

script$3.render = render$3;
script$3.__scopeId = "data-v-94288c54";
script$3.__file = "src/components/Form/InlineEditViewContent.vue";

const ENTER$1 = 13;
const ESC = 27;
const BACKSPACE = 8;
const TAB = 9;
const Status = {
  VALIDATION_ERROR: 422
};
var script$4 = {
  name: 'InlineEdit',
  components: {
    TextField: script$5,
    InlineEditButtons: script$2,
    InlineEditViewContent: script$3,
    InlineErrorMessage: script$1,
    Popper: script$6
  },
  props: {
    value: {
      type: [Number, String, Boolean, Array, Object],
      default: undefined
    },
    type: {
      type: String,
      default: 'text'
    },
    step: {
      type: String,
      default: 'any'
    },
    maxlength: {
      type: Number,
      default: undefined
    },
    compact: {
      type: Boolean,
      default: false
    },
    offset: {
      type: String,
      default: '0,5'
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
    placement: {
      type: String,
      default: 'right'
    }
  },

  data() {
    return {
      isFocused: false,
      isEditing: false,
      isLoading: false,
      editingValue: this.value,
      error: undefined,
      isDirty: false,
      contentWidth: 0,
      contentHeight: 0
    };
  },

  computed: {
    isValidationError() {
      return this.error && (!this.error.status || this.error.status === Status.VALIDATION_ERROR);
    }

  },
  watch: {
    isEditing(isEditing) {
      if (!isEditing) {
        this.$refs['text-field'].style['min-width'] = 'auto';
        this.error = undefined;
      }
    },

    editingValue() {
      this.isDirty = true;
      this.$nextTick(() => {
        if (this.$refs.buttons) {
          this.$refs.buttons.update();
        }
      });
    },

    value() {
      this.editingValue = this.value;
    }

  },
  methods: {
    onInput(value) {
      this.editingValue = value;
    },

    onBlur(event) {
      if (!this.confirm) {
        this.confirmEditedValue();
      }

      const focusWithinComponent = this.$refs.container.contains(event.relatedTarget);
      if (!this.isEditing || this.isLoading) return;

      if (!focusWithinComponent) {
        this.$nextTick(() => this.cancelInlineEdit());
      }

      this.isFocused = false;
    },

    onFocus() {
      this.isFocused = true;
    },

    onKeyUp(e) {
      if (e.keyCode === ENTER$1) this.confirmEditedValue();
      if (e.keyCode === ESC) this.cancelInlineEdit();
    },

    onEditRequested() {
      this.isEditing = true;
      this.isFocused = true;
      this.$nextTick(() => {
        if (this.$refs.input) {
          this.$refs.input.focus();
        }
      });
    },

    saveInlineEdit(error) {
      this.isDirty = false;

      if (error) {
        this.onValidateError(error);
        return;
      }

      this.isLoading = false;
      this.isEditing = false;
      this.editingValue = this.value;
    },

    cancelInlineEdit() {
      this.isEditing = false;
      this.editingValue = this.value;
    },

    onValidateError(error) {
      this.isLoading = false;
      this.isFocused = false;
      this.error = error;
      this.$nextTick(() => {
        this.isFocused = true;

        if (this.$refs.input) {
          this.$refs.input.focus();
        }
      });
    },

    confirmEditedValue() {
      if (this.value === this.editingValue) {
        this.isEditing = false;
        this.error = undefined;
        return;
      }

      if (!this.isLoading) {
        if (this.isDirty) {
          this.isLoading = true;
          this.$emit('save-requested', this.editingValue, this.saveInlineEdit);
        } else if (this.error) {
          this.onValidateError(this.error);
        }
      }
    },

    beforeTextFieldMount() {
      const {
        width,
        height
      } = this.$refs.value.$el.getBoundingClientRect();
      this.contentWidth = width;
      this.contentHeight = height;
    },

    validate(e) {
      if (!this.pattern) return;

      if (![TAB, BACKSPACE].includes(e.keyCode) && !this.isValidId(e.key)) {
        e.preventDefault();
      }
    },

    isValidId(key) {
      const pattern = new RegExp(this.pattern);
      return pattern.test(key);
    }

  }
};

const _withId$4 = /*#__PURE__*/withScopeId("data-v-adcebce4");

const render$4 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_TextField = resolveComponent("TextField");

  const _component_InlineEditViewContent = resolveComponent("InlineEditViewContent");

  const _component_InlineEditButtons = resolveComponent("InlineEditButtons");

  const _component_Popper = resolveComponent("Popper");

  const _component_InlineErrorMessage = resolveComponent("InlineErrorMessage");

  return openBlock(), createBlock("div", {
    ref: "container",
    class: "content-editable-wrapper",
    editing: $data.isEditing
  }, [createVNode("div", {
    ref: "text-field",
    class: "content-editable",
    compact: $props.compact,
    "is-invalid": !!$data.error
  }, [$data.isEditing ? renderSlot(_ctx.$slots, "editor", {
    key: 0,
    value: $data.editingValue,
    input: $options.onInput,
    blur: $options.onBlur,
    focus: $options.onFocus,
    confirm: $options.confirmEditedValue,
    cancel: $options.cancelInlineEdit,
    isFocused: $data.isFocused,
    isInvalid: !!$data.error,
    isLoading: $data.isLoading,
    contentWidth: $data.contentWidth,
    contentHeight: $data.contentHeight
  }, () => [createVNode(_component_TextField, {
    "is-focused": $data.isFocused,
    "is-invalid": !!$data.error,
    "is-loading": $data.isLoading,
    style: {
      minWidth: `${$data.contentWidth}px`
    },
    "is-disabled": $data.isLoading,
    compact: $props.compact,
    onClick: _cache[7] || (_cache[7] = withModifiers(() => {}, ["stop"])),
    "onHook:beforeMount": $options.beforeTextFieldMount
  }, {
    default: _withId$4(() => [withDirectives(createVNode("input", {
      ref: "input",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.editingValue = $event),
      type: $props.type,
      step: $props.step,
      class: "input",
      maxlength: $props.maxlength,
      disabled: $data.isLoading,
      align: $props.align,
      onKeyup: _cache[2] || (_cache[2] = (...args) => $options.onKeyUp && $options.onKeyUp(...args)),
      onKeydown: [_cache[3] || (_cache[3] = withKeys(withModifiers((...args) => $options.onKeyUp && $options.onKeyUp(...args), ["meta"]), ["enter"])), _cache[4] || (_cache[4] = withModifiers((...args) => $options.validate && $options.validate(...args), ["exact"]))],
      onFocus: _cache[5] || (_cache[5] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onBlur: _cache[6] || (_cache[6] = (...args) => $options.onBlur && $options.onBlur(...args))
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , ["type", "step", "maxlength", "disabled", "align"]), [[vModelDynamic, $data.editingValue]])]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-focused", "is-invalid", "is-loading", "style", "is-disabled", "compact", "onHook:beforeMount"])]) : (openBlock(), createBlock(_component_InlineEditViewContent, {
    key: 1,
    ref: "value",
    compact: $props.compact,
    icon: $props.icon,
    align: $props.align,
    onEditRequested: $options.onEditRequested
  }, {
    default: _withId$4(() => [renderSlot(_ctx.$slots, "default")]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["compact", "icon", "align", "onEditRequested"]))], 8
  /* PROPS */
  , ["compact", "is-invalid"]), $data.isEditing && !$data.isLoading && $props.confirm ? (openBlock(), createBlock(_component_Popper, {
    key: 0,
    ref: "buttons",
    offset: $props.offset,
    "target-element": _ctx.$refs['text-field']
  }, {
    default: _withId$4(() => [createVNode(_component_InlineEditButtons, {
      onConfirm: $options.confirmEditedValue,
      onCancel: $options.cancelInlineEdit,
      onBlur: $options.onBlur
    }, null, 8
    /* PROPS */
    , ["onConfirm", "onCancel", "onBlur"])]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["offset", "target-element"])) : createCommentVNode("v-if", true), $options.isValidationError ? (openBlock(), createBlock(_component_InlineErrorMessage, {
    key: 1,
    error: $data.error,
    "target-element": _ctx.$refs['text-field'],
    placement: $props.placement
  }, null, 8
  /* PROPS */
  , ["error", "target-element", "placement"])) : createCommentVNode("v-if", true)], 8
  /* PROPS */
  , ["editing"]);
});

script$4.render = render$4;
script$4.__scopeId = "data-v-adcebce4";
script$4.__file = "src/components/Form/InlineEdit.vue";

export { script$4 as a, script$1 as b, script as s };
