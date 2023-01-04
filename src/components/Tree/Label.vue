<template>
  <div
    ref="label"
    class="node-label"
    :current="current"
    :selected="checked"
    :style="{ 'padding-left': `${indent}px` }"
    :indent-left="$slots['chevron']"
  >
    <slot name="chevron"/>
    <Checkbox
      v-model="checked"
      :value="node.id"
      class="label"
    >
      <slot>{{ node.label }}</slot>
    </Checkbox>
  </div>
</template>

<script>
    import Checkbox from '../Checkbox/Checkbox';
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
        data: function data() {
            return {
                remoteSelectEventListener: undefined
            };
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
            this.remoteSelectEventListener = () => {
                if (this.current) {
                    this.$emit('input', this.node.id);
                }
            };
            EventBus.$on('remote-select', this.remoteSelectEventListener);
        },
        destroyed() {
            EventBus.$off('remote-select', this.remoteSelectEventListener);
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
    background-color: var(--ds-background-selected, #253858);
    color: var(--ds-text-selected, #F4F5F7);
}

.node-label[current] {
    background-color: var(--ds-surface-hovered, rgb(250, 251, 252));
    color: inherit;
}

>>> input:not([is-invalid]):focus + .icon rect {
    /*stroke: #dfe1e6;*/
}
</style>
