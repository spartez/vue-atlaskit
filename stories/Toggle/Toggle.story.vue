<template>
    <div>
        <h3>Default</h3>
        <Toggle v-model="regular" data-cy="toggle"/>
        <Toggle v-model="large" size="large"/>
        <Toggle v-model="disabled" disabled/>
        <Toggle v-model="disabled" disabled size="large"/>

        <h3>Primary</h3>
        <Toggle v-model="regular" appearance="primary"/>
        <Toggle v-model="large" appearance="primary" size="large"/>
        <Toggle v-model="disabled" appearance="primary" disabled/>
        <Toggle v-model="disabled" appearance="primary" disabled
                size="large"/>
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
