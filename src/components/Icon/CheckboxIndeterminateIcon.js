import IconWrapper from './IconWrapper';

export default {
    name: 'CheckboxIndeterminateIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2"/><rect fill="inherit" x="8" y="11" width="8" height="2" rx="1"/></g></svg>' } });
    }
};
