import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'DepartmentIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M11 5v2h2V5h-2zm0 6V9h-1a1 1 0 01-1-1V4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-1v2h5a1 1 0 011 1v3h1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1h1v-2H7v2h1a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1h1v-3a1 1 0 011-1h5zm-6 6v2h2v-2H5zm12 0v2h2v-2h-2z"/></svg>' });
    }
};
