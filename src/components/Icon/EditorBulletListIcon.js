import IconWrapper from './IconWrapper';

export default {
    name: 'EditorBulletListIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 8c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1zm5-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm-5 5c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1zm5-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm-5 5c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1zm5-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
