import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'VidPlayIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.595 19.522C7.162 20.364 6 19.702 6 18.04V5.963C6 4.3 7.158 3.635 8.595 4.479l11.083 6.51c.951.559.958 1.46 0 2.023l-11.083 6.51z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
