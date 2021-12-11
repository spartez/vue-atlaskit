import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Executable16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#5E6C84" fill-rule="evenodd" d="M0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0114.006 16H1.994A1.995 1.995 0 010 14.006V1.994zm3 6.72v3.572c0 .394.32.714.714.714h8.572c.394 0 .714-.32.714-.714V8.714H3zM4.345 3a.714.714 0 00-.709.626L3 8.714h10l-.636-5.088A.714.714 0 0011.655 3h-7.31zm.798 7.143h5.714a.714.714 0 010 1.428H5.143a.714.714 0 110-1.428z"/></svg>' });
    }
};
