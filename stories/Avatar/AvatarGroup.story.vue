<template>
    <AvatarGroup :avatars="avatars" size="large"/>
</template>

<script>
    import AvatarGroup from '@/components/Avatar/AvatarGroup';

    export default {
        name: 'AvatarGroupStory',
        components: { AvatarGroup },
        data() {
            return {
                avatars: [...Array(10).keys()]
            };
        }
    };
</script>

<style scoped>

</style>
