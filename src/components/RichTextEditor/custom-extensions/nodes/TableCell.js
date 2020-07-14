/* eslint-disable */
import { Node } from 'tiptap';
import { tableCell } from '@atlaskit/adf-schema'

export default class TableCell extends Node {
    get name() {
        return 'tableCell';
    }

    get schema() {
        return tableCell;
    }
}
