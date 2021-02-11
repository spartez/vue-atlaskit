import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'VidVolumeHalfIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.121 8.024l5.073-3.92A.5.5 0 0114 4.5v14.964a.5.5 0 01-.806.395l-4.962-3.835H3.999c-.552 0-.999-.453-.999-.997V9.022c0-.551.441-.998.999-.998h2.606l.036.001h1.48zm7.426 2.53c-.372-.202-.522-.69-.335-1.09.188-.4.64-.561 1.012-.36 1.133.614 1.745 1.606 1.745 2.88 0 1.27-.61 2.265-1.738 2.893-.37.206-.824.05-1.015-.349-.19-.398-.046-.887.324-1.093.645-.358.922-.812.922-1.452 0-.637-.274-1.082-.915-1.43z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
