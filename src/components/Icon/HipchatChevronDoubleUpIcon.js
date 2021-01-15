import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'HipchatChevronDoubleUpIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.22 6.322L8.293 9.277a1.009 1.009 0 0 0 0 1.419.986.986 0 0 0 1.405 0l2.298-2.317 2.307 2.327a.989.989 0 0 0 1.407 0 1.01 1.01 0 0 0 0-1.419l-2.94-2.965A1.106 1.106 0 0 0 11.99 6c-.28 0-.557.107-.77.322zm0 6l-2.928 2.955a1.009 1.009 0 0 0 0 1.419.986.986 0 0 0 1.405 0l2.298-2.317 2.307 2.327a.989.989 0 0 0 1.407 0 1.01 1.01 0 0 0 0-1.419l-2.94-2.965A1.106 1.106 0 0 0 11.99 12c-.28 0-.557.107-.77.322z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
