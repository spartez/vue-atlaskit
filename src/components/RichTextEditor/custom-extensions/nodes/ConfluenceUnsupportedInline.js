/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { confluenceUnsupportedInline } from '@atlaskit/adf-schema'

export default class ConfluenceUnsupportedInline extends Node {
    get name() {
        return 'confluenceUnsupportedInline';
    }

    get schema() {
        return confluenceUnsupportedInline;
    }
}
