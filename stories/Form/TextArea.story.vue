<template>
    <FieldGroup label="Label" required>
        <TextArea v-model="value" rows="5"/>
        value is: {{ value }}
    </FieldGroup>
</template>

<script>
    import { ref } from 'vue';
    import FieldGroup from '@/components/Form/FieldGroup.vue';
    import TextArea from '@/components/Form/TextArea.vue';

    export default {
        name: 'TextAreaStory',
        components: { FieldGroup, TextArea },
        setup() {
            const value = ref('test');

            return {
                value
            };
        }
    };
</script>
