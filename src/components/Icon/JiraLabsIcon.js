import IconWrapper from './IconWrapper';

export default {
    name: 'JiraLabsIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M10.935 6v4.738L6.997 19h10.005l-3.938-8.262V6h-2.129zm7.873 12.14A2 2 0 0 1 17.002 21H6.997a2 2 0 0 1-1.805-2.86l3.743-7.854V4h6.13v6.286l3.743 7.853z" fill-rule="nonzero"/><path d="M9 13h6l3 7H6z"/><rect x="8" y="3" width="8" height="2" rx="1"/></g></svg>' } });
    }
};
