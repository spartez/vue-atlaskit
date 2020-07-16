/* eslint-disable */
import { Node } from 'tiptap';
import { blockquote } from '@atlaskit/adf-schema'
import Renderer from '../renderers/Blockquote'
import { wrappingInputRule, toggleWrap } from 'tiptap-commands'


export default class Blockqoute extends Node {
    get name() {
        return 'blockquote';
    }

    get schema() {
        return blockquote;
    }

    commands({ type, schema }) {
        return () => toggleWrap(type, schema.nodes.paragraph)
    }

    keys({ type }) {
        return {
            'Ctrl->': toggleWrap(type),
        }
    }

    inputRules({ type }) {
        return [
            wrappingInputRule(/^\s*>\s$/, type),
        ]
    }

    get view(){
        return Renderer
    }
}
