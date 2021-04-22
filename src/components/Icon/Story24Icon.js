import IconWrapper from './IconWrapper';

export default {
    name: 'Story24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#36B37E" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm12.647 19.515l1.29-1.528L12 13.82l-4.939 4.167c-.022.018-.061.005-.061.166V6.688C7 6.348 7.412 6 8 6h8c.587 0 1 .349 1 .688v11.465c0-.162-.04-.147-.063-.166l-1.29 1.528C16.885 20.56 19 19.821 19 18.153V6.688C19 5.162 17.623 4 16 4H8C6.376 4 5 5.161 5 6.688v11.465c0 1.668 2.113 2.407 3.351 1.362L12 16.437l3.647 3.078z"/></svg>' } });
    }
};
