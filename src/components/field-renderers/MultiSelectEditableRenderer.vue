<template>
    <InlineEdit v-if="editable"
                :value="selectedValues"
                @save-requested="onSaveRequested">
        <Select slot="editor" slot-scope="props"
                :value="props.value"
                :multi="true"
                :options="options"
                :is-invalid="props.isInvalid"
                :is-focused="props.isFocused"
                :is-loading="props.isLoading"
                @input="props.input"
                @blur="props.blur"
                @confirm="props.confirm"
                @focus="props.focus"
                @cancel="props.cancel"/>
        <slot>
            <MultiSelectRenderer :selected-values="selectedValues"/>
        </slot>
    </InlineEdit>
    <MultiSelectRenderer v-else :selected-values="selectedValues"/>
</template>

<script>
    import Select from '../Select/Select';
    import MultiSelectRenderer from './MultiSelectRenderer';
    import InlineEdit from '../Form/InlineEdit';

    export default {
        name: 'MultiSelectEditableRenderer',
        components: { MultiSelectRenderer, InlineEdit, Select },
        props: {
            selectedValues: {
                type: Array,
                default: () => []
            },
            editable: {
                type: Boolean,
                default: true
            },
            allowedValues: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                options: this.allowedValues
            };
        },
        methods: {
            onSaveRequested(value, callback) {
                try {
                    if (Array.isArray(value)) {
                        this.$emit('save-requested', value, callback);
                    } else {
                        callback(new Error('Value should be an array'));
                    }
                } catch (error) {
                    callback(error);
                }
            }
        }
    };
</script>
