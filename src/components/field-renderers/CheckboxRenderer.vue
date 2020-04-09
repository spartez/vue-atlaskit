<template>
    <span class="input-label">
        <Checked v-if="!!parseInt(value)" size="small" primary-color="#36B37E"/>
        <span v-else class="icon"/>
        <span v-if="label">{{ label }}</span>
    </span>
</template>

<script>
    import Checked from '../Icon/EditorDoneIcon';

    export default {
        name: 'CheckboxRenderer',
        components: { Checked },
        props: {
            value: {
                type: String,
                default: '0'
            },
            label: {
                type: String,
                default: ''
            }
        }
    };
</script>

<style scoped>
.icon {
    display: inline-block;
    position: relative;
    font-size: 20px;
    height: 20px;
    width: 20px;
}

.input-label {
    display: flex;
    align-items: center;
}
</style>
