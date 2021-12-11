import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'PullRequest24Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path fill="#36B37E" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm4 3C5.4 3 4 4.3 4 6c0 1.3.8 2.4 2 2.8V20c0 .6.4 1 1 1s1-.4 1-1V8.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3zm7.414 2H15a3 3 0 013 3v7.17a3.001 3.001 0 11-2 0V8a1 1 0 00-1-1h-.583l.292.292a.999.999 0 11-1.413 1.415l-2.002-2a1 1 0 01-.001-1.415l2.003-2.002a.998.998 0 011.414 0 1 1 0 01-.001 1.415L14.414 5zM7 7c-.5 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm10 12a1 1 0 100-2 1 1 0 000 2z"/></svg>' });
    }
};
