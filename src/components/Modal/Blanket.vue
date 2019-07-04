<template>
    <div class="blanket">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'Blanket'
    };
</script>

<style scoped>

.blanket {
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    position: fixed;
    z-index: 500;
    background: rgba(9, 30, 66, 0.54);
    transition: opacity 220ms ease 0s;
}
</style>
