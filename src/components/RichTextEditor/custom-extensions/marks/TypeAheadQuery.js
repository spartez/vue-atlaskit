/* eslint-disable */
import { Mark } from '@tiptap/vue-3';
import { typeAheadQuery } from '@atlaskit/adf-schema'

export default class TypeAheadQuery extends Mark {
    get name() {
        return 'typeAheadQuery';
    }

    get schema() {
        return typeAheadQuery;
    }
}
