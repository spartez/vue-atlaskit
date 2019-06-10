import IconWrapper from './IconWrapper';

export default {
    name: 'WorldSmallIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-.5-2.035A3.994 3.994 0 0 1 8 12c0-.31.04-.605.105-.895L10.5 13.5v.5c0 .55.45 1 1 1v.965zm3.45-1.27A.992.992 0 0 0 14 14h-.5v-1.5c0-.275-.225-.5-.5-.5h-3v-1h1c.275 0 .5-.225.5-.5v-1h1c.55 0 1-.45 1-1v-.205A4.002 4.002 0 0 1 16 12c0 1.04-.4 1.985-1.05 2.695z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
