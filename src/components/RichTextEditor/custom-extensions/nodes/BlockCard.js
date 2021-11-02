/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { blockCard } from '@atlaskit/adf-schema'

export default class Date extends Node {
    get name() {
        return 'blockCard';
    }

    get schema() {
        return blockCard;
    }
}
