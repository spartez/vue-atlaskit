import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'FollowersIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"/><circle cx="11" cy="7" r="4"/><path d="M17.293 9.293a1 1 0 1 0 1.414 1.414l1.996-1.996a.999.999 0 0 0 0-1.422l-1.996-1.996a1 1 0 0 0-1.414 1.414L18.586 8l-1.293 1.293z" fill-rule="nonzero"/></g></svg>'  });
    }
};
