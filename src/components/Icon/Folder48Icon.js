import IconWrapper from './IconWrapper';

export default {
    name: 'Folder48Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 48 64"><g fill="#B3D4FF" fill-rule="evenodd"><path d="M20 16h24a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4z"/><path d="M0 20h48v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V20z" style="mix-blend-mode:multiply"/></g></svg>' } });
    }
};
