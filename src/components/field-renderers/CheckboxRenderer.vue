<template>
    <Checked v-if="boolean" size="small" primary-color="#36B37E"/>
    <span v-else class="icon"/>
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
            }
        },
        computed: {
            boolean() {
                return !!parseInt(this.value, 10);
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
</style>
