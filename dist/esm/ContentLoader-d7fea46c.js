import { openBlock, createBlock, createVNode, createCommentVNode, renderSlot } from 'vue';

const uid = () => Math.random().toString(36).substring(2);

var script = {
  name: 'ContentLoader',
  props: {
    speed: {
      type: Number,
      default: 2
    },
    preserveAspectRatio: {
      type: String,
      default: 'none'
    },
    baseUrl: {
      type: String,
      default: ''
    },
    primaryColor: {
      type: String,
      default: '#f9f9f9'
    },
    secondaryColor: {
      type: String,
      default: '#ecebeb'
    },
    primaryOpacity: {
      type: Number,
      default: 1
    },
    secondaryOpacity: {
      type: Number,
      default: 1
    },
    uniqueKey: {
      type: String,
      default: ''
    },
    animate: {
      type: Boolean,
      default: true
    },
    viewBox: {
      type: String,
      default: undefined
    },
    width: {
      type: [String, Number],
      default: '300px'
    },
    height: {
      type: [String, Number],
      default: '20px'
    }
  },
  computed: {
    fill() {
      return {
        fill: `url(${this.baseUrl}#${this.idGradient})`
      };
    },

    idClip() {
      return this.uniqueKey ? `${this.uniqueKey}-idClip` : uid();
    },

    idGradient() {
      return this.uniqueKey ? `${this.uniqueKey}-idGradient` : uid();
    },

    clipPath() {
      return `url(${this.baseUrl}#${this.idClip})`;
    }

  }
};

const _hoisted_1 = {
  key: 0,
  x: "0",
  y: "0",
  rx: "3",
  ry: "3",
  width: "100%",
  height: "100%"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", {
    style: {
      "display": "flex"
    },
    viewBox: $props.viewBox,
    width: $props.width,
    height: $props.height,
    version: "1.1",
    preserveAspectRatio: $props.preserveAspectRatio
  }, [createVNode("rect", {
    style: $options.fill,
    color: "yellow",
    "clip-path": $options.clipPath,
    x: "0",
    y: "0",
    width: "100%",
    height: "100%"
  }, null, 12
  /* STYLE, PROPS */
  , ["clip-path"]), createVNode("defs", null, [createVNode("clipPath", {
    id: $options.idClip
  }, [!_ctx.$slots['default'] ? (openBlock(), createBlock("rect", _hoisted_1)) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")], 8
  /* PROPS */
  , ["id"]), createVNode("linearGradient", {
    id: $options.idGradient
  }, [createVNode("stop", {
    offset: "0%",
    "stop-color": $props.primaryColor,
    "stop-opacity": $props.primaryOpacity
  }, [$props.animate ? (openBlock(), createBlock("animate", {
    key: 0,
    attributeName: "offset",
    values: "-2; 1",
    dur: $props.speed,
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , ["dur"])) : createCommentVNode("v-if", true)], 8
  /* PROPS */
  , ["stop-color", "stop-opacity"]), createVNode("stop", {
    offset: "50%",
    "stop-color": $props.secondaryColor,
    "stop-opacity": $props.secondaryOpacity
  }, [$props.animate ? (openBlock(), createBlock("animate", {
    key: 0,
    attributeName: "offset",
    values: "-1.5; 1.5",
    dur: $props.speed,
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , ["dur"])) : createCommentVNode("v-if", true)], 8
  /* PROPS */
  , ["stop-color", "stop-opacity"]), createVNode("stop", {
    offset: "100%",
    "stop-color": $props.primaryColor,
    "stop-opacity": $props.primaryOpacity
  }, [$props.animate ? (openBlock(), createBlock("animate", {
    key: 0,
    attributeName: "offset",
    values: "-1; 2",
    dur: $props.speed,
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , ["dur"])) : createCommentVNode("v-if", true)], 8
  /* PROPS */
  , ["stop-color", "stop-opacity"])], 8
  /* PROPS */
  , ["id"])])], 8
  /* PROPS */
  , ["viewBox", "width", "height", "preserveAspectRatio"]);
}

script.render = render;
script.__file = "src/components/ContentLoader/ContentLoader.vue";

export { script as s };
