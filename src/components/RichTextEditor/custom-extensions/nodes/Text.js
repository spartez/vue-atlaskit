/* eslint-disable */
import { Node } from 'tiptap';
import { text } from '@atlaskit/adf-schema'

export default class Text extends Node {
    get name() {
        return 'text';
    }

    get schema() {
        return text;
    }
}
