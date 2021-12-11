import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'PdfDocument16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1.23 8.113h.323c.744 0 .802-.214.802-.517 0-.346-.179-.514-.545-.514h-.58v1.03zm4.194 1.456h.443c.494 0 1-.147 1-1.237 0-1.1-.534-1.24-1-1.24h-.443v2.477zM2.975 10.66h-.72A.256.256 0 012 10.404V6.255c0-.14.114-.255.255-.255h1.663c.989 0 1.68.656 1.68 1.596 0 .953-.677 1.593-1.683 1.593H3.23v1.215a.256.256 0 01-.256.256zm4.968 0H6.448a.256.256 0 01-.255-.256V6.255c0-.14.114-.255.255-.255h1.495c1.404 0 2.178.825 2.178 2.323 0 1.507-.774 2.337-2.178 2.337zm3.85 0h-.72a.256.256 0 01-.256-.256V6.255c0-.14.114-.255.255-.255h2.673c.14 0 .255.115.255.255v.587a.256.256 0 01-.255.255h-1.697v.76h1.528c.141 0 .255.115.255.256v.577c0 .14-.114.256-.255.256h-1.528v1.458a.256.256 0 01-.255.256z"/></svg>' });
    }
};
