import IconWrapper from './IconWrapper';

export default {
    name: 'MarketplaceIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M4 11h2v5H4zm.556-7.112C4.801 3.398 5.45 3 6.006 3h11.987c.556 0 1.206.398 1.45.888L21 7H3l1.556-3.112zM3 7h18v1H3V7zm15 4h2v5h-2zM3 8c.14 1.128 1.094 2 2.25 2s2.11-.872 2.25-2H3zm4.5 0c.14 1.128 1.094 2 2.25 2s2.11-.872 2.25-2H7.5zM12 8c.14 1.128 1.094 2 2.25 2s2.11-.872 2.25-2H12zm4.5 0c.14 1.128 1.094 2 2.25 2s2.11-.872 2.25-2h-4.5zM4 16h16v2.995A2 2 0 0 1 18.006 21H5.994A1.997 1.997 0 0 1 4 18.995V16z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
