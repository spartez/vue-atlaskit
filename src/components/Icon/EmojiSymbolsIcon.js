import IconWrapper from './IconWrapper';

export default {
    name: 'EmojiSymbolsIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 9.44l1.76-1.744a2.505 2.505 0 0 1 3.52 0 2.451 2.451 0 0 1 0 3.488L12 16.417l-5.28-5.232a2.451 2.451 0 0 1 0-3.49 2.505 2.505 0 0 1 3.52 0v.001L12 9.44zm-6.684 3.143l.003.004 6.322 6.266a.508.508 0 0 0 .718 0l6.322-6.266.003-.004.004-.003a4.412 4.412 0 0 0 0-6.28 4.509 4.509 0 0 0-6.336 0l-.003.004-.004.003L12 6.65l-.345-.342-.004-.003-.003-.003a4.509 4.509 0 0 0-6.336 0 4.412 4.412 0 0 0 0 6.279l.004.003z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
