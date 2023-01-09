/* eslint-disable */
import { Mark } from '@tiptap/vue-3';
import { subsup } from '@atlaskit/adf-schema'

export default class SubSup extends Mark {
    get name() {
        return 'subsup';
    }

    get schema() {
        return subsup;
    }
}
