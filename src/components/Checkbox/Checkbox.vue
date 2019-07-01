<template>
    <label class="checkbox-wrapper" :for="id">
        <input type="checkbox" :id="id" :disabled="disabled" v-model="checked">
        <CheckboxIcon class="icon"/>
        <span v-if="$slots['default']" class="label"><slot/></span>
    </label>
</template>

<script>
    import CheckboxIcon from '../Icon/CheckboxIcon';

    export default {
        name: 'Checkbox',
        components: { CheckboxIcon },
        watch: {
            checked(checked) {
                this.$emit('input', checked);
            }
        },
        props: {
            value: {
                type: [Number, String, Boolean]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return { id: undefined, checked: false }
        },
        created() {
            // eslint-disable-next-line
            this.id = this._uuid;
        }
    };
</script>

<style scoped>
input[type="checkbox"] {
    left: 50%;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    cursor: pointer;
}

.checkbox-wrapper {
    display: inline-flex;
    position: relative;
    cursor: pointer;
}

.label {
    padding: 2px 4px;
}

>>> input:checked + .icon rect {
    color: #0052cc;
    stroke: #0052cc;
}

>>> input + .icon rect {
    color: #fafbfc;
    stroke: #dfe1e6;
}

>>> input:not(:checked) + .icon:hover rect {
    fill: #EBECF0;
}

>>> input:not(:checked) + .icon:hover path {
    fill: #EBECF0;
}

>>> input:checked + .icon:hover rect {
    color: #0065ff;
    stroke: #0065ff;
}

>>> input + .icon path {
    fill: #fafbfc;
}

>>> input:focus + .icon rect {
    stroke: #4c9aff;
}

>>> input[disabled] + .icon rect {
    opacity: .5;
}

>>> rect {
    transition: 0.2s ease-in-out;
    stroke-width: 2px;
}

>>> path {
    transition: 0.2s ease-in-out;
}

</style>
