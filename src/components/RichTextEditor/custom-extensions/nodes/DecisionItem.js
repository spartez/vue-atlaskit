/* eslint-disable */
import { Node } from 'tiptap';
import { decisionItem } from '@atlaskit/adf-schema'

export default class DecisionItem extends Node {
    get name() {
        return 'decisionItem';
    }

    get schema() {
        return decisionItem;
    }
}
