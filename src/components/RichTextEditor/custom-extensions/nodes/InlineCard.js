/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { inlineCard } from '@atlaskit/adf-schema'

export default class InlineCard extends Node {
    get name() {
        return 'inlineCard';
    }

    get schema() {
        return inlineCard;
    }
}
