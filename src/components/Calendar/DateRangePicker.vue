<template>
    <div ref="date-picker" class="date-picker" @click.stop>
        <TextField :is-focused="focused" :is-loading="isLoading" :disabled="isLoading"
                   :is-invalid="isInvalid" select @mousedown="toggle">
            <div class="input-from-wrapper">
                <span class="input-from-ghost">{{ formattedDateFrom || `e.g. ${placeholderDate}` }}</span>
                <input ref="input-from" :value="formattedDateFrom" type="text"
                       class="input-from"
                       :placeholder="`e.g. ${placeholderDate}`" :disabled="isLoading"
                       v-on="listeners" @keydown.enter="onEnter"
                       @input="onInputFrom" @keyup.esc="onEsc"
                       @focus="onFocus" @blur="onBlur">
            </div>
            <span>-</span>
            <input ref="input-to" :value="formattedDateTo" type="text"
                   class="input-to"
                   :placeholder="placeholderDate" :disabled="isLoading"
                   v-on="listeners" @keydown.enter="onEnter"
                   @input="onInputTo" @keyup.esc="onEsc"
                   @focus="onFocus" @blur="onBlur">
            <CalendarIcon class="icon" size="small" @mousedown.native.prevent/>
        </TextField>
        <Popup :is-open="isOpen" :target-element="$refs['date-picker']" placement="bottom-start">
            <div class="date-range">
                <Calendar :value="dateRange" :range-value="true" :visible-date="visibleDate"
                          @date-selected="onDateSelected"/>
                <div v-if="showQuickRanges" class="quick-ranges" tabindex="-1">
                    <DropdownGroup label="Quick ranges">
                        <DropdownItem @click="onQuickRange('this-week')">
                            This week
                        </DropdownItem>
                        <DropdownItem @click="onQuickRange('this-month')">
                            This month
                        </DropdownItem>
                        <DropdownItem @click="onQuickRange('last-week')">
                            Last week
                        </DropdownItem>
                        <DropdownItem @click="onQuickRange('last-month')">
                            Last month
                        </DropdownItem>
                        <DropdownItem @click="onQuickRange('last-7days')">
                            Last 7 days
                        </DropdownItem>
                        <DropdownItem @click="onQuickRange('last-30days')">
                            Last 30 days
                        </DropdownItem>
                        <DropdownItem @click="onQuickRange('this-year')">
                            This year
                        </DropdownItem>
                        <DropdownItem @click="onQuickRange('last-year')">
                            Last year
                        </DropdownItem>
                    </DropdownGroup>
                </div>
            </div>
        </Popup>
    </div>
</template>

<script>
    import format from 'date-fns/format';
    import {
        fromUnixTime, parse, isValid, isBefore, isAfter, startOfWeek, endOfWeek,
        startOfMonth, endOfMonth, subMonths, subWeeks, subDays, startOfYear, endOfYear, subYears
    } from 'date-fns';
    import TextField from '../Form/TextField';
    import Calendar from './Calendar';
    import Popup from '../common/Popup';
    import CalendarIcon from '../Icon/CalendarIcon';
    import DropdownItem from '../Dropdown/DropdownItem';
    import DropdownGroup from '../Dropdown/DropdownGroup';

    const MILISECONDS_IN_SECOND = 1000;

    export default {
        name: 'DateRangePicker',
        components: {
            TextField, Calendar, Popup, CalendarIcon, DropdownItem, DropdownGroup
        },
        props: {
            value: {
                type: Object,
                default: () => ({ from: undefined, to: undefined })
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
                        this.$emit('input', { from: this.value.to, to: date });
                    } else {
                        this.$emit('input', { from: date, to: this.value.to });
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
                        this.$emit('input', { from: date, to: this.value.from });
                    } else {
                        this.$emit('input', { from: this.value.from, to: date });
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
                    focus, blur, input, ...listeners
                } = this.$listeners;
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
                    default:
                }
                return undefined;
            },
            setRange(from, to) {
                this.$emit('input', { from, to });
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
</script>
<style scoped>
    .icon {
        padding-right: 8px;
    }

    .date-range {
        display: flex;
    }

    .input-from-wrapper {
        position: relative;
        height: 32px;
    }

    .input-from-ghost {
        visibility: hidden;
        white-space: nowrap;
        padding: 6px;
        display: block;
    }

    .input-from {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .quick-ranges {
        padding: 4px 0;
        box-shadow: rgba(9, 30, 66, 0.31) 0px 0px 1px;
    }
</style>
