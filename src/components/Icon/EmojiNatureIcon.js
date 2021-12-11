import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EmojiNatureIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M13 16h3.625l-2.5-4h1.208L12 7l-3.333 5h1.208l-2.5 4H11v2h2v-2zm4.33-2.06l1.527 2.546A1 1 0 0118 18h-3c-.003 1.105-.9 2-1.998 2h-2.004A1.999 1.999 0 019 18H6a1 1 0 01-.857-1.514L6.67 13.94c-.6-.23-.888-1.068-.484-1.697l5-7.778c.4-.62 1.229-.62 1.628 0l5 7.778c.404.629.117 1.467-.484 1.697z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
