import IconWrapper from './IconWrapper';

export default {
    name: 'Generic16Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><path fill="#5E6C84" fill-rule="evenodd" d="M8 3H5.333C4.597 3 4 3.617 4 4.378v7.244C4 12.382 4.597 13 5.333 13h5.334c.736 0 1.333-.617 1.333-1.378V8h-1.333v3.622H5.333V4.378H8v1.414c0 .736.597 1.333 1.333 1.333h2.334c.184 0 .333-.15.333-.333v-.903a.333.333 0 0 0-.093-.231l-2.164-2.25A1.333 1.333 0 0 0 8.782 3H8zM0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0 1 14.006 16H1.994A1.995 1.995 0 0 1 0 14.006V1.994z"/></svg>' } });
    }
};
