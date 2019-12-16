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
                           :href="link"
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
            baseUrl: {
                type: String,
                required: true
            },
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
        computed: {
            link() {
                return `${this.baseUrl}/secure/ViewProfile.jspa?&name=${this.user.name}`;
            }
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
