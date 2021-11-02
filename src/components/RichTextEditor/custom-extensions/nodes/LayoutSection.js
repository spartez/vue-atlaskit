/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { layoutSection } from '@atlaskit/adf-schema'

export default class LayoutSection extends Node {
    get name() {
        return 'layoutSection';
    }

    get schema() {
        return layoutSection;
    }
}
