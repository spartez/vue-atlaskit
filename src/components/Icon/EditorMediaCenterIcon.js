import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorMediaCenterIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 5h12a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zm0 12h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm0-8h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
