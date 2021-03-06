import IconWrapper from './IconWrapper';

export default {
    name: 'PdfDocument24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm1.846 12.17h.483c1.116 0 1.203-.322 1.203-.776 0-.518-.268-.771-.817-.771h-.869v1.546zm6.29 2.183h.664c.742 0 1.501-.22 1.501-1.855 0-1.65-.802-1.86-1.501-1.86h-.665v3.715zM4.462 15.99h-1.08A.384.384 0 0 1 3 15.606V9.383c0-.21.171-.383.383-.383h2.494c1.483 0 2.52.984 2.52 2.394 0 1.43-1.015 2.39-2.525 2.39H4.846v1.822a.384.384 0 0 1-.383.384zm7.45 0h-2.24a.384.384 0 0 1-.384-.384V9.383c0-.21.172-.383.383-.383h2.242c2.107 0 3.268 1.237 3.268 3.484 0 2.26-1.16 3.506-3.268 3.506zm5.776 0h-1.08a.384.384 0 0 1-.384-.384V9.383c0-.21.172-.383.383-.383h4.009c.21 0 .383.172.383.383v.88a.383.383 0 0 1-.383.383h-2.545v1.14h2.292c.212 0 .383.172.383.383v.867c0 .21-.171.383-.383.383h-2.292v2.187a.384.384 0 0 1-.383.384z"/></svg>' } });
    }
};
