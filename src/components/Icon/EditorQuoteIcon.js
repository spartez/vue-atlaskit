import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorQuoteIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.698 17C16.97 17 18 15.982 18 14.727c0-1.255-1.03-2.273-2.302-2.273-2.301 0-.767-4.393 2.302-4.393V7c-5.478 0-7.624 10-2.302 10zm-4.33-2.273c0-1.255-1.031-2.273-2.301-2.273-2.302 0-.768-4.393 2.301-4.393V7C5.891 7 3.744 17 9.067 17c1.27 0 2.301-1.018 2.301-2.273z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
