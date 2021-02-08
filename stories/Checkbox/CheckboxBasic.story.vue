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
        <Checkbox v-model="checkedValues" value="bar">
            bar
        </Checkbox>
        <Checkbox v-model="checkedValues" value="baz">
            baz
        </Checkbox>
        <p>value: {{ checkedValues }}</p>
        <h3>Disabled</h3>
        <Checkbox v-model="checked" :disabled="true">
            Basic Checkbox
        </Checkbox>
    </div>
</template>

<script>
    import Checkbox from '@/components/Checkbox/Checkbox';

    export default {
        name: 'CheckboxBasic',
        components: { Checkbox },
        data() {
            return {
                checked: true,
                checkedValues: []
            };
        }
    };
</script>
