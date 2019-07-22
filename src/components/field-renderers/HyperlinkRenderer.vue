<template>
    <a class="hyperlink" target="_top" :href="link"
       v-text="link"/>
</template>

<script>
    export default {
        name: 'HyperLinkRenderer',
        props: {
            link: {
                type: String,
                default: undefined
            }
        }
    };
</script>

<style scoped>
    .hyperlink:empty::after {
        content: '\feff';
        visibility: hidden;
    }
</style>
