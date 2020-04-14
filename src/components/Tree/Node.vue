<template>
    <li>
        <NodeCheckbox v-model="checked"
                      :node="node"
                      :indeterminate="indeterminate"
                      :multi="multi"
                      :selected="highlight"
                      :hovered="hovered"
                      :level="level"
                      @mouseenter.native="onMouseEnter">
            <div v-if="hasChildNodes" slot="chevron" class="icon"
                 :expanded="expanded" @click="toggleExpand">
                <ChevronRightIcon/>
            </div>
            <slot name="label" :node="info">
                {{ node.label }}
            </slot>
        </NodeCheckbox>
        <ul v-if="hasChildNodes && expanded" class="sub-tree">
            <Node v-for="child in node.children"
                  :key="child.id"
                  :selected="selected"
                  :node="child"
                  :ancestors="parentNodes"
                  :parent="node"
                  :multi="multi"
                  :level="level + 1"
                  :expand-level="expandLevel"
                  :current="current"
                  :hovered="hovered"
                  @input="onSelect"
                  @highlight="onHover">
                <template v-slot:label="{node}">
                    <slot :node="node" name="label"/>
                </template>
            </Node>
        </ul>
    </li>
</template>

<script>
    import NodeCheckbox from './NodeCheckbox';
    import { ChevronRightIcon } from '../Icon';

    export default {
        name: 'Node',
        components: { ChevronRightIcon, NodeCheckbox },
        props: {
            node: {
                type: Object,
                default: () => ({})
            },
            selected: {
                type: [Array, Object],
                default: () => []
            },
            parent: {
                type: Object,
                default: () => ({})
            },
            ancestors: {
                type: Array,
                default: () => []
            },
            multi: {
                type: Boolean,
                default: false
            },
            level: {
                type: Number,
                required: true
            },
            expandLevel: {
                type: Number,
                required: true
            },
            current: {
                type: Boolean,
                default: false
            },
            hovered: {
                type: [Number, String],
                default: undefined
            }
        },
        data() {
            return {
                expanded: this.level < this.expandLevel
            };
        },
        computed: {
            parentNodes() {
                const { id, label } = this.parent;
                return [...this.ancestors, ...id ? [{ id, label }] : []];
            },
            hasChildNodes() {
                return !!(this.node.children && this.node.children.length);
            },
            childNodes() {
                return this.getChildNodes(this.node.children);
            },
            childNodesIds() {
                return this.childNodes.map(node => node.id);
            },
            hasAllChildrenSelected() {
                return this.checkIfAllChildrenSelected(this.selected);
            },
            indeterminate() {
                return !this.hasAllChildrenSelected && this.childNodesIds.some(id => this.selected.some(value => id === value.id));
            },
            info() {
                return {
                    ...this.node,
                    ancestors: this.parentNodes,
                    isBranch: this.hasChildNodes
                };
            },
            checked: {
                get() {
                    return [...this.selected];
                },
                set(selected) {
                    // single-select
                    if (!this.multi) {
                        const option = selected[selected.length - 1];
                        this.$emit('input', option ? [option] : []);
                        return;
                    }
                    // multi-select
                    if (!this.hasChildNodes) {
                        this.$emit('input', selected);
                    } else if (this.hasAllChildrenSelected) {
                        this.$emit('input', this.deselectChildNodes(selected));
                    } else {
                        this.$emit('input', this.selectChildNodes(selected));
                    }
                }
            },
            highlight() {
                return this.selected.map(({ id }) => id).includes(this.node.id);
            }
        },
        watch: {
            expanded() {
                this.$nextTick(() => {
                    this.$emit('visible-options-change');
                });
            }
        },
        methods: {
            onSelect(nodes) {
                if (this.checkIfAllChildrenSelected(nodes)) {
                    this.$emit('input', [...nodes, this.node]);
                } else {
                    this.$emit('input', nodes.filter(n => n.id !== this.node.id));
                }
            },
            deselectChildNodes(selected) {
                return selected.filter(value => !this.childNodesIds.includes(value.id));
            },
            selectChildNodes(selected) {
                return [...new Set([...selected, ...this.childNodes])];
            },
            checkIfAllChildrenSelected(selected) {
                return this.hasChildNodes && this.childNodesIds.every(id => selected.map(n => n.id).includes(id));
            },
            toggleExpand() {
                this.expanded = !this.expanded;
            },
            getChildNodes(children = []) {
                return children.reduce((nodes, node) => {
                    if (node.children) {
                        return [...nodes, node, ...this.getChildNodes(node.children)];
                    }
                    return [...nodes, node];
                }, []);
            },
            onMouseEnter() {
                this.$emit('highlight', this.node.id);
            },
            onHover(id) {
                this.$emit('highlight', id);
            }
        }
    };
</script>

<style scoped>
ul.sub-tree {
    list-style-type: none;
    padding: 0;
}

li {
    position: relative;
    display: flex;
    flex-direction: column;
}

.icon {
    width: 24px;
    display: inline-flex;
    margin-left: 2px;
    background-color: transparent;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.icon[expanded] {
    transform: rotate(90deg);
}
</style>
