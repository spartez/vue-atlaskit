import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'RedoIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M4.101 13.569c-.247.5-.026 1.095.493 1.333.52.237 1.142.025 1.388-.473C7.011 12.351 9.193 11 11.63 11c2.266 0 4.319 1.167 5.425 3.021.286.479.922.645 1.421.371a.98.98 0 00.386-1.366C17.389 10.557 14.65 9 11.63 9c-3.247 0-6.158 1.802-7.529 4.569z"/><path d="M17.497 10v3h-2.995a1 1 0 100 2h3.896c.608 0 1.102-.493 1.102-1.1V10a1.001 1.001 0 00-2.003 0z"/></g></svg>'  });
    }
};
