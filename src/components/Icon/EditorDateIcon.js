import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EditorDateIcon',
    props: {
        size: {
            type: String
        },
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    render() {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 8.51c0-.282.229-.51.5-.51h11c.276 0 .5.228.5.51v8.98c0 .282-.229.51-.5.51h-11a.505.505 0 01-.5-.51V8.51zm2 2.995v.99c0 .291.226.505.505.505h.99a.497.497 0 00.505-.505v-.99A.497.497 0 009.495 11h-.99a.497.497 0 00-.505.505zm3 0v.99c0 .291.226.505.505.505h.99a.497.497 0 00.505-.505v-.99a.497.497 0 00-.505-.505h-.99a.497.497 0 00-.505.505zm-3 3v.99c0 .291.226.505.505.505h.99a.497.497 0 00.505-.505v-.99A.497.497 0 009.495 14h-.99a.497.497 0 00-.505.505zM7.5 8v1h3V8h-3zm6 0v1h3V8h-3zm.5-1.495c0-.279.214-.505.505-.505h.99c.279 0 .505.214.505.505V8h-2V6.505zm-6 0C8 6.226 8.214 6 8.505 6h.99c.279 0 .505.214.505.505V8H8V6.505z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
