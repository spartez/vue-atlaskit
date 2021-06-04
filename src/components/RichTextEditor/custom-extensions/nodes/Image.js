/* eslint-disable */
import { Node } from 'tiptap';
import { image } from '@atlaskit/adf-schema'

export default class Image extends Node {
    get name() {
        return 'image';
    }

    get schema() {
        return {
            ...image,
            attrs: {
                ...image.attrs,
                width: { default: '' },
                style: { default: '' }
            },
            parseDOM: [
                {
                    tag: 'img.emoticon',
                    getAttrs: (domNode) => {
                        return {
                            src: this.options.baseUrl + domNode.getAttribute('src'),
                            alt: domNode.getAttribute('alt'),
                            title: domNode.getAttribute('title'),
                            width: domNode.getAttribute('width'),
                            style: 'vertical-align: text-bottom'
                        };
                    },
                },
                {
                    tag: 'span.image-wrap',
                    getAttrs: (domNode) => {
                        const dom = domNode.querySelector('img');
                        return {
                            src: this.options.baseUrl + dom.getAttribute('src'),
                            alt: dom.getAttribute('alt'),
                            title: dom.getAttribute('title'),
                            width: '100%',
                        };
                    },
                },
                ...image.parseDOM,
            ]
        };
    }
}
