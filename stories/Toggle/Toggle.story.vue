<template>
    <div>
        <Toggle v-model="regular" data-cy="toggle"/>
        <Toggle v-model="large" size="large"/>
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
                large: false
            };
        }
    };
</script>

<style scoped>

</style>
