import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorBackgroundColorIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M7.818 12.56l4.243 4.243 4.242-4.242-4.242-4.243-4.243 4.243zm-1.414 1.415a1.995 1.995 0 0 1 0-2.828l4.243-4.243a1.995 1.995 0 0 1 2.828 0l4.243 4.243c.78.78.786 2.041 0 2.828l-4.243 4.243a1.996 1.996 0 0 1-2.828 0l-4.243-4.243zM6.5 13h11l-5.44 5.218L6.5 13zm2.732-8.925a1 1 0 0 1 1.414 0l3.536 3.536-1.414 1.414L9.232 5.49a1 1 0 0 1 0-1.415zM18 16s1.5 2 1.5 3.5c0 1-1 1.5-1.5 1.5s-1.5-.4-1.5-1.5C16.5 18 18 16 18 16z" fill="currentColor"/></svg>'  });
    }
};
