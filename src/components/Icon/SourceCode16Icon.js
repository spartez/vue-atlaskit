import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'SourceCode16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#00B8D9" fill-rule="evenodd" d="M0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0114.006 16H1.994A1.995 1.995 0 010 14.006V1.994zm6.639 8.417L4.253 8.1l2.589-2.51a.924.924 0 10-1.288-1.328L2.281 7.435a.925.925 0 000 1.328l3.07 2.976a.925.925 0 101.288-1.328zm7.203-3.173L10.77 4.26a.924.924 0 10-1.286 1.33l2.385 2.313-2.588 2.51a.924.924 0 101.287 1.327l3.274-3.173a.925.925 0 000-1.328z"/></svg>' });
    }
};
