/* eslint-disable */
import { Mark } from '@tiptap/vue-3';
import { indentation } from '@atlaskit/adf-schema'

export default class Indentation extends Mark {
    get name() {
        return 'indentation';
    }

    get schema() {
        return {
            ...indentation,
            parseDOM: [
                {
                    tag: 'div.fabric-editor-indentation-mark',
                    getAttrs(dom) {
                        const level = +((dom).getAttribute('data-level') || '0');
                        return {
                            level: level > 6 ? 6 : level < 1 ? false : level,
                        };
                    },
                },
            ],
            toDOM(mark) {
                return [
                    'div',
                    {
                        class: 'fabric-editor-block-mark fabric-editor-indentation-mark',
                        'data-level': mark.attrs.level,
                        style: 'margin-left:' + mark.attrs.level * 30 + 'px'
                    },
                    0,
                ];
            }
        };
    }
}

