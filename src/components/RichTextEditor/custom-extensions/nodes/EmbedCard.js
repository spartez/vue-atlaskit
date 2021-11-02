/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { embedCard } from '@atlaskit/adf-schema'

export default class EmbedCard extends Node {
    get name() {
        return 'embedCard';
    }

    get schema() {
        return embedCard;
    }
}
