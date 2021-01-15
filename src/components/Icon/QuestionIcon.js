import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'QuestionIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M12 18a1 1 0 0 1 0-2 1 1 0 0 1 0 2m-2-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path d="M15.89 8.048a3.971 3.971 0 0 0-2.951-2.94A4.005 4.005 0 0 0 8 9.087a.073.073 0 0 0 .009.008l1.878.022.112-.116A2.002 2.002 0 0 1 12 7c1.103 0 2 .897 2 2 0 1.102-.897 2-2 2h.008a1 1 0 0 0-.998.987v2.014a1 1 0 1 0 2 0v-.782c0-.217.145-.399.349-.472a3.991 3.991 0 0 0 2.53-4.699"/></g></svg>'  });
    }
};
