/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { decisionList } from '@atlaskit/adf-schema'

export default class DecisionList extends Node {
    get name() {
        return 'decisionList';
    }

    get schema() {
        return decisionList;
    }
}
