import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'BitbucketBranchesIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M19 11c0 1.3-.8 2.4-2 2.8V15c0 2.2-1.8 4-4 4h-2.2c-.4 1.2-1.5 2-2.8 2-1.7 0-3-1.3-3-3 0-1.3.8-2.4 2-2.8V8.8C5.9 8.4 5 7.3 5 6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.3-.8 2.4-2.1 2.8v6.4c.9.3 1.6.9 1.9 1.8H13c1.1 0 2-.9 2-2v-1.2c-1.2-.4-2-1.5-2-2.8 0-1.7 1.3-3 3-3s3 1.3 3 3zM8 5c-.5 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm8 7c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm-8 7c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
