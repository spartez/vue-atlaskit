/* eslint-disable */
import { Mark } from '@tiptap/vue-3';
import { underline } from '@atlaskit/adf-schema'
import { toggleMark } from 'tiptap-commands';

export default class Underline extends Mark {
    get name() {
        return 'underline';
    }

    get schema() {
        return underline;
    }

    keys({ type }) {
        return {
            'Mod-u': toggleMark(type)
        };
    }

    commands({ type }) {
        return () => toggleMark(type);
    }
}
