/* eslint-disable */
import { Mark } from 'tiptap';
import { link } from '@atlaskit/adf-schema'

export default class Link extends Mark {
    get name() {
        return 'link';
    }

    get schema() {
        return link;
    }
}
