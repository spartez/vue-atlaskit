/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { mediaSingle } from '@atlaskit/adf-schema';


export default class MediaSingle extends Node {
    get name() {
        return 'mediaSingle';
    }

    get schema() {
        return mediaSingle;
    }
}
