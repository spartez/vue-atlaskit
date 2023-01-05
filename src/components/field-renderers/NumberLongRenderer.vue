<template>
  <div
    class="number-long-wrapper"
    :title="value"
    v-text="value"
  />
</template>

<script>
    export default {
        name: 'NumberLongRenderer',
        props: {
            value: {
                type: Number,
                default: undefined
            }
        }
    };
</script>

<style scoped>
    .number-long-wrapper {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .number-long-wrapper:empty::after {
        content: '\feff';
        visibility: hidden;
    }
</style>
