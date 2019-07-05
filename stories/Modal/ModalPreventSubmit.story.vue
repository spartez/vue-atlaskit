<template>
    <div>
        <Button @click="showDialog">
            Show Dialog
        </Button>
        <Modal v-if="show" heading="Modal Basic" auto-focus
               :should-allow-submit="shouldAllowSubmit"
               @submit="onSubmit" @cancel="onCancel">
            <p slot="content">
                <Checkbox v-model="shouldAllowSubmit">
                    By checking agree and continue
                </Checkbox>
            </p>
        </Modal>
    </div>
</template>

<script>
    import Modal from '@/components/Modal/Modal';
    import Button from '@/components/Button/Button';
    import Checkbox from '@/components/Checkbox/Checkbox';
    import faker from 'faker';

    const paragraph = faker.lorem.paragraph();

    export default {
        name: 'ModalPreventSubmitStory',
        components: { Modal, Button, Checkbox },
        data() {
            return {
                show: false,
                shouldAllowSubmit: false,
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
