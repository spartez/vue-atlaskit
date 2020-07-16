/* eslint-disable */
import { Node } from 'tiptap';
import { toggleMark, markInputRule, markPasteRule } from 'tiptap-commands';
import { status } from '@atlaskit/adf-schema'
import Lozenge from '../renderers/Lozenge'

export default class Status extends Node {
    get name() {
        return 'status';
    }

    get schema() {
        return status;
    }

    get view() {
        return Lozenge;
    }
}
