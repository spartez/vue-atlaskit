import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorEmojiIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 12.5c3.033 0 5.5-2.467 5.5-5.5S15.033 6.5 12 6.5A5.506 5.506 0 0 0 6.5 12c0 3.033 2.467 5.5 5.5 5.5zm-1.5-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm.27 1.583a.626.626 0 0 1 .932.834A3.63 3.63 0 0 1 12 15.125a3.63 3.63 0 0 1-2.698-1.204.625.625 0 0 1 .93-.835c.901 1.003 2.639 1.003 3.538-.003z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
