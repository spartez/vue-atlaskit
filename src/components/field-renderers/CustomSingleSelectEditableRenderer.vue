<template>
    <InlineEdit v-if="editable"
                :value="value"
                :confirm="confirm"
                :placement="placement"
                @save-requested="onSaveRequested">
        <Select slot="editor" slot-scope="props"
                :value="props.value"
                :options="options"
                :normalizer="normalizer"
                :is-invalid="props.isInvalid"
                :is-focused="props.isFocused"
                :is-loading="props.isLoading"
                :placeholder="placeholder"
                :append-to-body="appendToBody"
                @input="props.input"
                @blur="props.blur"
                @confirm="props.confirm"
                @focus="props.focus"
                @cancel="props.cancel">
            <slot slot="selected" slot-scope="{selected}" name="selected"
                  :selected="selected"/>
            <slot slot="option" slot-scope="{option}" name="option"
                  :option="option"/>
        </Select>
        <slot/>
    </InlineEdit>
    <div v-else class="slot">
        <slot/>
    </div>
</template>

<script>
    import Select from '../Select/Select.vue';
    import InlineEdit from '../Form/InlineEdit.vue';

    export default {
        name: 'CustomSingleSelectEditableRenderer',
        components: { Select, InlineEdit },
        props: {
            editable: {
                type: Boolean,
                default: true
            },
            placement: {
                type: String,
                default: 'right'
            },
            value: {
                type: [String, Object],
                default: ''
            },
            allowedValues: {
                type: Array,
                default: () => []
            },
            placeholder: {
                type: String,
                default: ''
            },
            appendToBody: {
                type: Boolean,
                default: false
            },
            normalizer: {
                type: Function,
                default: value => ({
                    id: value, label: value, value, disabled: false
                })
            },
            confirm: {
                type: Boolean,
                default: true
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
