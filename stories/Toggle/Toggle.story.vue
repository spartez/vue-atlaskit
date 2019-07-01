<template>
    <div>
        <Toggle v-model="regular"/>
        <Toggle size="large" v-model="large"/>
    </div>
</template>

<script>
    import Toggle from '@/components/Toggle/Toggle'

    export default {
        name: "Toggle.story",
        components: { Toggle },
        data() {
            return {
                regular: false,
                large: false
            }
        }
    }
</script>

<style scoped>

</style>
