import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'BitbucketReposIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 5v14h14V5H5zm0-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" fill-rule="nonzero"/><path d="M9.232 8.306l-2.93 2.954a1.056 1.056 0 000 1.478l2.93 2.956a1.034 1.034 0 001.465 0 1.05 1.05 0 000-1.478L8.5 11.999l2.197-2.217a1.048 1.048 0 000-1.476A1.024 1.024 0 009.965 8c-.267 0-.53.101-.733.306zm4.072-.001a1.05 1.05 0 000 1.478L15.5 12l-2.196 2.217a1.05 1.05 0 000 1.477c.404.408 1.06.408 1.464 0l2.93-2.955a1.054 1.054 0 000-1.478l-2.93-2.956a1.031 1.031 0 00-1.464 0z"/></g></svg>' });
    }
};
