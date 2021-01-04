<template>
    <div class="rich-text-editable-renderer">
        <RichTextEditor v-model="content" :editable="isEditing" :empty-field-text="emptyFieldText"
                        @edit-requested="onEditRequested">
            <template v-slot:actions="{setContent}">
                <div class="buttons">
                    <Button type="submit" :is-loading="isLoading" :is-disabled="isDisabled"
                            appearance="primary"
                            @click="onSave">
                        Save
                    </Button>
                    <Button @click="onCancel">
                        Cancel
                    </Button>
                </div>
            </template>
        </RichTextEditor>
    </div>
</template>

<script>
    import RichTextEditor from '../RichTextEditor/RichTextEditor';
    import Button from '../Button/Button';


    export default {
        name: 'RichTextEditableRenderer',
        components: { RichTextEditor, Button },
        props: {
            value: {
                type: [String, Object],
                default: ''
            },
            emptyFieldText: {
                type: String,
                default: 'Click to add description...'
            }
        },
        data() {
            return {
                isEditing: false,
                isLoading: false,
                isDirty: false,
                content: undefined
            };
        },
        computed: {
            isDisabled() {
                return this.isLoading || !this.isDirty;
            }
        },
        watch: {
            value: {
                handler(value) {
                    this.content = value;
                },
                immediate: true
            },
            content() {
                this.isDirty = true;
            }
        },
        methods: {
            onEditRequested() {
                this.isEditing = true;
            },
            onCancel() {
                this.isEditing = false;
                this.isLoading = false;
                this.isDirty = false;
                this.content = this.value;
            },
            onSave() {
                this.isLoading = true;
                this.$emit('save-requested', this.content, this.onCancel);
            }
        }
    };
</script>

<style scoped>
.buttons {
    padding: 10px 0;
}
</style>
