'use strict';

var Spinner = require('./Spinner-849e0846.js');
var vue = require('vue');
var EditorCloseIcon = require('./EditorCloseIcon-3c49f504.js');
var HipchatChevronDownIcon = require('./HipchatChevronDownIcon-f3b4f9fa.js');
var TextField = require('./TextField-471e9801.js');
var Popper = require('./Popper-9e63994e.js');

var script = {
  name: 'SelectOption',
  props: {
    option: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: undefined
    },
    selectedId: {
      type: [String, Number],
      default: undefined
    },
    currentSuggestionIndex: {
      type: Number,
      default: undefined
    }
  },
  computed: {
    isSelected() {
      return this.selectedId === this.option.id;
    },

    current() {
      return this.currentSuggestionIndex === this.index;
    }

  },
  watch: {
    current(isCurrent) {
      if (isCurrent) {
        this.$nextTick(() => {
          if (!this.$refs.option) return;
          const isMicrosoftBrowser = new RegExp(['MSIE ', 'Edge/'].join('|')).test(navigator.userAgent);
          if (isMicrosoftBrowser) return;
          this.$refs.option.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
          });
        });
      }
    }

  },
  methods: {
    onOptionSelected() {
      this.$emit('option-selected', this.option);
    },

    onMouseOver() {
      this.$emit('hover', this.index);
    }

  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-83e2ea38");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", {
    ref: "option",
    selected: $options.isSelected,
    class: "select-option",
    current: $options.current,
    onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.onOptionSelected && $options.onOptionSelected(...args), ["stop"])),
    onMouseover: _cache[2] || (_cache[2] = (...args) => $options.onMouseOver && $options.onMouseOver(...args))
  }, [vue.renderSlot(_ctx.$slots, "option", {
    option: $props.option.value,
    isCurrent: $options.current
  }, () => [vue.createTextVNode(vue.toDisplayString($props.option.label), 1
  /* TEXT */
  )])], 40
  /* PROPS, HYDRATE_EVENTS */
  , ["selected", "current"]);
});

script.render = render;
script.__scopeId = "data-v-83e2ea38";
script.__file = "src/components/Select/SelectOption.vue";

var script$1 = {
  name: 'SelectMenu',
  components: {
    SelectOption: script
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    selected: {
      type: [Array, Object],
      default: () => ({})
    },
    currentSuggestionIndex: {
      type: Number,
      default: undefined
    },
    hasSuggestions: {
      type: Boolean,
      default: false
    },
    containsQuery: {
      type: Boolean,
      default: false
    },
    async: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    noOptionsMessage: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    }
  },
  computed: {
    selectedId() {
      return !Array.isArray(this.selected) ? this.selected.id : undefined;
    }

  },

  mounted() {
    if (this.appendToBody) {
      document.body.appendChild(this.$el);
      setTimeout(() => {
        this.$emit('update-popper-position');
      }, 0);
    }
  },

  methods: {
    onOptionSelected(option) {
      this.$emit('option-selected', option);
    },

    onMouseOver(index) {
      this.$emit('hover', index);
    },

    resetIndex() {
      this.$emit('hover', undefined);
    }

  }
};

const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-d9dd86e4");

vue.pushScopeId("data-v-d9dd86e4");

const _hoisted_1 = {
  class: "select-menu-inner"
};
const _hoisted_2 = {
  key: 0,
  "data-cy": "no-options",
  class: "no-options"
};

