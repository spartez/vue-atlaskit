import IconWrapper from './IconWrapper';

export default {
    name: 'DocumentFilledIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M18.99 8.99l.01 1.015V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.275c.469 0 .922.164 1.282.464L18.631 7.7c.227.19.359.471.359.768v.521zM12.02 5L12 8.192a.99.99 0 0 0 .994.991h4L12.02 5z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
