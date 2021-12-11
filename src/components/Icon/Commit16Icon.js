import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Commit16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FFAB00" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm6 9a1 1 0 100-2 1 1 0 000 2zm-.986 1.834a3.001 3.001 0 010-5.668A1.007 1.007 0 017 5V3a1 1 0 112 0v2c0 .057-.005.112-.014.166a3.001 3.001 0 010 5.668c.01.054.014.11.014.166v2a1 1 0 01-2 0v-2c0-.057.005-.112.014-.166z"/></svg>' });
    }
};
