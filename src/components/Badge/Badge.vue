<template>
    <span>{{ value }}</span>
</template>

<script>
    export default {
        name: 'Badge',
        props: {
            value: {
                type: [String, Number],
                default: '-'
            }
        }
    };
</script>

<style scoped>
    span {
        display: inline-block;
        font-size: 12px;
        font-weight: normal;
        line-height: 1;
        min-width: 1px;
        text-align: center;
        border-radius: 24px;
        padding: 2px 6px;
        box-sizing: border-box;
    }

    span:empty::after {
        display: inline-block;
        content: '-';
    }

    [appearance = 'added'] {
        background-color: var(--ds-background-success, #E3FCEF);
        color: var(--ds-text-success, #006644);
    }

    [appearance = 'default'] {
        background-color: var(--ds-background-neutral, #DFE1E6);
        color: var(--ds-text, #172B4D);
    }

    [appearance = 'important'] {
        background-color: var(--ds-background-danger-bold, #DE350B);
        color: var(--ds-text-inverse, #FFFFFF);
    }

    [appearance = 'primary'] {
        background-color: var(--ds-background-brand-bold, #0052CC);
        color: var(--ds-text-inverse, #FFFFFF);
    }

    [appearance = 'removed'] {
        background-color: var(--ds-background-danger, #FFEBE6);
        color: var(--ds-text-danger, #DE350B);
    }
</style>
