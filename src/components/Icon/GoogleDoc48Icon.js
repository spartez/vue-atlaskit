import IconWrapper from './IconWrapper';

export default {
    name: 'GoogleDoc48Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 0 1 2.52 1.072l11.994 12.45a3.5 3.5 0 0 1 .979 2.429V60a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 60V4A3.5 3.5 0 0 1 4 .5z"/><path fill="#2196F3" d="M27.557 23.833l5.456 9.509-6.325.064-5.456-9.509 6.325-.064zM14.667 34.46l3.217 5.48 5.456-9.51-3.217-5.48-5.456 9.51zm7.753.164l-3.107 5.543h10.913l3.107-5.543H22.42z"/></g></svg>' } });
    }
};
