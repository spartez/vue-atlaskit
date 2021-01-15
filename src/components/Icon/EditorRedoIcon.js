import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorRedoIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M6.72 15h1.5c0-2.513 1.821-4.5 4-4.5 1.338 0 2.54.75 3.27 1.908l-2.03 1.172c-.24.14-.219.325.029.41l2.73.93.001.08v-.08l1.372.467a.42.42 0 0 0 .559-.323l.841-4.25c.052-.267-.107-.366-.341-.23l-1.862 1.075C15.801 10.055 14.124 9 12.22 9c-3.037 0-5.492 2.687-5.5 6z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
