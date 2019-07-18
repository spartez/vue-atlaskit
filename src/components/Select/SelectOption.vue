<template>
    <div ref="option" :selected="isSelected" class="select-option"
         :current="current"
         @click.stop="onOptionSelected" @mouseover="onMouseOver">
        <slot name="option" :option="option.value">
            {{ option.label }}
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'SelectOption',
        props: {
            option: {
                type: Object,
                default: () => ({})
            },
            index: {
                type: Number,
                default: undefined
            },
            selectedId: {
                type: [String, Number],
                default: undefined
            },
            currentSuggestionIndex: {
                type: Number,
                default: undefined
            }
        },
        computed: {
            isSelected() {
                return this.selectedId === this.option.id;
            },
            current() {
                return this.currentSuggestionIndex === this.index;
            }
        },
        watch: {
            current(isCurrent) {
                if (isCurrent) {
                    this.$refs.option.scrollIntoView(false);
                }
            }
        },
        methods: {
            onOptionSelected() {
                this.$emit('option-selected', this.option);
            },
            onMouseOver() {
                this.$emit('mouseover', this.index);
            }
        }
    };
</script>

<style scoped>
.select-option {
    cursor: pointer;
    display: block;
    font-size: inherit;
    width: 100%;
    box-sizing: border-box;
    padding: 6px 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.select-option[selected] {
    background-color: #42526E;
    color: #fff;
}

.select-option[current] {
    background-color: #EBECF0;
    color: inherit;
}

.select-option[isSelected] {
    background-color: #42526E
}
</style>
