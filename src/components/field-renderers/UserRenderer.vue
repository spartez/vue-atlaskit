<template>
  <div
    class="user"
    :appearance="appearance"
    @click="onClick"
  >
    <slot>
      <template v-if="user">
        <img
          class="avatar"
          :src="user.avatar"
          :alt="alt === undefined ? user.name : ''"
          :title="user.name"
        >
        <component
          :is="tag"
          v-if="!avatarOnly"
          class="user-name"
          :href="link"
          target="_top"
        >
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
                default: 'span'
            },
            appearance: {
                type: String,
                default: undefined
            },
            alt: {
                type: String,
                default: undefined
            },
            link: {
                type: String,
                default: '#'
            }
        },
        methods: {
            onClick(e) {
                if (this.tag === 'a') {
                    e.stopPropagation();
                }
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

    .user[appearance='micro'] {
        height: 16px;
        font-size: 85%;
    }

    [appearance='micro'] .avatar {
        height: 16px;
        width: 16px;
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
