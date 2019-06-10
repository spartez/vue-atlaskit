import IconWrapper from './IconWrapper';

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
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M18 12v8.004c0 .55-.456.996-1.002.996H7.002A.998.998 0 0 1 6 20.004V12H3.993c-.548 0-.673-.32-.287-.706l7.941-7.941a.497.497 0 0 1 .706 0l7.94 7.94c.39.39.262.707-.286.707H18zm-8 4.998V21h4v-4.002a2 2 0 0 0-4 0z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
