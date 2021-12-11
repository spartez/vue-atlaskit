import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'BitbucketCloneIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M8 3.998H4.995A2.003 2.003 0 003 6.008v7.983c0 1.107.893 2.008 1.995 2.008h14.01A2.001 2.001 0 0021 13.991V6.007a2.004 2.004 0 00-1.995-2.008H16v2h3v8H5v-8h3v-2z" fill-rule="nonzero"/><path d="M10 16.998h4v3h-4z"/><path d="M9 19.998a1 1 0 01.99-1h4.02c.546 0 .99.444.99 1v1H9v-1zm.292-11.707a1.004 1.004 0 000 1.415l1.997 1.996c.197.197.453.298.712.298.254 0 .511-.099.711-.298l1.995-1.996a1 1 0 10-1.414-1.415L12 9.585l-1.294-1.294a1 1 0 00-1.414 0z"/><rect x="11" y="2.998" width="2" height="7" rx="1"/></g></svg>' });
    }
};
