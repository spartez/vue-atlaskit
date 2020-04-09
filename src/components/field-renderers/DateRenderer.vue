<template>
    <div class="date" v-text="formattedDate"/>
</template>

<script>
    import format from 'date-fns/format';

    export default {
        name: 'DateRenderer',
        props: {
            date: {
                type: [String, Number],
                default: undefined
            }
        },
        computed: {
            formattedDate() {
                return this.date && format(new Date(this.date), 'dd MMMM yyyy');
            }
        }
    };
</script>

<style scoped>
    .date:empty::after {
        content: '\feff';
        visibility: hidden;
    }
</style>
