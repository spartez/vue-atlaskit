import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorWarningIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M13.31 5.343l7.359 13.17A1 1 0 0 1 19.796 20H4.204a1 1 0 0 1-.873-1.488l7.36-13.169a1.5 1.5 0 0 1 2.618 0zM12 8.5a1.091 1.091 0 0 0-1.081 1.239l.513 3.766a.573.573 0 0 0 1.136 0l.513-3.766A1.091 1.091 0 0 0 12 8.5zm0 8.63a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
