<template>
  <span>
    <span
      class="lozenge"
      :appearance="color"
    >
      {{ text }}
    </span>
  </span>
</template>

<script>
    export default {
        props: ['node', 'updateAttrs', 'view'],
        computed: {
            color() {
                return this.node && this.node.attrs.color;
            },
            text() {
                return this.node && this.node.attrs.text;
            }
        }
    };
</script>

<style scoped>
    .lozenge {
        background-color: rgb(223, 225, 230);
        box-sizing: border-box;
        color: rgb(66, 82, 110);
        display: inline;
        font-size: 11px;
        font-weight: 700;
        line-height: 1;
        text-transform: uppercase;
        vertical-align: baseline;
        border-radius: 3px;
        padding: 1px 4px 2px;
        overflow: hidden;
        max-width: 200px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .lozenge[appearance="green"] {
        background-color: rgb(227, 252, 239);
        color: rgb(0, 102, 68);
    }

    .lozenge[appearance="red"] {
        background-color: rgb(255, 235, 230);
        color: rgb(191, 38, 0);
    }

    .lozenge[appearance="blue"] {
        background-color: rgb(222, 235, 255);
        color: rgb(7, 71, 166);
    }

    .lozenge[appearance="purple"] {
        background-color: rgb(234, 230, 255);
        color: rgb(64, 50, 148);
    }

    .lozenge[appearance="yellow"] {
        background-color: rgb(255, 240, 179);
        color: rgb(23, 43, 77);
    }
</style>
