import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'HipchatOutgoingSoundIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M17.229 7.652c.04.048.124.16.238.33.198.294.398.631.584 1.006 1.138 2.288 1.243 4.648-.316 6.864a7.86 7.86 0 01-.377.492 1 1 0 00.156 1.43 1.062 1.062 0 001.467-.152 9.55 9.55 0 00.475-.62c2.045-2.907 1.907-6.017.472-8.901-.392-.788-.788-1.376-1.07-1.72a1.062 1.062 0 00-1.466-.158 1 1 0 00-.163 1.429z" fill-rule="nonzero"/><path d="M14.214 9.619c.079.101.225.33.376.658.608 1.318.608 2.72-.404 4.141-.32.45-.217 1.074.23 1.395a.992.992 0 001.389-.231c1.476-2.073 1.476-4.226.591-6.146a5.494 5.494 0 00-.619-1.055.992.992 0 00-1.398-.166c-.431.341-.506.97-.165 1.404z" fill-rule="nonzero"/><path d="M7 15V9l4.74-3.892c.57-.323 1.26.116 1.26.8v12.184c0 .684-.69 1.123-1.26.8L7 15zM4 9h2v6H4a1 1 0 01-1-1v-4a1 1 0 011-1z"/></g></svg>' });
    }
};
