<template>
    <div ref="date-picker" class="date-picker" @click.stop>
        <TextField :is-focused="focused" :is-loading="isLoading" :disabled="isLoading"
                   :is-invalid="isInvalid" select>
            <input ref="input" :value="formattedDate" type="text"
                   width="50%" placeholder="e.g. 31/12/2018" v-on="listeners"
                   @input="onInput"
                   @focus="onFocus" @blur="onBlur" @keydown.enter="onEnter"
                   @keyup.esc="onEsc">
            <CalendarIcon/>
        </TextField>
        <Popper v-if="isOpen" :target-element="$refs['date-picker']" placement="bottom-start">
            <Calendar :value="selectedDate" @date-selected="onDateSelected"/>
        </Popper>
    </div>
</template>

<script>
    import format from 'date-fns/format';
    import { fromUnixTime, parse, isValid } from 'date-fns';
    import TextField from '../Form/TextField';
    import Calendar from './Calendar';
    import Popper from '../Popper/Popper';
    import CalendarIcon from '../Icon/CalendarIcon';

    const MILISECONDS_IN_SECOND = 1000;

    export default {
        name: 'DatePicker',
        components: {
            TextField, Calendar, Popper, CalendarIcon
        },
        props: {
            value: {
                type: [Number, String],
                default: undefined
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
            }
        },
        data() {
            return {
                focused: false,
                isOpen: false
            };
        },
        computed: {
            isValid() {
                return this.value && isValid(this.value);
            },
            selectedDate: {
                get() {
                    if (!this.isValid) {
                        return undefined;
                    }
                    return fromUnixTime(this.value / MILISECONDS_IN_SECOND);
                },
                set(date) {
                    this.$emit('input', date);
                }
            },
            formattedDate() {
                if (!this.isValid) {
                    return '';
                }
                return format(this.value, 'dd/MM/y');
            },
            listeners() {
                const {
                    focus, blur, input, keyup, ...listeners
                } = this.$listeners;
                return listeners;
            }
        },
        watch: {
            isFocused: {
                handler(isFocused) {
                    if (isFocused) {
                        this.$nextTick(() => this.$refs.input.focus());
                    }
                },
                immediate: true
            }
        },
        methods: {
            onInput(e) {
                const date = parse(e.target.value, 'dd/MM/y', new Date()).getTime();
                if (!Number.isNaN(date)) {
                    this.selectedDate = date;
                }
            },
            onEnter(e) {
                this.$emit('confirm', e);
            },
            onEsc(e) {
                this.focused = false;
                this.isOpen = false;
                this.$emit('blur', e);
            },
            onFocus(e) {
                if (!this.$refs['date-picker'].contains(e.relatedTarget)) {
                    this.focused = true;
                    this.isOpen = true;
                    this.$emit('focus', e);
                }
            },
            onBlur(e) {
                if (!this.$refs['date-picker'].contains(e.relatedTarget)) {
                    this.focused = false;
                    this.isOpen = false;
                    this.$emit('blur', e);
                } else if (e.relatedTarget.getAttribute('tabindex') === '-1') {
                    this.$refs.input.focus();
                }
            },
            onDateSelected(date) {
                this.isOpen = false;
                this.selectedDate = Date.parse(date);
                this.$refs.input.focus();
            }
        }
    };
</script>
