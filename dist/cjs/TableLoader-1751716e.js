'use strict';

var vue = require('vue');
var ContentLoader = require('./ContentLoader-9211fe6d.js');

var script = {
  name: 'AvatarDetailsLoader',
  components: {
    ContentLoader: ContentLoader.script
  }
};

const _hoisted_1 = /*#__PURE__*/vue.createVNode("rect", {
  x: "0",
  y: "0",
  rx: "5",
  ry: "5",
  width: "60",
  height: "60"
}, null, -1
/* HOISTED */
);

const _hoisted_2 = /*#__PURE__*/vue.createVNode("rect", {
  x: "75",
  y: "0",
  rx: "5",
  ry: "5",
  width: "150",
  height: "28"
}, null, -1
/* HOISTED */
);

const _hoisted_3 = /*#__PURE__*/vue.createVNode("rect", {
  x: "75",
  y: "34",
  rx: "5",
  ry: "5",
  width: "80",
  height: "16"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ContentLoader = vue.resolveComponent("ContentLoader");

  return vue.openBlock(), vue.createBlock("div", null, [vue.createVNode(_component_ContentLoader, {
    "view-box": "0 0 340 65",
    height: "65px",
    width: "340px"
  }, {
    default: vue.withCtx(() => [_hoisted_1, _hoisted_2, _hoisted_3]),
    _: 1
    /* STABLE */

  })]);
}

script.render = render;
script.__file = "src/components/ContentLoader/AvatarDetailsLoader.vue";

var script$1 = {
  name: 'AvatarNameLoader',
  components: {
    ContentLoader: ContentLoader.script
  }
};

const _hoisted_1$1 = /*#__PURE__*/vue.createVNode("circle", {
  cx: "12",
  cy: "12",
  r: 12
}, null, -1
/* HOISTED */
);

const _hoisted_2$1 = /*#__PURE__*/vue.createVNode("rect", {
  x: "28",
  y: "4",
  rx: 8,
  ry: 8,
  width: 45,
  height: 16
}, null, -1
/* HOISTED */
);

const _hoisted_3$1 = /*#__PURE__*/vue.createVNode("rect", {
  x: "78",
  y: "4",
  rx: 8,
  ry: 8,
  width: 70,
  height: 16
}, null, -1
/* HOISTED */
);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ContentLoader = vue.resolveComponent("ContentLoader");

  return vue.openBlock(), vue.createBlock(_component_ContentLoader, {
    "view-box": "0 0 150 24",
    height: "24px",
    "preserve-aspect-ratio": "xMinYMid meet",
    width: "150px"
  }, {
    default: vue.withCtx(() => [_hoisted_1$1, _hoisted_2$1, _hoisted_3$1]),
    _: 1
    /* STABLE */

  });
}

script$1.render = render$1;
script$1.__file = "src/components/ContentLoader/AvatarNameLoader.vue";

const random = () => Math.random() * (1 - 0.7) + 0.7;

var script$2 = {
  name: 'PageDetailsLoader',
  components: {
    ContentLoader: ContentLoader.script
  },

  data() {
    return {
      random
    };
  }

};

const _hoisted_1$2 = /*#__PURE__*/vue.createVNode("rect", {
  x: "0",
  y: "0",
  rx: "3",
  ry: "3",
  width: "178",
  height: "14"
}, null, -1
/* HOISTED */
);

const _hoisted_2$2 = /*#__PURE__*/vue.createVNode("rect", {
  x: "420",
  y: "0",
  rx: "3",
  ry: "3",
  width: "228",
  height: "14"
}, null, -1
/* HOISTED */
);

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ContentLoader = vue.resolveComponent("ContentLoader");

  return vue.openBlock(), vue.createBlock("div", null, [(vue.openBlock(), vue.createBlock(vue.Fragment, null, vue.renderList(3, row => {
    return vue.createVNode(_component_ContentLoader, {
      key: row,
      "view-box": "0 0 840 72",
      height: "72px",
      width: "100%"
    }, {
      default: vue.withCtx(() => [_hoisted_1$2, vue.createVNode("rect", {
        x: "0",
        y: "22",
        rx: "3",
        ry: "3",
        width: 217 * $data.random(),
        height: "20"
      }, null, 8
      /* PROPS */
      , ["width"]), _hoisted_2$2, vue.createVNode("rect", {
        x: "420",
        y: "22",
        rx: "3",
        ry: "3",
        width: 157 * $data.random(),
        height: "20"
      }, null, 8
      /* PROPS */
      , ["width"])]),
      _: 2
      /* DYNAMIC */

    }, 1024
    /* DYNAMIC_SLOTS */
    );
  }), 64
  /* STABLE_FRAGMENT */
  ))]);
}

