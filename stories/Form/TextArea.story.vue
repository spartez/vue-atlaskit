<template>
  <FieldGroup
    label="Label"
    required
  >
    <TextArea
      v-model="value"
      rows="5"
    />
  </FieldGroup>
</template>

<script>
    import FieldGroup from '@/components/Form/FieldGroup';
    import TextArea from '@/components/Form/TextArea';

    export default {
        name: 'TextAreaStory',
        components: { FieldGroup, TextArea },
        data(){
            return{
                value: 'candy'

            }
        }
    };
</script>
