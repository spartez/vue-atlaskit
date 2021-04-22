import IconWrapper from './IconWrapper';

export default {
    name: 'GoogleDoc16Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2196F3" fill-rule="evenodd" d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm8.287 2.5l-4.067.04 3.508 6.114 4.066-.041L10.287 2.5zM2 9.33l2.068 3.523L7.576 6.74 5.508 3.217 2 9.331zm4.984.106L4.987 13h7.015L14 9.437H6.984z"/></svg>' } });
    }
};
