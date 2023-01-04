<template>
  <div class="field-group">
    <div class="top">
      <span class="label field-group-label">{{ label }}</span><slot name="after"/>
    </div>
    <slot/>
    <div
      v-for="error in errors"
      ref="error"
      :key="error"
      class="error-message"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>
    export default {
        name: 'FieldGroup',
        props: {
            label: {
                type: String,
                default: undefined
            },
            errors: {
                type: Array,
                default: () => []
            }
        }
    };
</script>

<style scoped>

    .label {
        display: inline-flex;
    }

    .error-message {
        font-size: 12px;
        font-style: inherit;
        line-height: 18px;
        font-weight: normal;
        color: var(--ds-text-danger, #DE350B);
        margin-top: 4px;
        display: flex;
        align-items: center;
    }

    .label {
        color: var(--ds-text-subtlest, #6B778C);
        font-size: 12px;
        line-height: 1.33333;
        font-weight: 600;
        padding: 16px 3px 4px 2px;
    }

    .field-group{
        color: var(--ds-text-subtlest, #6B778C);
        font-size: 12px;
        font-weight: 400;
    }

    [required] .label::after {
        color: var(--ds-text-danger, #DE350B);
        font-size: 12px;
        line-height: 1.33;
        font-weight: 600;
        padding-left: 2px;
        display: inline-block;
        content: '*';
    }
</style>
