/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { unsupportedBlock } from '@atlaskit/adf-schema'

export default class Unsupportedblock extends Node {
    get name() {
        return 'unsupportedBlock';
    }

    get schema() {
        return unsupportedBlock;
    }
}
