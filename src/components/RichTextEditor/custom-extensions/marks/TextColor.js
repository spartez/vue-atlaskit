/* eslint-disable */
import { Mark } from '@tiptap/vue-3';
import { textColor } from '@atlaskit/adf-schema'

export default class TextColor extends Mark {
    get name() {
        return 'textColor';
    }

    get schema() {
        return textColor;
    }
}
