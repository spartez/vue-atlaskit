<template>
    <transition :name="leaveLeft ? 'flag-left' : 'flag'" appear>
        <div class="notification" :appearance="appearance">
            <div class="header">
                <div class="icon">
                    <component :is="flag.name" :primary-color="flag.primary" :secondary-color="flag.secondary"
                               class="icon"/>
                </div>
                <span class="title">{{ title }}</span>
                <ChevronDownIcon v-if="appearance !== 'default'" class="chevron" size="large"
                                 :expanded="expanded" @click.native="onExpand"/>
                <EditorCloseIcon v-else class="close" @click.native="$emit('close')"/>
            </div>
            <slot>
                <div class="content" :expanded="expanded">
                    <div class="description">
                        {{ description }}
                    </div>
                    <div class="actions">
                        <a v-for="action in actions" :key="action.content" class="action"
                           @click="onClick(action)">{{ action.content }}</a>
                    </div>
                </div>
            </slot>
        </div>
    </transition>
</template>

<script>
    import {
        ChevronDownIcon, CheckCircleIcon, InfoIcon, WarningIcon, ErrorIcon, EditorCloseIcon
    } from '../Icon';

    export default {
        name: 'Flag',
        components: {
            ChevronDownIcon, success: CheckCircleIcon, info: InfoIcon, warning: WarningIcon, error: ErrorIcon, EditorCloseIcon
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            },
            actions: {
                type: Array,
                default: () => []
            },
            appearance: {
                type: String,
                default: 'default'
            },
            type: {
                type: String,
                default: 'success'
            },
            leaveLeft: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                expanded: false
            };
        },
        computed: {
            flag() {
                switch (this.appearance) {
                    case 'info':
                        return { name: this.appearance, primary: '#fff', secondary: '#42526E' };
                    case 'error':
                        return { name: this.appearance, primary: '#fff', secondary: '#DE350B' };
                    case 'warning':
                        return { name: this.appearance, primary: '', secondary: '#FFC400' };
                    case 'success':
                        return { name: this.appearance, primary: '#fff', secondary: '#00875A' };
                    default:
                        return { name: this.type, primary: this.color, secondary: '#fff' };
                }
            },
            color() {
                switch (this.type) {
                    case 'info':
                        return '#6554c0';
                    case 'error':
                        return '#de350a';
                    case 'warning':
                        return '#ffab00';
                    case 'success':
                        return '#36b37e';
                    default:
                        return '#6554c0';
                }
            }
        },
        methods: {
            onExpand() {
                this.expanded = !this.expanded;
            },
            onClick(action) {
                if (action.href) {
                    window.open(action.href, '_blank');
                } else if (action.handler) {
                    action.handler();
                }
                this.$emit('close');
            }
        }
    };
</script>

<style scoped>
.notification {
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    box-shadow: rgba(9, 30, 66, 0.31) 0px 0px 1px, rgba(9, 30, 66, 0.25) 0px 20px 32px -8px;
    width: 100%;
    z-index: 600;
    border-radius: 3px;
    padding: 16px;
    max-width: 600px;
    transition: all 0.5s;
}

.icon {
    margin-right: 8px;
    flex: 0 0 auto;
    vertical-align: middle;
}

.header {
    display: flex;
    height: 32px;
}

.title {
    font-weight: 600;
    flex: 1 1 0%;
    line-height: 1.5;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0px;
    flex: 1 1 100%;
    padding: 0px 0px 0px 40px;
}

.notification:not([appearance="default"]) .content {
    max-height: 0px;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease 0s, opacity 0.3s ease 0s;
}

.notification:not([appearance="default"]) .content[expanded="true"] {
    max-height: 150px;
    opacity: 1;
    overflow: visible;
}

.chevron {
    cursor: pointer;
}

.actions {
    padding-top: 8px;
}

.action ~ .action {
    margin-left: 8px;
}

[appearance="default"] .action {
    color: #0052CC;
    padding-left: 0;
}

.action {
    background: rgba(255, 255, 255, 0.08);
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    display: inline-block;
    color: inherit;
    border-radius: 3px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
}

[appearance="warning"] .action {
    background: rgba(9, 30, 66, 0.08);
}

.action:last-of-type::before {
    text-align: center;
    vertical-align: middle;
    display: inline-block;
}

[appearance="error"] {
    background-color: rgb(222, 53, 11);
    color: #fff;
}

[appearance="info"] {
    background-color: rgb(66, 82, 110);
    color: #fff;
}

[appearance="success"] {
    background-color: rgb(0, 135, 90);
    color: #fff;
}

[appearance="warning"] {
    background-color: rgb(255, 196, 0);
}

.chevron[expanded="true"] {
    transform: rotateZ(180deg);
}

.flag-enter, .flag-leave-active {
    opacity: 0;
    transform: translateX(300px);
}

.flag-left-enter, .flag-left-leave-active {
    opacity: 0;
    transform: translateX(-300px);
}

.close {
    cursor: pointer;
}
</style>
