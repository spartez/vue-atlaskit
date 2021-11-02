/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { media } from '@atlaskit/adf-schema'

export default class Status extends Node {
    get name() {
        return 'media';
    }

    get schema() {
        return media;
    }
}
