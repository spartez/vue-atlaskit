<template>
    <div class="menu-section">
        <div v-if="label" class="menu-section-label">
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
                default: undefined
            },
            separator: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style scoped>
    .menu-section {
        padding: 6px 0;
    }

    .menu-section-label {
        text-transform: uppercase;
        font-size: 11px;
        line-height: 1.45455;
        font-weight: 700;
        color: var(--ds-text-subtle, #42526E);
        margin-top: 14px;
        margin-bottom: 6px;
        padding: 0px 12px;
    }
</style>
