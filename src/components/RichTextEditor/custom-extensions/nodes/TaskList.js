/* eslint-disable */
import { Node } from 'tiptap';
import { taskList } from '@atlaskit/adf-schema'

export default class TaskList extends Node {
    get name() {
        return 'taskList';
    }

    get schema() {
        return taskList;
    }
}
