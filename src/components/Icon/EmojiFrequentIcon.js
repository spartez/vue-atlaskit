import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EmojiFrequentIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 4c-4.412 0-8 3.588-8 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8zm0 14.222A6.23 6.23 0 015.778 12 6.23 6.23 0 0112 5.778 6.23 6.23 0 0118.222 12 6.23 6.23 0 0112 18.222zm.889-6.59V8.448c0-.489-.4-.889-.889-.889s-.889.4-.889.89v3.555c0 .248.103.471.268.633l2.195 2.194a.891.891 0 001.257 0 .891.891 0 000-1.256l-1.942-1.943z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
