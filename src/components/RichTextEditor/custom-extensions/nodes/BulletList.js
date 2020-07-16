/* eslint-disable */
import { Node } from 'tiptap';
import { wrappingInputRule } from 'tiptap-commands';
import { bulletList } from '@atlaskit/adf-schema';
import { toggleList } from "../commands/toggleList";


export default class BulletList extends Node {
    get name() {
        return 'bulletList';
    }

    get schema() {
        return bulletList;
    }

    commands({ type, schema }) {
        return () => toggleList(type, schema.nodes.listItem);
    }

    keys({ type, schema }) {
        return {
            'Shift-Ctrl-8': toggleList(type, schema.nodes.listItem)
        };
    }

    inputRules({ type }) {
        return [
            wrappingInputRule(/^\s*([-+*])\s$/, type)
        ];
    }
}
