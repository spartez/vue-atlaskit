import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'MediaServicesAudioIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><path d="M16 9.283V13.6h-.003A1.5 1.5 0 1114.5 12c.175 0 .344.03.5.085v-2.08l-4 .431V14.6h-.003A1.5 1.5 0 018 14.5a1.5 1.5 0 012-1.415V9.034c0-.238.186-.451.432-.478l5.136-.553a.38.38 0 01.432.384v.896z" fill="inherit"/></svg>' });
    }
};
