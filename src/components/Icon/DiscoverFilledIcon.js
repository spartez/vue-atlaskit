import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'DiscoverFilledIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 21a9 9 0 110-18 9 9 0 010 18zm-1.101-10.78c-.248.127-.55.427-.678.678L8.24 14.797c-.55 1.084-.118 1.514.965.963l3.898-1.98c.248-.127.55-.427.677-.678l1.981-3.899c.552-1.083.12-1.514-.964-.964L10.9 10.221zM12 13a1 1 0 110-2 1 1 0 010 2z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
