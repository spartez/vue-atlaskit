<template>
    <div>
        <ContentLoader view-box="0 0 340 65" height="65px" width="340px">
            <rect x="0" y="0" rx="5"
                  ry="5" width="60" height="60"/>
            <rect x="75" y="0" rx="5"
                  ry="5" width="150" height="28"/>
            <rect x="75" y="34" rx="5"
                  ry="5" width="80" height="16"/>
        </ContentLoader>
    </div>
</template>

<script>
    import ContentLoader from './ContentLoader';

    export default {
        name: 'AvatarDetailsLoader',
        components: { ContentLoader }
    };
</script>
