<template>
  <div class="avatar-group">
    <transition-group
      name="participant"
      tag="div"
      class="avatar-group-inner"
      :over-limit="isOverLimit"
      @before-leave="beforeLeave"
    >
      <div
        v-if="$slots.before"
        key="slot-before"
        class="avatar-wrapper"
        :style="{ zIndex: count + 1 }"
      >
        <slot name="before"/>
      </div>
      <div
        v-for="(user,i) in visible"
        :key="user.key"
        class="avatar-wrapper"
        :data-index="i"
        :style="{ zIndex: count - i }"
        :last="i === count - 1"
      >
        <Tooltip
          :key="user.key"
          class="tooltip"
          :append-to-body="true"
          :label="user.displayName"
        >
          <Avatar
            :key="user.key"
            :tag="user.link ? 'a' : 'span'"
            class="avatar"
            :size="size"
            :link="user.link"
            :status="user.status"
            :outline="borderColor"
            :avatar="user.avatar"
            :presence="user.presence"
          />
        </Tooltip>
      </div>
      <Dropdown
        v-if="isOverLimit"
        key="dropdown"
        placement="bottom-end"
        :position-fixed="dropdownPositionFixed"
        :append-to-body="appendToBody"
        class="dropdown-wrapper"
      >
        <div
          slot="trigger"
          slot-scope="{ toggle, isOpen }"
          :style="`border-color: ${borderColor}`"
          class="trigger"
          :size="size"
          :open="isOpen"
        >
          <div
            class="more"
            @click="toggle"
          >
            <transition :name="counterUp ? 'counter-up' : 'counter-down'">
              <span
                :key="collapsedCount"
                class="collapsed-count"
              >+{{ collapsedCount }}</span>
            </transition>
          </div>
        </div>
        <DropdownItem
          v-for="collapsedUser in collapsed"
          :key="collapsedUser.key"
          :non-link="!collapsedUser.link"
        >
          <a
            v-if="collapsedUser.link"
            class="list-item"
            :href="collapsedUser.link"
            target="_blank"
          >
            <Avatar
              tag="a"
              :link="collapsedUser.link"
              class="user-list-avatar"
              size="small"
              :status="collapsedUser.status"
              :outline="borderColor"
              :avatar="collapsedUser.avatar"
              :presence="collapsedUser.presence"
            />
            <span class="user-name">{{ collapsedUser.displayName }}</span>
          </a>
          <div
            v-else
            class="list-item"
          >
            <Avatar
              tag="span"
              :link="collapsedUser.link"
              class="user-list-avatar"
              size="small"
              :status="collapsedUser.status"
              :outline="borderColor"
              :avatar="collapsedUser.avatar"
              :presence="collapsedUser.presence"
            />
            <span class="user-name">{{ collapsedUser.displayName }}</span>
          </div>
        </DropdownItem>
      </Dropdown>
    </transition-group>
  </div>
</template>

<script>
    import Avatar from './Avatar';
    import Tooltip from '../Tooltip/Tooltip';
    import Dropdown from '../Dropdown/Dropdown';
    import DropdownItem from '../Dropdown/DropdownItem';

    export default {
        name: 'AvatarGroup',
        components: {
            Avatar, Dropdown, DropdownItem, Tooltip
        },
        props: {
            users: {
                type: Array,
                default: () => []
            },
            size: {
                type: String,
                default: 'medium'
            },
            borderColor: {
                type: String,
                default: '#fff'
            },
            limit: {
                type: Number,
                default: 5
            },
            dropdownPositionFixed: {
                type: Boolean,
                default: false
            },
            appendToBody: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                counterUp: true
            };
        },
        computed: {
            isOverLimit() {
                return this.users && this.users.length > this.limit;
            },
            count() {
                return this.visible.length;
            },
            visible() {
                return this.users ? this.users.slice(0, this.limit) : [];
            },
            collapsed() {
                return this.users ? this.users.slice(this.limit - 1) : [];
            },
            collapsedCount() {
                return this.collapsed.length;
            }
        },
        watch: {
            collapsedCount(value, prevValue) {
                this.counterUp = value > prevValue;
            }
        },
        methods: {
            beforeLeave(el) {
                el.style.left = `${el.offsetLeft}px`;
                el.style.top = `${el.offsetTop}px`;
            }
        }
    };
</script>

<style scoped>
.avatar-group {
    line-height: 0;
}

.avatar-group-inner {
    position: relative;
    display: inline-flex;
    margin-right: 8px;
}

.dropdown-wrapper {
    position: absolute;
    right: -8px;
    z-index: 1;
}

.avatar {
    margin-right: -8px;
    position: relative;
}

.trigger {
    float: right;
    background-color: var(--ds-background-neutral, #F4F5F7);
    border-radius: 50%;
    box-sizing: border-box;
}

.more {
    color: var(--ds-text, #42526E);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    font-size: 14px;
    transition: box-shadow 200ms ease 0s;
}

.trigger[open] {
    border-radius: 50%;
}

.trigger {
    border-width: 2px;
    border-style: solid;
    position: relative;
}

.trigger::after {
    background-color: transparent;
    bottom: 0;
    content: " ";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 50%;
    transition: opacity 200ms ease 0s;
}

.trigger:hover {
    background-color: var(--ds-background-neutral-hovered, #EBECF0);
}

.trigger[size='xxlarge'] {
    height: 132px;
    width: 132px;
    font-size: 16px;
}

.trigger[size='xlarge'] {
    height: 100px;
    width: 100px;
    font-size: 16px;
}

.trigger[size='large'] {
    height: 44px;
    width: 44px;
}

.trigger[size='medium'] {
    height: 36px;
    width: 36px;
}

.trigger[size='small'] {
    height: 28px;
    width: 28px;
}

.trigger[size='xsmall'] {
    height: 20px;
    width: 20px;
}

.list-item {
    display: flex;
    outline: none;
    align-items: center;
    color: inherit;
    text-decoration: none;
}

.user-list-avatar {
    margin-right: 8px;
}

.user-name {
    text-overflow: ellipsis;
    margin-right: 8px;
}

.avatar-wrapper, .dropdown-wrapper {
    transition: all .2s;
}

.avatar-wrapper.participant-enter, .avatar-wrapper.participant-leave-to {
    opacity: 0;
    transform: translateY(-50px);
}

[over-limit] [last] {
    opacity: 0;
}

[over-limit] .avatar-wrapper.participant-enter[last], [over-limit] .avatar-wrapper.participant-leave-to[last] {
    transform: none;
}

.avatar-wrapper.participant-leave-active {
    position: absolute;
}

.dropdown-wrapper.participant-enter, .dropdown-wrapper.participant-leave-to {
    opacity: 0;
}

.collapsed-count {
    transition: all .2s;
}

.counter-up-enter, .counter-down-leave-to {
    opacity: 0;
    transform: translateY(-15px);
}

.counter-up-leave-to, .counter-down-enter {
    opacity: 0;
    transform: translateY(15px);
}

.counter-up-leave-active, .counter-down-leave-active {
    position: absolute;
}
</style>
