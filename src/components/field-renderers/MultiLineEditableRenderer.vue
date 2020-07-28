<template>
    <InlineEdit v-if="editable"
                :value="value"
                pencil-style="floating"
                @save-requested="onSaveRequested">
        <slot>
            <MultiLineRenderer :value="value"/>
        </slot>
        <TextArea slot="editor" slot-scope="{ value, input, isFocused, isInvalid, isLoading, blur, focus, confirm, cancel }"
                  :value="value"
                  :is-focused="isFocused"
                  :is-invalid="isInvalid"
                  :is-loading="isLoading"
                  @keydown.meta.enter="confirm"
                  @keyup.esc="cancel"
                  @input="input"
                  @blur="blur"
                  @focus="focus"/>
    </InlineEdit>
    <MultiLineRenderer v-else :value="value"/>
</template>

<script>
    import TextArea from '../Form/TextArea';
    import MultiLineRenderer from './MultiLineRenderer';
    import InlineEdit from '../Form/InlineEdit';

    export default {
        name: 'MultiLineEditableRenderer',
        components: { MultiLineRenderer, InlineEdit, TextArea },
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
