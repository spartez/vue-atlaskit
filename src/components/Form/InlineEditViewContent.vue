<template>
  <div
    tabindex="0"
    prevent-outline
    data-cy="view-content"
    class="view-content"
    @keyup.enter="onEnter"
    @click="onClick"
    @mousedown="onMouseDown"
  >
    <div
      class="label"
      data-cy="label"
      tabindex="-1"
    >
      <slot/>
      <div class="pencil-icon">
        <EditFilledIcon size="xsmall"/>
      </div>
    </div>
  </div>
</template>

<script>
    import EditFilledIcon from '../Icon/EditFilledIcon';

    const DRAG_THRESHOLD = 5;

    export default {
        name: 'InlineEditViewContent',
        components: { EditFilledIcon },
        data() {
            return {
                startX: 0,
                startY: 0
            };
        },
        methods: {
            onMouseDown(e) {
                this.startX = e.clientX;
                this.startY = e.clientY;
            },
            onEnter() {
                this.$emit('edit-requested');
            },
            onClick(e) {
                if (this.mouseHasMoved(e)) return;
                this.$emit('edit-requested');
            },
            mouseHasMoved({ clientX, clientY }) {
                return (
                    Math.abs(this.startX - clientX) >= DRAG_THRESHOLD
                    || Math.abs(this.startY - clientY) >= DRAG_THRESHOLD
                );
            }

        }
    };
</script>

<style scoped>
    [prevent-outline] {
        outline: none;
    }

    .label {
        display: flex;
        align-items: center;
        background-color: transparent;
        color: var(--ds-text, #091E42);
        border-radius: 3px;
        outline: none;
        border: transparent 2px solid;
        min-width: 44px;
        cursor: pointer;
        padding: 6px;
    }

    [align="end"] > .label {
        justify-content: flex-end;
    }

    [compact] > .label {
        padding: 0;
    }

    :focus > .label {
        border: 2px solid #4C9AFF;
        background: transparent;
    }

    .label:hover {
        background-color: var(--ds-background-neutral-subtle-hovered, #EBECF0);
    }

    .pencil-icon {
        align-items: center;
        margin-left: auto;
        padding: 0 5px;
        font-size: initial;
        opacity: 0;
        display: inline-flex;
    }

    .view-content:not([icon]) .pencil-icon {
        display: none;
    }

    .label:hover .pencil-icon {
        opacity: 1;
    }
</style>
