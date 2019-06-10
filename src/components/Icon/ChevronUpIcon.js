import IconWrapper from './IconWrapper';

export default {
    name: 'ChevronUpIcon',
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
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.221 9.322l-2.929 2.955a1.009 1.009 0 0 0 0 1.419.986.986 0 0 0 1.405 0l2.298-2.317 2.307 2.327a.989.989 0 0 0 1.407 0 1.01 1.01 0 0 0 0-1.419l-2.94-2.965A1.106 1.106 0 0 0 11.991 9c-.279 0-.557.107-.77.322z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
