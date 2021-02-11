import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Executable24Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path fill="#5E6C84" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm2 13v5a1 1 0 001 1h12a1 1 0 001-1v-5H5zm1.883-8a1 1 0 00-.992.876L5 13h14l-.89-7.124A1 1 0 0017.116 5H6.883zM8 15h8a1 1 0 010 2H8a1 1 0 010-2z"/></svg>'  });
    }
};
