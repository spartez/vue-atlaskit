import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'ImageBorderIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M3 17v3.41c0 .326.262.59.59.59H7v-2H5v-2H3zm16 0v2h-2v2h3.41c.328 0 .59-.264.59-.59V17h-2zM3.59 3a.589.589 0 0 0-.59.59V7h2V5h2V3H3.59zM17 3v2h2v2h2V3.59a.589.589 0 0 0-.59-.59H17zm-3 2h2V2.999h-2V5zM8 5h5V2.999H8V5zm11 5h2.001V8H19v2zM3 12h2V8H3v4zm16 4h2.001v-5H19v5zM3 16h2v-3H3v3zm9 5h4v-2h-4v2zm-4 0h3v-2H8v2z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
