<template>
  <PromisedContentLoader
    :width="150"
    :height="24"
    :value="user.enriched"
    :pending-delay="0"
  >
    <UserEditableRenderer
      slot-scope="{ value }"
      :user="value"
      :load-options="user.getUsers"
      :editable="editable"
      v-on="$listeners"
    />
    <template slot="loader-shape">
      <circle
        cx="12"
        cy="12"
        :r="12"
      />
      <rect
        x="28"
        y="4"
        :rx="8"
        :ry="8"
        :width="45"
        :height="16"
      />
      <rect
        x="78"
        y="4"
        :rx="8"
        :ry="8"
        :width="70"
        :height="16"
      />
    </template>
    <component
      :is="editable ? 'UserEditableRenderer' : 'UserRenderer'"
      slot="error-message"
      :user="{ key: user.value }"
      :editable="true"
      v-on="$listeners"
    >
      <div class="user-error">
        <div class="avatar">
          <CrossIcon size="small"/>
        </div>
        <span>{{ user.value }} <small>(deleted)</small></span>
      </div>
    </component>
  </PromisedContentLoader>
</template>

<script>
    import CrossIcon from '../Icon/CrossIcon';
    import PromisedContentLoader from '../common/PromisedContentLoader';
    import UserEditableRenderer from './UserEditableRenderer';
    import UserRenderer from './UserRenderer';

    export default {
        name: 'UserRendererEnriched',
        components: {
            UserEditableRenderer, UserRenderer, PromisedContentLoader, CrossIcon
        },
        props: {
            user: {
                type: Object,
                required: true
            },
            avatarOnly: {
                type: Boolean,
                default: false
            },
            editable: {
                type: Boolean,
                default: true
            }
        }
    };
</script>

<style scoped>
    .user-error {
        display: flex;
        align-items: center;
    }

    .user-error > span {
        opacity: .5;
    }

    .user-error .avatar {
        color: #fff;
        background: rgba(9, 30, 66, 0.13);
        text-align: center;
        box-sizing: border-box;
        padding-top: 2px;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        margin-right: 5px;
    }

    .user-error::after {
        line-height: 1em;
        font-size: .7em;
        opacity: .5;
    }
</style>
