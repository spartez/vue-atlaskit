import IconWrapper from './IconWrapper';

export default {
    name: 'Sketch16Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF8B00" fill-rule="evenodd" d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm6.02 13.333a.669.669 0 0 0 .502-.228L13.17 7.77a.667.667 0 0 0 .063-.79l-1.657-2.666A.668.668 0 0 0 11.01 4H5.116a.669.669 0 0 0-.554.296L2.779 6.963a.667.667 0 0 0 .054.81l4.686 5.334a.665.665 0 0 0 .5.226z"/></svg>' } });
    }
};
