<template>
    <div>
        <ContentLoader v-for="item in 4" :key="item" view-box="0 0 300 24"
                       height="24px" width="300px">
            <rect x="0" y="4"
                  :rx="4" :ry="4"
                  :width="16" :height="16"/>
            <rect x="24" y="4"
                  :rx="8" :ry="8"
                  :width="40" :height="16"/>
            <rect x="72" y="4"
                  :rx="8" :ry="8"
                  :width="160" :height="16"/>
        </ContentLoader>
    </div>
</template>

<script>
    import ContentLoader from './ContentLoader';

    export default {
        name: 'BulletListLoader',
        components: { ContentLoader }
    };
</script>

<style scoped>

</style>
