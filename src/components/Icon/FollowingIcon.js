import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'FollowingIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M20.99 6a.983.983 0 0 1-.286.7l-1.333 1.269 1.284 1.3a.982.982 0 0 1-.412 1.704.99.99 0 0 1-.98-.317l-1.976-1.969a.982.982 0 0 1 0-1.387l2.035-2.028a.99.99 0 0 1 1.077-.19c.365.16.598.522.592.918zM5 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"/><circle cx="11" cy="7" r="4"/></g></svg>'  });
    }
};