script$2.render = render$2;
script$2.__file = "src/components/ContentLoader/PageDetailsLoader.vue";

var script$3 = {
  name: 'BulletListLoader',
  components: {
    ContentLoader: ContentLoader.script
  },
  props: {
    items: {
      type: Number,
      default: 3
    }
  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-b0a5dbf4");

vue.pushScopeId("data-v-b0a5dbf4");

const _hoisted_1$3 = /*#__PURE__*/vue.createVNode("rect", {
  x: "0",
  y: "4",
  rx: 3,
  ry: 3,
  width: 16,
  height: 16
}, null, -1
/* HOISTED */
);

const _hoisted_2$3 = /*#__PURE__*/vue.createVNode("rect", {
  x: "24",
  y: "4",
  rx: 3,
  ry: 3,
  width: 40,
  height: 16
}, null, -1
/* HOISTED */
);

const _hoisted_3$2 = /*#__PURE__*/vue.createVNode("rect", {
  x: "72",
  y: "4",
  rx: 3,
  ry: 3,
  width: 160,
  height: 16
}, null, -1
/* HOISTED */
);

vue.popScopeId();

const render$3 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_ContentLoader = vue.resolveComponent("ContentLoader");

  return vue.openBlock(), vue.createBlock("div", null, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.items, item => {
    return vue.openBlock(), vue.createBlock(_component_ContentLoader, {
      key: item,
      "view-box": "0 0 300 24",
      height: "24px",
      width: "300px"
    }, {
      default: _withId(() => [_hoisted_1$3, _hoisted_2$3, _hoisted_3$2]),
      _: 2
      /* DYNAMIC */

    }, 1024
    /* DYNAMIC_SLOTS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
});

script$3.render = render$3;
script$3.__scopeId = "data-v-b0a5dbf4";
script$3.__file = "src/components/ContentLoader/BulletListLoader.vue";

var script$4 = {
  name: 'FolderPathLoader',
  components: {
    ContentLoader: ContentLoader.script
  },
  props: {
    size: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    loaderHeight() {
      return this.size === 'small' ? 17 : 20;
    }

  }
};

const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-5b889339");

const render$4 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_ContentLoader = vue.resolveComponent("ContentLoader");

  return vue.openBlock(), vue.createBlock(_component_ContentLoader, {
    "view-box": "0 0 340 20"
  }, {
    default: _withId$1(() => [vue.createVNode("rect", {
      x: 0,
      y: 2,
      rx: 8,
      ry: 8,
      width: $options.loaderHeight * 3,
      height: $options.loaderHeight - 4
    }, null, 8
    /* PROPS */
    , ["width", "height"]), vue.createVNode("text", {
      x: $options.loaderHeight * 3 + 5,
      y: 2,
      fill: "black",
      class: "loader-text",
      size: $props.size
    }, " / ", 8
    /* PROPS */
    , ["x", "size"]), vue.createVNode("rect", {
      x: $options.loaderHeight * 3 + 15,
      y: 2,
      rx: 8,
      ry: 8,
      width: $options.loaderHeight * 4,
      height: $options.loaderHeight - 4
    }, null, 8
    /* PROPS */
    , ["x", "width", "height"])]),
    _: 1
    /* STABLE */

  });
});

script$4.render = render$4;
script$4.__scopeId = "data-v-5b889339";
script$4.__file = "src/components/ContentLoader/FolderPathLoader.vue";

var script$5 = {
  name: 'ListWithImageLoader',
  components: {
    ContentLoader: ContentLoader.script
  },
  props: {
    items: {
      type: Number,
      default: 3
    }
  }
};

const _hoisted_1$4 = /*#__PURE__*/vue.createVNode("rect", {
  x: "0",
  y: "7",
  rx: 3,
  ry: 3,
  width: 24,
  height: 24
}, null, -1
/* HOISTED */
);

const _hoisted_2$4 = /*#__PURE__*/vue.createVNode("rect", {
  x: 32,
  y: "2",
  rx: 3,
  ry: 3,
  width: 80,
  height: 12
}, null, -1
/* HOISTED */
);

