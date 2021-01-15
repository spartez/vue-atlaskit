import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorStrikethroughIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.58 11H6a1 1 0 0 0 0 2h6.327c1.295.34 1.847.822 1.847 1.642 0 .958-.872 1.648-2.075 1.648-1.008 0-1.779-.398-2.127-1.056-.19-.361-.522-.624-.93-.624h-.16c-.484 0-.868.46-.731.925C8.602 17.068 10.013 18 11.986 18 14.464 18 16 16.614 16 14.388c0-.532-.081-.991-.253-1.388H18a1 1 0 0 0 0-2h-5.556l-.564-.145c-1.268-.324-1.784-.775-1.784-1.544 0-.975.778-1.608 1.953-1.608.871 0 1.544.383 1.86 1.027.174.356.499.612.894.612h.145c.486 0 .875-.463.729-.927C15.221 6.958 13.846 6 12.057 6 9.77 6 8.255 7.378 8.255 9.453c0 .597.107 1.11.325 1.547z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
