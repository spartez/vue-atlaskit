/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { splitListItem, liftListItem, sinkListItem } from 'tiptap-commands';
import { listItem } from '@atlaskit/adf-schema';


export default class ListItem extends Node {
    get name() {
        return 'listItem';
    }

    get schema() {
        return listItem;
    }

    keys({ type }) {
        return {
            Enter: splitListItem(type),
            Tab: sinkListItem(type),
            'Shift-Tab': liftListItem(type)
        };
    }
}
