import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'RoomMenuIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M14 17h4V7h-4v10zM12 6.007C12 5.45 12.453 5 12.997 5h6.006c.55 0 .997.45.997 1.007v11.986c0 .556-.453 1.007-.997 1.007h-6.006c-.55 0-.997-.45-.997-1.007V6.007z" fill-rule="nonzero"/><rect x="4" y="5" width="6" height="2" rx="1"/><rect x="4" y="9" width="6" height="2" rx="1"/><rect x="4" y="13" width="6" height="2" rx="1"/><rect x="4" y="17" width="6" height="2" rx="1"/></g></svg>' });
    }
};
