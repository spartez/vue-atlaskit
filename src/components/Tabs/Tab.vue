<template>
    <a href="#" :active="selected === id" :disabled="disabled"
       :stretch="stretch" :inactive="inactive" @click.prevent="onClick">
        <slot/>
    </a>
</template>
<script>

    export default {
        name: 'TabItem',
        props: {
            id: {
                type: [String, Number],
                required: true
            },
            selected: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            stretch: {
                type: Boolean,
                default: false
            },
            inactive: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                hideTooltip: false
            };
        },
        methods: {
            onClick() {
                if (!this.disabled && !this.inactive) {
                    this.$emit('input', this.id);
                }
            }
        }
    };
</script>

<style scoped>
    a {
        cursor: pointer;
        line-height: 1.8;
        margin: 0px;
        text-decoration: none;
        color: rgb(66, 82, 110);
        outline: none;
        padding: 4px 8px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    [stretch] {
        flex-grow: 1;
    }

    a:not([inactive]) hover {
        color: #0052CC;
    }

    [active] {
        color: rgb(0, 82, 204);
    }

    [active]:after {
        content: "";
        border-radius: 2px;
        bottom: 0px;
        margin: 0px;
        position: absolute;
        width: inherit;
        left: 8px;
        right: 8px;
        border-bottom: 2px solid rgb(0, 82, 204);
        height: 0px;
    }

    [inactive] {
        color: rgb(66, 82, 110);
        cursor: default;
    }

    [disabled] {
        color: rgb(165, 173, 186);
        pointer-events: none;
    }
</style>
