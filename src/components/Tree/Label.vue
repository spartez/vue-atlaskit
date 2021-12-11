<template>
    <div ref="label" class="node-label" :current="current"
         :selected="checked"
         :style="{ 'padding-left': `${indent}px` }"
         :indent-left="$slots['chevron']">
        <slot name="chevron"/>
        <Checkbox v-model="checked"
                  :value="node.id"
                  class="label">
            <slot>{{ node.label }}</slot>
        </Checkbox>
    </div>
</template>

<script>
    import Checkbox from '../Checkbox/Checkbox.vue';
    import { EventBus } from '../event-bus';

    const LIST_NESTING_MARGIN = '24';

    export default {
        name: 'Label',
        components: { Checkbox },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            node: {
                type: Object,
                default: () => ({})
            },
            hovered: {
                type: [Number, String],
                default: undefined
            },
            level: {
                type: Number,
                default: 1
            }
        },
        computed: {
            checked: {
                get() {
                    return this.value;
                },
                set() {
                    this.$emit('input', this.node.id);
                }
            },
            current() {
                return this.hovered === this.node.id.toString();
            },
            indent() {
                if (this.$slots.chevron) {
                    return (this.level - 1) * LIST_NESTING_MARGIN;
                }
                return this.level * LIST_NESTING_MARGIN;
            }
        },
        watch: {
            current(isCurrent) {
                if (isCurrent) {
                    this.$emit('current');
                    this.$nextTick(() => {
                        if (!this.$refs.label) return;
                        const isMicrosoftBrowser = new RegExp(['MSIE ', 'Edge/'].join('|')).test(navigator.userAgent);
                        if (isMicrosoftBrowser) return;
                        this.$refs.label.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                    });
                }
            }
        },
        mounted() {
            EventBus.$on('remote-select', () => {
                if (this.current) {
                    this.$emit('input', this.node.id);
                }
            });
        }
    };
</script>

<style scoped>
.label >>> .icon,
.label >>> .indeterminate {
    display: none;
}

.node-label {
    font-size: inherit;
    width: 100%;
    box-sizing: border-box;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
}

.label {
    padding: 6px 6px 6px 0;
    flex-grow: 1;
}

.node-label[selected] {
    background-color: #42526E;
    color: #fff;
}

.node-label[current] {
    background-color: #EBECF0;
    color: inherit;
}

>>> input:not([is-invalid]):focus + .icon rect {
    /*stroke: #dfe1e6;*/
}
</style>
