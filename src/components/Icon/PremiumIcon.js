import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'PremiumIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.572 9.351c.15.148.404.102.489-.09l2.113-4.73c.317-.706 1.333-.708 1.653-.003l2.143 4.736c.087.19.34.236.488.089l4.998-4.951c.61-.603 1.647-.1 1.536.744l-1.957 11.337a.6.6 0 01-.598.517H4.6a.599.599 0 01-.596-.517L2.008 5.14c-.11-.845.925-1.349 1.535-.747L8.572 9.35zM4.546 18H19.49a.5.5 0 01.478.353l.615 2a.5.5 0 01-.478.647H3.935a.5.5 0 01-.478-.646l.61-2a.5.5 0 01.48-.354z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
