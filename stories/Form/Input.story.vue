<template>
<FieldGroup label="Label" required><Input should-fit-container placeholder="Click here to input"/></FieldGroup>
</template>

<script>
    import Input from '@/components/Form/Input'
    import FieldGroup from '@/components/Form/FieldGroup'

    export default {
        name: "Input.story",
        components: { FieldGroup, Input }
    }
</script>
