import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EditorOutdentIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M9 9V7l-3 3 3 3v-2h2.51a.49.49 0 00.49-.505v-.99A.495.495 0 0011.51 9H9zm4-1.495c0-.279.228-.505.491-.505h5.018a.49.49 0 01.491.505v.99a.503.503 0 01-.491.505h-5.018A.49.49 0 0113 8.495v-.99zm0 4c0-.279.228-.505.491-.505h5.018a.49.49 0 01.491.505v.99a.503.503 0 01-.491.505h-5.018a.49.49 0 01-.491-.505v-.99zm-6 4c0-.279.229-.505.5-.505h11c.276 0 .5.214.5.505v.99a.506.506 0 01-.5.505h-11a.495.495 0 01-.5-.505v-.99z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
