import IconWrapper from './IconWrapper';

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
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FFAB00" fill-rule="evenodd" d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm6 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-.986 1.834a3.001 3.001 0 0 1 0-5.668A1.007 1.007 0 0 1 7 5V3a1 1 0 1 1 2 0v2c0 .057-.005.112-.014.166a3.001 3.001 0 0 1 0 5.668c.01.054.014.11.014.166v2a1 1 0 0 1-2 0v-2c0-.057.005-.112.014-.166z"/></svg>' } });
    }
};
