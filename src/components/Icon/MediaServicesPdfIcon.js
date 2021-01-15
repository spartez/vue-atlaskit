import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'MediaServicesPdfIcon',
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
    render() {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><rect fill="inherit" x="7" y="8" width="10" height="2" rx="1"/><path d="M16.187 16h-3.373c-.45 0-.814-.222-.814-.497v-4.006c0-.275.364-.497.814-.497h3.373c.45 0 .813.222.813.497v4.006c0 .275-.364.497-.813.497" fill="inherit"/><rect fill="inherit" x="7" y="11" width="4" height="2" rx="1"/><rect fill="inherit" x="7" y="14" width="4" height="2" rx="1"/></g></svg>'  });
    }
};
