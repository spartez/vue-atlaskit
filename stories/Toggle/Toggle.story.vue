<template>
    <div>
        <Toggle v-model="regular" data-cy="toggle"/>
        <Toggle v-model="large" size="large"/>
        <Toggle v-model="disabled" disabled data-cy="toggle"/>
        <Toggle v-model="disabled" disabled size="large"/>
    </div>
</template>

<script>
    import Toggle from '@/components/Toggle/Toggle';

    export default {
        name: 'ToggleStory',
        components: { Toggle },
        data() {
            return {
                regular: false,
                large: false,
                disabled: true
            };
        }
    };
</script>

<style scoped>

</style>
