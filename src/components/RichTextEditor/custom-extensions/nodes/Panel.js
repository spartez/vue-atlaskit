/* eslint-disable */
import { Node } from 'tiptap';
import { panel } from '@atlaskit/adf-schema'
import Renderer from '../renderers/Panel'

export default class Panel extends Node {
    get name() {
        return 'panel';
    }

    get schema() {
        return {
            ...panel,
            parseDOM: [
                {
                    tag: 'div[data-panel-type]',
                    getAttrs: dom => {
                        return ({
                            panelType: dom.getAttribute('data-panel-type'),
                            slot: dom
                        })
                    }
                }
            ]
        }
    }

    get view() {
        return Renderer
    }
}
