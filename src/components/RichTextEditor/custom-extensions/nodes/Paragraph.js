/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { paragraph } from '@atlaskit/adf-schema'

export default class Paragraph extends Node {
    get name() {
        return 'paragraph';
    }

    get schema() {
        return {
            ...paragraph,
            marks: 'strong code em link strike subsup textColor typeAheadQuery underline confluenceInlineComment annotation',
        };
    }
}
