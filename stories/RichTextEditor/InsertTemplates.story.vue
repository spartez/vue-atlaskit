<template>
    <div class="rich-text-editor">
        <RichTextEditor v-model="doc">
            <template v-slot:top="{insert}">
                <div class="top">
                    <Button slot="insert" @click="insert(hi)">
                        Hi!
                    </Button>
                </div>
            </template>
            <template v-slot:menu-bar="{insert}">
                <Select v-model="value" :select="false" class="select"
                        :normalizer="normalizer"
                        :options="options" placeholder="Select template..." @input="insert(value)"/>
            </template>
        </RichTextEditor>
    </div>
</template>

<script>
    import RichTextEditor from '@/components/RichTextEditor/RichTextEditor';
    import Button from '@/components/Button/Button';
    import Select from '@/components/Select/Select';
    import { hi, templates } from './templates';

    export default {
        name: 'InsertTemplatesStory',
        components: { RichTextEditor, Button, Select },
        data() {
            return {
                editable: false,
                doc: {
                    type: 'doc',
                    version: 1
                },
                hi,
                value: undefined,
                options: templates
            };
        },
        methods: {
            normalizer(value) {
                return ({
                    id: value.id,
                    label: value.label,
                    value: value.template
                });
            }
        }
    };
</script>

<style scoped>
.rich-text-editor >>> p, .rich-text-editor >>> h1, h2, h3, h4, h5, h6 {
    margin-top: 20px !important;
}

.top {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
    border-radius: 5px;
    margin: 1rem 0;
}

.select {
    display: inline-flex;
    width: 200px;
    margin-left: 10px;
}
</style>
