/* eslint-disable */
import { Node } from 'tiptap';
import { mention } from '@atlaskit/adf-schema'
import Renderer from '../renderers/Mention'

export default class Mention extends Node {
    get name() {
        return 'mention';
    }

    get schema() {
        return mention;
    }

    get view() {
        return Renderer
    }
}
