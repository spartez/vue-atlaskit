<template>
    <div>
        <Button data-cy="show-modal" @click="showDialog">
            Show Dialog
        </Button>
        <Modal v-if="show" heading="Modal Basic" auto-focus
               @submit="onSubmit" @cancel="onCancel">
        </Modal>
    </div>
</template>

<script>
    import faker from 'faker';
    import Modal from '@/components/Modal/Modal.vue';
    import Button from '@/components/Button/Button.vue';

    const paragraph = faker.lorem.paragraph();

    export default {
        name: 'ModalBasicStory',
        components: { Modal, Button },
        data() {
            return {
                show: false,
                paragraph
            };
        },
        methods: {
            onSubmit() {
                console.log('submit!');
                this.onCancel();
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
