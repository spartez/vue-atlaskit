import IconWrapper from './IconWrapper';

export default {
    name: 'SourceCode24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#00B8D9" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm5.017 12.265l-2.58-2.501L8.236 7.05a.999.999 0 1 0-1.392-1.436l-3.54 3.432a1 1 0 0 0 0 1.436l3.32 3.219a1 1 0 1 0 1.393-1.436zm6.638-8.21a1 1 0 0 0-1.271.62l-4.83 14.046a1 1 0 0 0 1.892.65l4.829-14.045a1 1 0 0 0-.62-1.271zm6.081 9.776l-3.32-3.219a.999.999 0 1 0-1.393 1.436l2.58 2.501-2.799 2.714a.999.999 0 1 0 1.392 1.436l3.54-3.432a1 1 0 0 0 0-1.436z"/></svg>' } });
    }
};
