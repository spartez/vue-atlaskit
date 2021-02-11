import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'MenuExpandIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 12c0-.552.456-1 1.002-1h9.996a.999.999 0 110 2H7.002A.999.999 0 016 12zm0 4c0-.552.456-1 1.002-1h9.996a.999.999 0 110 2H7.002A.999.999 0 016 16zm0-8c0-.552.456-1 1.002-1h9.996a.999.999 0 110 2H7.002A.999.999 0 016 8z" fill="currentColor"/></svg>'  });
    }
};
