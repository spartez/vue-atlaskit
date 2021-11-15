/* eslint-disable */
import { Mark } from '@tiptap/vue-3';
import { strike } from '@atlaskit/adf-schema'
import { toggleMark, markInputRule, markPasteRule } from 'tiptap-commands';

export default class Strike extends Mark {
    get name() {
        return 'strike';
    }

    get schema() {
        return strike;
    }

    keys({ type }) {
        return {
            'Mod-d': toggleMark(type)
        };
    }

    commands({ type }) {
        return () => toggleMark(type);
    }

    inputRules({ type }) {
        return [
            markInputRule(/~([^~]+)~$/, type)
        ];
    }

    pasteRules({ type }) {
        return [
            markPasteRule(/~([^~]+)~/g, type)
        ];
    }
}
