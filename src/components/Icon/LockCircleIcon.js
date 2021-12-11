import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'LockCircleIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M12.02 8h-.04A1.98 1.98 0 0010 9.98V11h1V9.99a.99.99 0 01.99-.99h.02a.99.99 0 01.99.99V11h1V9.98A1.98 1.98 0 0012.02 8M10 11h1v1h-1zm3 0h1v1h-1zm0 1h-3a1 1 0 00-1 1v2.001a1 1 0 00.991.999h4.018a.992.992 0 00.991-.999V13a1 1 0 00-1-1h-1z" fill="inherit"/></g></svg>' });
    }
};
