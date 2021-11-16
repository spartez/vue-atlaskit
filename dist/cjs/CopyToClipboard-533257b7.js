'use strict';

var vue = require('vue');
var Button = require('./Button-1b01afc6.js');
var CopyIcon = require('./CopyIcon-83bf386f.js');
var Tooltip = require('./Tooltip-8782664c.js');

var script = {
  name: 'CopyToClipboard',
  components: {
    Tooltip: Tooltip.script,
    Button: Button.script,
    CopyIcon: CopyIcon.CopyIcon
  },
  props: {
    appearance: {
      type: String,
      default: 'subtle'
    },
    spacing: {
      type: String,
      default: 'subtle'
    },
    text: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Copy to clipboard'
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  },

  data() {
    return {
      copied: false,
      timeout: undefined
    };
  },

  computed: {
    tooltip() {
      return this.copied ? 'Copied' : this.label;
    }

  },

  beforeUnmount() {
    clearTimeout(this.timeout);
  },

  methods: {
    onClick() {
      const input = document.createElement('input');
      input.setAttribute('readonly', '');
      input.value = this.text;
      input.style.cssText = 'position:fixed;pointer-events:none;z-index:-9999;opacity:0;';
      document.body.appendChild(input);
      input.select();

      try {
        document.execCommand('copy');
      } catch (err) {
        console.warn(err);
      }

      document.body.removeChild(input);
      this.copied = true;
      this.timeout = setTimeout(() => {
        this.copied = false;
      }, 2000);
    }

  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CopyIcon = vue.resolveComponent("CopyIcon");

  const _component_Button = vue.resolveComponent("Button");

  const _component_Tooltip = vue.resolveComponent("Tooltip");

  return vue.openBlock(), vue.createBlock(_component_Tooltip, {
    label: $options.tooltip,
    placement: $props.placement,
    spacing: $props.spacing
  }, {
    default: vue.withCtx(() => [vue.createVNode(_component_Button, {
      appearance: $props.appearance,
      onClick: $options.onClick
    }, {
      default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createVNode(_component_CopyIcon)])]),
      _: 3
      /* FORWARDED */

    }, 8
    /* PROPS */
    , ["appearance", "onClick"])]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["label", "placement", "spacing"]);
}

script.render = render;
script.__file = "src/components/CopyToClipboard/CopyToClipboard.vue";

exports.script = script;
