import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'GoogleSheet48Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#0A9D58" d="M27.557 23.833l5.456 9.509-6.325.064-5.456-9.509 6.325-.064zM14.667 34.46l3.217 5.48 5.456-9.51-3.217-5.48-5.456 9.51zm7.753.164l-3.107 5.543h10.913l3.107-5.543H22.42z"/></g></svg>'  });
    }
};
