import { s as script$1 } from './Spinner-ce916205.js';
import { pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, mergeProps, createVNode, renderSlot, createCommentVNode, withScopeId } from 'vue';

var script = {
  name: 'Button',
  components: {
    Spinner: script$1
  },
  props: {
    isSelected: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    appearance: {
      type: String,
      default: 'default'
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    spacing: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    iconIsOnlyChild() {
      return !!(this.$slots['icon-after'] && !this.$slots['icon-before'] && !this.$slots.default) || !this.$slots['icon-after'] && this.$slots['icon-before'] && !this.$slots.default;
    }

  },

  mounted() {
    if (this.autoFocus) {
      this.$refs.button.focus();
    }
  }

};

const _withId = /*#__PURE__*/withScopeId("data-v-4439b54f");

pushScopeId("data-v-4439b54f");

const _hoisted_1 = {
  key: 1,
  ref: "label",
  class: "label"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Spinner = resolveComponent("Spinner");

  return openBlock(), createBlock("button", mergeProps({
    ref: "button",
    type: "button",
    appearance: $props.appearance,
    disabled: $props.isDisabled,
    selected: $props.isSelected,
    loading: $props.isLoading,
    spacing: $props.spacing
  }, _ctx.$attrs), [createVNode("span", {
    class: "wrapper",
    tabindex: "-1",
    "icon-is-only-child": $options.iconIsOnlyChild
  }, [!$props.isLoading ? renderSlot(_ctx.$slots, "icon-before", {
    key: 0
  }) : createCommentVNode("v-if", true), _ctx.$slots.default ? (openBlock(), createBlock("span", _hoisted_1, [renderSlot(_ctx.$slots, "default")], 512
  /* NEED_PATCH */
  )) : createCommentVNode("v-if", true), !$props.isLoading ? renderSlot(_ctx.$slots, "icon-after", {
    key: 2
  }) : createCommentVNode("v-if", true), $props.isLoading ? (openBlock(), createBlock(_component_Spinner, {
    key: 3,
    size: $props.spacing === 'default' ? 'small' : 'icon'
  }, null, 8
  /* PROPS */
  , ["size"])) : createCommentVNode("v-if", true)], 8
  /* PROPS */
  , ["icon-is-only-child"])], 16
  /* FULL_PROPS */
  , ["appearance", "disabled", "selected", "loading", "spacing"]);
});

script.render = render;
script.__scopeId = "data-v-4439b54f";
script.__file = "src/components/Button/Button.vue";

export { script as s };
