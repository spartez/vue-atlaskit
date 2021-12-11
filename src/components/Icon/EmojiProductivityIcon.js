import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EmojiProductivityIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0 2a8 8 0 110-16 8 8 0 010 16z"/><path d="M14.301 9.485a1 1 0 011.398 1.43l-4.261 4.166a1 1 0 01-1.406-.008l-2.04-2.04a1 1 0 111.415-1.413l1.34 1.34L14.3 9.484z"/></g></svg>' });
    }
};
