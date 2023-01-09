/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { decisionItem } from '@atlaskit/adf-schema'

export default class DecisionItem extends Node {
    get name() {
        return 'decisionItem';
    }

    get schema() {
        return decisionItem;
    }
}
