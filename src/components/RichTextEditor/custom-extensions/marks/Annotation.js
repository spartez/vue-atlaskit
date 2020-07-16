/* eslint-disable */
import { Mark } from 'tiptap';
import { annotation } from '@atlaskit/adf-schema'
import { toggleMark, markInputRule, markPasteRule } from 'tiptap-commands';

export default class Annotation extends Mark {
    get name() {
        return 'annotation';
    }

    get schema() {
        return annotation;
    }
}
