import IconWrapper from './IconWrapper';

export default {
    name: 'VideoCircleIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M17.37 14.954L15 13.807v-3.613l2.37-1.148c.285-.138.63.05.63.343v5.222c0 .293-.345.481-.63.343" fill="inherit"/><rect fill="inherit" x="6" y="9" width="8" height="6" rx="1"/></g></svg>' } });
    }
};
