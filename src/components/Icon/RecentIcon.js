import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'RecentIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M11 8.002v4.002c0 .28.116.53.301.712l2.47 2.47a1.003 1.003 0 0 0 1.414 0 1.003 1.003 0 0 0 0-1.415L13 11.586V8.004A1.009 1.009 0 0 0 13 8V6a1 1 0 0 0-2 0v2.002zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
