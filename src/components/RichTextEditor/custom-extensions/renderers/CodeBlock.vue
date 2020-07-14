<template>
    <component :is="type" class="code-block">
        <span>{{ node.textContent }}</span>
    </component>
</template>

<script>
    export default {
        name: 'CodeBlock',
        props: ['node'],
        computed: {
            type() {
                return this.node.type.name === 'code' ? 'span' : 'div';
            }
        }
    };
</script>

<style scoped>
.code-block {
    font-size: 12px;
    font-weight: normal;
    padding: 2px 0px 2px 0px;
    background-color: rgba(9, 30, 66, 0.08);
    box-decoration-break: clone;
    border-radius: 3px;
    border-style: none;
    font-family: "SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace;
    white-space: pre-wrap;
    margin: 0 4px 0 4px;
    box-shadow: rgba(9, 30, 66, 0.08) -4px 0px 0px 0px, rgba(9, 30, 66, 0.08) 4px 0px 0px 0px;
}

div.code-block {
    padding: 4px 0px 4px 16px;

}
</style>
