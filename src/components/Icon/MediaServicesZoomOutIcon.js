import IconWrapper from './IconWrapper';

export default {
    name: 'MediaServicesZoomOutIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM13.5 11.5h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
