/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { tableRow } from '@atlaskit/adf-schema'

export default class TableRow extends Node {
    get name() {
        return 'tableRow';
    }

    get schema() {
        return tableRow;
    }
}
