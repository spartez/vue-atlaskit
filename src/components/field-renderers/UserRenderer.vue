<template>
    <div class="user test">
        <slot>
            <template v-if="name">
                <img class="avatar"
                     :src="avatar"
                     :alt="name"
                     :title="name">
                <a v-if="!avatarOnly"
                   class="user-name"
                   :href="link"
                   target="_top">
                    {{ name }}
                </a>
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
                default: ''
            },
            name: {
                type: String,
                default: undefined
            },
            avatar: {
                type: String,
                default: ''
            },
            tag: {
                type: String,
                default: 'a'
            },
            avatarOnly: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            link() {
                return `${this.baseUrl}/secure/ViewProfile.jspa?&name=${this.name}`;
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
