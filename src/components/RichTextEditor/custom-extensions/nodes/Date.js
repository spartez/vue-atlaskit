/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { date } from '@atlaskit/adf-schema'
import Renderer from '../renderers/Date'

export default class Date extends Node {
    get name() {
        return 'date';
    }

    get schema() {
        return date;
    }

    get view() {
        return Renderer
    }
}
