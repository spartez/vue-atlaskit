import IconWrapper from './IconWrapper';

export default {
    name: 'EditorNumberListIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M11 7h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm0 4h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm0 4h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm-5 0h3v1H6v-1zm0 2h3v1H6v-1zm1-9H6V7h2v3H7V8zm-1 3h3v1.333h-.6V13H7.2v-.667H6V11zm0 2h3v1H6v-1zm2 3h2v1H8v-1z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
