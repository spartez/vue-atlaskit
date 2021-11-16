'use strict';

var vue = require('vue');
var utils = require('./utils-9c0ccadc.js');
var ContentLoader = require('./ContentLoader-9211fe6d.js');

/**
 * vue-promised v1.2.0
 * (c) 2019 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */

function assert (condition, message) {
  if ( !condition) {
    // useful when testing
    // console.warn(`[vue-promised] ${message}`)
    throw new Error(("[vue-promised] " + message))
  }
}

var Promised = {
  props: {
    tag: {
      type: String,
      default: 'span',
    },
    promise: {
      // allow polyfied Promise
      validator: function (p) { return p && typeof p.then === 'function' && typeof p.catch === 'function'; },
    },
    pendingDelay: {
      type: [Number, String],
      default: 200,
    },
  },

  data: function () { return ({
    resolved: false,
    data: null,
    error: null,

    isDelayElapsed: false,
  }); },

  render: function render (h) {
    if (this.$scopedSlots.combined) {
      var node = this.$scopedSlots.combined({
        isPending: !this.resolved,
        isDelayOver: this.isDelayElapsed,
        data: this.data,
        error: this.error,
      });
      assert(
        (Array.isArray(node) && node.length) || node,
        'Provided scoped slot "combined" cannot be empty'
      );
      return Array.isArray(node) ? convertVNodeArray(h, this.tag, node) : node
    }

    if (this.error) {
      return getSlotVNode(this, h, 'rejected', this.error)
    }

    if (this.resolved) {
      return getSlotVNode(this, h, 'default', this.data)
    }

    if (!this.isDelayElapsed) { return h() }

    return getSlotVNode(this, h, 'pending', this.data)
  },

  watch: {
    promise: {
      handler: function handler (promise) {
        var this$1 = this;

        this.resolved = false;
        this.error = null;
        if (!promise) {
          this.data = null;
          this.isDelayElapsed = false;
          if (this.timerId) { clearTimeout(this.timerId); }
          this.timerId = null;
          return
        }
        this.setupDelay();
        promise
          .then(function (data) {
            // ensure we are dealing with the same promise
            if (this$1.promise === promise) {
              this$1.data = data;
              this$1.resolved = true;
            }
          })
          .catch(function (err) {
            // ensure we are dealing with the same promise
            if (this$1.promise === promise) {
              this$1.error = err;
              this$1.resolved = true;
            }
          });
      },
      immediate: true,
    },
  },

  methods: {
    setupDelay: function setupDelay () {
      var this$1 = this;

      if (this.pendingDelay > 0) {
        this.isDelayElapsed = false;
        if (this.timerId) { clearTimeout(this.timerId); }
        this.timerId = setTimeout(
          function () { return (this$1.isDelayElapsed = true); },
          this.pendingDelay
        );
      } else {
        this.isDelayElapsed = true;
      }
    },
  },
};

function convertVNodeArray (h, wrapperTag, nodes) {
  // for arrays and single text nodes
  if (nodes.length > 1 || !nodes[0].tag) { return h(wrapperTag, {}, nodes) }
  return nodes[0]
}

function getSlotVNode (vm, h, slotName, data) {
  // use scopedSlots if available
  if (vm.$scopedSlots[slotName]) {
    var node = vm.$scopedSlots[slotName](data);
    assert(
      (Array.isArray(node) && node.length) || node,
      ("Provided scoped slot \"" + slotName + "\" is empty")
    );
    return Array.isArray(node) ? convertVNodeArray(h, vm.tag, node) : node
  }

  var slot = vm.$slots[slotName];
  assert(slot, ("No slot \"" + slotName + "\" provided"));
  // 2.5.x compatibility
  assert(slot.length, ("Provided slot \"" + slotName + "\" is empty"));
  return convertVNodeArray(h, vm.tag, slot)
}

var script = {
  name: 'PromisedContentLoader',
  components: {
    Promised,
    ContentLoader: ContentLoader.script
  },
  props: {
    value: {
      type: Promise,
      required: true
    },
    width: {
      type: [Number, String],
      default: '200px'
    },
    height: {
      type: [Number, String],
      default: '16px'
    },
    tag: {
      type: String,
      default: 'span'
    },
    pendingDelay: {
      type: Number,
      default: 200
    },
    preserveAspectRatio: {
      type: String,
      default: 'none'
    },
    viewBox: {
      type: String,
      default: undefined
    }
  },
  methods: {
    isPromise(payload) {
      return utils.isPromise(payload);
    }

  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-74b6250f");

vue.pushScopeId("data-v-74b6250f");

const _hoisted_1 = {
  class: "error-message"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_ContentLoader = vue.resolveComponent("ContentLoader");

  const _component_Promised = vue.resolveComponent("Promised");

  return $options.isPromise($props.value) ? (vue.openBlock(), vue.createBlock(_component_Promised, {
    key: 0,
    promise: $props.value,
    "pending-delay": $props.pendingDelay
  }, {
    combined: _withId(({
      isPending,
      isDelayOver,
      data,
      error
    }) => [isDelayOver && isPending ? (vue.openBlock(), vue.createBlock(_component_ContentLoader, {
      key: 0,
      width: $props.width,
      height: $props.height,
      "preserve-aspect-ratio": $props.preserveAspectRatio,
      "view-box": $props.viewBox,
      class: "content-loader",
      "primary-color": "rgba(9, 30, 66, 0.08)",
      "secondary-color": "rgba(9, 30, 66, 0.13)",
      speed: 1
    }, {
      default: _withId(() => [vue.renderSlot(_ctx.$slots, "loader-shape", {}, () => [vue.createVNode("rect", {
        x: "0",
        y: "0",
        rx: $props.height / 2,
        ry: $props.height / 2,
        width: $props.width,
        height: $props.height
      }, null, 8
      /* PROPS */
      , ["rx", "ry", "width", "height"])])]),
      _: 3
      /* FORWARDED */

    }, 8
    /* PROPS */
    , ["width", "height", "preserve-aspect-ratio", "view-box"])) : error ? vue.renderSlot(_ctx.$slots, "error-message", {
      key: 1
    }, () => [vue.createVNode("div", _hoisted_1, vue.toDisplayString(error.message), 1
    /* TEXT */
    )]) : vue.renderSlot(_ctx.$slots, "default", {
      key: 2,
      value: data
    })]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["promise", "pending-delay"])) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.tag), {
    key: 1
  }, {
    default: _withId(() => [vue.renderSlot(_ctx.$slots, "default", {
      value: $props.value
    })]),
    _: 3
    /* FORWARDED */

  }));
});

script.render = render;
script.__scopeId = "data-v-74b6250f";
script.__file = "src/components/common/PromisedContentLoader.vue";

exports.script = script;
