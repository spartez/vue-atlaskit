/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { toggleBlockType, setBlockType, textblockTypeInputRule } from 'tiptap-commands';
import { codeBlock } from '@atlaskit/adf-schema';
import Renderer from '../renderers/CodeBlock';


export default class CodeBlock extends Node {
    get name() {
        return 'codeBlock';
    }

    get schema() {
        return { ...codeBlock, attrs: { language: { default: undefined }, uniqueId: { default: undefined } } };
    }

    commands({ type, schema }) {
        return () => toggleBlockType(type, schema.nodes.paragraph);
    }

    get view() {
        return Renderer;
    }

    keys({ type }) {
        return {
            'Shift-Ctrl-\\': setBlockType(type)
        };
    }

    inputRules({ type }) {
        return [
            textblockTypeInputRule(/^```$/, type)
        ];
    }
}
