import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'DecisionIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M19.293 3.293l-5 5a1 1 0 101.414 1.414l5-5a1 1 0 10-1.414-1.414zM8.038 4.929a.957.957 0 10.008-1.912L4.058 3A1.053 1.053 0 003 4.044l.017 4.004a.957.957 0 001.916-.008L4.92 4.916l3.118.013z"/><path d="M11 19.998A.998.998 0 0012 21c.552 0 1-.454 1-1.007v-7.4c0-.556-.315-1.322-.705-1.713L5.207 3.793 3.793 5.207 11 12.414v7.584z"/></g></svg>' });
    }
};
