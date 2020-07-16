/* eslint-disable */
import { Mark } from 'tiptap';
import { strong } from '@atlaskit/adf-schema'
import { toggleMark, markInputRule, markPasteRule } from 'tiptap-commands';

export default class Bold extends Mark {
    get name() {
        return 'strong';
    }

    get schema() {
        return strong;
    }

    keys({ type }) {
        return {
            'Mod-b': toggleMark(type)
        };
    }

    commands({ type }) {
        return () => toggleMark(type);
    }

    inputRules({ type }) {
        return [
            markInputRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, type)
        ];
    }

    pasteRules({ type }) {
        return [
            markPasteRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)/g, type)
        ];
    }
}
