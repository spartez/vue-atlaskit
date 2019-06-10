import IconWrapper from './IconWrapper';

export default {
    name: 'MediaServicesOvalIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 20c-4.943 0-9-3.55-9-8s4.057-8 9-8 9 3.55 9 8-4.057 8-9 8zm0-2c3.893 0 7-2.718 7-6s-3.107-6-7-6-7 2.718-7 6 3.107 6 7 6z" fill="currentColor"/></svg>' } });
    }
};
