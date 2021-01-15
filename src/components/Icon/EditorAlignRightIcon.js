import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorAlignRightIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 11h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm5 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2zM7 7h10a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