vue.popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_SelectOption = vue.resolveComponent("SelectOption");

  return vue.openBlock(), vue.createBlock("div", {
    ref: "menu",
    class: "select-menu",
    tabindex: "-1",
    onMousedown: _cache[2] || (_cache[2] = vue.withModifiers(() => {}, ["prevent"]))
  }, [vue.createVNode("div", _hoisted_1, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.options, (item, index) => {
    return vue.openBlock(), vue.createBlock(_component_SelectOption, {
      key: `${item.id}-${index}`,
      "selected-id": $options.selectedId,
      option: item,
      index: index,
      "current-suggestion-index": $props.currentSuggestionIndex,
      "data-cy": "select-option",
      onHover: $options.onMouseOver,
      onOptionSelected: $options.onOptionSelected
    }, {
      option: _withId$1(({
        option,
        isCurrent
      }) => [vue.renderSlot(_ctx.$slots, "option", {
        isCurrent: isCurrent,
        option: option
      })]),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["selected-id", "option", "index", "current-suggestion-index", "onHover", "onOptionSelected"]);
  }), 128
  /* KEYED_FRAGMENT */
  )), !$props.hasSuggestions ? (vue.openBlock(), vue.createBlock("div", _hoisted_2, vue.toDisplayString(!$props.containsQuery && $props.async ? $props.placeholder : $props.noOptionsMessage), 1
  /* TEXT */
  )) : vue.createCommentVNode("v-if", true)]), _ctx.$slots.default ? (vue.openBlock(), vue.createBlock("div", {
    key: 0,
    onMouseover: _cache[1] || (_cache[1] = (...args) => $options.resetIndex && $options.resetIndex(...args))
  }, [vue.renderSlot(_ctx.$slots, "default")], 32
  /* HYDRATE_EVENTS */
  )) : vue.createCommentVNode("v-if", true)], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  );
});

script$1.render = render$1;
script$1.__scopeId = "data-v-d9dd86e4";
script$1.__file = "src/components/Select/SelectMenu.vue";

var script$2 = {
  name: 'Tag',
  components: {
    EditorCloseIcon: EditorCloseIcon.EditorCloseIcon
  },
  props: {
    tag: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {};
  },

  computed: {
    shouldShowRemoveButton() {
      return this.min !== this.count && !this.tag.disabled;
    }

  },
  methods: {
    onRemove() {
      this.$emit('on-remove', this.tag.id);
    },

    onDragStart(e) {
      this.$emit('dragstart', e, this.index);
    },

    onDragEnd(e) {
      this.$emit('dragend', e);
    },

    onDrag(e) {
      this.$emit('drag', e);
    }

  }
};

const _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-034fca97");

vue.pushScopeId("data-v-034fca97");

const _hoisted_1$1 = {
  class: "label"
};

vue.popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_EditorCloseIcon = vue.resolveComponent("EditorCloseIcon");

  return vue.openBlock(), vue.createBlock("div", {
    class: "tag",
    draggable: "true",
    onDragstart: _cache[3] || (_cache[3] = (...args) => $options.onDragStart && $options.onDragStart(...args)),
    onDragend: _cache[4] || (_cache[4] = vue.withModifiers((...args) => $options.onDragEnd && $options.onDragEnd(...args), ["prevent"])),
    onDrag: _cache[5] || (_cache[5] = (...args) => $options.onDrag && $options.onDrag(...args))
  }, [vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode("div", _hoisted_1$1, vue.toDisplayString($props.tag.label), 1
  /* TEXT */
  )]), $options.shouldShowRemoveButton ? (vue.openBlock(), vue.createBlock("div", {
    key: 0,
    ref: "remove",
    class: "remove-tag",
    "data-cy": "remove-tag",
    onMousedown: _cache[1] || (_cache[1] = vue.withModifiers(() => {}, ["prevent", "stop"])),
    onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.onRemove && $options.onRemove(...args), ["stop"]))
  }, [vue.createVNode(_component_EditorCloseIcon, {
    "primary-color": "#000",
    size: "xsmall"
  })], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  )) : vue.createCommentVNode("v-if", true)], 32
  /* HYDRATE_EVENTS */
  );
});

script$2.render = render$2;
script$2.__scopeId = "data-v-034fca97";
script$2.__file = "src/components/Select/Tag.vue";

var script$3 = {
  name: 'Icons',
  components: {
    Spinner: Spinner.script,
    Caret: HipchatChevronDownIcon.Caret,
    Clear: HipchatChevronDownIcon.Clear
  },
  props: {
    isFetching: {
      type: Boolean,
      default: false
    },
    isSelected: {
      type: Boolean,
      default: false
    },
    createable: {
      type: Boolean,
      default: false
    },
    isClearable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    shouldShowClearIcon() {
      return this.isSelected && !this.isFetching && this.isClearable;
    }

  },
  methods: {
    onClear() {
      this.$emit('clear');
    }

  }
};

