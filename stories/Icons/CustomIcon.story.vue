<template>
    <IconWrapper slot="icon-before" size="small"><Trash/></IconWrapper>
</template>

<script>
    import IconWrapper from '@/components/Icon/IconWrapper'
    import Trash from '@/components/Icon/svgs/trash.svg'

    export default {
        name: "CustomIcon.story",
        components: { IconWrapper, Trash }
    }
</script>

<style scoped>

</style>
