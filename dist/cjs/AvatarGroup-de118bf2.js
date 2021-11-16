'use strict';

var vue = require('vue');
var Tooltip = require('./Tooltip-8782664c.js');
var DropdownItem = require('./DropdownItem-65f1c897.js');
var Dropdown = require('./Dropdown-ae6b8cb7.js');

var script = {
  name: 'PresenceWrapper'
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-4196f35d");

vue.pushScopeId("data-v-4196f35d");

const _hoisted_1 = {
  class: "outline"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [vue.renderSlot(_ctx.$slots, "default")]);
});

script.render = render;
script.__scopeId = "data-v-4196f35d";
script.__file = "src/components/Avatar/Icons/PresenceWrapper.vue";

var script$1 = {
  name: 'Online',
  components: {
    PresenceWrapper: script
  }
};

const _hoisted_1$1 = /*#__PURE__*/vue.createVNode("svg", {
  height: "100%",
  version: "1.1",
  viewBox: "0 0 8 8",
  width: "100%",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/vue.createVNode("circle", {
  fill: "rgb(54, 179, 126)",
  cx: "4",
  cy: "4",
  r: "4"
})], -1
/* HOISTED */
);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PresenceWrapper = vue.resolveComponent("PresenceWrapper");

  return vue.openBlock(), vue.createBlock(_component_PresenceWrapper, null, {
    default: vue.withCtx(() => [_hoisted_1$1]),
    _: 1
    /* STABLE */

  });
}

script$1.render = render$1;
script$1.__file = "src/components/Avatar/Icons/Online.vue";

var script$2 = {
  name: 'Offline',
  components: {
    PresenceWrapper: script
  }
};

const _hoisted_1$2 = /*#__PURE__*/vue.createVNode("svg", {
  height: "100%",
  version: "1.1",
  viewBox: "0 0 8 8",
  width: "100%",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/vue.createVNode("path", {
  fill: "rgb(107, 119, 140)",
  d: "M4,8 C6.209139,8 8,6.209139 8,4 C8,1.790861 6.209139,0 4,0 C1.790861,0 0,1.790861 0,4 C0,6.209139 1.790861,8 4,8 Z M4,6 C5.1045695,6 6,5.1045695 6,4 C6,2.8954305 5.1045695,2 4,2 C2.8954305,2 2,2.8954305 2,4 C2,5.1045695 2.8954305,6 4,6 Z"
}), /*#__PURE__*/vue.createVNode("path", {
  fill: "rgb(223, 225, 230)",
  d: "M4,6 C5.1045695,6 6,5.1045695 6,4 C6,2.8954305 5.1045695,2 4,2 C2.8954305,2 2,2.8954305 2,4 C2,5.1045695 2.8954305,6 4,6 Z"
})], -1
/* HOISTED */
);

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PresenceWrapper = vue.resolveComponent("PresenceWrapper");

  return vue.openBlock(), vue.createBlock(_component_PresenceWrapper, null, {
    default: vue.withCtx(() => [_hoisted_1$2]),
    _: 1
    /* STABLE */

  });
}

script$2.render = render$2;
script$2.__file = "src/components/Avatar/Icons/Offline.vue";

var script$3 = {
  name: 'Busy',
  components: {
    PresenceWrapper: script
  }
};

const _hoisted_1$3 = /*#__PURE__*/vue.createVNode("svg", {
  height: "100%",
  version: "1.1",
  viewBox: "0 0 8 8",
  width: "100%",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/vue.createVNode("circle", {
  fill: "rgb(255, 86, 48)",
  cx: "4",
  cy: "4",
  r: "4"
}), /*#__PURE__*/vue.createCommentVNode("eslint-disable-next-line max-len"), /*#__PURE__*/vue.createVNode("path", {
  fill: "#ffF",
  d: "M3.3,1.9l2.8,2.8c0.2,0.2,0.2,0.5,0,0.7L5.4,6.1c-0.2,0.2-0.5,0.2-0.7,0L1.9,3.3c-0.2-0.2-0.2-0.5,0-0.7l0.7-0.7C2.8,1.7,3.1,1.7,3.3,1.9z"
})], -1
/* HOISTED */
);

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PresenceWrapper = vue.resolveComponent("PresenceWrapper");

  return vue.openBlock(), vue.createBlock(_component_PresenceWrapper, null, {
    default: vue.withCtx(() => [_hoisted_1$3]),
    _: 1
    /* STABLE */

  });
}

