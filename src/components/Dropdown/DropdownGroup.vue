<template>
    <div class="dropdown-group">
        <div class="title">
            {{ label }}
        </div>
        <slot/>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                required: true
            }
        }
    };
</script>

<style scoped>
    .dropdown-group .title {
        align-items: center;
        color: rgb(107, 119, 140);
        padding: 8px 12px;
        font-size: 11px;
        line-height: 1;
        text-transform: uppercase;
    }
</style>
