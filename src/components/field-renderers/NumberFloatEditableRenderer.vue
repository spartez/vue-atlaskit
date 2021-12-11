<template>
    <InlineEdit v-if="editable"
                :value="value"
                type="number"
                :placement="placement"
                @save-requested="onSaveRequested">
        <slot>
            <NumberFloatRenderer :value="value"/>
        </slot>
    </InlineEdit>
    <NumberFloatRenderer v-else :value="value"/>
</template>

<script>
    import NumberFloatRenderer from './NumberFloatRenderer.vue';
    import InlineEdit from '../Form/InlineEdit.vue';

    export default {
        name: 'NumberFloatEditableRenderer',
        components: { NumberFloatRenderer, InlineEdit },
        props: {
            value: {
                type: Number,
                default: undefined
            },
            editable: {
                type: Boolean,
                default: true
            },
            placement: {
                type: String,
                default: 'right'
            }
        },
        methods: {
            onSaveRequested(...args) {
                this.$emit('save-requested', ...args);
            }
        }
    };
</script>
