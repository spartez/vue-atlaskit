import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EmojiPeopleIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 4c-4.412 0-8 3.588-8 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8zm0 14.222A6.23 6.23 0 015.778 12 6.23 6.23 0 0112 5.778 6.23 6.23 0 0118.222 12 6.23 6.23 0 0112 18.222zM14.83 14a3.001 3.001 0 01-5.66 0h5.66zM14 11a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
