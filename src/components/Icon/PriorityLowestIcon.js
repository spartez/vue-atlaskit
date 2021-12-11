import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'PriorityLowestIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M18.46 11.936a1 1 0 111.028 1.716l-6.97 4.174a1 1 0 01-1.03-.002L4.581 13.65a1 1 0 011.034-1.711l6.391 3.862 6.454-3.865z" fill="#0065FF"/><path d="M12.007 9.798l6.454-3.864a1 1 0 011.027 1.716l-6.97 4.173a1 1 0 01-1.03-.002L4.581 7.648a1 1 0 011.034-1.712l6.391 3.862z" fill="#2684FF"/></svg>' });
    }
};
