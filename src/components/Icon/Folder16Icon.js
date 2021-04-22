import IconWrapper from './IconWrapper';

export default {
    name: 'Folder16Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><g fill="#B3D4FF" fill-rule="evenodd"><path d="M6.667 3H15a1 1 0 0 1 1 1v10.05a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.667a1 1 0 0 1 1 1z"/><path d="M0 4.05h16v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-10z" style="mix-blend-mode:multiply"/></g></svg>' } });
    }
};
