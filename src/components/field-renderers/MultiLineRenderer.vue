<template>
  <div
    class="multi-line-wrapper"
    :title="value"
    v-text="value"
  />
</template>

<script>
    export default {
        name: 'MultiLineRenderer',
        props: {
            value: {
                type: String,
                default: undefined
            }
        }
    };
</script>

<style scoped>
    .multi-line-wrapper {
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .multi-line-wrapper:empty::after {
        content: '\feff';
        visibility: hidden;
    }
</style>
