<template>
    <div ref="option" class="select-option" @click.stop>
        <slot name="option" :option="option" :is-current="current">
            <Node :node="option" :level="1" :expand-level="2"
                  :selected="[selected]" :current="current" @click.native.stop
                  @input="onSelect"/>
        </slot>
    </div>
</template>

<script>
    import Node from '../../Tree/Node.vue';

    export default {
        name: 'SelectNode',
        components: { Node },
        props: {
            option: {
                type: Object,
                default: () => ({})
            },
            index: {
                type: Number,
                default: undefined
            },
            selected: {
                type: [Array, Object],
                default: () => []
            },
            currentSuggestionIndex: {
                type: Number,
                default: undefined
            }
        },
        computed: {
            current() {
                return this.currentSuggestionIndex === this.index;
            }
        },
        watch: {
            current(isCurrent) {
                if (isCurrent) {
                    this.$nextTick(() => {
                        if (!this.$refs.option) return;
                        const isMicrosoftBrowser = new RegExp(['MSIE ', 'Edge/'].join('|')).test(navigator.userAgent);
                        if (isMicrosoftBrowser) return;
                        this.$refs.option.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                    });
                }
            }
        },
        methods: {
            onSelect([option]) {
                this.$emit('option-selected', option);
            }
        }
    };
</script>
