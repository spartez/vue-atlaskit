<template>
    <div class="wrapper">
        <div class="label">
            Is valid
        </div>
        <InlineEdit field="field" :value="checked" type="text"
                    class="checkbox-edit"
                    @save-requested="onSaveRequested">
            <Checkbox slot="editor" slot-scope="props" size="large"
                      class="checkbox"
                      :value="props.value"
                      :is-focused="props.isFocused"
                      :is-invalid="props.isInvalid"
                      :is-loading="props.isLoading"
                      @input="props.input"
                      @focus="props.focus"
                      @blur="props.blur"
                      @confirm="props.confirm"
                      @keyup.esc="props.cancel"/>
            <EditorDoneIcon v-if="checked" size="small" primary-color="#36B37E"/>
        </InlineEdit>
    </div>
</template>

<script>
    import InlineEdit from '@/components/Form/InlineEdit';
    import Checkbox from '@/components/Checkbox/Checkbox';
    import EditorDoneIcon from '@/components/Icon/EditorDoneIcon';

    export default {
        name: 'DateInlineEdit',
        components: { InlineEdit, EditorDoneIcon, Checkbox },
        data() {
            return {
                checked: false
            };
        },
        methods: {
            onSaveRequested(value, callback) {
                this.checked = value;
                callback();
            }
        }
    };
</script>

<style scoped>
.wrapper {
    padding: 10px;
}

.label {
    margin-bottom: 8px;
}

.checkbox-edit {
    min-width: 64px;
    display: inline-block;
}

.checkbox {
    box-sizing: border-box;
    padding: 6px;
}
</style>
