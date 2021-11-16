import { resolveComponent, openBlock, createBlock, withCtx, createVNode, renderSlot } from 'vue';
import { s as script$2 } from './Button-b4f025d8.js';
import { C as CopyIcon } from './CopyIcon-6b40c012.js';
import { s as script$1 } from './Tooltip-2e49f333.js';

var script = {
  name: 'CopyToClipboard',
  components: {
    Tooltip: script$1,
    Button: script$2,
    CopyIcon
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
  const _component_CopyIcon = resolveComponent("CopyIcon");

  const _component_Button = resolveComponent("Button");

  const _component_Tooltip = resolveComponent("Tooltip");

  return openBlock(), createBlock(_component_Tooltip, {
    label: $options.tooltip,
    placement: $props.placement,
    spacing: $props.spacing
  }, {
    default: withCtx(() => [createVNode(_component_Button, {
      appearance: $props.appearance,
      onClick: $options.onClick
    }, {
      default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createVNode(_component_CopyIcon)])]),
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

export { script as s };
