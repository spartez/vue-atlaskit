/* eslint-disable */
import { Node } from 'tiptap';
import { heading } from '@atlaskit/adf-schema'

export default class Heading extends Node {
    get name() {
        return 'heading';
    }

    get schema() {
        return heading;
    }
}
