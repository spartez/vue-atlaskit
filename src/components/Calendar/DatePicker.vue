<template>
    <div ref="date-picker" class="date-picker" @click.stop>
        <TextField :is-focused="isFocused">
            <input ref="input" :value="formattedDate" type="text"
                   width="50%"
                   @focus="onFocus" @blur="onBlur" @keyup.enter="onEnter">
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

    export default {
        name: 'DatePicker',
        components: { TextField, Calendar, Popper },
        data() {
            return {
                selectedDate: undefined,
                isFocused: false,
                isOpen: false
            };
        },
        computed: {
            formattedDate() {
                const date = this.selectedDate || new Date();
                return format(date, 'MM/dd/yyyy');
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
                    this.selectedDate = new Date(date);
                    console.log(this.selectedDate);
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
