<template>
    <div class="menu">
        <slot/>
    </div>
</template>

<style scoped>
    .menu {
        display: flex;
        flex-direction: column;
        padding: 12px 16px;
    }
</style>
