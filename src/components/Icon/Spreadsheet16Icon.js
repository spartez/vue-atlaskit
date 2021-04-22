import IconWrapper from './IconWrapper';

export default {
    name: 'Spreadsheet16Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><path fill="#36B37E" fill-rule="evenodd" d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H4zm0 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H4zm0 4a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H4zm5-8a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2H9zm0 4a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2H9zm0 4a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H9z"/></svg>' } });
    }
};
