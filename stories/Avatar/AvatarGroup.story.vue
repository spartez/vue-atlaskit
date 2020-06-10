<template>
    <AvatarGroup :users="users" size="large"/>
</template>

<script>
    import { createPersonsList } from '../api-mocks/people';
    import AvatarGroup from '@/components/Avatar/AvatarGroup';

    const users = createPersonsList({}, 10);

    export default {
        name: 'AvatarGroupStory',
        components: { AvatarGroup },
        data() {
            return {
                users,
                avatars: [...Array(10).keys()]
            };
        }
    };
</script>

<style scoped>

</style>
