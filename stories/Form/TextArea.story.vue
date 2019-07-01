<template>
    <FieldGroup label="Label" required><TextArea value="candy"/></FieldGroup>
</template>

<script>
    import FieldGroup from '@/components/Form/FieldGroup'
    import TextArea from '@/components/Form/TextArea'

    export default {
        name: "TextArea.story",
        components: { FieldGroup, TextArea }
    }
</script>

<style scoped>

</style>
