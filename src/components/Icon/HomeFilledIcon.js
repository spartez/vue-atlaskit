import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'HomeFilledIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M18 12v8.004c0 .55-.456.996-1.002.996H7.002A.998.998 0 016 20.004V12H3.993c-.548 0-.673-.32-.287-.706l7.941-7.941a.497.497 0 01.706 0l7.94 7.94c.39.39.262.707-.286.707H18zm-8 4.998V21h4v-4.002a2 2 0 00-4 0z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
