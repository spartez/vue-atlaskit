/* eslint-disable */
import { Node } from 'tiptap';
import { hardBreak } from '@atlaskit/adf-schema'

export default class HardBreak extends Node {
    get name() {
        return 'hardBreak';
    }

    get schema() {
        return hardBreak;
    }
}
