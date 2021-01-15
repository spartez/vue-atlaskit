import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'PortfolioIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.83 17h6.34a3.001 3.001 0 1 1 0 2H8.83a3.001 3.001 0 1 1 0-2zM3 5c0-1.105.895-2 1.994-2h12.012C18.107 3 19 3.888 19 5c0 1.105-.895 2-1.994 2H4.994A1.992 1.992 0 0 1 3 5zm5 6a2 2 0 0 1 2.003-2h8.994a2 2 0 1 1 0 4h-8.994A1.996 1.996 0 0 1 8 11z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
