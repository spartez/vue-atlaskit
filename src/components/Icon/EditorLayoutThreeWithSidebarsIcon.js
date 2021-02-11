import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorLayoutThreeWithSidebarsIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 5a1 1 0 011 1v12a1 1 0 01-2 0V6a1 1 0 011-1zm4 0h6a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1zm10 0a1 1 0 011 1v12a1 1 0 01-2 0V6a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
