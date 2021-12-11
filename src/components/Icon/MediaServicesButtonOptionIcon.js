import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'MediaServicesButtonOptionIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M13.29 10.234l-3.059 3.059c-.391.392-.264.71.285.71h2.988a.492.492 0 00.496-.497v-2.988c0-.334-.118-.509-.299-.509-.116 0-.259.072-.411.225z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
