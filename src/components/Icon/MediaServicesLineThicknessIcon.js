import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'MediaServicesLineThicknessIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M4 4.495C4 4.222 4.226 4 4.496 4h15.008c.274 0 .496.216.496.495v2.01a.498.498 0 01-.496.495H4.496A.492.492 0 014 6.505v-2.01zm0 8.01c0-.279.226-.505.496-.505h15.008c.274 0 .496.214.496.505v.99a.503.503 0 01-.496.505H4.496A.493.493 0 014 13.495v-.99zm0 6.747c0-.139.102-.252.251-.252H19.75c.138 0 .251.107.251.252v.496a.245.245 0 01-.251.252H4.25a.248.248 0 01-.25-.252v-.496z" fill="currentColor"/></svg>' });
    }
};