const _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-19124e52");

vue.pushScopeId("data-v-19124e52");

const _hoisted_1$2 = {
  class: "icons"
};

vue.popScopeId();

const render$3 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Spinner = vue.resolveComponent("Spinner");

  const _component_Clear = vue.resolveComponent("Clear");

  const _component_Caret = vue.resolveComponent("Caret");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [$props.isFetching ? (vue.openBlock(), vue.createBlock(_component_Spinner, {
    key: 0,
    class: "spinner-icon",
    size: "icon"
  })) : vue.createCommentVNode("v-if", true), $options.shouldShowClearIcon ? (vue.openBlock(), vue.createBlock(_component_Clear, {
    key: 1,
    size: "xsmall",
    class: "clear-icon",
    "primary-color": "#A5ADBA",
    onClick: $options.onClear
  }, null, 8
  /* PROPS */
  , ["onClick"])) : vue.createCommentVNode("v-if", true), vue.renderSlot(_ctx.$slots, "default", {}, () => [!$props.createable ? (vue.openBlock(), vue.createBlock(_component_Caret, {
    key: 0,
    size: "xsmall"
  })) : vue.createCommentVNode("v-if", true)])]);
});

script$3.render = render$3;
script$3.__scopeId = "data-v-19124e52";
script$3.__file = "src/components/Select/Icons.vue";

