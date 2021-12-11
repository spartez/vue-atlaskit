import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Sketch16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF8B00" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm6.02 13.333a.669.669 0 00.502-.228L13.17 7.77a.667.667 0 00.063-.79l-1.657-2.666A.668.668 0 0011.01 4H5.116a.669.669 0 00-.554.296L2.779 6.963a.667.667 0 00.054.81l4.686 5.334a.665.665 0 00.5.226z"/></svg>' });
    }
};
