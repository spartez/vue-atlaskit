import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'VidFullScreenOffIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M9 15.003v2.995a1 1 0 102 0v-3.896C11 13.494 10.507 13 9.9 13H6a1 1 0 000 2.003h3z" fill-rule="nonzero"/><path d="M3.74 20.294a.997.997 0 001.407.005l5.152-5.152a1 1 0 00-.005-1.407l-.034-.034a.997.997 0 00-1.407-.005l-5.152 5.152a1 1 0 00.005 1.407l.034.034z" fill-rule="nonzero"/><path d="M19.067 3.321L13.32 9.066a1.115 1.115 0 00.005 1.57l.036.037a1.112 1.112 0 001.571.005l5.747-5.744a1.116 1.116 0 00-.006-1.57l-.037-.037a1.117 1.117 0 00-1.57-.006z"/><path d="M13 6.002v3.896c0 .608.493 1.102 1.1 1.102H18a1 1 0 000-2.003h-3V6.002a1 1 0 10-2 0z"/></g></svg>'  });
    }
};
