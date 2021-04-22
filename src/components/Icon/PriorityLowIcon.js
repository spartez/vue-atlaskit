import IconWrapper from './IconWrapper';

export default {
    name: 'PriorityLowIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.996 13.861l6.454-3.865a1 1 0 1 1 1.027 1.716l-6.97 4.174a1 1 0 0 1-1.03-.002L4.57 11.71A1 1 0 0 1 5.606 10l6.39 3.862z" fill="#0065FF"/></svg>' } });
    }
};
