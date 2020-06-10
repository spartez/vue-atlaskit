<template>
    <div class="progress-bar-wrapper">
        <div v-if="showLabels" ref="labels" class="labels">
            <span class="label">{{ label }}</span>
            <span>{{ progress }}%</span>
        </div>
        <div class="progress-bar">
            <span ref="progress" class="progress" :style="{ width: `${progress}%`, transitionDuration }"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProgressBar',
        props: {
            progress: {
                type: Number,
                default: 0
            },
            showLabels: {
                type: Boolean,
                default: true
            },
            label: {
                type: String,
                default: 'Processing'
            },
            transitionDuration: {
                type: String,
                default: undefined
            }
        }
    };
</script>

<style scoped>
    .progress-bar {
        background: rgba(9, 30, 66, 0.13);
        border-radius: 3px;
        height: 6px;
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    .labels {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    .labels .label::first-letter {
        text-transform: capitalize;
    }

    .progress-bar .progress {
        left: 0;
        width: 0%;
        background: #42526e;
        border-radius: 3px;
        transition: width 0.5s;
        display: block;
        height: 6px;
        position: absolute;
    }
</style>
