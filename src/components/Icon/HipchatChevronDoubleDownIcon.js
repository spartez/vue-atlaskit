import IconWrapper from './IconWrapper';

export default {
    name: 'HipchatChevronDoubleDownIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M14.302 13.294l-2.308 2.327-2.297-2.317a.986.986 0 0 0-1.405 0 1.009 1.009 0 0 0 0 1.419l2.928 2.955c.214.215.492.322.77.322.28 0 .56-.107.778-.322l2.94-2.965a1.012 1.012 0 0 0 0-1.419.988.988 0 0 0-1.406 0zm0-6l-2.308 2.327-2.297-2.317a.986.986 0 0 0-1.405 0 1.009 1.009 0 0 0 0 1.419l2.928 2.955c.214.215.492.322.77.322.28 0 .56-.107.778-.322l2.94-2.965a1.012 1.012 0 0 0 0-1.419.988.988 0 0 0-1.406 0z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
