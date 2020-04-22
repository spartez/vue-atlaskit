<template>
    <div>
        <ContentLoader v-for="row in 3" :key="row" view-box="0 0 840 72"
                       height="72px" width="100%">
            <rect x="0" y="0" rx="3"
                  ry="3" width="178" height="14"/>
            <rect x="0" y="22" rx="3"
                  ry="3" :width="217 * random()" height="20"/>
            <rect x="420" y="0" rx="3"
                  ry="3" width="228" height="14"/>
            <rect x="420" y="22" rx="3"
                  ry="3" :width="157 * random()" height="20"/>
        </ContentLoader>
    </div>
</template>

<script>
    import ContentLoader from './ContentLoader';

    const random = () => Math.random() * (1 - 0.7) + 0.7;

    export default {
        name: 'PageDetailsLoader',
        components: { ContentLoader },
        data() {
            return {
                random
            };
        }
    };
</script>
