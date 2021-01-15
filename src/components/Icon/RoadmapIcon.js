import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'RoadmapIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 2h10a3 3 0 0 1 0 6H6a3 3 0 1 1 0-6zm0 2a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H6zm4 5h8a3 3 0 0 1 0 6h-8a3 3 0 0 1 0-6zm0 2a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-8zm-4 5h6a3 3 0 0 1 0 6H6a3 3 0 0 1 0-6zm0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H6z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
