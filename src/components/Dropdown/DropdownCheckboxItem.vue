<template>
  <Checkbox
    class="dropdown-checkbox-item"
    :checked="checked"
    :value="value"
    @input="onInput"
  >
    <span class="label-text">
      <slot/>
    </span>
    <Button
      v-if="isMulti && showOnlyButton"
      class="only-button"
      appearance="subtle"
      spacing="none"
      @click="onOnlyClicked"
    >
      only
    </Button>
  </Checkbox>
</template>

<script>
    import Checkbox from '../Checkbox/Checkbox';
    import Button from '../Button/Button';

    export default {
        components: { Checkbox, Button },
        model: {
            prop: 'checked',
            event: 'input'
        },
        props: {
            checked: {
                type: [Boolean, Array],
                required: true
            },
            value: {
                type: String,
                default: undefined
            },
            showOnlyButton: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            isMulti() {
                return Array.isArray(this.checked) && this.value;
            }
        },
        methods: {
            onInput(value) {
                this.$emit('input', value);
            },
            onOnlyClicked() {
                this.$emit('input', [this.value]);
            }
        }
    };
</script>

<style scoped>
    .dropdown-checkbox-item {
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        background-color: var(--ds-surface-overlay, #fff);
        color: var(--ds-text, #172B4D);
        text-decoration: none;
        padding: 5px 12px 6px 7px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 40px;
    }

    .dropdown-checkbox-item.checkbox-wrapper {
        display: flex;
    }

    .dropdown-checkbox-item:hover {
        background-color: var(--ds-background-neutral-subtle-hovered, #F4F5F7);
        fill: rgb(244, 245, 247);
        text-decoration: none;
    }

    .dropdown-checkbox-item >>> .label {
        overflow: hidden;
        display: flex;
        width: 100%;
    }

    .dropdown-checkbox-item .label-text {
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1;
    }

    .dropdown-checkbox-item .only-button {
        margin-left: auto;
        display: none;
    }

    .dropdown-checkbox-item:hover .only-button {
        display: block;
    }
</style>
