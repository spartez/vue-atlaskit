import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'ArrowUpIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.293 5.293l-5.5 5.499a1.002 1.002 0 0 0 0 1.415.999.999 0 0 0 1.414 0L11 8.414V18a1 1 0 0 0 2 0V8.414l3.793 3.793a1 1 0 1 0 1.414-1.415l-5.5-5.499A.993.993 0 0 0 12 5a.993.993 0 0 0-.707.293z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
