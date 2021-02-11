import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'MediaServicesCodeIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><path d="M15.652 12.014l-1.367-1.367a.98.98 0 01.005-1.38.973.973 0 011.38-.005l2.02 2.022a.953.953 0 01.219.339.97.97 0 01-.193 1.096l-2.02 2.02a.98.98 0 01-1.378-.006.973.973 0 01-.006-1.379l1.34-1.34zm-9.56-.391a.953.953 0 01.217-.34l2.022-2.02a.973.973 0 011.38.004.98.98 0 01.004 1.38l-1.367 1.367 1.34 1.34a.98.98 0 01-1.384 1.384l-2.02-2.02a.97.97 0 01-.193-1.095zm7.19-3.572c.546.177.844.763.667 1.308l-1.924 5.923a1.038 1.038 0 11-1.974-.641l1.924-5.923a1.038 1.038 0 011.308-.667z" fill="inherit"/></svg>'  });
    }
};
