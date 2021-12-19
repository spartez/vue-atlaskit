import IconWrapper from './IconWrapper';
            import { h } from 'vue'

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
    render() {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path fill="#00B8D9" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm5.017 12.265l-2.58-2.501L8.236 7.05a.999.999 0 10-1.392-1.436l-3.54 3.432a1 1 0 000 1.436l3.32 3.219a1 1 0 101.393-1.436zm6.638-8.21a1 1 0 00-1.271.62l-4.83 14.046a1 1 0 001.892.65l4.829-14.045a1 1 0 00-.62-1.271zm6.081 9.776l-3.32-3.219a.999.999 0 10-1.393 1.436l2.58 2.501-2.799 2.714a.999.999 0 101.392 1.436l3.54-3.432a1 1 0 000-1.436z"/></svg>'  });
    }
};
