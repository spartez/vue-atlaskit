import IconWrapper from './IconWrapper';

export default {
    name: 'VidBackwardIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M13.02 13.857l6.273 3.858c.937.577 1.697.155 1.697-.955V7.212c0-1.103-.757-1.533-1.697-.955l-6.273 3.858V7.212c0-1.103-.757-1.533-1.697-.955l-7.62 4.686c-.936.576-.94 1.51 0 2.087l7.62 4.685c.937.577 1.697.155 1.697-.955v-2.903z"/></svg>' } });
    }
};