script$3.render = render$3;
script$3.__file = "src/components/Avatar/Icons/Busy.vue";

var script$4 = {
  name: 'Focus',
  components: {
    PresenceWrapper: script
  }
};

const _hoisted_1$4 = /*#__PURE__*/vue.createVNode("svg", {
  height: "100%",
  version: "1.1",
  viewBox: "0 0 8 8",
  width: "100%",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/vue.createVNode("path", {
  fill: "rgb(101, 84, 192)",
  d: "M4,8 C1.790861,8 0,6.209139 0,4 C0,1.790861 1.790861,0 4,0 C6.209139,0 8,1.790861 8,4 C8,6.209139 6.209139,8 4,8 Z M4,6.66666667 C5.47275933,6.66666667 6.66666667,5.47275933 6.66666667,4 C6.66666667,2.52724067 5.47275933,1.33333333 4,1.33333333 C2.52724067,1.33333333 1.33333333,2.52724067 1.33333333,4 C1.33333333,5.47275933 2.52724067,6.66666667 4,6.66666667 Z M4,5.33333333 C3.26362033,5.33333333 2.66666667,4.73637967 2.66666667,4 C2.66666667,3.26362033 3.26362033,2.66666667 4,2.66666667 C4.73637967,2.66666667 5.33333333,3.26362033 5.33333333,4 C5.33333333,4.73637967 4.73637967,5.33333333 4,5.33333333 Z"
})], -1
/* HOISTED */
);

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PresenceWrapper = vue.resolveComponent("PresenceWrapper");

  return vue.openBlock(), vue.createBlock(_component_PresenceWrapper, null, {
    default: vue.withCtx(() => [_hoisted_1$4]),
    _: 1
    /* STABLE */

  });
}

script$4.render = render$4;
script$4.__file = "src/components/Avatar/Icons/Focus.vue";

var script$5 = {
  name: 'Approved',
  components: {
    PresenceWrapper: script
  }
};

const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-02129e7c");

vue.pushScopeId("data-v-02129e7c");

const _hoisted_1$5 = /*#__PURE__*/vue.createVNode("svg", {
  height: "100%",
  version: "1.1",
  viewBox: "0 0 8 8",
  width: "100%",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/vue.createVNode("circle", {
  fill: "#00875A",
  cx: "4",
  cy: "4",
  r: "4"
}), /*#__PURE__*/vue.createVNode("path", {
  fill: "#FFFFFF",
  d: "M2.47140452,3.52859548 C2.21105499,3.26824595 1.78894501,3.26824595 1.52859548,3.52859548 C1.26824595,3.78894501 1.26824595,4.21105499 1.52859548,4.47140452 L2.86192881,5.80473785 C3.12227834,6.06508738 3.54438833,6.06508738 3.80473785,5.80473785 L6.47140452,3.13807119 C6.73175405,2.87772166 6.73175405,2.45561167 6.47140452,2.19526215 C6.21105499,1.93491262 5.78894501,1.93491262 5.52859548,2.19526215 L3.33333333,4.39052429 L2.47140452,3.52859548 Z"
})], -1
/* HOISTED */
);

vue.popScopeId();

const render$5 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_PresenceWrapper = vue.resolveComponent("PresenceWrapper");

  return vue.openBlock(), vue.createBlock(_component_PresenceWrapper, null, {
    default: _withId$1(() => [_hoisted_1$5]),
    _: 1
    /* STABLE */

  });
});

