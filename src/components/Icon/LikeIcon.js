import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'LikeIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M4 12v7a.971.971 0 00.278.704.99.99 0 00.701.296H6v-9H4.98a.99.99 0 00-.701.296A.971.971 0 004 12zm15.281-.96a3.046 3.046 0 00-2.321-1.061h-2.634c.04-.181.08-.36.11-.532.515-2.934 0-4-.504-4.594A2.432 2.432 0 0012.075 4a3.078 3.078 0 00-2.968 2.751c-.393 1.839-.454 2-.968 2.725l-.768 1.089a2.011 2.011 0 00-.363 1.141v6.273c.001.532.216 1.041.596 1.416s.896.585 1.433.584h7.247a3.014 3.014 0 002.997-2.507l.677-4a2.963 2.963 0 00-.677-2.432zm-1.998 6.1a1.007 1.007 0 01-1 .835H9.038v-6.269l.767-1.089a7.577 7.577 0 001.302-3.509c.036-.543.255-1.209.969-1.108.714.1.575 1.916.363 3.1a19.712 19.712 0 01-.868 2.882l5.39-.008c.297-.001.58.128.773.352a.993.993 0 01.226.813l-.676 4.001z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
