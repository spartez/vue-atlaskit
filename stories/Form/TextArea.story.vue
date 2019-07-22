<template>
    <FieldGroup label="Label" required>
        <TextArea rows="5" value="candy"/>
    </FieldGroup>
</template>

<script>
    import FieldGroup from '@/components/Form/FieldGroup';
    import TextArea from '@/components/Form/TextArea';

    export default {
        name: 'TextAreaStory',
        components: { FieldGroup, TextArea }
    };
</script>
