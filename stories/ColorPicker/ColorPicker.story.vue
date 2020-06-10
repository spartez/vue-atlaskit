<template>
    <div>
        <FieldGroup label="Select color">
            <ColorPicker v-model="color"/>
            selected: {{ color }}
        </FieldGroup>
    </div>
</template>

<script>
    import ColorPicker from '@/components/ColorPicker/ColorPicker';
    import FieldGroup from '@/components/Form/FieldGroup';

    export default {
        name: 'ColorPickerStory',
        components: { ColorPicker, FieldGroup },
        data() {
            return {
                color: '#0052CC'
            };
        }
    };
</script>
