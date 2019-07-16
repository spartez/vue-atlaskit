<template>
    <div ref="menu" class="select-menu" tabindex="-1"
         @mousedown.prevent>
        <div class="select-menu-inner">
            <SelectOption v-for="(option,index) in options" :key="`${option.id}-${index}`" :selected-id="selectedId"
                          :option="option" :index="index"
                          :current-suggestion-index="currentSuggestionIndex"
                          @mouseover="onMouseOver"
                          @option-selected="onOptionSelected">
                <slot slot="option" slot-scope="{option}" name="option"
                      :option="option"/>
            </SelectOption>
            <div v-if="!hasSuggestions" class="no-options">
                {{ isFetching ? 'Loading...' : 'No options' }}
            </div>
        </div>
    </div>
</template>

<script>
    import SelectOption from './SelectOption';

    export default {
        name: 'SelectMenu',
        components: { SelectOption },
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
            isFetching: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            selectedId() {
                return !Array.isArray(this.selected) ? this.selected.id : undefined;
            }
        },
        methods: {
            onOptionSelected(option) {
                this.$emit('option-selected', option);
            },
            onMouseOver(index) {
                this.$emit('mouseover', index);
            }
        }
    };
</script>

<style scoped>
.select-menu {
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px;
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
