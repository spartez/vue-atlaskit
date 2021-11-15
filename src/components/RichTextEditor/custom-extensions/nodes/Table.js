/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { table } from '@atlaskit/adf-schema'

export default class Table extends Node {
    get name() {
        return 'table';
    }

    get schema() {
        return {
            ...table,
            attrs: {
                isNumberColumnEnabled: { default: false },
                layout: { default: 'default' },
            }
        };
    }
}
