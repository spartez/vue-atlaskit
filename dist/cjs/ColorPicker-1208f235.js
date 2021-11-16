'use strict';

var vue = require('vue');
var EditorDoneIcon = require('./EditorDoneIcon-9ada4211.js');
var Popup = require('./Popup-d34beb32.js');

var script = {
  name: 'ColorCard',
  components: {
    EditorDoneIcon: EditorDoneIcon.Checked
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

const _withId = /*#__PURE__*/vue.withScopeId("data-v-13eb0fb5");

vue.pushScopeId("data-v-13eb0fb5");

const _hoisted_1 = {
  class: "outline"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_EditorDoneIcon = vue.resolveComponent("EditorDoneIcon");

  return vue.openBlock(), vue.createBlock("div", {
    class: "card-wrapper",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
  }, [vue.createVNode("div", _hoisted_1, [vue.createVNode("div", {
    class: "card",
    style: $options.styles
  }, [$props.selected === $props.color ? (vue.openBlock(), vue.createBlock(_component_EditorDoneIcon, {
    key: 0,
    "primary-color": "#fff"
  })) : vue.createCommentVNode("v-if", true)], 4
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
    Popup: Popup.script
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

const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-ee3f421a");

vue.pushScopeId("data-v-ee3f421a");

const _hoisted_1$1 = {
  ref: "dropdown-container",
  class: "color-picker"
};
const _hoisted_2 = {
  class: "content"
};

vue.popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_ColorCard = vue.resolveComponent("ColorCard");

  const _component_Popup = vue.resolveComponent("Popup");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [vue.createVNode("button", {
    type: "button",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.onTriggerClick && $options.onTriggerClick(...args))
  }, [vue.createVNode("div", {
    class: "color",
    style: $options.style
  }, null, 4
  /* STYLE */
  )]), vue.createVNode(_component_Popup, {
    "is-open": $data.open,
    offset: "0,8",
    "target-element": _ctx.$refs['dropdown-container'],
    placement: "bottom-start"
  }, {
    default: _withId$1(() => [vue.createVNode("div", _hoisted_2, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($data.colors, color => {
      return vue.openBlock(), vue.createBlock(_component_ColorCard, {
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

exports.script = script$1;
