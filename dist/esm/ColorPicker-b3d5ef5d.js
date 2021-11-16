import { pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, createVNode, createCommentVNode, withScopeId, Fragment, renderList } from 'vue';
import { C as Checked } from './EditorDoneIcon-5f2237f7.js';
import { s as script$2 } from './Popup-f7883f21.js';

var script = {
  name: 'ColorCard',
  components: {
    EditorDoneIcon: Checked
  },
  props: {
    color: {
      type: String,
      default: '#000'
    },
    selected: {
      type: String,
      default: '#000'
    }
  },
  computed: {
    styles() {
      return {
        'background-color': this.color
      };
    }

  },
  methods: {
    onClick() {
      this.$emit('color-selected', this.color);
    }

  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-13eb0fb5");

pushScopeId("data-v-13eb0fb5");

const _hoisted_1 = {
  class: "outline"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_EditorDoneIcon = resolveComponent("EditorDoneIcon");

  return openBlock(), createBlock("div", {
    class: "card-wrapper",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
  }, [createVNode("div", _hoisted_1, [createVNode("div", {
    class: "card",
    style: $options.styles
  }, [$props.selected === $props.color ? (openBlock(), createBlock(_component_EditorDoneIcon, {
    key: 0,
    "primary-color": "#fff"
  })) : createCommentVNode("v-if", true)], 4
  /* STYLE */
  )])]);
});

script.render = render;
script.__scopeId = "data-v-13eb0fb5";
script.__file = "src/components/ColorPicker/ColorCard.vue";

var script$1 = {
  name: 'ColorPicker',
  components: {
    ColorCard: script,
    Popup: script$2
  },
  props: {
    value: {
      type: String,
      default: '#000'
    }
  },

  data() {
    return {
      colors: ['#000', '#0052CC', '#172B4D', '#FF5630', '#FFAB00', '#36B37E', '#00B8D9', '#6554C0'],
      open: false
    };
  },

  computed: {
    style() {
      return {
        'background-color': this.selected
      };
    },

    selected: {
      get() {
        return this.value;
      },

      set(color) {
        this.$emit('input', color);
      }

    }
  },
  methods: {
    onTriggerClick() {
      this.open = !this.open;
    },

    onColorSelected(color) {
      this.selected = color;
      this.open = false;
    }

  }
};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-ee3f421a");

pushScopeId("data-v-ee3f421a");

const _hoisted_1$1 = {
  ref: "dropdown-container",
  class: "color-picker"
};
const _hoisted_2 = {
  class: "content"
};

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_ColorCard = resolveComponent("ColorCard");

  const _component_Popup = resolveComponent("Popup");

  return openBlock(), createBlock("div", _hoisted_1$1, [createVNode("button", {
    type: "button",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.onTriggerClick && $options.onTriggerClick(...args))
  }, [createVNode("div", {
    class: "color",
    style: $options.style
  }, null, 4
  /* STYLE */
  )]), createVNode(_component_Popup, {
    "is-open": $data.open,
    offset: "0,8",
    "target-element": _ctx.$refs['dropdown-container'],
    placement: "bottom-start"
  }, {
    default: _withId$1(() => [createVNode("div", _hoisted_2, [(openBlock(true), createBlock(Fragment, null, renderList($data.colors, color => {
      return openBlock(), createBlock(_component_ColorCard, {
        key: color,
        color: color,
        selected: $options.selected,
        onColorSelected: $options.onColorSelected
      }, null, 8
      /* PROPS */
      , ["color", "selected", "onColorSelected"]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-open", "target-element"])], 512
  /* NEED_PATCH */
  );
});

script$1.render = render$1;
script$1.__scopeId = "data-v-ee3f421a";
script$1.__file = "src/components/ColorPicker/ColorPicker.vue";

export { script$1 as s };
