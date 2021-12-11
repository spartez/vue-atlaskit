import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EmojiEmojiIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 21a9 9 0 110-18 9 9 0 010 18zm0-2a7 7 0 100-14 7 7 0 000 14zm-3.95-4.803c-.167-.477.102-.991.601-1.15.5-.159 1.039.099 1.205.575.06.174.225.487.495.796.426.488.956.764 1.649.764.693 0 1.223-.276 1.65-.764.27-.31.433-.622.494-.796.166-.476.706-.734 1.205-.575.499.159.768.673.602 1.15a4.38 4.38 0 01-.839 1.385C14.348 16.458 13.306 17 12 17s-2.348-.542-3.112-1.418a4.382 4.382 0 01-.839-1.385zM9.5 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
