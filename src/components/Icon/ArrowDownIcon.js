import IconWrapper from './IconWrapper';

export default {
    name: 'ArrowDownIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M11 6v9.586l-3.793-3.793a.999.999 0 0 0-1.414 0c-.39.39-.39 1.024 0 1.415l5.5 5.499A.993.993 0 0 0 12 19a.993.993 0 0 0 .707-.293l5.5-5.499a1 1 0 1 0-1.414-1.415L13 15.586V6a1 1 0 0 0-2 0z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
