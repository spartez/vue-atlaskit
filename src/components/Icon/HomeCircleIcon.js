import IconWrapper from './IconWrapper';

export default {
    name: 'HomeCircleIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="currentColor"/><path d="M11.643 6.357a.506.506 0 0 1 .714 0l4.931 4.931c.393.393.256.712-.29.712H7.002c-.553 0-.68-.323-.29-.712l4.93-4.93z" fill="inherit"/><path d="M8 12.003c0-.554.453-1.003.997-1.003h6.006c.55 0 .997.438.997 1.003v4.994c0 .554-.453 1.003-.997 1.003H8.997A.993.993 0 0 1 8 16.997v-4.994zm2.667 3.514V18h2.666v-2.483a1.334 1.334 0 1 0-2.666 0z" fill="inherit"/></g></svg>' } });
    }
};
