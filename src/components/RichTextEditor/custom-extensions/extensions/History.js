/* eslint-disable */
import { Extension } from '@tiptap/vue-3';
import {
    history, undo, redo
} from 'prosemirror-history';

export default class History extends Extension {
    get name() {
        return 'history';
    }

    get defaultOptions() {
        return {
            depth: '',
            newGroupDelay: ''
        };
    }

    keys() {
        const keymap = {
            'Mod-z': undo,
            'Mod-y': redo,
            'Shift-Mod-z': redo
        };

        return keymap;
    }

    get plugins() {
        return [
            history({
                depth: this.options.depth,
                newGroupDelay: this.options.newGroupDelay
            })
        ];
    }

    commands() {
        return {
            undo: () => undo,
            redo: () => redo
        };
    }
}
