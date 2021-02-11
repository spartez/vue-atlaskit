import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'PresenceBusyIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M12 18a6 6 0 100-12 6 6 0 000 12z" fill="currentColor"/><path d="M9.367 9.363a1.241 1.241 0 011.747-.008l3.527 3.527c.48.48.48 1.26-.008 1.747a1.241 1.241 0 01-1.747.008l-3.527-3.526c-.48-.48-.48-1.26.008-1.748z" fill="inherit"/></g></svg>'  });
    }
};
