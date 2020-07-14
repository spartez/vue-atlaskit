/* eslint-disable */
import { Node } from 'tiptap';
import { wrappingInputRule, toggleList } from 'tiptap-commands';
import { bulletList } from '@atlaskit/adf-schema';


export default class BulletList extends Node {
    get name() {
        return 'bulletList';
    }

    get schema() {
        return bulletList;
    }

    commands({ type, schema }) {
        return () => toggleList(type, schema.nodes.list_item);
    }

    keys({ type, schema }) {
        return {
            'Shift-Ctrl-8': toggleList(type, schema.nodes.list_item)
        };
    }

    inputRules({ type }) {
        return [
            wrappingInputRule(/^\s*([-+*])\s$/, type)
        ];
    }
}
