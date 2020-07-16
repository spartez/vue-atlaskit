/* eslint-disable */
import { Node } from 'tiptap';
import { embedCard } from '@atlaskit/adf-schema'

export default class EmbedCard extends Node {
    get name() {
        return 'embedCard';
    }

    get schema() {
        return embedCard;
    }
}
