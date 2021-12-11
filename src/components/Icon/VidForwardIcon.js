import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'VidForwardIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M10.97 13.87l-6.273 3.858C3.76 18.305 3 17.883 3 16.773V7.226c0-1.104.757-1.533 1.697-.956l6.273 3.858V7.226c0-1.104.757-1.533 1.697-.956l7.62 4.686c.936.576.939 1.509 0 2.087l-7.62 4.685c-.937.577-1.697.155-1.697-.955V13.87z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
