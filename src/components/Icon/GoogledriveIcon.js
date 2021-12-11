import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'GoogledriveIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.81 3l-6.776.068 5.846 10.126 6.777-.07L15.811 3zM2 14.315l3.447 5.835 5.846-10.126L7.846 4.19 2 14.315zm8.307.175l-3.33 5.902H18.67L22 14.49H10.307z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
