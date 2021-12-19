import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Changes16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FFAB00" fill-rule="evenodd" d="M10.58 7H5.467l.866-.865A1 1 0 104.92 4.72L2.34 7.3a.998.998 0 000 1.414l2.58 2.578a1 1 0 001.414-1.416L5.456 9h5.134l-.877.876a1 1 0 101.414 1.415l2.58-2.58a1 1 0 000-1.414L11.126 4.72a.996.996 0 00-.706-.292.999.999 0 00-.707 1.707l.866.865zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"/></svg>'  });
    }
};
