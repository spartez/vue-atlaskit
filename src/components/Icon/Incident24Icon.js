import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Incident24Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M8.829 12l-.906 3h8.154l-.906-3H8.83zm.604-2h5.134l-1.61-5.332a1 1 0 00-1.914 0L9.433 10zM17 17H6a1 1 0 00-1 1v2h14v-2a1 1 0 00-1-1h-1zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3z"/></svg>'  });
    }
};
