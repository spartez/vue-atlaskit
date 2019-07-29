<template>
    <div class="field-group">
        <span class="label">{{ label }}</span>
        <slot/>
        <div v-for="error in errors" ref="error" :key="error"
             class="error-message">
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

    .error-message {
        font-size: 12px;
        font-style: inherit;
        line-height: 18px;
        font-weight: normal;
        color: #de350b;
        margin-top: 4px;
        display: flex;
        align-items: center;
    }

    .label {
        color: #6b778c;
        font-size: 12px;
        line-height: 1.33333;
        display: block;
        font-weight: 600;
        padding: 16px 0 4px 2px;
    }

    [required] .label::after {
        color: #DE350B;
        font-size: 12px;
        line-height: 1.33;
        font-weight: 600;
        padding-left: 2px;
        display: inline-block;
        content: '*';
    }
</style>
