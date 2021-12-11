import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'VidRaisedHandIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11 3a4 4 0 100 8 4 4 0 000-8m3 9H8a3 3 0 00-3 3v3.7a9.07 9.07 0 005.9 2.3 9 9 0 006.1-2.4V15a3 3 0 00-3-3"/><path d="M16.6 10.6a.998.998 0 00.2 1.4 1.005 1.005 0 001.402-.203l1.996-2.661c.333-.443.602-1.25.602-1.808V5.005A1 1 0 0019.8 4c-.552 0-1 .45-1 1.002v2.665l-2.2 2.932z" fill-rule="nonzero"/></g></svg>' });
    }
};
