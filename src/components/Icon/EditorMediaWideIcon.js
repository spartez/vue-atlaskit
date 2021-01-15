import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorMediaWideIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 5h10a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2zm0 12h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zM4 9h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
