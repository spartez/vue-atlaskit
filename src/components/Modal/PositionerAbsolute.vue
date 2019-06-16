<template>
    <div class="positioner">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'PositionerAbsolute'
    };
</script>

<style scoped>
.positioner {
    display: flex;
    flex-direction: column;
    height: calc(100% - 120px);
    left: 0px;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 120px);
    position: relative;
    right: 0px;
    top: 60px;
    width: 600px;
    z-index: 510;
    pointer-events: none;
    transition: transform 0.3s ease;
}
</style>
