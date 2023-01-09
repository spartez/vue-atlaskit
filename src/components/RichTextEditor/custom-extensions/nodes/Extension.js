/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { extension } from '@atlaskit/adf-schema'

export default class Extension extends Node {
    get name() {
        return 'extension';
    }

    get schema() {
        return extension;
    }
}
