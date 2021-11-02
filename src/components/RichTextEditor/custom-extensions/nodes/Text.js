/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { text } from '@atlaskit/adf-schema'

export default class Text extends Node {
    get name() {
        return 'text';
    }

    get schema() {
        return text;
    }
}
