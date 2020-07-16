/* eslint-disable */
import { Node } from 'tiptap';
import { emoji } from '@atlaskit/adf-schema'

export default class Emoji extends Node {
    get name() {
        return 'emoji';
    }

    get schema() {
        return emoji;
    }
}
