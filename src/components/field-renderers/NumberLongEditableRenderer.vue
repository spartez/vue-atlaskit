<template>
    <InlineEdit v-if="editable"
                :value="value"
                type="number"
                step="1"
                :placement="placement"
                @save-requested="onSaveRequested">
        <slot>
            <NumberLongRenderer :value="value"/>
        </slot>
    </InlineEdit>
    <NumberLongRenderer v-else :value="value"/>
</template>

<script>
    import NumberLongRenderer from './NumberLongRenderer';
    import InlineEdit from '../Form/InlineEdit';

    export default {
        name: 'NumberLongEditableRenderer',
        components: { NumberLongRenderer, InlineEdit },
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
