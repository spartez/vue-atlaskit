import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'CalendarFilledIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M19 5h.005C20.107 5 21 5.895 21 6.994v12.012A1.994 1.994 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.006V6.994C3 5.893 3.892 5 4.995 5H5v1c0 1.112.895 2 2 2 1.112 0 2-.895 2-2V5h6v1c0 1.112.895 2 2 2 1.112 0 2-.895 2-2V5z" fill="currentColor"/><path fill="inherit" d="M7 13.001h2V11H7zm0 4h2V15H7zm4-4h2V11h-2zm0 4h2V15h-2zm4-4h2V11h-2zm0 4h2V15h-2z"/><path d="M16 6V5h2v1a1 1 0 0 1-2 0zm0-2a1 1 0 0 1 2 0v1h-2V4zM6 4a1 1 0 0 1 2 0v1H6V4zm0 2V5h2v1a1 1 0 0 1-2 0z" fill="currentColor"/></g></svg>'  });
    }
};
