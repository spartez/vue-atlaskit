'use strict';

var vue = require('vue');
var UserRenderer = require('./UserRenderer-7eac727f.js');

var script = {
  name: 'UserPicker',
  components: {
    UserRenderer: UserRenderer.script$1,
    Select: UserRenderer.script
  },
  props: {
    getUsers: {
      type: Function,
      required: true
    },
    value: {
      type: [Object, Array],
      default: undefined
    },
    multi: {
      type: Boolean,
      default: false
    },
    mapper: {
      type: Function,
      default: list => list
    },
    placeholder: {
      type: String,
      default: 'Type to search...'
    },
    searchPromptText: {
      type: String,
      default: 'Type to search...'
    },
    initialOptions: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      users: [],
      isFetching: false,
      debouncedGetUsers: undefined
    };
  },

  created() {
    this.debouncedGetUsers = UserRenderer.pDebounce_1(this.onSearchChange, 200);
  },

  methods: {
    loadInitialOptions() {
      this.users = this.initialOptions;
    },

    async onSearchChange(query) {
      if (!query) return;
      this.isFetching = true;
      const {
        data: users
      } = await this.getUsers(query);
      this.users = this.mapper(users);
      this.isFetching = false;
    },

    normalizer(user) {
      return {
        id: user.key,
        label: user.name,
        value: user,
        disabled: user.disabled
      };
    },

    onInput(users) {
      this.$emit('update:value', users);
    }

  }
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-568de94c");

vue.pushScopeId("data-v-568de94c");

const _hoisted_1 = {
  class: "label"
};
const _hoisted_2 = {
  class: "label"
};
const _hoisted_3 = {
  class: "user-tag"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_UserRenderer = vue.resolveComponent("UserRenderer");

  const _component_Select = vue.resolveComponent("Select");

  return vue.openBlock(), vue.createBlock(_component_Select, vue.mergeProps({
    value: $props.value,
    options: $data.users,
    async: true,
    multi: $props.multi,
    "is-fetching": $data.isFetching,
    placeholder: $props.placeholder,
    normalizer: $options.normalizer
  }, vue.toHandlers(_ctx.$attrs), {
    "onUpdate:value": $options.onInput,
    onOpen: $options.loadInitialOptions,
    onSearchChange: $data.debouncedGetUsers
  }), {
    option: _withId(({
      option
    }) => [vue.createVNode("div", _hoisted_1, [vue.createVNode(_component_UserRenderer, {
      tag: "span",
      user: option
    }, null, 8
    /* PROPS */
    , ["user"])])]),
    selected: _withId(({
      selected
    }) => [vue.createVNode("div", _hoisted_2, [vue.createVNode(_component_UserRenderer, {
      tag: "span",
      user: selected
    }, null, 8
    /* PROPS */
    , ["user"])])]),
    tag: _withId(({
      tag
    }) => [vue.createVNode("div", _hoisted_3, [vue.createVNode(_component_UserRenderer, {
      appearance: "micro",
      tag: "span",
      user: tag.value
    }, null, 8
    /* PROPS */
    , ["user"])])]),
    _: 1
    /* STABLE */

  }, 16
  /* FULL_PROPS */
  , ["value", "options", "multi", "is-fetching", "placeholder", "normalizer", "onUpdate:value", "onOpen", "onSearchChange"]);
});

script.render = render;
script.__scopeId = "data-v-568de94c";
script.__file = "src/components/Select/UserPicker.vue";

exports.script = script;
