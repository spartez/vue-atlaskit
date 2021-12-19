import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorUnderlineIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 7a1 1 0 112 0v4c0 1.884.93 3 3 3s3-1.116 3-3V7a1 1 0 012 0v4c0 2.916-1.737 5-5 5s-5-2.084-5-5V7zm0 10h10a1 1 0 010 2H7a1 1 0 010-2z" fill="currentColor"/></svg>'  });
    }
};
