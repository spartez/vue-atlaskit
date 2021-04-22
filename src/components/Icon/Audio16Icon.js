import IconWrapper from './IconWrapper';

export default {
    name: 'Audio16Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm11 4.195v-.753c0-.271-.23-.468-.514-.44l-6.115.634a.565.565 0 0 0-.514.545v4.616a2 2 0 0 0-.571-.083H5a2 2 0 0 0-2 2V11a2 2 0 0 0 2 2h.286a2 2 0 0 0 2-2V5.76l4.285-.444v2.767A2 2 0 0 0 11 8h-.286a2 2 0 0 0-2 2v.286a2 2 0 0 0 2 2H11a2 2 0 0 0 2-2V4.195z"/></svg>' } });
    }
};
