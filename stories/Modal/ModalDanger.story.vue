<template>
    <div>
        <Button @click="showDialog">
            Show Dialog
        </Button>
        <Modal v-if="show" heading="Modal Danger" auto-focus
               :appearance="appearance" @submit="onSubmit" @cancel="onCancel">
            <p slot="content">
                {{ paragraph }}
            </p>
        </Modal>
    </div>
</template>

<script>
    import Modal from '@/components/Modal/Modal';
    import Button from '@/components/Button/Button';
    import faker from 'faker';

    const paragraph = faker.lorem.paragraph();

    export default {
        name: 'ModalDangerStory',
        components: { Modal, Button },
        data() {
            return {
                show: false,
                appearance: 'danger',
                paragraph
            };
        },
        methods: {
            onSubmit() {
                console.log('submit!');
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
