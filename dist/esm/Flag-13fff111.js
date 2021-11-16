import { pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, Transition, createVNode, resolveDynamicComponent, toDisplayString, renderSlot, Fragment, renderList, withScopeId } from 'vue';
import { C as CheckCircleIcon, I as InfoIcon } from './InfoIcon-e9491f70.js';
import { C as ChevronDownIcon } from './ChevronDownIcon-acb845c9.js';
import { E as EditorCloseIcon } from './EditorCloseIcon-2ac45175.js';
import { W as WarningIcon, E as ErrorIcon } from './WarningIcon-ac3bce7f.js';

var script = {
  name: 'Flag',
  components: {
    ChevronDownIcon,
    success: CheckCircleIcon,
    info: InfoIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    EditorCloseIcon
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

const _withId = /*#__PURE__*/withScopeId("data-v-6c32c0cf");

pushScopeId("data-v-6c32c0cf");

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

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");

  const _component_EditorCloseIcon = resolveComponent("EditorCloseIcon");

  return openBlock(), createBlock(Transition, {
    name: $props.leaveLeft ? 'flag-left' : 'flag',
    appear: ""
  }, {
    default: _withId(() => [createVNode("div", {
      class: "notification",
      appearance: $props.appearance
    }, [createVNode("div", _hoisted_1, [createVNode("div", _hoisted_2, [(openBlock(), createBlock(resolveDynamicComponent($options.flag.name), {
      "primary-color": $options.flag.primary,
      "secondary-color": $options.flag.secondary,
      class: "icon"
    }, null, 8
    /* PROPS */
    , ["primary-color", "secondary-color"]))]), createVNode("span", _hoisted_3, toDisplayString($props.title), 1
    /* TEXT */
    ), $props.appearance !== 'default' ? (openBlock(), createBlock(_component_ChevronDownIcon, {
      key: 0,
      class: "chevron",
      size: "large",
      expanded: $data.expanded,
      onClick: $options.onExpand
    }, null, 8
    /* PROPS */
    , ["expanded", "onClick"])) : (openBlock(), createBlock(_component_EditorCloseIcon, {
      key: 1,
      class: "close",
      onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('close'))
    }))]), renderSlot(_ctx.$slots, "default", {}, () => [createVNode("div", {
      class: "content",
      expanded: $data.expanded
    }, [createVNode("div", _hoisted_4, toDisplayString($props.description), 1
    /* TEXT */
    ), createVNode("div", _hoisted_5, [(openBlock(true), createBlock(Fragment, null, renderList($props.actions, action => {
      return openBlock(), createBlock("a", {
        key: action,
        class: "action",
        href: ""
      }, toDisplayString(action), 1
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

export { script as s };
