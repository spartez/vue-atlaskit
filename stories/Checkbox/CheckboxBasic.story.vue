<template>
    <div>
        <h3>Boolean value</h3>
        <Checkbox v-model="checked">
            Basic Checkbox
        </Checkbox>
        <p>value: {{ checked }}</p>
        <h3>Aray value</h3>
        <Checkbox v-model="checkedValues" value="foo">
            foo
        </Checkbox>
        <Checkbox v-model="checkedValues" :isFocused="true" value="bar">
            bar
        </Checkbox>
        <Checkbox v-model="checkedValues" :disabled="true" value="baz">
            baz
        </Checkbox>
        <p>value: {{ checkedValues }}</p>
    </div>
</template>

<script>
    import Checkbox from '@/components/Checkbox/Checkbox.vue';

    export default {
        name: 'CheckboxBasic',
        components: { Checkbox },
        data() {
            return {
                checked: false,
                checkedValues: []
            };
        }
    };
</script>
