import IconWrapper from './IconWrapper';

export default {
    name: 'BookIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M7 6.002v9.996c0 .546.446 1.002.995 1.002h8.01c.54 0 .995-.449.995-1.002V6.002C17 5.456 16.554 5 16.005 5h-8.01C7.455 5 7 5.449 7 6.002zm-2 0A3.005 3.005 0 0 1 7.995 3h8.01A3.003 3.003 0 0 1 19 6.002v9.996A3.005 3.005 0 0 1 16.005 19h-8.01A3.003 3.003 0 0 1 5 15.998V6.002z" fill-rule="nonzero"/><path d="M9 7h6v4H9zm0 6h6v2H9zm1 7.857V20H7v.857L8.5 20l1.5.857zM7 18h3v2H7z"/></g></svg>' } });
    }
};
