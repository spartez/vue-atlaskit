<template>
    <Checkbox class="dropdown-checkbox-item" :value="value" @input="onInput">
        <slot/>
    </Checkbox>
</template>

<script>
    import Checkbox from '../Checkbox/Checkbox';

    export default {
        components: { Checkbox },
        props: {
            value: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            onInput(value) {
                this.$emit('input', value);
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
    }

    .dropdown-checkbox-item:hover {
        background-color: rgb(244, 245, 247);
        color: rgb(23, 43, 77);
        fill: rgb(244, 245, 247);
        text-decoration: none;
    }

    .dropdown-checkbox-item >>> .label {
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
