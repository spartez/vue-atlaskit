<template>
  <span
    class="wrapper"
    :style="{maxWidth: maxWidth}"
  >
    <span
      v-if="$slots['icon-before']"
      class="icon-wrapper"
    >
      <slot name="icon-before"/>
    </span>
    <span class="value">{{ value }}</span>
    <span
      v-if="$slots['icon-after']"
      class="icon-wrapper"
    >
      <slot name="icon-after"/>
    </span>
  </span>
</template>

<script>
    export default {
        name: 'Badge',
        props: {
            value: {
                type: [String, Number],
                default: '-'
            },
            maxWidth: {
                type: [String],
                default: 'auto'
            }
        }
    };
</script>

<style scoped>
    .wrapper {
        display: inline-flex;
        align-items: center;
        font-size: 12px;
        font-weight: normal;
        line-height: 1;
        min-width: 1px;
        text-align: center;
        border-radius: 24px;
        padding: 2px 6px;
        box-sizing: border-box;
        flex-shrink: 0;
        height: 16px;
        vertical-align: middle;
    }

    .icon-wrapper {
        height: 12px;
        display: inline-flex;
        align-items: center;
        overflow: hidden;
        flex-shrink: 0;
        margin-top: -2px;
    }

    .value{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .value:empty::after {
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
