<template>
    <div class="avatar-group">
        <Avatar v-for="i in count" :key="i" class="avatar"
                :size="size" :z-index="count - i"/>
        <div class="wrapper">
            <div v-if="collapsed.length > 0" class="more" :size="size">
                <span>+{{ collapsed.length }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Avatar from './Avatar';

    const LIMIT = 4;
    export default {
        name: 'AvatarGroup',
        components: {
            Avatar
        },
        props: {
            avatars: {
                type: Array,
                default: () => []
            },
            size: {
                type: String,
                default: 'medium'
            }
        },
        computed: {
            count() {
                return this.visible.length;
            },
            visible() {
                return this.avatars ? this.avatars.slice(0, LIMIT) : [];
            },
            collapsed() {
                return this.avatars ? this.avatars.slice(LIMIT) : [];
            }
        }
    };
</script>

<style scoped>
.avatar-group {
    display: flex;
    line-height: 1;
    margin-right: 8px;
}

.avatar {
    margin-right: -8px;
    position: relative;
}

.more {
    background-color: rgb(223, 225, 230);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(66, 82, 110);
    cursor: pointer;
    font-size: 14px;
    border-radius: 50%;
    transition: box-shadow 200ms ease 0s;
}

.more[size='xxlarge'] {
    height: 132px;
    width: 132px;
    font-size: 16px;
}

.more[size='xlarge'] {
    height: 100px;
    width: 100px;
    font-size: 16px;
}

.more[size='large'] {
    height: 44px;
    width: 44px;
}

.more[size='medium'] {
    height: 36px;
    width: 36px;
}

.more[size='small'] {
    height: 28px;
    width: 28px;
}

.more[size='xsmall'] {
    height: 20px;
    width: 20px;
}
</style>
