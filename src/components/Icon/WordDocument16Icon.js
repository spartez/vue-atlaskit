import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'WordDocument16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#004E8C" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1.235 4.258A.273.273 0 003 4.53v6.969c0 .136.1.252.236.27l6.953.962a.273.273 0 00.311-.271V3.542a.273.273 0 00-.312-.27l-6.953.986zm7.89.617v6.25h1.563c.172 0 .312-.14.312-.313V5.189a.312.312 0 00-.313-.313h-1.562zM6.803 7.602L6.012 10.4h-.835l-1.12-4.228h.92l.66 2.98h.047l.77-2.98h.747l.786 2.98h.046l.654-2.98H9.6L8.479 10.4h-.83l-.8-2.798h-.046z"/></svg>' });
    }
};
