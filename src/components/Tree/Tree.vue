<template>
    <ul ref="tree" @mouseleave="onMouseOut">
        <Node v-for="node in nodes"
              :key="node.id"
              :selected="selected"
              :node="node"
              :level="1"
              :expanded="expanded"
              :expand-level="expandLevel"
              :search="search"
              :hovered="hovered"
              @toggle-expand="onToggleExpand"
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

    import { EventBus } from '../event-bus';

    export default {
        name: 'Tree',
        components: { Node },
        props: {
            nodes: {
                type: Array,
                default: () => []
            },
            value: {
                type: [Object],
                default: undefined
            },
            expandLevel: {
                type: Number,
                default: 2
            },
            currentSuggestionId: {
                type: [Number, String],
                default: undefined
            },
            search: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                hovered: undefined,
                expanded: [],
                initialExpandedState: []
            };
        },
        computed: {
            selected() {
                return this.value ? this.value.id : undefined;
            },
            childNodes() {
                return this.getChildNodes(this.nodes);
            }
        },
        watch: {
            currentSuggestionId: {
                handler(index) {
                    this.hovered = index;
                },
                immediate: true
            },
            expanded: {
                handler(expanded) {
                    if (this.search.length === 0) {
                        this.initialExpandedState = expanded;
                    }
                },
                immediate: true
            },
            search(search) {
                if (search.length === 0) {
                    this.expanded = this.initialExpandedState;
                }
            }
        },
        mounted() {
            EventBus.$on('remote-expand', () => this.onToggleExpand(this.currentSuggestionId));
        },
        methods: {
            onSelect(id, ancestors = []) {
                this.$emit('input', this.childNodes.find(node => node.id === id), ancestors);
            },
            highlight(id) {
                this.hovered = id;
            },
            onMouseOut() {
                this.hovered = undefined;
            },
            onToggleExpand(toggled) {
                this.expanded = this.expanded.some(id => toggled === id)
                    ? this.expanded.filter(id => toggled !== id)
                    : [...this.expanded, toggled];
            },
            getChildNodes(children = []) {
                return children.reduce((nodes, node) => {
                    if (node.children) {
                        return [...nodes, node, ...this.getChildNodes(node.children)];
                    }
                    return [...nodes, node];
                }, []);
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
