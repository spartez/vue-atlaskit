/* eslint-disable */
import { Mark } from 'tiptap';
import { textColor } from '@atlaskit/adf-schema'

export default class TextColor extends Mark {
    get name() {
        return 'textColor';
    }

    get schema() {
        return textColor;
    }
}
