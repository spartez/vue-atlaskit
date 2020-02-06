<template>
    <div>
        <FieldGroup label="Label" required>
            <Input v-model="message" should-fit-container placeholder="Click here to input"/>
            The message is: {{ message }}
        </FieldGroup>
        <FieldGroup label="Label" required>
            <Input v-model="number" type="number" min="1"
                   max="3" allowed-values="[^0-9\.]" should-fit-container
                   placeholder="Click here to input"/>
            The number is: {{ number }}
        </FieldGroup>
    </div>
</template>

<script>
    import Input from '@/components/Form/Input';
    import FieldGroup from '@/components/Form/FieldGroup';

    export default {
        name: 'InputStory',
        components: { FieldGroup, Input },
        data() {
            return {
                message: '',
                number: ''
            };
        }
    };
</script>
