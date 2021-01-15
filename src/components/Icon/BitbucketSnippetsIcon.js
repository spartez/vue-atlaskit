import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'BitbucketSnippetsIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M16 9c.8 0 1.6-.3 2.1-.9.6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1c-1.1-1.1-3.1-1.1-4.2 0-.6.5-.9 1.3-.9 2.1s.3 1.5.8 2L12 11.1 10.2 8c.5-.5.8-1.2.8-2s-.3-1.6-.9-2.1C9 2.7 7 2.7 5.9 3.9 5.3 4.4 5 5.2 5 6s.3 1.6.9 2.1c.6.6 1.3.9 2.1.9h.4l6.7 11.5c.2.3.5.5.9.5.2 0 .3 0 .5-.1.5-.3.6-.9.4-1.4l-3.7-6.4 2.4-4.2c.1.1.3.1.4.1zM8.7 6.7c-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7zm6.6-1.4c.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7z"/><path d="M10.3 14.1l-3.1 5.4c-.3.5-.2 1.1.3 1.3.2.1.3.2.5.2.3 0 .7-.2.9-.5l2.6-4.4-1.2-2z"/></g></svg>'  });
    }
};
