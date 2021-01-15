import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'PeopleIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><circle cx="16" cy="9" r="3"/><circle cx="8" cy="6" r="3"/><path d="M11 15c0-1.105.887-2 2-2h6c1.105 0 2 .885 2 2v3.73c0 3.027-10 3.027-10 0V15z"/><path d="M13 12a1.997 1.997 0 0 0-2-2H5c-1.113 0-2 .897-2 2.003v3.826c0 1.921 4.054 2.518 7 1.984v-2.807A3.001 3.001 0 0 1 12.997 12H13z"/></g></svg>'  });
    }
};
