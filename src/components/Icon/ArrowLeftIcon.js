import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'ArrowLeftIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.414 11.5H18a1 1 0 0 1 0 2H8.414l3.793 3.793a1 1 0 0 1-1.414 1.414l-5.5-5.5a1 1 0 0 1 0-1.414l5.5-5.5a1 1 0 0 1 1.414 1.414L8.414 11.5z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
