/* eslint-disable */
import { Node } from 'tiptap';
import { confluenceUnsupportedBlock } from '@atlaskit/adf-schema'

export default class ConfluenceUnsupportedBlock extends Node {
    get name() {
        return 'confluenceUnsupportedBlock';
    }

    get schema() {
        return confluenceUnsupportedBlock;
    }
}
