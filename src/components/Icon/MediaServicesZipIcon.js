import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'MediaServicesZipIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><path d="M9 6.999C9 6.447 9.443 6 9.999 6H12v3H9.999A.996.996 0 019 8.001V6.999zM12 9h2.001c.552 0 .999.443.999.999v1.002a.996.996 0 01-.999.999H12V9zm-3 3.999c0-.552.443-.999.999-.999H12v3H9.999A.996.996 0 019 14.001v-1.002zM12 15h2.001c.552 0 .999.443.999.999v1.002a.996.996 0 01-.999.999H12v-3z" fill="inherit"/></g></svg>'  });
    }
};
