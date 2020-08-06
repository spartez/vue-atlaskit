<template>
    <div class="avatar-group">
        <transition-group class="participants" name="participant">
            <Tooltip v-for="(user,i) in visible" :key="user.key" class="tooltip"
                     :append-to-body="true" :label="user.displayName">
                <div class="avatar-wrapper">
                    <Avatar tag="a" class="avatar" :size="size"
                            :link="user.link"
                            :z-index="count - i" :avatar="user.avatar" :presence="user.presence"/>
                </div>
            </Tooltip>
        </transition-group>
        <div class="wrapper">
            <Dropdown v-if="collapsed.length > 0" placement="bottom-end">
                <div slot="trigger" slot-scope="{ toggle, isOpen }" class="trigger"
                     :size="size" :open="isOpen">
                    <div class="more" @click="toggle">
                        <span>+{{ collapsed.length }}</span>
                    </div>
                </div>
                <DropdownItem v-for="user in collapsed" :key="user.key">
                    <a class="list-item" :href="user.link" target="_blank">
                        <Avatar tag="a" :link="user.link" class="user-list-avatar"
                                size="small"
                                :avatar="user.avatar" :presence="user.presence"/>
                        <span class="user-name">{{ user.displayName }}</span>
                    </a>
                </DropdownItem>
            </Dropdown>
        </div>
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
            limit: {
                type: Number,
                default: 5
            }
        },
        computed: {
            count() {
                return this.visible.length;
            },
            visible() {
                return this.users ? this.users.slice(0, this.limit) : [];
            },
            collapsed() {
                return this.users ? this.users.slice(this.limit) : [];
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

.trigger {
    background-color: #fff;
    padding: 2px;
    box-sizing: border-box;
}

.more {
    background-color: rgb(223, 225, 230);
    color: rgb(66, 82, 110);
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
    background-color: rgb(38, 132, 255);
    border-radius: 50%;
}

.trigger {
    position: relative;
}

.trigger::after {
    background-color: transparent;
    bottom: 2px;
    content: " ";
    left: 2px;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 2px;
    top: 2px;
    border-radius: 50%;
    transition: opacity 200ms ease 0s;
}

.trigger:hover::after {
    background-color: rgba(9, 30, 66, 0.36);
    opacity: 1;
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

.participant-enter, .participant-leave-to {
    opacity: 0;
    transform: translateY(-50px);
}

.participant-leave-active {
    position: absolute;
}

.avatar {
    transition: all .5s;
}

.tooltip{
    transition: all .5s;
    display: inline-block;
}
</style>
