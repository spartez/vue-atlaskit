import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Image16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FFAB00" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm4.75 11.75l-.543-.543a1 1 0 00-1.414 0L3 13h10v-2.25l-1.795-1.974a1 1 0 00-1.447-.034L6.75 11.75zM4.667 6.333a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"/></svg>' });
    }
};
