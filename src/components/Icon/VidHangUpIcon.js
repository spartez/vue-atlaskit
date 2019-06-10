import IconWrapper from './IconWrapper';

export default {
    name: 'VidHangUpIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M5.467 14.95l2.611-.656s.64-.237.652-.978l-.01-1.212s.038-.471.637-.557c1.768-.327 3.418-.34 5.182 0 .689.131.636.557.636.557l.007.889c.013.74.652.977.652.977l2.593.982c1.227.37 1.868-1.473 1.44-2.574-.991-2.557-3.996-2.994-6.281-3.294-1.085-.143-2.291-.077-3.274 0-1.72.137-5.17.713-6.165 3.27-.427 1.1.093 2.966 1.32 2.596z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
