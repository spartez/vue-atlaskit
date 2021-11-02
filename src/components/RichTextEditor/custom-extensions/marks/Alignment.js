/* eslint-disable */
import { Mark } from '@tiptap/vue-3';
import { alignment } from '@atlaskit/adf-schema'

export default class Alignment extends Mark {
    get name() {
        return 'alignment';
    }

    get schema() {
        return {
            ...alignment,
            toDOM(mark) {
                return [
                    'div',
                    {
                        class: `fabric-editor-block-mark fabric-editor-align-${mark.attrs.align}`,
                        'data-align': mark.attrs.align,
                        style: 'text-align: ' + mark.attrs.align
                    },
                    0,
                ];
            },
        };
    }
}
