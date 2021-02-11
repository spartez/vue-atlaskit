import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'SignOutIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M4.977 11A.989.989 0 004 12c0 .551.437 1 .977 1h11.046A.99.99 0 0017 12a.99.99 0 00-.977-1H4.977z"/><path d="M6.231 8.306l-2.93 2.956a1.054 1.054 0 000 1.476l2.93 2.957a1.034 1.034 0 001.466 0 1.05 1.05 0 000-1.478L5.5 12.001l2.197-2.218a1.05 1.05 0 000-1.477 1.033 1.033 0 00-1.466 0zM15.503 3H12v2h7v14h-7v2h7.006c1.1 0 1.994-.893 1.994-1.995V4.995A1.993 1.993 0 0019.006 3h-3.503z"/></g></svg>'  });
    }
};
