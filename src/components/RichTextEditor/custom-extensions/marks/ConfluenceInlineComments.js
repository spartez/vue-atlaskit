/* eslint-disable */
import { Mark } from '@tiptap/vue-3';
import { confluenceInlineComment } from '@atlaskit/adf-schema'

export default class ConfluenceInlineComments extends Mark {
    get name() {
        return 'confluenceInlineComment';
    }

    get schema() {
        return confluenceInlineComment;
    }
}
