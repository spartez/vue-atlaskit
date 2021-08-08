<template>
    <div>
        <FieldGroup data-cy="field-group" label="Label" required>
            <Input v-model="message" should-fit-container placeholder="Click here to input"/>
            The message is: {{ message }}
        </FieldGroup>
        <FieldGroup label="Label" required>
            <Input v-model="number" type="number" min="1"
                   max="3" allowed-values="[^0-9\.]" should-fit-container
                   placeholder="Click here to input"/>
            The number is: {{ number }}
        </FieldGroup>
        <FieldGroup label="Disabled input" required>
            <Input v-model="message" should-fit-container placeholder="Click here to input"
                   disabled/>
            The message is: {{ message }}
        </FieldGroup>
        <FieldGroup label="Icon after" required>
            <InlineDialog slot="after" placement="right">
                <template v-slot:trigger="{ toggle }">
                    <EditorInfoIcon class="icon" size="small" @click.native="toggle"/>
                </template>
                <div class="content">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
            </InlineDialog>
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
    import InlineDialog from '@/components/InlineDialog/InlineDialog';
    import { EditorInfoIcon } from '@/components/Icon';

    export default {
        name: 'InputStory',
        components: {
            FieldGroup, Input, InlineDialog, EditorInfoIcon
        },
        data() {
            return {
                message: '',
                number: ''
            };
        }
    };
</script>
<style scoped>
    .icon{
        transform: translateY(25%);
    }

</style>
