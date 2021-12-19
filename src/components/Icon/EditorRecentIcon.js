import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorRecentIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.305 12.282c.037.09.091.175.165.248l2 2a.75.75 0 001.06-1.06l-1.78-1.78V9a.75.75 0 10-1.5 0v3c0 .104.021.202.059.292zM12 6a6 6 0 110 12 6 6 0 010-12z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
