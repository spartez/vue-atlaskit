<template>
    <InlineEdit v-if="editable"
                :value="value"
                type="number"
                step="1"
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
                type: String,
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
