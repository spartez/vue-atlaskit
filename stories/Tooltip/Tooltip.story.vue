<template>
    <div>
        <Tooltip label="Hello World!">
            <Button>Hover over me!</Button>
        </Tooltip>
    </div>
</template>

<script>
    import Tooltip from '@/components/Tooltip/Tooltip'
    import Button from '@/components/Button/Button'

    export default {
        name: "Tooltip.story",
        components: { Tooltip, Button }
    }
</script>

<style scoped>

</style>
