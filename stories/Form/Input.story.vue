<template>
    <FieldGroup label="Label" required>
        <Input v-model="message" should-fit-container placeholder="Click here to input"/>
        The message is: {{ message }}
    </FieldGroup>
</template>

<script>
    import Input from '@/components/Form/Input';
    import FieldGroup from '@/components/Form/FieldGroup';

    export default {
        name: 'InputStory',
        components: { FieldGroup, Input },
        data() {
            return {
                message: ''
            };
        }
    };
</script>
