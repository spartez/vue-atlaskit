<template>
  <Tooltip 
    v-if="this.$showOptionTooltip"
    class="tooltip-wrapper"
    placement="top"
    :label="option.value"
  >
    <div
      ref="option"
      :selected="isSelected"
      class="select-option"
      :current="current"
      @click.stop="onOptionSelected"
      @mouseover="onMouseOver"
    >
      <slot
        name="option"
        :option="option.value"
        :is-current="current"
      >
        {{ option.label }}
      </slot>
    </div>
  </Tooltip>
  <div 
    v-else
    ref="option"
    :selected="isSelected"
    class="select-option"
    :current="current"
    @click.stop="onOptionSelected"
    @mouseover="onMouseOver"
  >
    <slot
      name="option"
      :option="option.value"
      :is-current="current"
    >
      {{ option.label }}
    </slot>
  </div>
</template>

<script>
    import Tooltip from '../Tooltip/Tooltip';

    export default {
        name: 'SelectOption',
        components: { Tooltip },
        inject: {
            $showOptionTooltip: {
                from: '$showOptionTooltip',
                default: undefined
            }
        },
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
                    this.$nextTick(() => {
                        if (!this.$refs.option) return;
                        const isMicrosoftBrowser = new RegExp(['MSIE ', 'Edge/'].join('|')).test(navigator.userAgent);
                        if (isMicrosoftBrowser) return;
                        this.$refs.option.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest',
                            inline: 'start'
                        });
                    });
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

.tooltip-wrapper {
  width: 100%;
}
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
  background-color: var(--ds-background-selected,#E6EFFC);
  color: var(--ds-text-selected, #0052CC);
}

.select-option[current] {
  background-color: var(--ds-background-neutral-subtle-hovered, #F4F5F7);
  color: inherit;
}

.select-option[isSelected] {
  background-color: #42526e;
}
</style>
