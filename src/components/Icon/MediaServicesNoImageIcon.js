import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'MediaServicesNoImageIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M19.41 3.041l.72-.72a1.095 1.095 0 111.55 1.548L3.87 21.68a1.095 1.095 0 11-1.55-1.55l.72-.72a2.005 2.005 0 01-.04-.405V4.995C3 3.893 3.893 3 4.995 3h14.01c.139 0 .274.014.405.041zM21 7.531v11.474A1.995 1.995 0 0119.005 21H7.53l3-3H18v-2.7l-2.271-2.498L21 7.53zM8 10a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/></svg>' });
    }
};
