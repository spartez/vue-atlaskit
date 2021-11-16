import { s as script$4 } from './Spinner-ce916205.js';
import { pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, toDisplayString, renderSlot, Fragment, createCommentVNode, withScopeId, createVNode, renderList, mergeProps, createSlots, withDirectives, vShow } from 'vue';
import { C as ChevronDownIcon } from './ChevronDownIcon-acb845c9.js';
import { C as ChevronUpIcon } from './ChevronUpIcon-75cc79cc.js';

var script = {
  components: {
    ChevronDownIcon,
    ChevronUpIcon
  },
  props: {
    column: {
      type: Object,
      required: true
    },
    stickyHeader: {
      type: Boolean,
      default: false
    },
    stickyLeft: {
      type: Boolean,
      default: false
    },
    stickyRight: {
      type: Boolean,
      default: false
    },
    sorted: {
      type: Boolean,
      default: false
    },
    sortedDesc: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      if (this.column.sortable) {
        this.$emit('sorted');
      }
    }

  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-5ecb419c");

pushScopeId("data-v-5ecb419c");

const _hoisted_1 = {
  key: 0,
  class: "table-header-label"
};
const _hoisted_2 = {
  key: 1,
  class: "table-header-label"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");

  const _component_ChevronUpIcon = resolveComponent("ChevronUpIcon");

  return openBlock(), createBlock("th", {
    class: "table-header-cell",
    "sticky-header": $props.stickyHeader,
    "sticky-left": $props.stickyLeft,
    "sticky-right": $props.stickyRight,
    sortable: $props.column.sortable,
    onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
  }, [$props.column.name ? (openBlock(), createBlock("span", _hoisted_1, toDisplayString($props.column.name), 1
  /* TEXT */
  )) : (openBlock(), createBlock("span", _hoisted_2, [renderSlot(_ctx.$slots, "default")])), $props.column.sortable ? (openBlock(), createBlock(Fragment, {
    key: 2
  }, [$props.sorted && $props.sortedDesc ? (openBlock(), createBlock(_component_ChevronDownIcon, {
    key: 0,
    size: "small"
  })) : createCommentVNode("v-if", true), $props.sorted && !$props.sortedDesc ? (openBlock(), createBlock(_component_ChevronUpIcon, {
    key: 1,
    size: "small"
  })) : createCommentVNode("v-if", true)], 64
  /* STABLE_FRAGMENT */
  )) : createCommentVNode("v-if", true)], 8
  /* PROPS */
  , ["sticky-header", "sticky-left", "sticky-right", "sortable"]);
});

script.render = render;
script.__scopeId = "data-v-5ecb419c";
script.__file = "src/components/Table/TableHeaderCell.vue";

var script$1 = {
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: undefined
    },
    stickyLeft: {
      type: Boolean,
      default: false
    },
    stickyRight: {
      type: Boolean,
      default: false
    }
  }
};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-56ed6e1f");

pushScopeId("data-v-56ed6e1f");

const _hoisted_1$1 = {
  class: "table-row-cell-value"
};

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("td", {
    ref: "cellElement",
    class: "table-row-cell",
    "sticky-left": $props.stickyLeft,
    "sticky-right": $props.stickyRight
  }, [renderSlot(_ctx.$slots, "default", {
    value: $props.value,
    cellElement: _ctx.$refs.cellElement
  }, () => [createVNode("span", _hoisted_1$1, toDisplayString($props.value), 1
  /* TEXT */
  )])], 8
  /* PROPS */
  , ["sticky-left", "sticky-right"]);
});

script$1.render = render$1;
script$1.__scopeId = "data-v-56ed6e1f";
script$1.__file = "src/components/Table/TableRowCell.vue";

var script$2 = {
  components: {
    TableRowCell: script$1
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    row: {
      type: Object,
      default: () => ({})
    },
    stickyLeft: {
      type: Boolean,
      default: false
    },
    stickyRight: {
      type: Boolean,
      default: false
    },
    isActiveRow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    }

  }
};

const _withId$2 = /*#__PURE__*/withScopeId("data-v-2be367c6");

pushScopeId("data-v-2be367c6");

const _hoisted_1$2 = {
  class: "table-row-cell-value"
};

popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_TableRowCell = resolveComponent("TableRowCell");

  return openBlock(), createBlock("tr", {
    class: "table-row",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
  }, [(openBlock(true), createBlock(Fragment, null, renderList($props.columns, (column, index) => {
    return openBlock(), createBlock(_component_TableRowCell, {
      key: column.id,
      value: $props.row[column.id],
      "sticky-left": $props.stickyLeft && index === 0,
      "sticky-right": $props.stickyRight && index === $props.columns.length - 1
    }, {
      default: _withId$2(props => [renderSlot(_ctx.$slots, column.id, mergeProps({
        row: $props.row
      }, props), () => [createVNode("span", _hoisted_1$2, toDisplayString($props.row[column.id]), 1
      /* TEXT */
      )])]),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["value", "sticky-left", "sticky-right"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
});

script$2.render = render$2;
script$2.__scopeId = "data-v-2be367c6";
script$2.__file = "src/components/Table/TableRow.vue";

function withPxSuffix(value) {
  if (typeof value === 'number') return `${value}px`;
  return value;
}

var script$3 = {
  components: {
    TableHeaderCell: script,
    TableRow: script$2,
    Spinner: script$4
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      default: () => []
    },
    stickyHeader: {
      type: Boolean,
      default: false
    },
    stickyLeftColumn: {
      type: Boolean,
      default: false
    },
    stickyRightColumn: {
      type: Boolean,
      default: false
    },
    defaultColumnMinWidth: {
      type: [String, Number],
      default: 150
    },
    defaultColumnWidth: {
      type: [String, Number],
      default: '1fr'
    },
    infiniteScroll: {
      type: Boolean,
      default: false
    },
    busy: {
      type: Boolean,
      default: false
    },
    sortedBy: {
      type: String,
      default: undefined
    },
    sortedDesc: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      observer: undefined,
      tableWidth: 0,
      activeRowId: undefined
    };
  },

  watch: {
    columns: {
      handler() {
        this.$nextTick(() => {
          this.$refs.table.style.gridTemplateColumns = this.columns.map(column => {
            const width = column.width || this.defaultColumnWidth;
            const minWidth = column.minWidth || column.width || this.defaultColumnMinWidth;
            return `minmax(${withPxSuffix(minWidth)}, ${withPxSuffix(width)})`;
          }).join(' ');
          this.tableWidth = this.$refs.table.offsetWidth;
        });
      },

      immediate: true
    }
  },

  async mounted() {
    this.createObserver();
  },

  methods: {
    onRowClick(row, event) {
      this.$emit('row-click', {
        row,
        event
      });
    },

    createObserver() {
      if (this.observer) {
        this.observer.unobserve(this.$refs['infinite-scroll-loader']);
      }

      this.observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          this.tableBottomReached();
        }
      });
      this.observer.observe(this.$refs['infinite-scroll-loader']);
    },

    tableBottomReached() {
      this.$emit('table-bottom-reached', () => {
        this.createObserver();
      });
    },

    onSorted(column) {
      this.$emit('sorted', {
        id: column.id,
        desc: this.sortedBy === column.id ? !this.sortedDesc : false
      });
    }

  }
};

const _withId$3 = /*#__PURE__*/withScopeId("data-v-647119ad");

pushScopeId("data-v-647119ad");

const _hoisted_1$3 = {
  class: "table-wrapper"
};
const _hoisted_2$1 = {
  ref: "table",
  class: "table"
};
const _hoisted_3 = {
  class: "table-header-row"
};

popScopeId();

const render$3 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_TableHeaderCell = resolveComponent("TableHeaderCell");

  const _component_TableRow = resolveComponent("TableRow");

  const _component_Spinner = resolveComponent("Spinner");

  return openBlock(), createBlock("div", _hoisted_1$3, [createVNode("table", _hoisted_2$1, [createVNode("thead", null, [createVNode("tr", _hoisted_3, [(openBlock(true), createBlock(Fragment, null, renderList($props.columns, (column, index) => {
    return openBlock(), createBlock(_component_TableHeaderCell, {
      key: column.id,
      column: column,
      "sticky-left": $props.stickyLeftColumn && index === 0,
      "sticky-right": $props.stickyRightColumn && index === $props.columns.length - 1,
      "sticky-header": $props.stickyHeader,
      sorted: $props.sortedBy === column.id,
      "sorted-desc": $props.sortedDesc,
      onSorted: $event => $options.onSorted(column)
    }, {
      default: _withId$3(() => [renderSlot(_ctx.$slots, `Header${column.id}`)]),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["column", "sticky-left", "sticky-right", "sticky-header", "sorted", "sorted-desc", "onSorted"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), createVNode("tbody", null, [(openBlock(true), createBlock(Fragment, null, renderList($props.data, row => {
    return openBlock(), createBlock(_component_TableRow, {
      key: row.id,
      columns: $props.columns,
      row: row,
      "sticky-right": $props.stickyRightColumn,
      "sticky-left": $props.stickyLeftColumn,
      onClick: $event => $options.onRowClick(row, $event)
    }, createSlots({
      _: 2
      /* DYNAMIC */

    }, [renderList($props.columns, column => {
      return {
        name: column.id,
        fn: _withId$3(props => [renderSlot(_ctx.$slots, column.id, props)])
      };
    })]), 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["columns", "row", "sticky-right", "sticky-left", "onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), withDirectives(createVNode("tfoot", null, [createVNode("tr", null, [createVNode("td", {
    ref: "infinite-scroll-loader",
    class: "infinite-scroll-loader",
    style: {
      width: `${$data.tableWidth}px`
    }
  }, [createVNode(_component_Spinner, {
    size: "small"
  })], 4
  /* STYLE */
  )])], 512
  /* NEED_PATCH */
  ), [[vShow, $props.infiniteScroll]])], 512
  /* NEED_PATCH */
  ), createVNode("div", {
    class: "busy-glass",
    busy: $props.busy
  }, [createVNode(_component_Spinner)], 8
  /* PROPS */
  , ["busy"])]);
});

script$3.render = render$3;
script$3.__scopeId = "data-v-647119ad";
script$3.__file = "src/components/Table/Table.vue";

export { script$3 as s };