const INPUT_WIDTH = '5px';
var script$4 = {
  components: {
    TextField: TextField.script,
    Popper: Popper.script,
    SelectMenu: script$1,
    Tag: script$2,
    Icons: script$3
  },
  props: {
    value: {
      type: [String, Number, Object, Array],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: 'Type to search...'
    },
    searchPromptText: {
      type: String,
      default: 'Type to search...'
    },
    multi: {
      type: Boolean,
      default: false
    },
    filterPredicate: {
      type: Function,
      default: (label = '', input = '') => label.toString().toLowerCase().includes(input.toLowerCase().trim())
    },
    normalizer: {
      type: Function,
      default: value => ({
        id: value,
        label: value,
        value,
        disabled: false
      })
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isFetching: {
      type: Boolean,
      default: false
    },
    isFocused: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    async: {
      type: Boolean,
      default: false
    },
    boundariesElement: {
      type: String,
      default: 'viewport'
    },
    noOptionsMessage: {
      type: String,
      default: 'No options'
    },
    createable: {
      type: Boolean,
      default: false
    },
    isClearable: {
      type: Boolean,
      default: true
    },
    isValidOption: {
      type: Function,
      default: () => true
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    select: {
      type: Boolean,
      default: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isOpen: false,
      search: '',
      focused: false,
      currentSuggestionIndex: undefined,
      currentWidth: INPUT_WIDTH,
      isDirty: false,
      selectWidth: 'auto',
      draggedElement: undefined,
      prevIndex: undefined,
      nextIndex: undefined
    };
  },

  computed: {
    selected() {
      return this.multi ? this.value.map(e => this.normalizer(e)) : this.normalizer(this.value);
    },

    normalizedOptions() {
      return this.options.map(e => this.normalizer(e));
    },

    input() {
      return this.search ? '' : this.selected.label || this.placeholder;
    },

    nonSelectedSuggestions() {
      return this.multi ? this.normalizedOptions.filter(option => !this.selected.find(selected => option.id === selected.id)) : this.normalizedOptions;
    },

    suggestions() {
      if (this.search && !this.async) {
        return this.nonSelectedSuggestions.filter(option => this.filterPredicate(option.label, this.search));
      }

      return this.nonSelectedSuggestions;
    },

    hasSuggestions() {
      return this.suggestions && this.suggestions.length > 0;
    },

    isAnyOptionSelected() {
      return this.multi && !!this.selected.filter(o => !o.disabled).length || !!this.selected.value;
    },

    disabled() {
      return this.multi && this.selected.filter(o => o.disabled).map(o => o.value);
    },

    shouldBackspaceRemoveOption() {
      return !this.isClearable || this.multi && this.selected.length === 0;
    },

    canRemoveLastTag() {
      return !this.search && this.selected.length > this.min;
    },

    canClearSelectedOption() {
      return !this.search && !this.multi && this.selected;
    },

    canCreateTag() {
      return this.createable && this.search && this.selected.length < this.max;
    },

    shouldOpenMenu() {
      return this.isOpen && !this.isDirty && !this.createable;
    },

    nonClearableOptions() {
      if (this.multi) {
        const min = this.selected.slice(0, this.min).map(o => o.value);
        return [...new Set([...this.disabled, ...min])];
      }

      return undefined;
    },

    showClearIcon() {
      if (this.multi) {
        return this.selected.length > this.min;
      }

      return this.isClearable;
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
    },

    search() {
      if (!this.search) this.currentWidth = INPUT_WIDTH;
      if (this.async && this.search) this.isDirty = true;
      this.$emit('search-change', this.search);
    },

    isOpen(open) {
      if (!open) {
        this.currentSuggestionIndex = undefined;
        this.$emit('close');
      } else {
        const {
          width
        } = this.$refs.target.getBoundingClientRect();
        this.selectWidth = `${width}px`;
        this.$emit('open');
      }
    },

    isFetching(isFetching) {
      if (!isFetching) {
        this.isDirty = false;
      }
    },

    suggestions() {
      this.$nextTick(() => this.updatePopperPosition());
    }

  },
  methods: {
    onFocus(e) {
      if (this.isLoading) return;
      this.focused = true;

      if (this.$refs.target && !this.$refs.target.contains(e.relatedTarget)) {
        this.isOpen = true;
      }

      this.$emit('focus', e);
    },

    onBlur(e) {
      if (this.$refs.target && !this.$refs.target.contains(e.relatedTarget)) {
        if (this.canCreateTag) {
          this.createTag();
        }

        this.search = '';
        this.closeOptions();
        this.$emit('blur', e);
      }
    },

    click() {
      this.isOpen = !this.isOpen;
      this.$refs.input.focus();
    },

    onEsc() {
      this.isOpen = false;
      this.$emit('cancel');
    },

    closeOptions() {
      this.isOpen = false;
      this.focused = false;
    },

    onClear() {
      this.$emit('update:value', this.nonClearableOptions);
      this.isOpen = false;
      this.$nextTick(() => this.$refs.input.focus());
    },

    onOptionSelected(option) {
      this.search = '';
      this.isOpen = false;
      this.focused = true;
      const selected = this.multi ? [...this.selected.map(e => e.value), option.value] : option.value;
      this.$emit('update:value', selected);
    },

    onInput({
      target
    }) {
      this.search = target.value;
      this.isOpen = true;
      this.resize();
      this.updatePopperPosition();
    },

    onRemove(id) {
      if (!this.selected.length) return;
      const selected = this.selected.filter(option => option.id !== id || option.disabled).map(option => option.value);
      this.updatePopperPosition();
      this.$emit('update:value', selected);
      this.$nextTick(() => this.updatePopperPosition());
    },

    removeOption() {
      if (this.shouldBackspaceRemoveOption) return;

      if (this.canRemoveLastTag) {
        const {
          id
        } = this.selected[this.selected.length - 1];
        this.onRemove(id);
      } else if (this.canClearSelectedOption) {
        this.$emit('update:value', undefined);
      }
    },

    onNextSuggestion() {
      if (!this.isOpen) this.isOpen = true;

      if (!this.hasSuggestions) {
        this.currentSuggestionIndex = undefined;
        return;
      }

      if (this.currentSuggestionIndex === undefined) {
        this.currentSuggestionIndex = 0;
      } else {
        this.currentSuggestionIndex += 1;

        if (this.currentSuggestionIndex > this.suggestions.length - 1) {
          this.currentSuggestionIndex = 0;
        }
      }
    },

    onPreviousSuggestion() {
      if (!this.isOpen) this.isOpen = true;

      if (!this.hasSuggestions) {
        this.currentSuggestionIndex = undefined;
        return;
      }

      if (this.currentSuggestionIndex === undefined) {
        this.currentSuggestionIndex = this.suggestions.length - 1;
      } else {
        this.currentSuggestionIndex -= 1;

        if (this.currentSuggestionIndex < 0) {
          this.currentSuggestionIndex = this.suggestions.length - 1;
        }
      }
    },

    onMouseOverSuggestion(id) {
      this.currentSuggestionIndex = id;
    },

    onSuggestionSelected(e) {
      if (this.canCreateTag) {
        if (!this.isValidOption(this.search)) {
          this.$emit('error');
          return;
        }

        this.createTag();
      } // if current index is undefined, means we don't want to select any value, just submit


      if (this.currentSuggestionIndex === undefined) {
        this.$emit('confirm', e);
        return;
      }

      e.preventDefault();

      if (!this.hasSuggestions && this.isOpen) {
        return;
      }

      const option = this.suggestions[this.currentSuggestionIndex];
      this.currentSuggestionIndex = undefined;
      this.$nextTick(() => {
        this.$refs.input.focus();
        this.onOptionSelected(option);
      });
    },

    resize() {
      this.$nextTick(() => {
        if (this.$refs.input) {
          this.currentWidth = `${this.$refs.input.scrollWidth}px`;
        }
      });
    },

    updatePopperPosition() {
      if (this.$refs.menu) {
        this.$refs.menu.update();
      }
    },

    createTag() {
      const selected = this.multi ? [...this.selected.map(o => o.value), this.search] : this.search;
      this.search = '';
      this.$emit('update:value', selected);
    },

    handleDrag(e) {
      const x = e.clientX;
      const y = e.clientY;
      this.draggedElement.classList.add('ghost');
      const el = document.elementFromPoint(x, y);
      let swapItem = el === null ? this.draggedElement : el.closest('[draggable="true"]');

      if (swapItem) {
        swapItem = swapItem !== this.draggedElement.nextSibling ? swapItem : swapItem.nextSibling;
        this.$refs.list.insertBefore(this.draggedElement, swapItem);
      }
    },

    onDragEnd() {
      this.dragging = false;
      const nextIndex = [...this.$refs.list.children].indexOf(this.draggedElement);
      this.draggedElement.classList.remove('ghost');
      const list = [...this.selected];
      const [item] = list.splice(this.prevIndex, 1);
      list.splice(nextIndex, 0, item);
      this.$emit('update:value', list.map(e => e.value));
      this.$refs.input.focus();
    },

    onDragStart(e, index) {
      this.dragging = true;
      this.isOpen = false;
      this.draggedElement = e.target;
      this.prevIndex = index;
    }

  }
};

const _withId$4 = /*#__PURE__*/vue.withScopeId("data-v-037c1e0f");

vue.pushScopeId("data-v-037c1e0f");

const _hoisted_1$3 = {
  key: 0,
  class: "text"
};

vue.popScopeId();

const render$4 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Tag = vue.resolveComponent("Tag");

  const _component_Icons = vue.resolveComponent("Icons");

  const _component_TextField = vue.resolveComponent("TextField");

  const _component_SelectMenu = vue.resolveComponent("SelectMenu");

  const _component_Popper = vue.resolveComponent("Popper");

  return vue.openBlock(), vue.createBlock("div", {
    ref: "target",
    class: "select",
    disabled: $props.isDisabled
  }, [vue.createVNode(_component_TextField, {
    "is-focused": $data.focused,
    "is-invalid": $props.isInvalid,
    "is-loading": $props.isLoading,
    class: "select-wrapper",
    select: $props.select,
    tabindex: "-1",
    onClick: $options.click
  }, {
    default: _withId$4(() => [vue.createVNode("div", {
      ref: "list",
      class: "flex-wrapper",
      gap: $props.multi && !!$options.selected.length,
      onDragover: _cache[9] || (_cache[9] = vue.withModifiers(() => {}, ["prevent"]))
    }, [$props.multi ? (vue.openBlock(true), vue.createBlock(vue.Fragment, {
      key: 0
    }, vue.renderList($options.selected, (tag, i) => {
      return vue.openBlock(), vue.createBlock(_component_Tag, {
        key: `${tag.id}-${i}`,
        tag: tag,
        index: i,
        count: $options.selected.length,
        min: $props.min,
        "data-cy": "tag",
        onDragend: $options.onDragEnd,
        onDrag: $options.handleDrag,
        onDragstart: $options.onDragStart,
        onOnRemove: $options.onRemove
      }, {
        default: _withId$4(() => [vue.renderSlot(_ctx.$slots, "tag", {
          tag: tag
        })]),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["tag", "index", "count", "min", "onDragend", "onDrag", "onDragstart", "onOnRemove"]);
    }), 128
    /* KEYED_FRAGMENT */
    )) : vue.createCommentVNode("v-if", true), vue.createVNode("input", {
      ref: "input",
      class: "search",
      value: $data.search,
      disabled: $props.isLoading,
      style: {
        width: $data.currentWidth
      },
      onKeydown: [_cache[1] || (_cache[1] = vue.withKeys(vue.withModifiers((...args) => $options.onNextSuggestion && $options.onNextSuggestion(...args), ["prevent"]), ["down"])), _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers((...args) => $options.onPreviousSuggestion && $options.onPreviousSuggestion(...args), ["prevent"]), ["up"])), _cache[3] || (_cache[3] = vue.withKeys((...args) => $options.onSuggestionSelected && $options.onSuggestionSelected(...args), ["enter"])), _cache[8] || (_cache[8] = vue.withKeys((...args) => $options.removeOption && $options.removeOption(...args), ["delete"]))],
      onInput: _cache[4] || (_cache[4] = (...args) => $options.onInput && $options.onInput(...args)),
      onFocus: _cache[5] || (_cache[5] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onBlur: _cache[6] || (_cache[6] = (...args) => $options.onBlur && $options.onBlur(...args)),
      onKeyup: _cache[7] || (_cache[7] = vue.withKeys((...args) => $options.onEsc && $options.onEsc(...args), ["esc"]))
    }, null, 44
    /* STYLE, PROPS, HYDRATE_EVENTS */
    , ["value", "disabled"])], 40
    /* PROPS, HYDRATE_EVENTS */
    , ["gap"]), !$options.selected.length ? (vue.openBlock(), vue.createBlock("div", _hoisted_1$3, [!$data.search && $options.selected.value && _ctx.$slots['selected'] && !$props.multi ? vue.renderSlot(_ctx.$slots, "selected", {
      key: 0,
      selected: $options.selected.value
    }) : (vue.openBlock(), vue.createBlock("span", {
      key: 1,
      placeholder: !$data.search && !$options.selected.label
    }, vue.toDisplayString($options.input), 9
    /* TEXT, PROPS */
    , ["placeholder"]))])) : vue.createCommentVNode("v-if", true), vue.createVNode(_component_Icons, {
      "is-selected": $options.isAnyOptionSelected,
      "is-fetching": $props.isFetching,
      createable: $props.createable,
      "is-clearable": $options.showClearIcon,
      onClear: $options.onClear
    }, {
      default: _withId$4(() => [vue.renderSlot(_ctx.$slots, "icon")]),
      _: 3
      /* FORWARDED */

    }, 8
    /* PROPS */
    , ["is-selected", "is-fetching", "createable", "is-clearable", "onClear"])]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-focused", "is-invalid", "is-loading", "select", "onClick"]), $options.shouldOpenMenu ? (vue.openBlock(), vue.createBlock(_component_Popper, {
    key: 0,
    ref: "menu",
    offset: "0,0",
    "target-element": _ctx.$refs.target,
    "boundaries-element": $props.boundariesElement,
    placement: "bottom-start"
  }, {
    default: _withId$4(() => [vue.createVNode(_component_SelectMenu, {
      selected: $options.selected,
      options: $options.suggestions,
      "current-suggestion-index": $data.currentSuggestionIndex,
      "is-fetching": $props.isFetching,
      async: $props.async,
      "append-to-body": $props.appendToBody,
      "contains-query": !!$data.search,
      style: {
        width: $data.selectWidth
      },
      "has-suggestions": $options.hasSuggestions,
      "no-options-message": $props.noOptionsMessage,
      placeholder: $props.searchPromptText,
      "data-cy": "select-menu",
      onUpdatePopperPosition: $options.updatePopperPosition,
      onHover: $options.onMouseOverSuggestion,
      onOptionSelected: $options.onOptionSelected
    }, {
      option: _withId$4(({
        option,
        isCurrent
      }) => [vue.renderSlot(_ctx.$slots, "option", {
        isCurrent: isCurrent,
        option: option
      })]),
      default: _withId$4(() => [vue.renderSlot(_ctx.$slots, "custom-action")]),
      _: 3
      /* FORWARDED */

    }, 8
    /* PROPS */
    , ["selected", "options", "current-suggestion-index", "is-fetching", "async", "append-to-body", "contains-query", "style", "has-suggestions", "no-options-message", "placeholder", "onUpdatePopperPosition", "onHover", "onOptionSelected"])]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["target-element", "boundaries-element"])) : vue.createCommentVNode("v-if", true)], 8
  /* PROPS */
  , ["disabled"]);
});

script$4.render = render$4;
script$4.__scopeId = "data-v-037c1e0f";
script$4.__file = "src/components/Select/Select.vue";

const pDebounce = (fn, wait, options = {}) => {
	if (!Number.isFinite(wait)) {
		throw new TypeError('Expected `wait` to be a finite number');
	}

	let leadingValue;
	let timer;
	let resolveList = [];

	return function (...arguments_) {
		return new Promise(resolve => {
			const runImmediately = options.leading && !timer;

			clearTimeout(timer);

			timer = setTimeout(() => {
				timer = null;

				const result = options.leading ? leadingValue : fn.apply(this, arguments_);

				for (resolve of resolveList) {
					resolve(result);
				}

				resolveList = [];
			}, wait);

			if (runImmediately) {
				leadingValue = fn.apply(this, arguments_);
				resolve(leadingValue);
			} else {
				resolveList.push(resolve);
			}
		});
	};
};

var pDebounce_1 = pDebounce;
// TODO: Remove this for the next major release
var _default = pDebounce;
pDebounce_1.default = _default;

var script$5 = {
  name: 'UserRenderer',
  props: {
    user: {
      type: Object,
      default: undefined
    },
    avatarOnly: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'span'
    },
    appearance: {
      type: String,
      default: undefined
    },
    alt: {
      type: String,
      default: undefined
    },
    link: {
      type: String,
      default: '#'
    }
  },
  methods: {
    onClick(e) {
      if (this.tag === 'a') {
        e.stopPropagation();
      }
    }

  }
};

const _withId$5 = /*#__PURE__*/vue.withScopeId("data-v-ae8978a0");

const render$5 = /*#__PURE__*/_withId$5((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", {
    class: "user",
    appearance: $props.appearance,
    onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
  }, [vue.renderSlot(_ctx.$slots, "default", {}, () => [$props.user ? (vue.openBlock(), vue.createBlock(vue.Fragment, {
    key: 0
  }, [vue.createVNode("img", {
    class: "avatar",
    src: $props.user.avatar,
    alt: $props.alt === undefined ? $props.user.name : '',
    title: $props.user.name
  }, null, 8
  /* PROPS */
  , ["src", "alt", "title"]), !$props.avatarOnly ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.tag), {
    key: 0,
    class: "user-name",
    href: $props.link,
    target: "_top"
  }, {
    default: _withId$5(() => [vue.createTextVNode(vue.toDisplayString($props.user.name), 1
    /* TEXT */
    )]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : vue.createCommentVNode("v-if", true)], 64
  /* STABLE_FRAGMENT */
  )) : vue.createCommentVNode("v-if", true)])], 8
  /* PROPS */
  , ["appearance"]);
});

script$5.render = render$5;
script$5.__scopeId = "data-v-ae8978a0";
script$5.__file = "src/components/field-renderers/UserRenderer.vue";

exports.pDebounce_1 = pDebounce_1;
exports.script = script$4;
exports.script$1 = script$5;
