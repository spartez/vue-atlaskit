/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { nestedExpand } from '@atlaskit/adf-schema'

export default class NestedExpand extends Node {
    get name() {
        return 'nestedExpand';
    }

    get schema() {
        return nestedExpand;
    }
}
