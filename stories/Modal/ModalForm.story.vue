<template>
    <div>
        <Button @click="showDialog">
            Show Dialog
        </Button>
        <Modal v-if="show" heading="Form Demo" @submit="onSubmit"
               @cancel="onCancel">
            <div slot="content">
                <FieldGroup label="Title" required>
                    <Input v-model="title" auto-focus/>
                </FieldGroup>
                <FieldGroup label="Type" required>
                    <Input v-model="type"/>
                </FieldGroup>
            </div>
        </Modal>
    </div>
</template>

<script>
    import Modal from '@/components/Modal/Modal';
    import Input from '@/components/Form/Input';
    import FieldGroup from '@/components/Form/FieldGroup';
    import Button from '@/components/Button/Button';

    export default {
        name: 'ModalFromStory',
        components: {
            Modal, Button, Input, FieldGroup
        },
        data() {
            return {
                title: '',
                type: '',
                show: true
            };
        },
        methods: {
            onSubmit() {
                console.log(JSON.stringify({ title: this.title, type: this.type }));
            },
            showDialog() {
                this.show = true;
            },
            onCancel() {
                this.show = false;
            }
        }
    };
</script>
