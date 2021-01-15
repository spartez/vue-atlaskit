import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorTaskIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M7.5 6h9A1.5 1.5 0 0 1 18 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6zm3.072 8.838l.143.154a.5.5 0 0 0 .769-.042l.13-.175 3.733-5.045a.8.8 0 0 0-.11-1.064.665.665 0 0 0-.984.118l-3.243 4.387-1.315-1.422a.663.663 0 0 0-.99 0 .801.801 0 0 0 0 1.07l1.867 2.019z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
