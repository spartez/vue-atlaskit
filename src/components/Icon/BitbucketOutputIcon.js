import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'BitbucketOutputIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M7 15v1.994C7 18.103 7.898 19 9.006 19h9.988A2.005 2.005 0 0021 16.994V7.006A2.005 2.005 0 0018.994 5H9.006A2.005 2.005 0 007 7.006V9h2.003c0-1.175.002-2 .003-2 0 0 9.994.002 9.994.006 0 0-.002 9.994-.006 9.994 0 0-9.994-.002-9.994-.006V15H7z" fill-rule="nonzero"/><path d="M8 6h12v3H8zM4.291 9.293l-1.994 1.995a1 1 0 000 1.423l1.994 1.997a1.001 1.001 0 001.413 0c.39-.391.39-1.025 0-1.415L4.412 12l1.292-1.293a1 1 0 00-1.413-1.414z"/><rect x="3" y="11" width="12" height="2" rx="1"/></g></svg>'  });
    }
};
