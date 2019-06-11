import IconWrapper from './IconWrapper';

export default {
    name: 'UndoIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5.138 13.026a.98.98 0 0 0 .386 1.366 1.066 1.066 0 0 0 1.421-.371C8.051 12.167 10.104 11 12.37 11c2.437 0 4.619 1.351 5.648 3.429.246.498.868.71 1.388.473.519-.238.74-.833.493-1.333C18.528 10.802 15.618 9 12.37 9c-3.02 0-5.759 1.557-7.232 4.026z"/><path d="M4.5 10v3.9c0 .607.494 1.1 1.102 1.1h3.896a1 1 0 1 0 0-2H6.503v-3A1 1 0 0 0 4.5 10z"/></g></svg>' } });
    }
};
