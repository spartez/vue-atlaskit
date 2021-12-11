import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'PowerpointPresentation16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#CA5010" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1.235 4.258A.273.273 0 003 4.53v6.969c0 .136.1.252.236.27l6.953.962a.273.273 0 00.311-.271V3.542a.273.273 0 00-.312-.27l-6.953.986zm7.89.617v6.25h1.563c.172 0 .312-.14.312-.313V5.189a.312.312 0 00-.313-.313h-1.562zM5.313 6.072h1.763c.87 0 1.465.583 1.465 1.462 0 .87-.618 1.454-1.509 1.454h-.835V10.3h-.884V6.072zm.884.727v1.47h.642c.507 0 .803-.257.803-.732 0-.48-.29-.738-.8-.738h-.645z"/></svg>' });
    }
};
