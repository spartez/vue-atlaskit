import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EmojiAddIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.049 14.197c-.166-.476.103-.991.602-1.15.5-.159 1.039.098 1.205.575.06.174.225.487.495.796.426.488.955.764 1.649.764.693 0 1.223-.276 1.65-.764.27-.31.433-.622.494-.796.166-.476.706-.734 1.204-.575.5.159.77.673.603 1.15-.13.371-.395.876-.839 1.385C14.348 16.458 13.306 17 12 17s-2.348-.542-3.112-1.418a4.382 4.382 0 01-.839-1.385zM9.5 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19 5h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V7h-1a1 1 0 010-2h1V4a1 1 0 012 0v1zm-5-1.777V5.29A7 7 0 1018.71 10h2.067A9 9 0 1114 3.223z" fill="currentColor"/></svg>'  });
    }
};
