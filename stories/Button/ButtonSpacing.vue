<template>
    <div class="buttons">
        <Button>Default</Button>
        <Button spacing="compact">Compact</Button>
        <Button spacing="none">None</Button>
    </div>
</template>

<script>
    import { Button } from '../../'

    export default {
        name: "ButtonSpacing",
        components: { Button }
    }
</script>

<style scoped>

</style>
