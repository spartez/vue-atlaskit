<template>
    <div ref="label" class="node-label" :current="current"
         :style="{ 'padding-left': `${indent}px` }"
         :indent-left="$slots['chevron']">
        <slot name="chevron"/>
        <Checkbox v-model="checked"
                  :value="node.id"
                  :indeterminate="indeterminate"
                  class="label"
                  :multi="multi">
            <slot>{{ node.label }}</slot>
        </Checkbox>
    </div>
</template>

<script>
    import Checkbox from '@/components/Checkbox/Checkbox';

    const LIST_NESTING_MARGIN = '24';

    export default {
        name: 'EnhancedCheckbox',
        components: { Checkbox },
        props: {
            value: {
                type: Array,
                default: () => []
            },
            node: {
                type: Object,
                default: () => ({})
            },
            indeterminate: {
                type: Boolean,
                default: false
            },
            multi: {
                type: Boolean,
                default: false
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
                    return this.value.map(node => node.id);
                },
                set(selected) {
                    this.$emit('input', [...this.value, this.node].filter(node => selected.includes(node.id)));
                }
            },
            current() {
                return this.hovered === this.node.id;
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
        }
    };
</script>

<style scoped>
.label:not([multi]) >>> .icon,
.label:not([multi]) >>> .indeterminate {
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
