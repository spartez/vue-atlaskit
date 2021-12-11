import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'VidConnectionCircleIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><rect fill="inherit" x="14" y="8" width="2" height="8" rx="1"/><rect fill="inherit" x="11" y="10" width="2" height="6" rx="1"/><rect fill="inherit" x="8" y="13" width="2" height="3" rx="1"/></g></svg>' });
    }
};