script$5.render = render$5;
script$5.__scopeId = "data-v-02129e7c";
script$5.__file = "src/components/Avatar/Icons/Approved.vue";

var script$6 = {
  name: 'Declined',
  components: {
    PresenceWrapper: script
  }
};

const _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-8f2c9a8e");

vue.pushScopeId("data-v-8f2c9a8e");

const _hoisted_1$6 = /*#__PURE__*/vue.createVNode("svg", {
  height: "100%",
  version: "1.1",
  viewBox: "0 0 8 8",
  width: "100%",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/vue.createVNode("circle", {
  fill: "#DE350B",
  cx: "4",
  cy: "4",
  r: "4"
}), /*#__PURE__*/vue.createVNode("path", {
  fill: "#FFFFFF",
  d: "M4.890661,4.0088336 L5.81806461,3.07802178 C6.06167933,2.83351177 6.06048933,2.43826992 5.81540668,2.19522442 C5.57032402,1.95217891 5.17415651,1.95336612 4.93054179,2.19787613 L4.00765946,3.12415007 L3.06906871,2.18377143 C2.82523777,1.93947602 2.42906937,1.93863765 2.18420182,2.18189887 C1.93933427,2.42516008 1.93849394,2.82040282 2.18232488,3.06469822 L3.12544091,4.00961077 L2.20275024,4.93569234 C1.95913552,5.18020236 1.96032551,5.5754442 2.20540817,5.81848971 C2.45049083,6.06153521 2.84665833,6.060348 3.09027306,5.81583799 L4.00844245,4.89429431 L4.9092123,5.79678001 C5.15304324,6.04107541 5.54921164,6.04191379 5.79407919,5.79865257 C6.03894674,5.55539135 6.03978708,5.16014862 5.79595614,4.91585321 L4.890661,4.0088336 Z"
})], -1
/* HOISTED */
);

vue.popScopeId();

const render$6 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_PresenceWrapper = vue.resolveComponent("PresenceWrapper");

  return vue.openBlock(), vue.createBlock(_component_PresenceWrapper, null, {
    default: _withId$2(() => [_hoisted_1$6]),
    _: 1
    /* STABLE */

  });
});

script$6.render = render$6;
script$6.__scopeId = "data-v-8f2c9a8e";
script$6.__file = "src/components/Avatar/Icons/Declined.vue";

var script$7 = {
  name: 'Avatar',
  components: {
    Online: script$1,
    Busy: script$3,
    Offline: script$2,
    Focus: script$4,
    Approved: script$5,
    Declined: script$6
  },
  props: {
    size: {
      type: String,
      default: 'medium'
    },
    presence: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    },
    link: {
      type: String,
      default: '#'
    },
    outline: {
      type: String,
      default: '#fff'
    },
    status: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      error: false
    };
  },

  computed: {
    style() {
      return {
        'background-color': this.outline
      };
    }

  }
};

const _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-100e3b6f");

vue.pushScopeId("data-v-100e3b6f");

const _hoisted_1$7 = {
  key: 1,
  viewBox: "0 0 128 128",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
};

const _hoisted_2 = /*#__PURE__*/vue.createVNode("g", null, [/*#__PURE__*/vue.createVNode("circle", {
  cx: "64",
  cy: "64",
  r: "64",
  fill: "rgb(193, 199, 208)"
}), /*#__PURE__*/vue.createVNode("g", null, [/*#__PURE__*/vue.createCommentVNode("eslint-disable-next-line max-len"), /*#__PURE__*/vue.createVNode("path", {
  d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
}), /*#__PURE__*/vue.createCommentVNode("eslint-disable-next-line max-len"), /*#__PURE__*/vue.createVNode("path", {
  d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
})])], -1
/* HOISTED */
);

vue.popScopeId();

