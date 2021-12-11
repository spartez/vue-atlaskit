import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'VidSpeakingCircleIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" fill="currentColor"/><path d="M12.229 7.652c.04.048.124.16.238.33.198.294.398.631.584 1.006 1.138 2.288 1.243 4.648-.316 6.864a7.86 7.86 0 01-.377.492 1 1 0 00.156 1.43 1.062 1.062 0 001.467-.152 9.55 9.55 0 00.475-.62c2.045-2.907 1.907-6.017.472-8.901-.392-.788-.788-1.376-1.07-1.72a1.062 1.062 0 00-1.466-.158 1 1 0 00-.163 1.429z" fill="inherit" fill-rule="nonzero"/><path d="M9.213 9.619c.08.101.226.33.377.658.608 1.318.608 2.72-.404 4.141-.32.45-.217 1.074.23 1.395a.992.992 0 001.389-.231c1.476-2.073 1.476-4.226.591-6.146a5.494 5.494 0 00-.619-1.055.992.992 0 00-1.398-.166c-.431.341-.506.97-.166 1.404z" fill="inherit" fill-rule="nonzero"/></g></svg>' });
    }
};
