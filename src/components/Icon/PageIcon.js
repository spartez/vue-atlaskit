import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'PageIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="8" y="6" width="8" height="2" rx="1"/><rect x="8" y="9" width="8" height="2" rx="1"/><rect x="8" y="12" width="4" height="2" rx="1"/><path d="M7 4v16h10V4H7zm-2-.01C5 2.892 5.897 2 7.006 2h9.988C18.102 2 19 2.898 19 3.99v16.02c0 1.099-.897 1.99-2.006 1.99H7.006A2.003 2.003 0 015 20.01V3.99z" fill-rule="nonzero"/></g></svg>'  });
    }
};
