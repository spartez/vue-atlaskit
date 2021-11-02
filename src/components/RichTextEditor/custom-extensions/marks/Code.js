/* eslint-disable */
import { Mark } from '@tiptap/vue-3';
import { code } from '@atlaskit/adf-schema'
import { toggleMark } from 'tiptap-commands';
import Renderer from '../renderers/CodeBlock'


export default class Code extends Mark {
    get name() {
        return 'code';
    }

    get schema() {
        return code;
    }

    get view() {
        return Renderer;
    }

    commands({ type }) {
        return () => toggleMark(type)
    }
}
