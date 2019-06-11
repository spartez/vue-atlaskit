import IconWrapper from './IconWrapper';

export default {
    name: 'OpenIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11.031 7A1.03 1.03 0 0 0 10 8.036a1.05 1.05 0 0 0 1.044 1.045l3.121.014.014 3.121a1.05 1.05 0 0 0 1.045 1.044 1.03 1.03 0 0 0 1.036-1.035l-.019-4.161a1.053 1.053 0 0 0-1.045-1.045L11.035 7h-.004z"/><path d="M13.364 8.292l-7.072 7.071a1.002 1.002 0 0 0 0 1.415c.39.39 1.024.39 1.415 0l7.071-7.071A1.002 1.002 0 0 0 14.071 8a1 1 0 0 0-.707.292z"/></g></svg>' } });
    }
};
