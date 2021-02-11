import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'BitbucketBuildsIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M10 5a1 1 0 00.997 1h3.006a1 1 0 000-2h-3.006C10.45 4 10 4.45 10 5zM8 5c0-1.657 1.347-3 2.997-3h3.006a3 3 0 010 6h-3.006A3 3 0 018 5zm2 7a1 1 0 00.997 1h3.006a1 1 0 000-2h-3.006c-.547 0-.997.45-.997 1zm-2 0c0-1.657 1.347-3 2.997-3h3.006a3 3 0 010 6h-3.006A3 3 0 018 12zm2 7a1 1 0 00.997 1h3.006a1 1 0 000-2h-3.006c-.547 0-.997.45-.997 1zm-2 0c0-1.657 1.347-3 2.997-3h3.006a3 3 0 010 6h-3.006A3 3 0 018 19z"/><path d="M16.062 6h2.415c.812 0 1.472.66 1.472 1.47v1.954c0 .815-.654 1.47-1.475 1.47H16v2h2.474a3.466 3.466 0 003.475-3.47V7.47A3.472 3.472 0 0018.477 4h-2.415v2zm-7.175 5H6.472A3.472 3.472 0 003 14.47v1.954c0 1.92 1.55 3.47 3.474 3.47H8.95v-2H6.474c-.82 0-1.474-.655-1.474-1.47V14.47c0-.81.66-1.47 1.472-1.47h2.415v-2z"/></g></svg>'  });
    }
};
