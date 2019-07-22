<template>
    <div class="user">
        <slot>
            <template v-if="user">
                <img class="avatar"
                     :src="user.avatar"
                     :alt="user.name"
                     :title="user.name">
                <component :is="tag" v-if="!avatarOnly"
                           class="user-name"
                           :href="`${baseURL}/secure/ViewProfile.jspa?&name=${user.username}`"
                           target="_top">
                    {{ user.name }}
                </component>
            </template>
        </slot>
    </div>
</template>

<script>

    export default {
        name: 'UserRenderer',
        props: {
            user: {
                type: Object,
                default: undefined
            },
            avatarOnly: {
                type: Boolean,
                default: false
            },
            tag: {
                type: String,
                default: 'a'
            }
        },
        data() {
            return {
                baseURL: 'baseURL'
            };
        }
    };
</script>
<style scoped>
    .user {
        display: flex;
        align-items: center;
        height: 24px;
        overflow: hidden;
    }

    .avatar {
        height: 24px;
        width: 24px;
        flex-shrink: 0;
        border-radius: 50%;
        margin-right: 5px;
        background: rgba(9, 30, 66, 0.13);
    }

    a.user-name {
        color: #007AFF;
    }

    .user-name {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>
