import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'MediaServicesArrowIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M10.527 11.078l-.842-1.867c-.588-1.305-1.456-1.269-1.942.07l-3.69 10.153c-.164.45.067.676.513.514l10.148-3.692c1.339-.488 1.37-1.357.07-1.944l-1.856-.837c.393-.37.79-.756 1.19-1.156 3.861-3.864 6.448-7.54 5.776-8.213-.672-.672-4.347 1.916-8.209 5.78-.4.4-.787.799-1.158 1.192z" fill="currentColor"/></svg>' });
    }
};
