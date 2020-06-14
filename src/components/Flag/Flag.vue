<template>
    <div class="notification" :appearance="appearance">
        <div class="header">
            <div class="icon">
                <component :is="flag.name" :primary-color="flag.primary" :secondary-color="flag.secondary"
                           class="icon"/>
            </div>
            <span class="title">{{ title }}</span>
            <ChevronDownIcon v-if="appearance !== 'default'" class="chevron" size="large"
                             :expanded="expanded" @click.native="onExpand"/>
        </div>
        <div class="content" :expanded="expanded">
            <div class="description">
                {{ description }}
            </div>
            <div class="actions">
                <a v-for="action in actions" :key="action" class="action"
                   href="">{{ action }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        ChevronDownIcon, CheckCircleIcon, InfoIcon, WarningIcon, ErrorIcon
    } from '../Icon';

    export default {
        name: 'Flag',
        components: {
            ChevronDownIcon, CheckCircleIcon, InfoIcon, WarningIcon, ErrorIcon
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
                        return { name: 'InfoIcon', primary: '#fff', secondary: '#42526E' };
                    case 'error':
                        return { name: 'ErrorIcon', primary: '#fff', secondary: '#DE350B' };
                    case 'warning':
                        return { name: 'WarningIcon', primary: '', secondary: '#FFC400' };
                    case 'success':
                        return { name: 'CheckCircleIcon', primary: '#fff', secondary: '#00875A' };
                    default:
                        return { name: 'CheckCircleIcon', primary: 'rgb(54, 179, 126)', secondary: '#fff    ' };
                }
            }
        },
        methods: {
            onExpand() {
                this.expanded = !this.expanded;
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
    transition: background-color 200ms ease 0s;
    max-width: 600px;
}

.icon {
    margin-right: 8px;
    flex: 0 0 auto;
    vertical-align: middle;
}

.header {
    display: flex;
    align-items: center;
    height: 32px;
}

.title {
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1 1 0%;
    overflow: hidden;
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
</style>