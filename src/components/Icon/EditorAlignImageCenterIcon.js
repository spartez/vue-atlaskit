import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorAlignImageCenterIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 17h12a1 1 0 010 2H6a1 1 0 010-2zm4-8h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1zM6 5h12a1 1 0 010 2H6a1 1 0 110-2z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
