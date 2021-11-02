<template>
    <InlineEdit v-if="editable"
                :value="value"
                :icon="icon"
                pencil-style="floating"
                :placement="placement"
                @save-requested="onSaveRequested">
        <slot>
            <MultiLineRenderer :value="value"/>
        </slot>
        <TextArea slot="editor" slot-scope="{ value, input, isFocused, isInvalid, isLoading, blur, focus, confirm, cancel }"
                  :value="value"
                  :is-focused="isFocused"
                  :is-invalid="isInvalid"
                  :is-loading="isLoading"
                  :submit-on-enter="submitOnEnter"
                  @confirm="confirm"
                  @keydown.meta.enter="confirm"
                  @keyup.esc="cancel"
                  @input="input"
                  @blur="blur"
                  @focus="focus"/>
    </InlineEdit>
    <MultiLineRenderer v-else :value="value"/>
</template>

<script>
    import TextArea from '../Form/TextArea.vue';
    import MultiLineRenderer from './MultiLineRenderer.vue';
    import InlineEdit from '../Form/InlineEdit.vue';

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
            },
            placement: {
                type: String,
                default: 'right'
            },
            icon: {
                type: Boolean,
                default: true
            },
            submitOnEnter: {
                type: Boolean,
                default: false
            }
        },
        emits: ['save-requested'],
        methods: {
            onSaveRequested(...args) {
                this.$emit('save-requested', ...args);
            }
        }
    };
</script>
