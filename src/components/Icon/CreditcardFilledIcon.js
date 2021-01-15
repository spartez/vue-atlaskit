import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'CreditcardFilledIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M3 10.988h18V17c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.012zM6.013 16h2v-2h-2v2zM21 8.993V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v1.993" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
