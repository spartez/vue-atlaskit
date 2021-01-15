import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'TrayIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 19h14V5H5v14zM3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005V4.995z" fill-rule="nonzero"/><path d="M9.17 17H4v1.5A1.5 1.5 0 0 0 5.505 20h12.99c.838 0 1.505-.672 1.505-1.5V17h-5.17a3.001 3.001 0 0 1-5.66 0zM7 12h10v2H7zm0-4h10v2H7z"/></g></svg>'  });
    }
};
