/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { heading } from '@atlaskit/adf-schema'

export default class Heading extends Node {
    get name() {
        return 'heading';
    }

    get schema() {
        return heading;
    }
}
