/* eslint-disable */
import { Node } from 'tiptap';
import { bodiedExtension } from '@atlaskit/adf-schema'

export default class BodiedExtension extends Node {
    get name() {
        return 'bodiedExtension';
    }

    get schema() {
        return bodiedExtension;
    }
}
