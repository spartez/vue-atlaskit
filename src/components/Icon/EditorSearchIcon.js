import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EditorSearchIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M14.823 15.883a5.5 5.5 0 111.06-1.06l2.647 2.647c.293.293.53.59 0 1.06-.53.47-.767.293-1.06 0l-2.647-2.647zM11.5 15.5a4 4 0 100-8 4 4 0 000 8z" fill="currentColor"/></svg>' });
    }
};
