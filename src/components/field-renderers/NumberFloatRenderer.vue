<template>
    <div class="number-float-wrapper"
         :title="value" v-text="value"/>
</template>

<script>
    export default {
        name: 'NumberFloatRenderer',
        props: {
            value: {
                type: String,
                default: undefined
            }
        }
    };
</script>

<style scoped>
    .number-float-wrapper {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .number-float-wrapper:empty::after {
        content: '\feff';
        visibility: hidden;
    }
</style>
