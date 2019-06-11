import IconWrapper from './IconWrapper';

export default {
    name: 'MediaServicesFilterIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 13h10l1-2H6zM3.993 6c-.548 0-.79.405-.546.895L4 8h16l.553-1.105C20.8 6.4 20.555 6 20.007 6H3.993zm6.785 11.556a.87.87 0 0 0 .727.444h.99c.279 0 .605-.2.727-.444L14 16h-4l.778 1.556z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
