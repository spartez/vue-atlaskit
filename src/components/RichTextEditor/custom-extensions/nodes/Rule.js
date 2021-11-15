/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { rule } from '@atlaskit/adf-schema'

export default class Rule extends Node {
    get name() {
        return 'rule';
    }

    get schema() {
        return rule;
    }
}
