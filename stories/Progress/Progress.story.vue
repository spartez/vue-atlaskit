<template>
    <div>
        <Button appearance="primary" @click="start">
            Start
        </Button>
        <Button @click="finish">
            Finish
        </Button>
    </div>
</template>

<script>
    import Progress from '@/components/Progress/progress';
    import Button from '@/components/Button/Button';

    export default {
        name: 'ProgressStory',
        components: { Button },
        data() {
            return {
                progress: undefined
            };
        },
        mounted() {
            this.progress = new Progress();
        },
        methods: {
            start() {
                this.progress.start();
            },
            finish() {
                this.progress.finish();
            }
        }
    };
</script>

<style scoped>

</style>
