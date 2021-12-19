<template>
    <li v-show="shouldBeDisplayedInSearchResults">
        <Label v-model="checked"
               :node="node"
               :hovered="hovered"
               :level="level"
               @mouseenter.native="$emit('highlight', node.id.toString())">
            <div v-if="hasChildNodes" slot="chevron" class="icon"
                 :expanded="isExpanded" @click="$emit('toggle-expand',node.id.toString())">
                <ChevronRightIcon/>
            </div>
            <slot name="label">
                {{ node.label }}
            </slot>
        </Label>
        <ul v-show="isExpanded" class="sub-tree">
            <Node v-for="child in node.children" :key="child.id"
                  :selected="selected"
                  :node="child"
                  :ancestors="parentNodes"
                  :parent="node"
                  :level="level + 1"
                  :expand-level="expandLevel"
                  :current="current"
                  :hovered="hovered"
                  :expanded="expanded"
                  :search="search"
                  @toggle-expand="onToggleExpand"
                  @input="onSelect"
                  @expand="onExpand"
                  @highlight="onHover">
                <template v-slot:label="{node}">
                    <slot :node="node" name="label"/>
                </template>
            </Node>
        </ul>
    </li>
</template>

<script>
    import Label from './Label';
    import { ChevronRightIcon } from '../Icon';

    export default {
        name: 'Node',
        components: { ChevronRightIcon, Label },
        props: {
            node: {
                type: Object,
                default: () => ({})
            },
            selected: {
                type: [Number, String],
                default: undefined
            },
            parent: {
                type: Object,
                default: () => ({})
            },
            ancestors: {
                type: Array,
                default: () => []
            },
            expanded: {
                type: Array,
                default: () => []
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
            },
            search: {
                type: String,
                default: '  '
            }
        },
        computed: {
            parentNodes() {
                const { id, label } = this.parent;
                return [...this.ancestors, ...id ? [{ id, label }] : []];
            },
            isExpanded() {
                return this.hasChildNodes && this.expanded.includes(this.node.id.toString());
            },
            hasChildNodes() {
                return !!(this.node.children && this.node.children.length);
            },
            childNodes() {
                return this.getChildNodes(this.node.children);
            },
            hasMatchedChildNodes() {
                return this.search && !!this.childNodes.map(node => node.label).filter(this.isMatch).length;
            },
            isMatched() {
                return this.node.label.toLowerCase().includes(this.search.toLowerCase());
            },
            shouldBeDisplayedInSearchResults() {
                return this.search ? (this.hasMatchedChildNodes || this.isMatched) : true;
            },

            checked: {
                get() {
                    return this.selected === this.node.id;
                },
                set(selected) {
                    this.$emit('input', selected, this.parentNodes);
                }
            }
        },
        watch: {
            hasMatchedChildNodes(bool) {
                if (bool && !this.isExpanded) {
                    this.$emit('toggle-expand', this.node.id);
                }
            }
        },
        mounted() {
            if (this.level < this.expandLevel && this.hasChildNodes) {
                this.$emit('toggle-expand', this.node.id);
            }
            if (this.checked) {
                this.$emit('expand', this.parentNodes.map(node => node.id));
            }
        },
        methods: {
            onSelect(id, ancestors = []) {
                this.$emit('input', id, ancestors);
            },
            getChildNodes(children = []) {
                return children.reduce((nodes, node) => {
                    if (node.children) {
                        return [...nodes, node, ...this.getChildNodes(node.children)];
                    }
                    return [...nodes, node];
                }, []);
            },
            onHover(id) {
                this.$emit('highlight', id);
            },
            onToggleExpand(id) {
                this.$emit('toggle-expand', id);
            },
            isMatch(label) {
                return label
                    .toString()
                    .toLowerCase()
                    .includes(this.search.toLowerCase().trim());
            },
            onExpand(ids) {
                this.$emit('expand', ids);
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

>>> .highlight {
    font-weight: bold;
    color: red;
}
</style>
