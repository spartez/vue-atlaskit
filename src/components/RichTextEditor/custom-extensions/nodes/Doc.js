/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { doc } from '@atlaskit/adf-schema'

export default class Doc extends Node {
    get name() {
        return 'doc';
    }

    get schema() {
        return doc;
    }
}