const _hoisted_3$3 = /*#__PURE__*/vue.createVNode("rect", {
  x: 32,
  y: 19,
  rx: 3,
  ry: 3,
  width: 100,
  height: 16
}, null, -1
/* HOISTED */
);

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ContentLoader = vue.resolveComponent("ContentLoader");

  return vue.openBlock(), vue.createBlock("div", null, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.items, item => {
    return vue.openBlock(), vue.createBlock(_component_ContentLoader, {
      key: item,
      "view-box": "0 0 140 54",
      height: "54px",
      width: "140px"
    }, {
      default: vue.withCtx(() => [_hoisted_1$4, _hoisted_2$4, _hoisted_3$3]),
      _: 2
      /* DYNAMIC */

    }, 1024
    /* DYNAMIC_SLOTS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
}

script$5.render = render$5;
script$5.__file = "src/components/ContentLoader/ListWithImageLoader.vue";

const random$1 = () => Math.random() * (1 - 0.7) + 0.7;

var script$6 = {
  name: 'TableLoader',
  components: {
    ContentLoader: ContentLoader.script
  },
  props: {
    rows: {
      type: Number,
      default: 10
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    viewBox: {
      type: String,
      default: '0 0 1260 40'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '40px'
    },
    preserveAspectRatio: {
      type: String,
      default: 'none'
    }
  },

  data() {
    return {
      random: random$1
    };
  }

};

const _hoisted_1$5 = /*#__PURE__*/vue.createVNode("rect", {
  x: "30",
  y: "13",
  rx: "3",
  ry: "3",
  width: "23",
  height: "12"
}, null, -1
/* HOISTED */
);

const _hoisted_2$5 = /*#__PURE__*/vue.createVNode("rect", {
  x: "70",
  y: "13",
  rx: "3",
  ry: "3",
  width: "78",
  height: "12"
}, null, -1
/* HOISTED */
);

const _hoisted_3$4 = /*#__PURE__*/vue.createVNode("rect", {
  x: "360",
  y: "13",
  rx: "3",
  ry: "3",
  width: "83",
  height: "12"
}, null, -1
/* HOISTED */
);

const _hoisted_4 = /*#__PURE__*/vue.createVNode("rect", {
  x: "0",
  y: "39",
  rx: "3",
  ry: "3",
  width: "1260",
  height: "0.5"
}, null, -1
/* HOISTED */
);

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ContentLoader = vue.resolveComponent("ContentLoader");

  return vue.openBlock(), vue.createBlock("div", null, [$props.isLoading ? (vue.openBlock(true), vue.createBlock(vue.Fragment, {
    key: 0
  }, vue.renderList($props.rows, row => {
    return vue.openBlock(), vue.createBlock(_component_ContentLoader, vue.mergeProps({
      key: row
    }, _ctx.$attrs, {
      "view-box": $props.viewBox,
      "preserve-aspect-ratio": $props.preserveAspectRatio,
      width: $props.width,
      height: $props.height
    }), {
      default: vue.withCtx(() => [_hoisted_1$5, _hoisted_2$5, vue.createVNode("rect", {
        x: "210",
        y: "13",
        rx: "3",
        ry: "3",
        width: 117 * $data.random(),
        height: "12"
      }, null, 8
      /* PROPS */
      , ["width"]), _hoisted_3$4, vue.createVNode("rect", {
        x: "480",
        y: "13",
        rx: "3",
        ry: "3",
        width: 250 * $data.random(),
        height: "12"
      }, null, 8
      /* PROPS */
      , ["width"]), vue.createVNode("rect", {
        x: "750",
        y: "13",
        rx: "3",
        ry: "3",
        width: 500 * $data.random(),
        height: "12"
      }, null, 8
      /* PROPS */
      , ["width"]), _hoisted_4]),
      _: 2
      /* DYNAMIC */

    }, 1040
    /* FULL_PROPS, DYNAMIC_SLOTS */
    , ["view-box", "preserve-aspect-ratio", "width", "height"]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : vue.renderSlot(_ctx.$slots, "default", {
    key: 1
  })]);
}

script$6.render = render$6;
script$6.__file = "src/components/ContentLoader/TableLoader.vue";

exports.script = script$6;
exports.script$1 = script$2;
exports.script$2 = script;
exports.script$3 = script$4;
exports.script$4 = script$1;
exports.script$5 = script$3;
exports.script$6 = script$5;
