/* eslint-disable */
import { Node } from 'tiptap';
import { taskItem } from '@atlaskit/adf-schema'

export default class TaskItem extends Node {
    get name() {
        return 'taskItem';
    }

    get schema() {
        return taskItem;
    }
}
