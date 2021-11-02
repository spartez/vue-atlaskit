/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { layoutColumn } from '@atlaskit/adf-schema'

export default class LayoutColumn extends Node {
    get name() {
        return 'layoutColumn';
    }

    get schema() {
        return layoutColumn;
    }
}
