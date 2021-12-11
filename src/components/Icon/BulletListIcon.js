import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'BulletListIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="10" y="15" width="8" height="2" rx="1"/><rect x="6" y="15" width="2" height="2" rx="1"/><rect x="10" y="11" width="8" height="2" rx="1"/><rect x="6" y="11" width="2" height="2" rx="1"/><rect x="10" y="7" width="8" height="2" rx="1"/><rect x="6" y="7" width="2" height="2" rx="1"/></g></svg>' });
    }
};
