import IconWrapper from './IconWrapper';

export default {
    name: 'MediaServicesTextIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11 7h2v11h-2zM6 5h12v2H6z"/><path d="M5 5h2v3H5zm5 13h4v2h-4zm7-13h2v3h-2z"/></g></svg>' } });
    }
};
