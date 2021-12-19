import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Image48Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#FFAB00" d="M21.667 37.833l6.258-6.258a1 1 0 011.447.034l3.961 4.358v4.2H14.667l3.96-3.96a1 1 0 011.413 0l1.627 1.626zm-3.89-7.777a3.111 3.111 0 110-6.223 3.111 3.111 0 010 6.223z"/></g></svg>'  });
    }
};
