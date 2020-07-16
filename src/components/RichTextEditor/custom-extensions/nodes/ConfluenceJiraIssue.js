/* eslint-disable */
import { Node } from 'tiptap';
import { confluenceJiraIssue } from '@atlaskit/adf-schema'

export default class ConfluenceJiraIssue extends Node {
    get name() {
        return 'confluenceJiraIssue';
    }

    get schema() {
        return confluenceJiraIssue;
    }
}
