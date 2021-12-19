import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Sketch48Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#FF8B00" d="M24.034 41.333c-.336 0-.655-.144-.876-.396l-8.2-9.334a1.167 1.167 0 01-.095-1.418l3.12-4.667a1.17 1.17 0 01.97-.518h10.314c.403 0 .778.209.991.55l2.9 4.667c.27.436.225.997-.111 1.383l-8.133 9.333a1.17 1.17 0 01-.877.4h-.003z"/></g></svg>'  });
    }
};
