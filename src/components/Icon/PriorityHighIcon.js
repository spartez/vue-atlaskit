import IconWrapper from './IconWrapper';

export default {
    name: 'PriorityHighIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M12.017 11.182l-6.454 3.865a1 1 0 1 1-1.027-1.716l6.97-4.174a1 1 0 0 1 1.03.003l6.906 4.173a1 1 0 0 1-1.035 1.712l-6.39-3.863z" fill="#FF5630"/></svg>' } });
    }
};
