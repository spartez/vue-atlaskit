import { pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, mergeProps, toHandlers, createVNode, withScopeId } from 'vue';
import { a as script$1, s as script$2, p as pDebounce_1 } from './UserRenderer-54ea0cf8.js';

var script = {
  name: 'UserPicker',
  components: {
    UserRenderer: script$1,
    Select: script$2
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
    this.debouncedGetUsers = pDebounce_1(this.onSearchChange, 200);
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

const _withId = /*#__PURE__*/withScopeId("data-v-568de94c");

pushScopeId("data-v-568de94c");

const _hoisted_1 = {
  class: "label"
};
const _hoisted_2 = {
  class: "label"
};
const _hoisted_3 = {
  class: "user-tag"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_UserRenderer = resolveComponent("UserRenderer");

  const _component_Select = resolveComponent("Select");

  return openBlock(), createBlock(_component_Select, mergeProps({
    value: $props.value,
    options: $data.users,
    async: true,
    multi: $props.multi,
    "is-fetching": $data.isFetching,
    placeholder: $props.placeholder,
    normalizer: $options.normalizer
  }, toHandlers(_ctx.$attrs), {
    "onUpdate:value": $options.onInput,
    onOpen: $options.loadInitialOptions,
    onSearchChange: $data.debouncedGetUsers
  }), {
    option: _withId(({
      option
    }) => [createVNode("div", _hoisted_1, [createVNode(_component_UserRenderer, {
      tag: "span",
      user: option
    }, null, 8
    /* PROPS */
    , ["user"])])]),
    selected: _withId(({
      selected
    }) => [createVNode("div", _hoisted_2, [createVNode(_component_UserRenderer, {
      tag: "span",
      user: selected
    }, null, 8
    /* PROPS */
    , ["user"])])]),
    tag: _withId(({
      tag
    }) => [createVNode("div", _hoisted_3, [createVNode(_component_UserRenderer, {
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

export { script as s };
