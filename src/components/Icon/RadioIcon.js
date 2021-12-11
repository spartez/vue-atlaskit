import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'RadioIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="6"/><circle fill="inherit" cx="12" cy="12" r="2"/></g></svg>' });
    }
};
