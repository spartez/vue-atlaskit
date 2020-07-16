/* eslint-disable */
import { Node } from 'tiptap';
import { nestedExpand } from '@atlaskit/adf-schema'

export default class NestedExpand extends Node {
    get name() {
        return 'nestedExpand';
    }

    get schema() {
        return nestedExpand;
    }
}
