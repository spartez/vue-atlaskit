<template>
    <div class="rich-text-form">
        <div class="editor" :is-editing="editable">
            <editor-menu-bar v-if="editable && menu" v-slot="{ commands, isActive }" :editor="editor">
                <div class="menu-bar">
                    <Button
                        appearance="subtle"
                        :is-selected="isActive.strong()"
                        spacing="none"
                        @click="commands.strong">
                        <EditorBoldIcon slot="icon-before"/>
                    </Button>

                    <Button
                        appearance="subtle"
                        :is-selected="isActive.em()"
                        spacing="none"
                        @click="commands.em">
                        <EditorItalicIcon slot="icon-before"/>
                    </Button>

                    <Button
                        appearance="subtle"
                        :is-selected="isActive.strike()"
                        spacing="none"
                        @click="commands.strike">
                        <EditorStrikethroughIcon slot="icon-before"/>
                    </Button>

                    <Button
                        appearance="subtle"
                        :is-selected="isActive.underline()"
                        spacing="none"
                        @click="commands.underline">
                        <EditorUnderlineIcon slot="icon-before"/>
                    </Button>

                    <Button
                        appearance="subtle"
                        :is-selected="isActive.bulletList()"
                        spacing="none"
                        @click="commands.bulletList">
                        <EditorBulletListIcon slot="icon-before"/>
                    </Button>

                    <Button
                        appearance="subtle"
                        :is-selected="isActive.orderedList()"
                        spacing="none"
                        @click="commands.orderedList">
                        <EditorNumberListIcon slot="icon-before"/>
                    </Button>

                    <Button
                        appearance="subtle"
                        :class="{ 'is-active': isActive.blockquote() }"
                        spacing="none"
                        @click="commands.blockquote">
                        <EditorQuoteIcon slot="icon-before"/>
                    </Button>

                    <Button
                        appearance="subtle"
                        :is-selected="isActive.code()"
                        spacing="none"
                        @click="commands.code">
                        <EditorCodeIcon slot="icon-before"/>
                    </Button>
                </div>
            </editor-menu-bar>
            <editor-content class="editor-content" :editable="editable" :read-only="readOnly"
                            :editor="editor"
                            @click.native="onEditRequested"/>
        </div>
        <slot v-if="editable" name="actions" :setContent="editor.setContent"/>
    </div>
</template>

<script>
    import { Editor, EditorContent, EditorMenuBar } from 'tiptap';

    import {
        EditorBoldIcon,
        EditorItalicIcon,
        EditorUnderlineIcon,
        EditorBulletListIcon,
        EditorNumberListIcon,
        EditorQuoteIcon,
        EditorCodeIcon,
        EditorStrikethroughIcon
    } from '../Icon';
    import Button from '../Button/Button';
    import { extensions, Placeholder } from './extensions';

    export default {
        components: {
            EditorContent,
            EditorMenuBar,
            EditorBoldIcon,
            EditorItalicIcon,
            EditorUnderlineIcon,
            EditorBulletListIcon,
            EditorNumberListIcon,
            EditorQuoteIcon,
            EditorCodeIcon,
            EditorStrikethroughIcon,
            Button
        },
        props: {
            editable: {
                type: Boolean,
                default: true
            },
            value: {
                type: [String, Object],
                default: ''
            },
            menu: {
                type: Boolean,
                default: true
            },
            placeholder: {
                type: String,
                default: 'Write something...'
            },
            onFocus: {
                type: Function,
                default: () => ({})
            },
            readOnly: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                updated: false,
                editor: new Editor({
                    editable: this.editable,
                    useBuiltInExtensions: false,
                    extensions: [...extensions, new Placeholder({ emptyNodeText: this.placeholder })],
                    onFocus: this.onFocus,
                    content: this.value,
                    onUpdate: ({ getJSON }) => {
                        this.updated = true;
                        const json = getJSON();
                        const { content } = json;
                        if (Array.isArray(content) && content.length === 1 && !Object.prototype.hasOwnProperty.call(content[0], 'content')) {
                            this.$emit('input', null);
                        } else {
                            const doc = JSON.parse(JSON.stringify(json, (k, v) => (v != null ? v : undefined)));
                            this.$emit('input', {
                                ...doc, version: 1
                            });
                        }
                    }
                })
            };
        },
        watch: {
            editable(editable) {
                this.editor.setOptions({ editable });
            },
            value: {
                handler(value) {
                    if (this.updated) {
                        this.updated = false;
                        return;
                    }
                    if (this.editor) {
                        try {
                            this.editor.setContent(value);
                        } catch (e) {
                            this.editor.setContent(e.message);
                        }
                    }
                },
                immediate: true
            }

        },
        beforeDestroy() {
            this.editor.destroy();
        },
        methods: {
            onEditRequested() {
                if (!this.editable) {
                    this.$emit('edit-requested');
                }
            }
        }
    };
</script>
<style scoped>
.editor[is-editing] {
    border: solid 1px rgb(223, 225, 230);
    border-radius: 3px;
}

.menu-bar {
    padding: 8px 8px 0px 20px;
}

.editor-content {
    padding: 12px 6px;
}

.editor[is-editing] .editor-content {
    padding: 20px;
}

.editor-content:not([editable]):not([read-only]):hover {
    background-color: #EBECF0;
    border-radius: 3px;
}

.editor-content :focus {
    outline: none;
}

.editor-content >>> tt {
    background-color: rgba(9, 30, 66, 0.08);
    padding: 1px 5px;
    display: inline-block;
    border-radius: 3px;
}

.editor-content >>> blockquote {
    color: rgba(0, 0, 0, 0.8);
    padding-left: 0.8rem;
    font-style: italic;
    border-left: 3px solid rgba(0, 0, 0, 0.1);
}

.editor >>> p.is-editor-empty:first-child::before {
    content: attr(data-empty-text);
    float: left;
    color: #aaa;
    pointer-events: none;
    height: 0;
    font-style: italic;
}

.editor >>> table {
    border-collapse: collapse;
    table-layout: fixed;
    font-size: 1em;
    width: 100%;
    margin: 24px 8px 0px 0px;
    border: 1px solid rgb(193, 199, 208);
    border-image: initial;
}

.editor >>> table tbody {
    border-bottom: none;
}

.editor >>> table th {
    background-color: rgb(244, 245, 247);
    text-align: left;
    border-width: 1px 0px 0px 1px;
    border-style: solid;
    border-color: rgb(193, 199, 208);
    padding: 8px;
}

.editor >>> table td {
    border-width: 1px 0px 0px 1px;
    border-style: solid;
    border-color: rgb(193, 199, 208);
    border-image: initial;
    padding: 8px;
}
</style>
