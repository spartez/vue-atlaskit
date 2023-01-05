<template>
  <span>
    <span
      class="lozenge"
      :appearance="appearance"
      :bold="isBold"
    >
      <slot/>
    </span>
  </span>
</template>

<script>
    export default {
        props: {
            appearance: {
                type: String,
                validator: value => [
                    'default',
                    'success',
                    'removed',
                    'inprogress',
                    'new',
                    'moved'
                ].includes(value),
                default: 'default'
            },
            isBold: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style scoped>
    .lozenge {
        background-color: var(--ds-background-neutral, #DFE1E6);
        box-sizing: border-box;
        color: var(--ds-text-subtle, #42526E);
        display: inline;
        font-size: 11px;
        font-weight: 700;
        line-height: 1;
        text-transform: uppercase;
        vertical-align: baseline;
        border-radius: 3px;
        padding: 1px 4px 2px;
        overflow: hidden;
        max-width: 200px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .lozenge[appearance="success"] {
        background-color: var(--ds-background-success, #E3FCEF);
        color: var(--ds-text-success, #006644);
    }

    .lozenge[appearance="removed"] {
        background-color: var(--ds-background-danger, #FFEBE6);
        color: var(--ds-text-danger, #DE350B);
    }

    .lozenge[appearance="inprogress"] {
        background-color: var(--ds-background-information, #DEEBFF);
        color: var(--ds-text-information, #0052CC);
    }

    .lozenge[appearance="new"] {
        background-color: var(--ds-background-discovery, #EAE6FF);
        color: var(--ds-text-discovery, #403294);
    }

    .lozenge[appearance="moved"] {
        background-color: var(--ds-background-warning, #FFFAE6);
        color: var(--ds-text-warning, #974F0C);
    }

    .lozenge[bold] {
        background-color: var(--ds-background-neutral-bold, #42526E);
        color: var(--ds-text-inverse, #FFFFFF);
    }

    .lozenge[bold][appearance="success"] {
        background-color: var(--ds-background-success-bold, #00875A);
    }

    .lozenge[bold][appearance="removed"] {
        background-color: var(--ds-background-danger-bold, #DE350B);
    }

    .lozenge[bold][appearance="inprogress"] {
        background-color: var(--ds-background-information-bold, #0052CC);
    }

    .lozenge[bold][appearance="new"] {
        background-color: var(--ds-background-discovery-bold, #5243AA);
    }

    .lozenge[bold][appearance="moved"] {
        background-color: var(--ds-background-warning-bold, #FFAB00);
        color: rgb(23, 43, 77);
    }
</style>
