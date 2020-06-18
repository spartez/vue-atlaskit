<template>
    <InlineEdit v-if="editable"
                :value="value"
                @save-requested="onSaveRequested">
        <Select slot="editor" slot-scope="props"
                :value="props.value"
                :options="options"
                :is-invalid="props.isInvalid"
                :is-focused="props.isFocused"
                :is-loading="props.isLoading"
                :placeholder="placeholder"
                @input="props.input"
                @blur="props.blur"
                @confirm="props.confirm"
                @focus="props.focus"
                @cancel="props.cancel"/>
        <slot>
            <StringLineRenderer :value="value"/>
        </slot>
    </InlineEdit>
    <StringLineRenderer v-else :value="value"/>
</template>

<script>
    import Select from '../Select/Select';
    import StringLineRenderer from './StringLineRenderer';
    import InlineEdit from '../Form/InlineEdit';

    export default {
        name: 'SingleSelectEditableRenderer',
        components: { Select, StringLineRenderer, InlineEdit },
        props: {
            editable: {
                type: Boolean,
                default: true
            },
            value: { type: String, default: '' },
            allowedValues: {
                type: Array,
                default: () => []
            },
            placeholder: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                options: this.allowedValues
            };
        },
        methods: {
            onSaveRequested(option, callback) {
                const value = option || '';
                this.$emit('save-requested', value, callback);
            }
        }
    };
</script>
