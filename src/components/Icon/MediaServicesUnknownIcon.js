import IconWrapper from './IconWrapper';

export default {
    name: 'MediaServicesUnknownIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><path d="M12 11h3.502a.5.5 0 0 1 .498.491v4.518A.993.993 0 0 1 15 17H9.01C8.451 17 8 16.544 8 16.005v-8.01C8 7.445 8.443 7 9.01 7h2.5a.5.5 0 0 1 .49.51V11zm1-4l3 3h-3V7z" fill="inherit"/></g></svg>' } });
    }
};
