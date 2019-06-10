import IconWrapper from './IconWrapper';

export default {
    name: 'PdfIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="5" y="4" width="14" height="16" rx="2"/><rect fill="inherit" x="8" y="8" width="8" height="2" rx="1"/><path d="M15.512 16H13.49a.492.492 0 0 1-.489-.497v-4.006c0-.275.218-.497.489-.497h2.023c.27 0 .488.222.488.497v4.006a.492.492 0 0 1-.488.497" fill="inherit"/><rect fill="inherit" x="8" y="11" width="4" height="2" rx="1"/><rect fill="inherit" x="8" y="14" width="4" height="2" rx="1"/></g></svg>' } });
    }
};
