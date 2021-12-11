import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'ScheduleIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M19 10.341V7.006A2 2 0 0017.006 5H4.994A2 2 0 003 7.006v9.988A2 2 0 004.994 19h6.809a5.96 5.96 0 01-.72-2.001c-3.028 0-6.083-.002-6.083-.005C5 16.994 5 7 4.994 7 4.994 7 17 7 17 7.006V10c.701 0 1.374.12 2 .341z" fill-rule="nonzero"/><path d="M5 4v1h2V4a1 1 0 00-2 0zm10 0v1h2V4a1 1 0 00-2 0zM4 7h14v2H4zm14 8v-1.01a1 1 0 00-1-.99c-.556 0-1 .444-1 .99V15h-1.01a1 1 0 00-.99 1c0 .556.444 1 .99 1H16v1.01a1 1 0 001 .99c.556 0 1-.444 1-.99V17h1.01a1 1 0 00.99-1c0-.556-.444-1-.99-1H18zm-1 6a5 5 0 110-10 5 5 0 010 10z"/></g></svg>' });
    }
};
