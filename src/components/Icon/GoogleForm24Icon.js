import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'GoogleForm24Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path fill="#673AB7" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm12.049 5l-5.422.055 4.677 8.15 5.422-.055L15.049 5zM4 14.108l2.757 4.697 4.677-8.15-2.757-4.697L4 14.108zm6.646.141L7.982 19h9.354L20 14.249h-9.354z"/></svg>' });
    }
};
