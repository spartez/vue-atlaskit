<template>
    <InlineEdit v-if="editable"
                :value="value"
                offset="0,0"
                class="checkbox-edit"
                @save-requested="onSaveRequested">
        <Checkbox slot="editor" slot-scope="props" size="large"
                  class="checkbox"
                  :checked="props.value"
                  :is-focused="props.isFocused"
                  :is-invalid="props.isInvalid"
                  :disabled="props.isLoading"
                  @input="props.input"
                  @focus="props.focus"
                  @blur="props.blur"
                  @confirm="props.confirm"
                  @keyup.esc="props.cancel"/>
        <slot>
            <CheckboxRenderer :value="value"/>
        </slot>
    </InlineEdit>
    <CheckboxRenderer v-else :value="value"/>
</template>

<script>
    import Checkbox from '../Checkbox/Checkbox';
    import CheckboxRenderer from './CheckboxRenderer';
    import InlineEdit from '../Form/InlineEdit';

    export default {
        name: 'CheckboxEditableRenderer',
        components: { CheckboxRenderer, InlineEdit, Checkbox },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            editable: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            onSaveRequested(value, callback) {
                this.$emit('save-requested', value, callback);
            }
        }
    };
</script>
<style scoped>
    .checkbox-edit {
        width: 44px;
    }

    .checkbox {
        box-sizing: border-box;
        padding: 6px;
    }
</style>
