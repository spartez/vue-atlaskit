import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'TrashIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 5a1 1 0 00-1 1v1h16V6a1 1 0 00-1-1H5zm11.15 15H7.845a1 1 0 01-.986-.835L5 8h14l-1.864 11.166a.999.999 0 01-.986.834M9 4.5a.5.5 0 01.491-.5h5.018a.5.5 0 01.491.5V5H9v-.5z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
