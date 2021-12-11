<template>
    <ContentLoader view-box="0 0 150 24" height="24px" preserve-aspect-ratio="xMinYMid meet"
                   width="150px">
        <circle cx="12" cy="12"
                :r="12"/>
        <rect x="28" y="4"
              :rx="8" :ry="8"
              :width="45" :height="16"/>
        <rect x="78" y="4"
              :rx="8" :ry="8"
              :width="70" :height="16"/>
    </ContentLoader>
</template>

<script>
    import ContentLoader from './ContentLoader.vue';

    export default {
        name: 'AvatarNameLoader',
        components: { ContentLoader }
    };
</script>
