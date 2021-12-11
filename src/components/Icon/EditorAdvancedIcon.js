import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EditorAdvancedIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M9.8 17L9 19H7l.763-2H9.8zm-.893-3l1.907-5h2.372l1.907 5h-1.926L12 10.5 10.833 14H8.907zm7.33 3L17 19h-2l-.8-2h2.037zM5 15h14v1H5v-1zM18 5v1h-2v2h2v1h-3V5h3zm0 1h1v2h-1V6z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
