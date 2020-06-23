<template>
    <InlineEdit v-if="editable"
                :value="value"
                :confirm="confirm"
                :icon="icon"
                :align="align"
                :pattern="pattern"
                @save-requested="onSaveRequested">
        <slot>
            <StringLineRenderer :value="value"/>
        </slot>
    </InlineEdit>
    <StringLineRenderer v-else :value="value"/>
</template>

<script>
    import StringLineRenderer from './StringLineRenderer';
    import InlineEdit from '../Form/InlineEdit';

    export default {
        name: 'StringLineEditableRenderer',
        components: { StringLineRenderer, InlineEdit },
        props: {
            value: {
                type: String,
                default: undefined
            },
            editable: {
                type: Boolean,
                default: true
            },
            confirm: {
                type: Boolean,
                default: true
            },
            icon: {
                type: Boolean,
                default: true
            },
            align: {
                type: String,
                default: undefined
            },
            pattern: {
                type: String,
                default: ''
            }
        },
        methods: {
            onSaveRequested(...args) {
                this.$emit('save-requested', ...args);
            }
        }
    };
</script>
