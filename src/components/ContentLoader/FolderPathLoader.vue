<template>
    <ContentLoader view-box="0 0 340 20">
        <rect :x="0" :y="2"
              :rx="8" :ry="8"
              :width="loaderHeight * 3" :height="loaderHeight - 4"/>
        <text :x="loaderHeight * 3 + 5" :y="2" fill="black"
              class="loader-text" :size="size">
            /
        </text>
        <rect :x="loaderHeight * 3 + 15" :y="2"
              :rx="8" :ry="8"
              :width="loaderHeight * 4" :height="loaderHeight - 4"/>
    </ContentLoader>
</template>

<script>
    import ContentLoader from './ContentLoader.vue';

    export default {
        name: 'FolderPathLoader',
        components: { ContentLoader },
        props: {
            size: {
                type: String,
                default: 'normal'
            }
        },
        computed: {
            loaderHeight() {
                return this.size === 'small' ? 17 : 20;
            }
        }

    };
</script>
<style scoped>
    .loader-text {
        dominant-baseline: hanging;
        font-size: 16px;
        font-weight: bold;
    }
    .loader-text[size="small"] {
        font-size: 12px;
    }
</style>
