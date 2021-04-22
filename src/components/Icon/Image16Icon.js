import IconWrapper from './IconWrapper';

export default {
    name: 'Image16Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FFAB00" fill-rule="evenodd" d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm4.75 11.75l-.543-.543a1 1 0 0 0-1.414 0L3 13h10v-2.25l-1.795-1.974a1 1 0 0 0-1.447-.034L6.75 11.75zM4.667 6.333a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333z"/></svg>' } });
    }
};
