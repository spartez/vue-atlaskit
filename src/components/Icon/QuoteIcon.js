import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'QuoteIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M16.051 6c-1.571 0-2.847 1.312-2.847 2.93 0 1.617 1.276 2.93 2.847 2.93 2.699 0 1.135 5.088-2.269 5.618a.68.68 0 00-.578.671c0 .416.372.745.784.682 6.187-.938 8.387-12.83 2.063-12.83M7.848 6C6.275 6 5 7.311 5 8.93c0 1.616 1.275 2.928 2.848 2.928 2.698 0 1.134 5.09-2.27 5.62a.68.68 0 00-.578.67c0 .416.372.745.783.682C11.972 17.892 14.172 6 7.848 6" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
