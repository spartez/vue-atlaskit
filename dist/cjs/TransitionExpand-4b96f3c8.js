'use strict';

var Spinner = require('./Spinner-849e0846.js');
var vue = require('vue');

var script = {
  name: 'InfiniteScroll',
  components: {
    Spinner: Spinner.script
  },
  props: {
    tag: {
      type: String,
      default: 'td'
    }
  },

  data() {
    return {
      observer: undefined
    };
  },

  async mounted() {
    this.createObserver();
  },

  beforeUnmount() {
    this.observer.disconnect();
  },

  methods: {
    createObserver() {
      if (this.observer) {
        this.observer.unobserve(this.$refs['infinite-scroll-loader']);
      }

      this.observer = new IntersectionObserver(([entries]) => {
        if (entries.isIntersecting) {
          this.tableBottomReached();
        }
      });
      this.observer.observe(this.$refs['infinite-scroll-loader']);
    },

    tableBottomReached() {
      this.$emit('table-bottom-reached', () => {
        this.createObserver();
      });
    }

  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-efea3f36");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Spinner = vue.resolveComponent("Spinner");

  return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.tag), {
    ref: "infinite-scroll-loader",
    class: "infinite-scroll-loader"
  }, {
    default: _withId(() => [vue.createVNode(_component_Spinner, {
      size: "small"
    })]),
    _: 1
    /* STABLE */

  }, 512
  /* NEED_PATCH */
  );
});

script.render = render;
script.__scopeId = "data-v-efea3f36";
script.__file = "src/components/common/InfiniteScroll.vue";

var script$1 = {
  name: 'TransitionExpand',
  methods: {
    afterEnter(element) {
      element.style.height = 'auto';
    },

    enter(element) {
      /* eslint-disable no-unused-vars */
      const {
        width
      } = getComputedStyle(element);
      /* eslint-disable no-param-reassign */

      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';
      /* eslint-enable */

      const {
        height
      } = getComputedStyle(element);
      /* eslint-disable no-param-reassign */

      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;
      /* eslint-enable */
      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions

      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        // eslint-disable-next-line no-param-reassign
        element.style.height = height;
      });
    },

    leave(element) {
      const {
        height
      } = getComputedStyle(element); // eslint-disable-next-line no-param-reassign

      element.style.height = height; // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions

      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        // eslint-disable-next-line no-param-reassign
        element.style.height = 0;
      });
    }

  }
};

const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-0248ecb3");

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock(vue.Transition, {
    name: "expand",
    onEnter: $options.enter,
    onAfterEnter: $options.afterEnter,
    onLeave: $options.leave
  }, {
    default: _withId$1(() => [vue.renderSlot(_ctx.$slots, "default")]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["onEnter", "onAfterEnter", "onLeave"]);
});

script$1.render = render$1;
script$1.__scopeId = "data-v-0248ecb3";
script$1.__file = "src/components/common/TransitionExpand.vue";

exports.script = script;
exports.script$1 = script$1;
