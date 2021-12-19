import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Video24Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm1 7.995v8.01c0 .54.446.995.995.995h8.01c.54 0 .995-.446.995-.995v-8.01c0-.54-.446-.995-.995-.995h-8.01C4.455 7 4 7.446 4 7.995zm15.16 7.943c.38.185.84-.066.84-.457V8.52c0-.39-.46-.642-.84-.457L16 9.592v4.817l3.16 1.53z"/></svg>'  });
    }
};
