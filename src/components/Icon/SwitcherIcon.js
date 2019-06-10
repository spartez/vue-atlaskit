import IconWrapper from './IconWrapper';

export default {
    name: 'SwitcherIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M3.507 15H16.5c-.007 0-.007-10-.007-10H3.5c.007 0 .007 10 .007 10zM1.5 4.994C1.5 3.893 2.263 3 3.192 3h13.616c.934 0 1.692.895 1.692 1.994v10.012c0 1.101-.763 1.994-1.692 1.994H3.192c-.934 0-1.692-.895-1.692-1.994V4.994zM6.5 5v10h2V5h-2zm5 0v10h2V5h-2z"/><path d="M20.5 5h.006c1.101 0 1.994.895 1.994 1.994v12.012A1.995 1.995 0 0 1 20.506 21H8.494A1.995 1.995 0 0 1 6.5 19.006V19h13c.555 0 1-.448 1-1V5z"/></g></svg>' } });
    }
};
