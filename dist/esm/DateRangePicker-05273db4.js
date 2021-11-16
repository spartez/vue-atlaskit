import { pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, withModifiers, createVNode, toDisplayString, mergeProps, toHandlers, withKeys, createCommentVNode, withScopeId, createTextVNode } from 'vue';
import { C as CalendarIcon } from './ChevronRightLargeIcon-7949afc0.js';
import { s as script$1 } from './TextField-55b306ba.js';
import { t as toDate, a as toInteger, b as script$2, i as isValid, c as fromUnixTime, d as isAfter, e as isBefore, f as format, p as parse, g as subYears, h as startOfMonth, j as subMonths, k as endOfMonth, l as startOfWeek } from './DatePicker-8ad693ad.js';
import { s as script$3 } from './Popup-f7883f21.js';
import { s as script$4 } from './DropdownItem-e9305055.js';
import { s as script$5 } from './DropdownGroup-80eaac80.js';

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  date.setDate(date.getDate() + amount);
  return date;
}

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  var days = amount * 7;
  return addDays(dirtyDate, days);
}

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */

function startOfYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var cleanDate = toDate(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */

function endOfYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */

function endOfWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */

function getTime(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  return addDays(dirtyDate, -amount);
}

/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */

function subWeeks(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  return addWeeks(dirtyDate, -amount);
}

const MILISECONDS_IN_SECOND = 1000;
var script = {
  name: 'DateRangePicker',
  components: {
    TextField: script$1,
    Calendar: script$2,
    Popup: script$3,
    CalendarIcon,
    DropdownItem: script$4,
    DropdownGroup: script$5
  },
  props: {
    value: {
      type: Object,
      default: () => ({
        from: undefined,
        to: undefined
      })
    },
    isFocused: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    dateFormat: {
      type: String,
      default: 'dd/MM/y'
    },
    showQuickRanges: {
      type: Boolean,
      default: true
    },
    disabledRange: {
      type: Object,
      default: () => ({
        from: undefined,
        to: undefined
      })
    }
  },

  data() {
    return {
      focused: false,
      isOpen: false,
      firstDateSelected: false,
      visibleDate: undefined
    };
  },

  computed: {
    isValidFrom() {
      return this.value.from && isValid(this.value.from);
    },

    isValidTo() {
      return this.value.to && isValid(this.value.to);
    },

    selectedDateFrom: {
      get() {
        if (!this.isValidFrom) {
          return undefined;
        }

        return fromUnixTime(this.value.from / MILISECONDS_IN_SECOND);
      },

      set(date) {
        if (this.value.to && isAfter(date, this.value.to)) {
          this.$emit('update:value', {
            from: this.value.to,
            to: date
          });
        } else {
          this.$emit('update:value', {
            from: date,
            to: this.value.to
          });
        }
      }

    },
    selectedDateTo: {
      get() {
        if (!this.isValidTo) {
          return undefined;
        }

        return fromUnixTime(this.value.to / MILISECONDS_IN_SECOND);
      },

      set(date) {
        if (this.value.from && isBefore(date, this.value.from)) {
          this.$emit('update:value', {
            from: date,
            to: this.value.from
          });
        } else {
          this.$emit('update:value', {
            from: this.value.from,
            to: date
          });
        }
      }

    },

    formattedDateFrom() {
      if (!this.isValidFrom) {
        return '';
      }

      return format(this.value.from, this.dateFormat);
    },

    formattedDateTo() {
      if (!this.isValidTo) {
        return '';
      }

      return format(this.value.to, this.dateFormat);
    },

    dateRange() {
      return {
        from: this.selectedDateFrom,
        to: this.selectedDateTo
      };
    },

    listeners() {
      const {
        focus,
        blur,
        input,
        ...listeners
      } = this.$attrs;
      return listeners;
    },

    placeholderDate() {
      return format(new Date(), this.dateFormat);
    }

  },
  watch: {
    isFocused: {
      handler(isFocused) {
        if (isFocused) {
          this.$nextTick(() => this.$refs['input-from'].focus());
        }
      },

      immediate: true
    },

    isOpen() {
      if (!this.isOpen) {
        this.firstDateSelected = false;
      }
    }

  },
  methods: {
    onInputFrom(e) {
      const date = parse(e.target.value, this.dateFormat, new Date()).getTime();

      if (e.target.value.length === 0) {
        this.selectedDateFrom = undefined;
      } else if (!Number.isNaN(date)) {
        const formatted = format(date, this.dateFormat);
        if (e.target.value !== formatted) return;
        this.selectedDateFrom = date;
        this.$nextTick(() => {
          this.visibleDate = this.selectedDateFrom;
        });
      }
    },

    onInputTo(e) {
      const date = parse(e.target.value, this.dateFormat, new Date()).getTime();

      if (e.target.value.length === 0) {
        this.selectedDateTo = undefined;
      } else if (!Number.isNaN(date)) {
        const formatted = format(date, this.dateFormat);
        if (e.target.value !== formatted) return;
        this.selectedDateTo = date;
        this.$nextTick(() => {
          this.visibleDate = this.selectedDateTo;
        });
      }
    },

    toggle() {
      this.isOpen = !this.isOpen;
    },

    onEsc() {
      this.isOpen = false;
    },

    onEnter(e) {
      this.$emit('confirm', e);
    },

    onFocus(e) {
      if (!this.$refs['date-picker'].contains(e.relatedTarget)) {
        this.focused = true;
        this.isOpen = true;
        this.$emit('focus', e);
      }

      const focusedInput = this.getFocusedInput();

      if (focusedInput) {
        this.visibleDate = focusedInput === this.$refs['input-from'] ? this.selectedDateFrom : this.selectedDateTo;
      }
    },

    onBlur(e) {
      if (!this.$refs['date-picker'].contains(e.relatedTarget)) {
        this.focused = false;
        this.isOpen = false;
        this.$emit('blur', e);
      } else if (e.relatedTarget.getAttribute('tabindex') === '-1') {
        e.target.focus();
      }
    },

    onDateSelected(date) {
      if (this.isInputFromFocused()) {
        this.selectedDateFrom = Date.parse(date);
      } else {
        this.selectedDateTo = Date.parse(date);
      }

      if (!this.firstDateSelected) {
        this.firstDateSelected = true;

        if (this.isInputFromFocused()) {
          this.$refs['input-to'].focus();
        } else {
          this.$refs['input-from'].focus();
        }
      } else {
        this.isOpen = false;
      }
    },

    onQuickRange(range) {
      const today = new Date();

      switch (range) {
        case 'this-week':
          return this.setRange(startOfWeek(today), endOfWeek(today));

        case 'this-month':
          return this.setRange(startOfMonth(today), endOfMonth(today));

        case 'last-week':
          return this.setRange(startOfWeek(subWeeks(today, 1)), endOfWeek(subWeeks(today, 1)));

        case 'last-month':
          return this.setRange(startOfMonth(subMonths(today, 1)), endOfMonth(subMonths(today, 1)));

        case 'last-7days':
          return this.setRange(subDays(today, 6), today);

        case 'last-30days':
          return this.setRange(subDays(today, 29), today);

        case 'this-year':
          return this.setRange(startOfYear(today), endOfYear(today));

        case 'last-year':
          return this.setRange(startOfYear(subYears(today, 1)), endOfYear(subYears(today, 1)));
      }

      return undefined;
    },

    setRange(from, to) {
      this.$emit('update:value', {
        from: getTime(from),
        to: getTime(to)
      });
      this.isOpen = false;
    },

    isInputFromFocused() {
      return document.activeElement === this.$refs['input-from'];
    },

    getFocusedInput() {
      if (document.activeElement === this.$refs['input-from']) return this.$refs['input-from'];
      if (document.activeElement === this.$refs['input-to']) return this.$refs['input-to'];
      return undefined;
    }

  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-1f8338dc");

pushScopeId("data-v-1f8338dc");

const _hoisted_1 = {
  class: "input-from-wrapper"
};
const _hoisted_2 = {
  class: "input-from-ghost"
};

const _hoisted_3 = /*#__PURE__*/createVNode("span", null, "-", -1
/* HOISTED */
);

const _hoisted_4 = {
  class: "date-range"
};
const _hoisted_5 = {
  key: 0,
  class: "quick-ranges",
  tabindex: "-1"
};

const _hoisted_6 = /*#__PURE__*/createTextVNode(" This week ");

const _hoisted_7 = /*#__PURE__*/createTextVNode(" This month ");

const _hoisted_8 = /*#__PURE__*/createTextVNode(" Last week ");

const _hoisted_9 = /*#__PURE__*/createTextVNode(" Last month ");

const _hoisted_10 = /*#__PURE__*/createTextVNode(" Last 7 days ");

const _hoisted_11 = /*#__PURE__*/createTextVNode(" Last 30 days ");

const _hoisted_12 = /*#__PURE__*/createTextVNode(" This year ");

const _hoisted_13 = /*#__PURE__*/createTextVNode(" Last year ");

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_CalendarIcon = resolveComponent("CalendarIcon");

  const _component_TextField = resolveComponent("TextField");

  const _component_Calendar = resolveComponent("Calendar");

  const _component_DropdownItem = resolveComponent("DropdownItem");

  const _component_DropdownGroup = resolveComponent("DropdownGroup");

  const _component_Popup = resolveComponent("Popup");

  return openBlock(), createBlock("div", {
    ref: "date-picker",
    class: "date-picker",
    onClick: _cache[20] || (_cache[20] = withModifiers(() => {}, ["stop"]))
  }, [createVNode(_component_TextField, {
    "is-focused": $data.focused,
    "is-loading": $props.isLoading,
    disabled: $props.isLoading,
    "is-invalid": $props.isInvalid,
    select: "",
    onMousedown: $options.toggle
  }, {
    default: _withId(() => [createVNode("div", _hoisted_1, [createVNode("span", _hoisted_2, toDisplayString($options.formattedDateFrom || `e.g. ${$options.placeholderDate}`), 1
    /* TEXT */
    ), createVNode("input", mergeProps({
      ref: "input-from",
      value: $options.formattedDateFrom,
      type: "text",
      class: "input-from",
      placeholder: `e.g. ${$options.placeholderDate}`,
      disabled: $props.isLoading
    }, toHandlers($options.listeners), {
      onKeydown: _cache[1] || (_cache[1] = withKeys((...args) => $options.onEnter && $options.onEnter(...args), ["enter"])),
      onInput: _cache[2] || (_cache[2] = (...args) => $options.onInputFrom && $options.onInputFrom(...args)),
      onKeyup: _cache[3] || (_cache[3] = withKeys((...args) => $options.onEsc && $options.onEsc(...args), ["esc"])),
      onFocus: _cache[4] || (_cache[4] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onBlur: _cache[5] || (_cache[5] = (...args) => $options.onBlur && $options.onBlur(...args))
    }), null, 16
    /* FULL_PROPS */
    , ["value", "placeholder", "disabled"])]), _hoisted_3, createVNode("input", mergeProps({
      ref: "input-to",
      value: $options.formattedDateTo,
      type: "text",
      class: "input-to",
      placeholder: $options.placeholderDate,
      disabled: $props.isLoading
    }, toHandlers($options.listeners), {
      onKeydown: _cache[6] || (_cache[6] = withKeys((...args) => $options.onEnter && $options.onEnter(...args), ["enter"])),
      onInput: _cache[7] || (_cache[7] = (...args) => $options.onInputTo && $options.onInputTo(...args)),
      onKeyup: _cache[8] || (_cache[8] = withKeys((...args) => $options.onEsc && $options.onEsc(...args), ["esc"])),
      onFocus: _cache[9] || (_cache[9] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onBlur: _cache[10] || (_cache[10] = (...args) => $options.onBlur && $options.onBlur(...args))
    }), null, 16
    /* FULL_PROPS */
    , ["value", "placeholder", "disabled"]), createVNode(_component_CalendarIcon, {
      class: "icon",
      size: "small",
      onMousedown: _cache[11] || (_cache[11] = withModifiers(() => {}, ["prevent"]))
    })]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-focused", "is-loading", "disabled", "is-invalid", "onMousedown"]), createVNode(_component_Popup, {
    "is-open": $data.isOpen,
    "target-element": _ctx.$refs['date-picker'],
    placement: "bottom-start"
  }, {
    default: _withId(() => [createVNode("div", _hoisted_4, [createVNode(_component_Calendar, {
      value: $options.dateRange,
      "disabled-range": $props.disabledRange,
      "range-value": true,
      "visible-date": $data.visibleDate,
      onDateSelected: $options.onDateSelected
    }, null, 8
    /* PROPS */
    , ["value", "disabled-range", "visible-date", "onDateSelected"]), $props.showQuickRanges ? (openBlock(), createBlock("div", _hoisted_5, [createVNode(_component_DropdownGroup, {
      label: "Quick ranges"
    }, {
      default: _withId(() => [createVNode(_component_DropdownItem, {
        onClick: _cache[12] || (_cache[12] = $event => $options.onQuickRange('this-week'))
      }, {
        default: _withId(() => [_hoisted_6]),
        _: 1
        /* STABLE */

      }), createVNode(_component_DropdownItem, {
        onClick: _cache[13] || (_cache[13] = $event => $options.onQuickRange('this-month'))
      }, {
        default: _withId(() => [_hoisted_7]),
        _: 1
        /* STABLE */

      }), createVNode(_component_DropdownItem, {
        onClick: _cache[14] || (_cache[14] = $event => $options.onQuickRange('last-week'))
      }, {
        default: _withId(() => [_hoisted_8]),
        _: 1
        /* STABLE */

      }), createVNode(_component_DropdownItem, {
        onClick: _cache[15] || (_cache[15] = $event => $options.onQuickRange('last-month'))
      }, {
        default: _withId(() => [_hoisted_9]),
        _: 1
        /* STABLE */

      }), createVNode(_component_DropdownItem, {
        onClick: _cache[16] || (_cache[16] = $event => $options.onQuickRange('last-7days'))
      }, {
        default: _withId(() => [_hoisted_10]),
        _: 1
        /* STABLE */

      }), createVNode(_component_DropdownItem, {
        onClick: _cache[17] || (_cache[17] = $event => $options.onQuickRange('last-30days'))
      }, {
        default: _withId(() => [_hoisted_11]),
        _: 1
        /* STABLE */

      }), createVNode(_component_DropdownItem, {
        onClick: _cache[18] || (_cache[18] = $event => $options.onQuickRange('this-year'))
      }, {
        default: _withId(() => [_hoisted_12]),
        _: 1
        /* STABLE */

      }), createVNode(_component_DropdownItem, {
        onClick: _cache[19] || (_cache[19] = $event => $options.onQuickRange('last-year'))
      }, {
        default: _withId(() => [_hoisted_13]),
        _: 1
        /* STABLE */

      })]),
      _: 1
      /* STABLE */

    })])) : createCommentVNode("v-if", true)])]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-open", "target-element"])], 512
  /* NEED_PATCH */
  );
});

script.render = render;
script.__scopeId = "data-v-1f8338dc";
script.__file = "src/components/Calendar/DateRangePicker.vue";

export { script as s };