const render$7 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", {
    class: "outer",
    style: `zIndex: ${$props.zIndex}`
  }, [vue.renderSlot(_ctx.$slots, "avatar-header"), (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.tag), {
    href: $props.link,
    target: "_blank",
    class: "wrapper",
    size: $props.size,
    style: $options.style
  }, {
    default: _withId$3(() => [$props.avatar && !$data.error ? (vue.openBlock(), vue.createBlock("img", {
      key: 0,
      draggable: "false",
      src: $props.avatar,
      alt: "avatar",
      onError: _cache[1] || (_cache[1] = $event => $data.error = true)
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , ["src"])) : (vue.openBlock(), vue.createBlock("svg", _hoisted_1$7, [_hoisted_2])), $props.status ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.status), {
      key: 2,
      class: "status",
      size: $props.size
    }, null, 8
    /* PROPS */
    , ["size"])) : vue.createCommentVNode("v-if", true), $props.presence ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.presence), {
      key: 3,
      size: $props.size,
      class: "presence",
      "primary-color": "green"
    }, null, 8
    /* PROPS */
    , ["size"])) : vue.createCommentVNode("v-if", true), vue.renderSlot(_ctx.$slots, "avatar-footer")]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["href", "size", "style"]))], 4
  /* STYLE */
  );
});

script$7.render = render$7;
script$7.__scopeId = "data-v-100e3b6f";
script$7.__file = "src/components/Avatar/Avatar.vue";

var script$8 = {
  name: 'AvatarGroup',
  components: {
    Avatar: script$7,
    Dropdown: Dropdown.script,
    DropdownItem: DropdownItem.script,
    Tooltip: Tooltip.script
  },
  props: {
    users: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: 'medium'
    },
    limit: {
      type: Number,
      default: 5
    },
    dropdownPositionFixed: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      counterUp: true
    };
  },

  computed: {
    isOverLimit() {
      return this.users && this.users.length > this.limit;
    },

    count() {
      return this.visible.length;
    },

    visible() {
      return this.users ? this.users.slice(0, this.limit) : [];
    },

    collapsed() {
      return this.users ? this.users.slice(this.limit - 1) : [];
    },

    collapsedCount() {
      return this.collapsed.length;
    }

  },
  watch: {
    collapsedCount(value, prevValue) {
      this.counterUp = value > prevValue;
    }

  },
  methods: {
    beforeLeave(el) {
      el.style.left = `${el.offsetLeft}px`;
      el.style.top = `${el.offsetTop}px`;
    }

  }
};

const _withId$4 = /*#__PURE__*/vue.withScopeId("data-v-19485200");

vue.pushScopeId("data-v-19485200");

const _hoisted_1$8 = {
  class: "avatar-group"
};
const _hoisted_2$1 = {
  class: "user-name"
};
const _hoisted_3 = {
  key: 1,
  class: "list-item"
};
const _hoisted_4 = {
  class: "user-name"
};

vue.popScopeId();

