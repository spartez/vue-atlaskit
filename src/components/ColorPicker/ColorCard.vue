<template>
  <div
    class="card-wrapper"
    @click="onClick"
  >
    <div class="outline">
      <div
        class="card"
        :style="styles"
      >
        <EditorDoneIcon
          v-if="selected === color"
          primary-color="#fff"
        />
      </div>
    </div>
  </div>
</template>

<script>
    import { EditorDoneIcon } from '../Icon';

    export default {
        name: 'ColorCard',
        components: { EditorDoneIcon },
        props: {
            color: {
                type: String,
                default: '#000'
            },
            selected: {
                type: String,
                default: '#000'
            }
        },
        computed: {
            styles() {
                return { 'background-color': this.color };
            }
        },
        methods: {
            onClick() {
                this.$emit('color-selected', this.color);
            }
        }
    };
</script>

<style scoped>
.card-wrapper {
    display: flex;
    margin: 2px;
    box-sizing: border-box;
}

.outline {
    position: relative;
    border-radius: 6px;
    border: 2px solid transparent;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
}

.card-wrapper:hover .outline {
    cursor: pointer;
    border-color: rgb(179, 212, 255);
}

.card {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 24px;
    height: 24px;
    border-radius: 3px;
}
</style>
