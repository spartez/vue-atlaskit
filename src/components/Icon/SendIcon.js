import IconWrapper from './IconWrapper';

export default {
    name: 'SendIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M6.978 19.477c0 1.371 1.645 2.042 2.577 1.05L21.558 7.723C22.518 6.695 21.803 5 20.409 5H3.496C2.178 5 1.505 6.607 2.418 7.572l4.56 4.828v7.077zm1.993-1.265v-6.627L3.856 6.169c.303.322.078.857-.36.857h15.963L8.971 18.212z"/><path d="M8.416 12.902l4.01-1.95a1.04 1.04 0 0 0 .474-1.365.982.982 0 0 0-1.324-.489l-4.01 1.95c-.497.242-.71.853-.475 1.364a.982.982 0 0 0 1.325.49z"/></g></svg>' } });
    }
};
