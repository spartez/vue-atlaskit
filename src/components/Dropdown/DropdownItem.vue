<template>
    <div class="dropdown-item" v-on="$attrs" @click="$emit('select',modelValue)">
        <span class="dropdown-item-label">
            <slot/>
        </span>
    </div>
</template>
<script>
    export default {
        emits: ['select'],
        compatConfig: {
            MODE: 3
        },
        props: {
            modelValue: {
                type: [Object, String, Number, Boolean]
            }
        }
    };
</script>
<style scoped>
    .dropdown-item {
        align-items: center;
        box-sizing: border-box;
        background-color: var(--ds-surface-overlay, #fff);
        color: var(--ds-text, #172B4D);
        text-decoration: none;
        padding: 8px 12px 7px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 40px;
        display: flex;
    }

    .dropdown-item-label {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .dropdown-item:hover {
        cursor: pointer;
        background-color: var(--ds-background-neutral-subtle-hovered, #F4F5F7);
        fill: rgb(244, 245, 247);
        text-decoration: none;
    }
</style>
