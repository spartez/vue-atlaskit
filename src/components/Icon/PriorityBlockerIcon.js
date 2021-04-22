import IconWrapper from './IconWrapper';

export default {
    name: 'PriorityBlockerIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM6 11a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H6z" fill="#FF5630"/></svg>' } });
    }
};
