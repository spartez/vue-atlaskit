import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Folder24Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="#B3D4FF" fill-rule="evenodd"><path d="M10 4h12a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V4a2 2 0 012-2h6a2 2 0 012 2z"/><path d="M0 6h24v14a2 2 0 01-2 2H2a2 2 0 01-2-2V6z" style="mix-blend-mode:multiply"/></g></svg>' });
    }
};
