/* eslint-disable */
import { Mark } from '@tiptap/vue-3';
import { breakout } from '@atlaskit/adf-schema'

export default class Breakout extends Mark {
    get name() {
        return 'breakout';
    }

    get schema() {
        return breakout;
    }
}
