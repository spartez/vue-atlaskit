import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Audio16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm11 4.195v-.753c0-.271-.23-.468-.514-.44l-6.115.634a.565.565 0 00-.514.545v4.616a2 2 0 00-.571-.083H5a2 2 0 00-2 2V11a2 2 0 002 2h.286a2 2 0 002-2V5.76l4.285-.444v2.767A2 2 0 0011 8h-.286a2 2 0 00-2 2v.286a2 2 0 002 2H11a2 2 0 002-2V4.195z"/></svg>' });
    }
};
