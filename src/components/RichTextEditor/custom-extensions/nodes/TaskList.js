/* eslint-disable */
import { Node } from '@tiptap/vue-3';
import { taskList } from '@atlaskit/adf-schema'

export default class TaskList extends Node {
    get name() {
        return 'taskList';
    }

    get schema() {
        return taskList;
    }
}
