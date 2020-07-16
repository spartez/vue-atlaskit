/* eslint-disable */
import { Node } from 'tiptap';
import { wrappingInputRule, toggleList } from 'tiptap-commands';
import { orderedList } from '@atlaskit/adf-schema';


export default class OrderedList extends Node {
    get name() {
        return 'orderedList';
    }

    get schema() {
        return orderedList;
    }

    commands({ type, schema }) {
        return () => toggleList(type, schema.nodes.list_item);
    }

    keys({ type, schema }) {
        return {
            'Shift-Ctrl-9': toggleList(type, schema.nodes.list_item)
        };
    }

    inputRules({ type }) {
        return [
            wrappingInputRule(
                /^(\d+)\.\s$/,
                type,
                match => ({ order: +match[1] }),
                (match, node) => node.childCount + node.attrs.order === +match[1],
            )
        ];
    }
}
