import IconWrapper from './IconWrapper';

export default {
    name: 'Figma24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.248 0A3.248 3.248 0 0 0 0 3.248v17.504A3.248 3.248 0 0 0 3.248 24h17.504A3.248 3.248 0 0 0 24 20.752V3.248A3.248 3.248 0 0 0 20.752 0H3.248zm8.755 17.012a2.506 2.506 0 0 1-2.505 2.507 2.506 2.506 0 0 1 0-5.013 2.506 2.506 0 0 1 0-5.012 2.506 2.506 0 0 1 0-5.013h5.009a2.506 2.506 0 0 1 0 5.013h-2.505v2.5a2.506 2.506 0 0 1 2.505-2.5 2.506 2.506 0 0 1 0 5.012 2.506 2.506 0 0 1-2.505-2.5v5.006z" fill="#5243AA"/></svg>' } });
    }
};
