<template>
    <span class="mention">{{ node.attrs.text }}</span>
</template>

<script>
    export default {
        name: 'Mention',
        props: ['node']
    };
</script>

<style scoped>
.mention {
    display: inline;
    color: rgb(66, 82, 110);
    cursor: pointer;
    line-height: 1.714;
    font-size: 1em;
    font-weight: normal;
    word-break: break-word;
    background: rgba(9, 30, 66, 0.08);
    border: 1px solid transparent;
    border-image: initial;
    border-radius: 20px;
    padding: 0px 0.3em 2px 0.23em;
}
</style>
