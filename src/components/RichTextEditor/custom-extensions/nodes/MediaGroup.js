/* eslint-disable */
import { Node } from 'tiptap';
import { mediaGroup } from '@atlaskit/adf-schema'

export default class MediaGroup extends Node {
    get name() {
        return 'mediaGroup';
    }

    get schema() {
        return mediaGroup;
    }
}
