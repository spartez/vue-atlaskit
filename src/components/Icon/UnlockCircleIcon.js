import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'UnlockCircleIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M11 9.99V11h-1V9.98A1.98 1.98 0 0 1 11.98 8h.04A1.98 1.98 0 0 1 14 9.98V11h-1V9.99a.99.99 0 0 0-.99-.99h-.02a.99.99 0 0 0-.99.99zm2 .51v.5h1v-.5h-1z" fill="inherit"/><path fill="inherit" d="M10 10h1v2h-1zm-1 5.001a1 1 0 0 0 .99.999h4.02c.546 0 .99-.443.99-.999V13a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2.001z"/><rect fill="inherit" x="13" y="10" width="1" height="1" rx=".5"/></g></svg>'  });
    }
};
