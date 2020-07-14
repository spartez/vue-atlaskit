/* eslint-disable */
import { Node } from 'tiptap';
import { image } from '@atlaskit/adf-schema'

export default class Image extends Node {
    get name() {
        return 'image';
    }

    get schema() {
        return image;
    }
}
