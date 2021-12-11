import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'VidCameraOnIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M19.678 8.089c.137-.061.28-.089.421-.089.472 0 .901.316.901.753v6.494c0 .437-.43.753-.9.753-.141 0-.286-.028-.424-.09l-2.611-1.416V9.499l2.613-1.41zM4.856 7h9.288C15.17 7 16 7.747 16 8.669v6.662c0 .922-.83 1.669-1.856 1.669H4.856C3.83 17 3 16.253 3 15.331V8.67C3 7.747 3.83 7 4.856 7z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
