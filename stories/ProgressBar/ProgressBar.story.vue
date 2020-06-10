<template>
    <ProgressBar :progress="progress"/>
</template>

<script>
    import ProgressBar from '@/components/ProgressBar/ProgressBar';

    export default {
        name: 'ProgressBarStory',
        components: { ProgressBar },
        data() {
            return {
                progress: 0,
                timer: undefined
            };
        },
        mounted() {
            this.timer = this.updateProgress();
        },
        beforeDestroy() {
            clearTimeout(this.timer);
        },
        methods: {
            updateProgress() {
                if (this.progress >= 100) {
                    this.progress = 0;
                }
                this.progress = this.progress + 5;
                return setTimeout(() => {
                    this.updateProgress();
                }, Math.floor(Math.random() * 500) + 200);
            }
        }
    };
</script>

<style scoped>

</style>
