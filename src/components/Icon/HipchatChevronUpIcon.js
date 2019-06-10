import IconWrapper from './IconWrapper';

export default {
    name: 'HipchatChevronUpIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.294 8.708l-.001.001-4.549 4.559a1.051 1.051 0 1 0 1.486 1.488l.001-.001 3.77-3.776 3.768 3.776a1.05 1.05 0 0 0 1.486.001h.001a1.054 1.054 0 0 0 .001-1.489l-4.548-4.558a1 1 0 0 0-1.415-.001z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
