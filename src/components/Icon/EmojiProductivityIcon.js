import IconWrapper from './IconWrapper';
            import { h } from 'vue'

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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg width="24" height="24"><g fill="currentColor"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 2a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/><path d="M14.301 9.485a1 1 0 0 1 1.398 1.43l-4.261 4.166a1 1 0 0 1-1.406-.008l-2.04-2.04a1 1 0 1 1 1.415-1.413l1.34 1.34L14.3 9.484z"/></g></svg>'  });
    }
};
