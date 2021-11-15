<template>
    <Checkbox class="dropdown-checkbox-item" :model-value="modelValue"
              @input="onInput">
        <span class="label-text">
            <slot/>
        </span>
        <Button v-if="isMulti" class="only-button" appearance="subtle"
                spacing="none"
                @click="onOnlyClicked">
            only
        </Button>
    </Checkbox>
</template>

<script>
    import Checkbox from '../Checkbox/Checkbox.vue';
    import Button from '../Button/Button.vue';

    export default {
        components: { Checkbox, Button },
        emits: ['update:modelValue'],
        props: {
            modelValue: {
                type: [Boolean, Array],
                default: undefined
            }
        },
        computed: {
            isMulti() {
                return Array.isArray(this.checked) && this.modelValue;
            }
        },
        methods: {
            onInput(value) {
                this.$emit('update:modelValue', value);
            },
            onOnlyClicked() {
                this.$emit('update:modelValue', [this.modelValue]);
            }
        }
    };
</script>

<style scoped>
    .dropdown-checkbox-item {
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        background-color: rgb(255, 255, 255);
        color: rgb(23, 43, 77);
        text-decoration: none;
        padding: 5px 12px 6px 7px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: flex;
        height: 40px;
    }

    .dropdown-checkbox-item:hover {
        background-color: rgb(244, 245, 247);
        color: rgb(23, 43, 77);
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
