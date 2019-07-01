<template>
    <Checkbox v-model="checked">Basic Checkbox</Checkbox>
</template>

<script>
    import Checkbox from '@/components/Checkbox/Checkbox'

    export default {
        name: "CheckboxBasic",
        components: { Checkbox },
        data() {
            return {
                checked: false
            }
        }
    }
</script>
