<template>
  <div
    ref="dropdown-container"
    class="color-picker"
  >
    <button
      type="button"
      @click="onTriggerClick"
    >
      <div
        class="color"
        :style="style"
      />
    </button>
    <Popup
      :is-open="open"
      offset="0,8"
      :target-element="$refs['dropdown-container']"
      placement="bottom-start"
    >
      <div class="content">
        <ColorCard
          v-for="color in colors"
          :key="color"
          :color="color"
          :selected="selected"
          @color-selected="onColorSelected"
        />
      </div>
    </Popup>
  </div>
</template>

<script>
    import ColorCard from './ColorCard';
    import Popup from '../common/Popup';

    export default {
        name: 'ColorPicker',
        components: { ColorCard, Popup },
        props: {
            value: {
                type: String,
                default: '#000'
            }
        },
        data() {
            return {
                colors: ['#000', '#0052CC', '#172B4D', '#FF5630', '#FFAB00', '#36B37E', '#00B8D9', '#6554C0'],
                open: false
            };
        },
        computed: {
            style() {
                return { 'background-color': this.selected };
            },
            selected: {
                get() {
                    return this.value;
                },
                set(color) {
                    this.$emit('input', color);
                }
            }
        },
        methods: {
            onTriggerClick() {
                this.open = !this.open;
            },
            onColorSelected(color) {
                this.selected = color;
                this.open = false;
            }
        }
    };
</script>

<style scoped>
button {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 6px;
    transition: border-color 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
    padding: 0px;
    outline: none;
}

.color {
    width: 24px;
    height: 24px;
    border-radius: 3px;
}

.content {
    display: flex;
    flex-wrap: wrap;
    padding: 4px;
}
</style>
