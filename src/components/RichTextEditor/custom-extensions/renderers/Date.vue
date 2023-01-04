<template>
  <span class="date">{{ timestamp }}</span>
</template>

<script>
    import format from 'date-fns/format';

    export default {
        name: 'Date',
        props: ['node', 'updateAttrs', 'view'],
        computed: {
            timestamp() {
                return this.node && format(new Date(parseInt(this.node.attrs.timestamp, 10)), 'MMM d, y');
            }
        }
    };
</script>

<style scoped>
.date {
    color: rgb(23, 43, 77);
    white-space: nowrap;
    background: rgba(9, 30, 66, 0.08);
    border-radius: 3px;
    padding: 2px 4px;
    margin: 0px 1px;
    transition: background 0.3s ease 0s;
}
</style>
