<template>
    <blockquote ref="content" :contenteditable="view.editable.toString()"/>
</template>

<script>
    export default {
        name: 'Blockquote',
        props: ['node', 'view']
    };
</script>

<style scoped>
blockquote:first-child {
    margin-top: 0;
}

blockquote::before {
    content: '';
}

blockquote::after {
    content: none;
}

blockquote p {
    display: block;
}

blockquote table,
blockquote table:last-child {
    display: inline-table;
}
</style>
