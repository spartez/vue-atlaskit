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
                        <a v-for="action in actions" :key="action" class="action"
                           href="">{{ action }}</a>
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
                        return { name: this.appearance, primary: 'var(--ds-icon-inverse, #FFFFFF)', secondary: 'var(--ds-background-neutral-bold, #42526E)' };
                    case 'error':
                        return { name: this.appearance, primary: 'var(--ds-icon-inverse, #FFFFFF)', secondary: 'var(--ds-background-danger-bold, #DE350B)' };
                    case 'warning':
                        return { name: this.appearance, primary: '', secondary: 'var(--ds-background-warning-bold, #FFAB00)' };
                    case 'success':
                        return { name: this.appearance, primary: 'var(--ds-icon-inverse, #FFFFFF)', secondary: 'var(--ds-background-success-bold, #00875A)' };
                    default:
                        return { name: this.type, primary: this.color, secondary: 'var(--ds-surface, #fff)' };
                }
            },
            color() {
                switch (this.type) {
                    case 'info':
                        return 'var(--ds-icon-discovery, #403294)';
                    case 'error':
                        return 'var(--ds-icon-danger, #BF2600)';
                    case 'warning':
                        return 'var(--ds-icon-warning, #FF8B00)';
                    case 'success':
                        return 'var(--ds-icon-success, #006644)';
                    default:
                        return '#var(--ds-icon-discovery, #403294)';
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
    background-color: var(--ds-surface-overlay, #fff);
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
    background-color: var(--ds-background-danger-bold, #DE350B);
    color: var(--ds-text-inverse, #FFFFFF);
}

[appearance="info"] {
    background-color: var(--ds-background-neutral-bold, #42526E);
    color: var(--ds-text-inverse, #FFFFFF);
}

[appearance="success"] {
    background-color: var(--ds-background-success-bold, #00875A);
    color: var(--ds-text-inverse, #FFFFFF);
}

[appearance="warning"] {
    background-color: var(--ds-background-warning-bold, #FFAB00);
    color: var(--ds-text-warning-inverse, #172B4D);
}

.chevron[expanded="true"] {
    transform: rotateZ(180deg);
}

.flag-enter-from, .flag-leave-active {
    opacity: 0;
    transform: translateX(300px);
}

.flag-left-enter-from, .flag-left-leave-active {
    opacity: 0;
    transform: translateX(-300px);
}

.close{
    cursor: pointer;
}
</style>
