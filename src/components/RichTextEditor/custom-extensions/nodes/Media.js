/* eslint-disable */
import { Node } from 'tiptap';
import { media } from '@atlaskit/adf-schema'

export default class Status extends Node {
    get name() {
        return 'media';
    }

    get schema() {
        return media;
    }
}
