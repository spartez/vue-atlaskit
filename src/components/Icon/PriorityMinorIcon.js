import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'PriorityMinorIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M18.449 14.975a1 1 0 011.027 1.716l-6.97 4.173a1 1 0 01-1.03-.002L4.57 16.69a1 1 0 011.034-1.712l6.391 3.862 6.454-3.864z" fill="#0065FF"/><path d="M11.995 12.837l6.454-3.865a1 1 0 011.027 1.716l-6.97 4.174a1 1 0 01-1.03-.002L4.57 10.686a1 1 0 011.034-1.712l6.391 3.863z" fill="#2684FF"/><path d="M11.995 6.823l6.454-3.865a1 1 0 111.027 1.716l-6.97 4.174a1 1 0 01-1.03-.002L4.57 4.672A1 1 0 015.604 2.96l6.391 3.863z" fill="#4C9AFF"/></svg>' });
    }
};
