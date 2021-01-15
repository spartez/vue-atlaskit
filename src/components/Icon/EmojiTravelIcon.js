import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EmojiTravelIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.584 17H8.416l-2.708 2.709a1.004 1.004 0 0 1-1.415 0l-.002-.002a1.004 1.004 0 0 1 0-1.415l1.618-1.617A1.998 1.998 0 0 1 5 14.997V6.003C5 4.897 5.897 4 7.006 4h9.988C18.102 4 19 4.894 19 6.003v8.994a2 2 0 0 1-.909 1.678l1.618 1.617a1.004 1.004 0 0 1 0 1.415 1.004 1.004 0 0 1-1.417.002L15.584 17zM17 10V6H7v4h10zm0 2v3H7v-3h10zm-1.5 6.997c0 .55-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1zm.2-5.517a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-6.691 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
