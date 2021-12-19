import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EmojiActivityIcon',
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
    render() {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.677 16.738A5.97 5.97 0 0112 18a5.97 5.97 0 01-3.677-1.262 6.329 6.329 0 001.982-4.589 6.33 6.33 0 00-2.157-4.746A5.973 5.973 0 0112 6c1.465 0 2.808.528 3.851 1.403a6.33 6.33 0 00-2.156 4.746c0 1.751.736 3.41 1.982 4.589zm1.354-1.472c.613-.94.969-2.063.969-3.266 0-1.124-.31-2.176-.85-3.076a4.321 4.321 0 00-1.455 3.225c0 1.187.495 2.313 1.336 3.117zm-10.062 0A5.964 5.964 0 016 12c0-1.124.31-2.176.85-3.076a4.324 4.324 0 011.455 3.225 4.323 4.323 0 01-1.336 3.117zM12 4a8 8 0 100 16 8 8 0 000-16z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
