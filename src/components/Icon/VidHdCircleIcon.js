import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'VidHdCircleIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M11.359 15V9.004h-1.5v2.352H7.504V9.004H6V15h1.504v-2.418h2.355V15h1.5zm1.393-6v6h2.483C17.013 15 18 13.911 18 11.942 18 10.068 16.996 9 15.235 9h-2.483zm1.503 1.226h.71c.946 0 1.503.627 1.503 1.745 0 1.188-.529 1.803-1.504 1.803h-.709v-3.548z" fill="inherit"/></g></svg>' });
    }
};
