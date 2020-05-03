<template>
    <div ref="menu" class="select-menu" tabindex="-1"
         @mousedown.prevent>
        <div class="select-menu-inner">
            <Tree
                :value="selected"
                :nodes="options"
                :current-suggestion-id="currentSuggestionId"
                :expand-level="2"
                :search="search"
                @input="onOptionSelected"/>
            <div
                v-if="!hasSuggestions"
                class="no-options">
                {{ !containsQuery && async ? placeholder : noOptionsMessage }}
            </div>
        </div>
    </div>
</template>

<script>
    import Tree from '../../Tree/Tree';

    export default {
        name: 'SelectMenu',
        components: { Tree },
        props: {
            options: {
                type: Array,
                default: () => []
            },
            selected: {
                type: [Array, Object],
                default: () => []
            },
            currentSuggestionId: {
                type: [String, Number],
                default: undefined
            },
            hasSuggestions: {
                type: Boolean,
                default: false
            },
            containsQuery: {
                type: Boolean,
                default: false
            },
            async: {
                type: Boolean,
                default: false
            },
            noOptionsMessage: {
                type: String,
                default: undefined
            },
            placeholder: {
                type: String,
                default: undefined
            },
            search: {
                type: String,
                default: ''
            }
        },
        methods: {
            onOptionSelected(option, ancestors) {
                this.$emit('option-selected', option, ancestors);
            }
        }
    };
</script>

<style scoped>
.select-menu {
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.1) 0px 4px 11px;
  margin-bottom: 8px;
  margin-top: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  position: absolute;
  z-index: 1000;
}

.select-menu-inner {
  max-height: 300px;
  overflow-y: auto;
  padding-bottom: 8px;
  padding-top: 8px;
  box-sizing: border-box;
}

.no-options {
  padding: 6px 12px;
  text-align: center;
}
</style>
