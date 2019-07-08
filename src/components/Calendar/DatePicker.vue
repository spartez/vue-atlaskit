<template>
    <div ref="date-picker" class="date-picker" @click.stop>
        <TextField :is-focused="isFocused" select>
            <input ref="input" :value="formattedDate" type="text"
                   width="50%"
                   @focus="onFocus" @blur="onBlur" @keyup.enter="onEnter">
            <CalendarIcon/>
        </TextField>
        <Popper v-if="isOpen" :target-element="$refs['date-picker']" placement="bottom-start">
            <Calendar :value="selectedDate" @date-selected="onDateSelected"/>
        </Popper>
    </div>
</template>

<script>
    import format from 'date-fns/format';
    import TextField from '../Form/TextField';
    import Calendar from './Calendar';
    import Popper from '../Popper/Popper';
    import CalendarIcon from '../Icon/CalendarIcon';

    export default {
        name: 'DatePicker',
        components: {
            TextField, Calendar, Popper, CalendarIcon
        },
        props: {
            value: {
                type: Date,
                default: new Date()
            }
        },
        data() {
            return {
                isFocused: false,
                isOpen: false
            };
        },
        computed: {
            selectedDate: {
                get() {
                    return this.value;
                },
                set(date) {
                    this.$emit('input', new Date(date));
                }
            },
            formattedDate() {
                return format(this.value, 'MM/dd/yyyy');
            }
        },
        mounted() {
            document.addEventListener('click', this.onBlur);
        },
        beforeDestroy() {
            document.removeEventListener('click', this.onBlur);
        },
        methods: {
            onEnter(e) {
                const date = e.target.value;
                const isValid = Date.parse(date);
                if (!Number.isNaN(isValid)) {
                    this.selectedDate = date;
                    this.isOpen = false;
                }
            },
            onFocus() {
                this.isFocused = true;
                this.isOpen = true;
            },
            onBlur(e) {
                if (!this.$refs['date-picker'].contains(e.relatedTarget)) {
                    this.isFocused = false;
                    this.isOpen = false;
                }
            },
            onDateSelected(date) {
                this.isFocused = false;
                this.isOpen = false;
                this.selectedDate = date;
            }
        }
    };
</script>
