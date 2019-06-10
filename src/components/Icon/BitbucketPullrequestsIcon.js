import IconWrapper from './IconWrapper';

export default {
    name: 'BitbucketPullrequestsIcon',
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
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M18 15.2V11c0-1.7-1.3-3-3-3h-1.9l.8-.8c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-2.3 2.3c-.3.4-.3.9 0 1.2l2.3 2.3c.2.2.3.2.5.2s.4-.1.6-.3c.3-.3.3-.8 0-1.1l-.7-.7H15c.6 0 1 .4 1 1v4.2c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8zM17 19c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM7 3C5.4 3 4 4.3 4 6c0 1.3.8 2.4 2 2.8V20c0 .6.4 1 1 1s1-.4 1-1V8.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3zm0 4c-.5 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
