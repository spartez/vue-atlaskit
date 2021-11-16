'use strict';

var vue = require('vue');
var InfoIcon = require('./InfoIcon-af86f755.js');
var ChevronDownIcon = require('./ChevronDownIcon-06dbbc2e.js');
var EditorCloseIcon = require('./EditorCloseIcon-3c49f504.js');
var WarningIcon = require('./WarningIcon-dfe5a9da.js');

var script = {
  name: 'Flag',
  components: {
    ChevronDownIcon: ChevronDownIcon.ChevronDownIcon,
    success: InfoIcon.CheckCircleIcon,
    info: InfoIcon.InfoIcon,
    warning: WarningIcon.WarningIcon,
    error: WarningIcon.ErrorIcon,
    EditorCloseIcon: EditorCloseIcon.EditorCloseIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    actions: {
      type: Array,
      default: () => []
    },
    appearance: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'success'
    },
    leaveLeft: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      expanded: false
    };
  },

  computed: {
    flag() {
      switch (this.appearance) {
        case 'info':
          return {
            name: this.appearance,
            primary: '#fff',
            secondary: '#42526E'
          };

        case 'error':
          return {
            name: this.appearance,
            primary: '#fff',
            secondary: '#DE350B'
          };

        case 'warning':
          return {
            name: this.appearance,
            primary: '',
            secondary: '#FFC400'
          };

        case 'success':
          return {
            name: this.appearance,
            primary: '#fff',
            secondary: '#00875A'
          };

        default:
          return {
            name: this.type,
            primary: this.color,
            secondary: '#fff'
          };
      }
    },

    color() {
      switch (this.type) {
        case 'info':
          return '#6554c0';

        case 'error':
          return '#de350a';

        case 'warning':
          return '#ffab00';

        case 'success':
          return '#36b37e';

        default:
          return '#6554c0';
      }
    }

  },
  methods: {
    onExpand() {
      this.expanded = !this.expanded;
    }

  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-6c32c0cf");

vue.pushScopeId("data-v-6c32c0cf");

const _hoisted_1 = {
  class: "header"
};
const _hoisted_2 = {
  class: "icon"
};
const _hoisted_3 = {
  class: "title"
};
const _hoisted_4 = {
  class: "description"
};
const _hoisted_5 = {
  class: "actions"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_ChevronDownIcon = vue.resolveComponent("ChevronDownIcon");

  const _component_EditorCloseIcon = vue.resolveComponent("EditorCloseIcon");

  return vue.openBlock(), vue.createBlock(vue.Transition, {
    name: $props.leaveLeft ? 'flag-left' : 'flag',
    appear: ""
  }, {
    default: _withId(() => [vue.createVNode("div", {
      class: "notification",
      appearance: $props.appearance
    }, [vue.createVNode("div", _hoisted_1, [vue.createVNode("div", _hoisted_2, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($options.flag.name), {
      "primary-color": $options.flag.primary,
      "secondary-color": $options.flag.secondary,
      class: "icon"
    }, null, 8
    /* PROPS */
    , ["primary-color", "secondary-color"]))]), vue.createVNode("span", _hoisted_3, vue.toDisplayString($props.title), 1
    /* TEXT */
    ), $props.appearance !== 'default' ? (vue.openBlock(), vue.createBlock(_component_ChevronDownIcon, {
      key: 0,
      class: "chevron",
      size: "large",
      expanded: $data.expanded,
      onClick: $options.onExpand
    }, null, 8
    /* PROPS */
    , ["expanded", "onClick"])) : (vue.openBlock(), vue.createBlock(_component_EditorCloseIcon, {
      key: 1,
      class: "close",
      onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('close'))
    }))]), vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode("div", {
      class: "content",
      expanded: $data.expanded
    }, [vue.createVNode("div", _hoisted_4, vue.toDisplayString($props.description), 1
    /* TEXT */
    ), vue.createVNode("div", _hoisted_5, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.actions, action => {
      return vue.openBlock(), vue.createBlock("a", {
        key: action,
        class: "action",
        href: ""
      }, vue.toDisplayString(action), 1
      /* TEXT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))])], 8
    /* PROPS */
    , ["expanded"])])], 8
    /* PROPS */
    , ["appearance"])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["name"]);
});

script.render = render;
script.__scopeId = "data-v-6c32c0cf";
script.__file = "src/components/Flag/Flag.vue";

exports.script = script;
