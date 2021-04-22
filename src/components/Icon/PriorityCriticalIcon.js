import IconWrapper from './IconWrapper';

export default {
    name: 'PriorityCriticalIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M4.671 7.165l6.643-3.946a1.372 1.372 0 0 1 1.403.002l6.614 3.944c.415.247.669.695.669 1.178v11.253a1.372 1.372 0 0 1-2.074 1.179l-5.91-3.52-5.944 3.526A1.372 1.372 0 0 1 4 19.6V8.345c0-.484.255-.933.671-1.18z" fill="#FF5630"/></svg>' } });
    }
};