const render$8 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Avatar = vue.resolveComponent("Avatar");

  const _component_Tooltip = vue.resolveComponent("Tooltip");

  const _component_DropdownItem = vue.resolveComponent("DropdownItem");

  const _component_Dropdown = vue.resolveComponent("Dropdown");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1$8, [vue.createVNode(vue.TransitionGroup, {
    name: "participant",
    tag: "div",
    class: "avatar-group-inner",
    "over-limit": $options.isOverLimit,
    onBeforeLeave: $options.beforeLeave
  }, {
    default: _withId$4(() => [_ctx.$slots.before ? (vue.openBlock(), vue.createBlock("div", {
      key: "slot-before",
      class: "avatar-wrapper",
      style: {
        zIndex: $options.count + 1
      }
    }, [vue.renderSlot(_ctx.$slots, "before")], 4
    /* STYLE */
    )) : vue.createCommentVNode("v-if", true), (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.visible, (user, i) => {
      return vue.openBlock(), vue.createBlock("div", {
        key: user.key,
        class: "avatar-wrapper",
        "data-index": i,
        style: {
          zIndex: $options.count - i
        },
        last: i === $options.count - 1
      }, [vue.createVNode(_component_Tooltip, {
        key: user.key,
        class: "tooltip",
        "append-to-body": true,
        label: user.displayName
      }, {
        default: _withId$4(() => [vue.createVNode(_component_Avatar, {
          key: user.key,
          tag: user.link ? 'a' : 'span',
          class: "avatar",
          size: $props.size,
          link: user.link,
          status: user.status,
          avatar: user.avatar,
          presence: user.presence
        }, null, 8
        /* PROPS */
        , ["tag", "size", "link", "status", "avatar", "presence"])]),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["label"])], 12
      /* STYLE, PROPS */
      , ["data-index", "last"]);
    }), 128
    /* KEYED_FRAGMENT */
    )), $options.isOverLimit ? (vue.openBlock(), vue.createBlock(_component_Dropdown, {
      key: "dropdown",
      placement: "bottom-end",
      "position-fixed": $props.dropdownPositionFixed,
      "append-to-body": $props.appendToBody,
      class: "dropdown-wrapper"
    }, {
      trigger: _withId$4(({
        toggle,
        isOpen
      }) => [vue.createVNode("div", {
        class: "trigger",
        size: $props.size,
        open: isOpen
      }, [vue.createVNode("div", {
        class: "more",
        onClick: toggle
      }, [vue.createVNode(vue.Transition, {
        name: $data.counterUp ? 'counter-up' : 'counter-down'
      }, {
        default: _withId$4(() => [(vue.openBlock(), vue.createBlock("span", {
          key: $options.collapsedCount,
          class: "collapsed-count"
        }, "+" + vue.toDisplayString($options.collapsedCount), 1
        /* TEXT */
        ))]),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["name"])], 8
      /* PROPS */
      , ["onClick"])], 8
      /* PROPS */
      , ["size", "open"])]),
      default: _withId$4(() => [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.collapsed, collapsedUser => {
        return vue.openBlock(), vue.createBlock(_component_DropdownItem, {
          key: collapsedUser.key
        }, {
          default: _withId$4(() => [collapsedUser.link ? (vue.openBlock(), vue.createBlock("a", {
            key: 0,
            class: "list-item",
            href: collapsedUser.link,
            target: "_blank"
          }, [vue.createVNode(_component_Avatar, {
            tag: "a",
            link: collapsedUser.link,
            class: "user-list-avatar",
            size: "small",
            status: collapsedUser.status,
            avatar: collapsedUser.avatar,
            presence: collapsedUser.presence
          }, null, 8
          /* PROPS */
          , ["link", "status", "avatar", "presence"]), vue.createVNode("span", _hoisted_2$1, vue.toDisplayString(collapsedUser.displayName), 1
          /* TEXT */
          )], 8
          /* PROPS */
          , ["href"])) : (vue.openBlock(), vue.createBlock("div", _hoisted_3, [vue.createVNode(_component_Avatar, {
            tag: "a",
            link: collapsedUser.link,
            class: "user-list-avatar",
            size: "small",
            status: collapsedUser.status,
            avatar: collapsedUser.avatar,
            presence: collapsedUser.presence
          }, null, 8
          /* PROPS */
          , ["link", "status", "avatar", "presence"]), vue.createVNode("span", _hoisted_4, vue.toDisplayString(collapsedUser.displayName), 1
          /* TEXT */
          )]))]),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))]),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["position-fixed", "append-to-body"])) : vue.createCommentVNode("v-if", true)]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["over-limit", "onBeforeLeave"])]);
});

script$8.render = render$8;
script$8.__scopeId = "data-v-19485200";
script$8.__file = "src/components/Avatar/AvatarGroup.vue";

exports.script = script$7;
exports.script$1 = script$8;
