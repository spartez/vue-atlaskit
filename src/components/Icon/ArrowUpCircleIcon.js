import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'ArrowUpCircleIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" fill-rule="nonzero" cx="12" cy="12" r="10"/><path d="M11.288 7.293L8.294 10.27a1.002 1.002 0 000 1.416 1.01 1.01 0 001.421 0l1.279-1.272V16c0 .552.451 1 1.006 1 .555 0 1.005-.448 1.005-1v-5.586l1.279 1.272a1.01 1.01 0 001.421 0 .998.998 0 000-1.416l-2.994-2.977a1.01 1.01 0 00-1.423 0z" fill="inherit"/></g></svg>' });
    }
};
