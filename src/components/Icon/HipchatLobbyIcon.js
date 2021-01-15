import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'HipchatLobbyIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 14a7.002 7.002 0 0 1 13.858 0H5z"/><rect x="4" y="15" width="16" height="2" rx="1"/><path d="M11 7h2v3h-2z"/><rect x="10" y="6" width="4" height="1" rx=".5"/></g></svg>'  });
    }
};
