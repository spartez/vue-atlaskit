'use strict';

var Spinner = require('./Spinner-849e0846.js');
var vue = require('vue');
var ChevronDownIcon = require('./ChevronDownIcon-06dbbc2e.js');
var ChevronUpIcon = require('./ChevronUpIcon-a6bd69cd.js');

var script = {
  components: {
    ChevronDownIcon: ChevronDownIcon.ChevronDownIcon,
    ChevronUpIcon: ChevronUpIcon.ChevronUpIcon
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

const _withId = /*#__PURE__*/vue.withScopeId("data-v-5ecb419c");

vue.pushScopeId("data-v-5ecb419c");

const _hoisted_1 = {
  key: 0,
  class: "table-header-label"
};
const _hoisted_2 = {
  key: 1,
  class: "table-header-label"
};

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_ChevronDownIcon = vue.resolveComponent("ChevronDownIcon");

  const _component_ChevronUpIcon = vue.resolveComponent("ChevronUpIcon");

  return vue.openBlock(), vue.createBlock("th", {
    class: "table-header-cell",
    "sticky-header": $props.stickyHeader,
    "sticky-left": $props.stickyLeft,
    "sticky-right": $props.stickyRight,
    sortable: $props.column.sortable,
    onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
  }, [$props.column.name ? (vue.openBlock(), vue.createBlock("span", _hoisted_1, vue.toDisplayString($props.column.name), 1
  /* TEXT */
  )) : (vue.openBlock(), vue.createBlock("span", _hoisted_2, [vue.renderSlot(_ctx.$slots, "default")])), $props.column.sortable ? (vue.openBlock(), vue.createBlock(vue.Fragment, {
    key: 2
  }, [$props.sorted && $props.sortedDesc ? (vue.openBlock(), vue.createBlock(_component_ChevronDownIcon, {
    key: 0,
    size: "small"
  })) : vue.createCommentVNode("v-if", true), $props.sorted && !$props.sortedDesc ? (vue.openBlock(), vue.createBlock(_component_ChevronUpIcon, {
    key: 1,
    size: "small"
  })) : vue.createCommentVNode("v-if", true)], 64
  /* STABLE_FRAGMENT */
  )) : vue.createCommentVNode("v-if", true)], 8
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

const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-56ed6e1f");

vue.pushScopeId("data-v-56ed6e1f");

const _hoisted_1$1 = {
  class: "table-row-cell-value"
};

vue.popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("td", {
    ref: "cellElement",
    class: "table-row-cell",
    "sticky-left": $props.stickyLeft,
    "sticky-right": $props.stickyRight
  }, [vue.renderSlot(_ctx.$slots, "default", {
    value: $props.value,
    cellElement: _ctx.$refs.cellElement
  }, () => [vue.createVNode("span", _hoisted_1$1, vue.toDisplayString($props.value), 1
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

const _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-2be367c6");

vue.pushScopeId("data-v-2be367c6");

const _hoisted_1$2 = {
  class: "table-row-cell-value"
};

vue.popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_TableRowCell = vue.resolveComponent("TableRowCell");

  return vue.openBlock(), vue.createBlock("tr", {
    class: "table-row",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
  }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.columns, (column, index) => {
    return vue.openBlock(), vue.createBlock(_component_TableRowCell, {
      key: column.id,
      value: $props.row[column.id],
      "sticky-left": $props.stickyLeft && index === 0,
      "sticky-right": $props.stickyRight && index === $props.columns.length - 1
    }, {
      default: _withId$2(props => [vue.renderSlot(_ctx.$slots, column.id, vue.mergeProps({
        row: $props.row
      }, props), () => [vue.createVNode("span", _hoisted_1$2, vue.toDisplayString($props.row[column.id]), 1
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
    Spinner: Spinner.script
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

const _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-647119ad");

vue.pushScopeId("data-v-647119ad");

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

vue.popScopeId();

const render$3 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_TableHeaderCell = vue.resolveComponent("TableHeaderCell");

  const _component_TableRow = vue.resolveComponent("TableRow");

  const _component_Spinner = vue.resolveComponent("Spinner");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1$3, [vue.createVNode("table", _hoisted_2$1, [vue.createVNode("thead", null, [vue.createVNode("tr", _hoisted_3, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.columns, (column, index) => {
    return vue.openBlock(), vue.createBlock(_component_TableHeaderCell, {
      key: column.id,
      column: column,
      "sticky-left": $props.stickyLeftColumn && index === 0,
      "sticky-right": $props.stickyRightColumn && index === $props.columns.length - 1,
      "sticky-header": $props.stickyHeader,
      sorted: $props.sortedBy === column.id,
      "sorted-desc": $props.sortedDesc,
      onSorted: $event => $options.onSorted(column)
    }, {
      default: _withId$3(() => [vue.renderSlot(_ctx.$slots, `Header${column.id}`)]),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["column", "sticky-left", "sticky-right", "sticky-header", "sorted", "sorted-desc", "onSorted"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), vue.createVNode("tbody", null, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.data, row => {
    return vue.openBlock(), vue.createBlock(_component_TableRow, {
      key: row.id,
      columns: $props.columns,
      row: row,
      "sticky-right": $props.stickyRightColumn,
      "sticky-left": $props.stickyLeftColumn,
      onClick: $event => $options.onRowClick(row, $event)
    }, vue.createSlots({
      _: 2
      /* DYNAMIC */

    }, [vue.renderList($props.columns, column => {
      return {
        name: column.id,
        fn: _withId$3(props => [vue.renderSlot(_ctx.$slots, column.id, props)])
      };
    })]), 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["columns", "row", "sticky-right", "sticky-left", "onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), vue.withDirectives(vue.createVNode("tfoot", null, [vue.createVNode("tr", null, [vue.createVNode("td", {
    ref: "infinite-scroll-loader",
    class: "infinite-scroll-loader",
    style: {
      width: `${$data.tableWidth}px`
    }
  }, [vue.createVNode(_component_Spinner, {
    size: "small"
  })], 4
  /* STYLE */
  )])], 512
  /* NEED_PATCH */
  ), [[vue.vShow, $props.infiniteScroll]])], 512
  /* NEED_PATCH */
  ), vue.createVNode("div", {
    class: "busy-glass",
    busy: $props.busy
  }, [vue.createVNode(_component_Spinner)], 8
  /* PROPS */
  , ["busy"])]);
});

script$3.render = render$3;
script$3.__scopeId = "data-v-647119ad";
script$3.__file = "src/components/Table/Table.vue";

exports.script = script$3;
