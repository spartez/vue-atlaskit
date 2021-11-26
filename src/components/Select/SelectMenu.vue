<template>
    <div ref="menu" class="select-menu" tabindex="-1"
         @mousedown.prevent>
        <div class="select-menu-inner">
            <SelectOption
                    v-for="(item, index) in options"
                    :key="`${item.id}-${index}`"
                    :selected-id="selectedId"
                    :option="item"
                    :index="index"
                    :current-suggestion-index="currentSuggestionIndex"
                    data-cy="select-option"
                    @hover="onMouseOver"
                    @option-selected="onOptionSelected">
                <template v-slot:option="{ option, isCurrent }">
                    <slot name="option"
                          :is-current="isCurrent"
                          :option="option"/>
                </template>
            </SelectOption>
            <div
                    v-if="!hasSuggestions"
                    data-cy="no-options"
                    class="no-options">
                {{ !containsQuery && async ? placeholder : noOptionsMessage }}
            </div>
        </div>
        <div v-if="$slots.default" @mouseover="resetIndex">
            <slot/>
        </div>
    </div>
</template>

<script>
    import SelectOption from './SelectOption';

    export default {
        name: 'SelectMenu',
        components: { SelectOption },
        emits: ['update-popper-position', 'option-selected', 'hover'],
        props: {
            options: {
                type: Array,
                default: () => []
            },
            selected: {
                type: [Array, Object],
                default: () => ({})
            },
            currentSuggestionIndex: {
                type: Number,
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
            appendToBody: {
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
            }
        },
        computed: {
            selectedId() {
                return !Array.isArray(this.selected) ? this.selected.id : undefined;
            }
        },
        mounted() {
            if (this.appendToBody) {
                document.body.appendChild(this.$el);
                setTimeout(() => {
                    this.$emit('update-popper-position');
                }, 0);
            }
        },
        methods: {
            onOptionSelected(option) {
                this.$emit('option-selected', option);
            },
            onMouseOver(index) {
                this.$emit('hover', index);
            },
            resetIndex() {
                this.$emit('hover', undefined);
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
