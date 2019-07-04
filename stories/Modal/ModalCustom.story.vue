<template>
    <div>
        <Button @click="showDialog">
            Show Dialog
        </Button>
        <Modal v-if="show" heading="Modal Basic" auto-focus
               width="400px" @submit="onSubmit" @cancel="onCancel">
            <p slot="content">
                {{ paragraph }}
            </p>
            <div slot="footer" class="footer">
                <Button appearance="primary" @click="onCancel">
                    Go it!
                </Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import Modal from '@/components/Modal/Modal';
    import Button from '@/components/Button/Button';
    import faker from 'faker';

    const paragraph = faker.lorem.paragraph();

    export default {
        name: 'ModalCustomStory',
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
