<template>
    <ul ref="tree" @mouseleave="onMouseOut">
        <Node v-for="node in nodes"
              :key="node.id"
              :selected="selected"
              :node="node"
              :level="1"
              :expand-level="expandLevel"
              :multi="multi"
              :hovered="hovered"
              @input="onSelect"
              @highlight="highlight">
            <template v-slot:label="{node}">
                <slot :node="node" name="label"/>
            </template>
        </Node>
    </ul>
</template>

<script>
    import Node from './Node';

    export default {
        name: 'Tree',
        components: { Node },
        props: {
            nodes: {
                type: Array,
                default: () => []
            },
            value: {
                type: [Array, Object],
                default: () => []
            },
            multi: {
                type: Boolean,
                default: false
            },
            expandLevel: {
                type: Number,
                default: 2
            },
            currentSuggestionId: {
                type: [Number, String],
                default: undefined
            }
        },
        data() {
            return {
                hovered: undefined,
                visibleNodes: []
            };
        },
        computed: {
            selected() {
                return this.multi ? this.value : [this.value];
            }
        },
        watch: {
            currentSuggestionId: {
                handler(index) {
                    // console.log(index);
                    this.hovered = index;
                },
                immediate: true
            }
        },
        mounted() {
            this.visibleNodes = [...this.$refs.tree.querySelectorAll('input[type="checkbox"]')];
        },
        methods: {
            onSelect(selected) {
                if (this.multi) {
                    this.$emit('input', selected);
                } else {
                    const [node] = selected;
                    this.$emit('input', node);
                }
            },
            highlight(id) {
                this.$emit('highlight', id);
            },
            onMouseOut() {
                this.hovered = undefined;
            }
        }
    };
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0;
}
</style>
