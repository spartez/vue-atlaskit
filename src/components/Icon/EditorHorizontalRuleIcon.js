import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EditorHorizontalRuleIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><rect fill="currentColor" x="5" y="11" width="14" height="2" rx="1" fill-rule="evenodd"/></svg>' });
    }
};
