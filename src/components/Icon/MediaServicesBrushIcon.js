import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'MediaServicesBrushIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M6.486 13.728c-1.593 1.599-.248 3.24-2.364 5.674-.955 1.098 3.932.763 6.354-1.668 1.027-1.03.737-2.534-.364-3.64-1.102-1.106-2.6-1.397-3.626-.366zm13.471-9.685c-.537-.548-6.733 4.25-8.503 6.058-.878.897-1.171 1.378-1.44 1.738-.118.156.037.204.107.241.348.184.842.507 1.156.828.315.321.665.815.84 1.161.036.071.083.23.236.11.352-.275.823-.574 1.701-1.472 1.77-1.807 6.44-8.115 5.903-8.664z" fill="currentColor"/></svg>' });
    }
};
