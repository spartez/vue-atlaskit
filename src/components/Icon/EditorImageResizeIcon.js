import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorImageResizeIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M15 9.707V11h1V8h-3v1h1.293L9 14.293V13H8v3h3v-1H9.707L15 9.707zM6 6.5c0-.276.229-.5.5-.5h11c.276 0 .5.229.5.5v11c0 .276-.229.5-.5.5h-11a.504.504 0 01-.5-.5v-11z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
