import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EmojiCustomIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M13 11V7.002a.999.999 0 1 0-2 0V11H7.002a.999.999 0 1 0 0 2H11v3.998a.999.999 0 1 0 2 0V13h3.998a.999.999 0 1 0 0-2H13z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
