/* eslint-disable */
import { Node } from 'tiptap';
import { tableHeader } from '@atlaskit/adf-schema'

export default class TableCell extends Node {
    get name() {
        return 'tableHeader';
    }

    get schema() {
        return tableHeader;
    }
}
