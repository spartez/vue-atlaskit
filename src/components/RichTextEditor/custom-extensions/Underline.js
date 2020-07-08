/* eslint-disable */
import { Mark } from 'tiptap';
import { toggleMark } from 'tiptap-commands';

export default class Underline extends Mark {
    get name() {
        return 'underline';
    }

    get schema() {
        return {
            parseDOM: [
                {
                    tag: 'u'
                },
                {
                    tag: 'ins'
                },
                {
                    style: 'text-decoration',
                    getAttrs: value => value === 'underline'
                }
            ],
            toDOM: () => ['ins', 0]
        };
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
