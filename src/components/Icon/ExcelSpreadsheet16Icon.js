import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'ExcelSpreadsheet16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill="#007442" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1.235 4.258A.273.273 0 003 4.53v6.969c0 .136.1.252.236.27l6.953.962a.273.273 0 00.311-.271V3.542a.273.273 0 00-.312-.27l-6.953.986zm7.89.617v6.25h1.563c.172 0 .312-.14.312-.313V5.189a.312.312 0 00-.313-.313h-1.562zM4.858 10.2l1.35-2.13-1.341-2.098h1.04l.881 1.48h.053l.89-1.48h.991L7.33 8.085 8.702 10.2H7.694l-.908-1.433h-.053l-.92 1.433h-.955z"/></svg>'  });
    }
};
