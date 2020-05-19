<template>
    <InlineEdit v-if="editable"
                :value="value"
                type="number"
                @save-requested="onSaveRequested">
        <slot>
            <NumberFloatRenderer :value="value"/>
        </slot>
    </InlineEdit>
    <NumberFloatRenderer v-else :value="value"/>
</template>

<script>
    import NumberFloatRenderer from './NumberFloatRenderer';
    import InlineEdit from '../Form/InlineEdit';

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
            }
        },
        methods: {
            onSaveRequested(...args) {
                this.$emit('save-requested', ...args);
            }
        }
    };
</script>
