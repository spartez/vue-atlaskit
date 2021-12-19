import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Spreadsheet48Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#36B37E" d="M15.833 23.833h3.5a1.167 1.167 0 010 2.334h-3.5a1.167 1.167 0 010-2.334zm0 4.667h3.5a1.167 1.167 0 010 2.333h-3.5a1.167 1.167 0 110-2.333zm0 4.667h3.5a1.167 1.167 0 110 2.333h-3.5a1.167 1.167 0 010-2.333zm0 4.666h3.5a1.167 1.167 0 010 2.334h-3.5a1.167 1.167 0 010-2.334zm8.167-14h8.167a1.167 1.167 0 010 2.334H24a1.167 1.167 0 010-2.334zm0 4.667h8.167a1.167 1.167 0 010 2.333H24a1.167 1.167 0 110-2.333zm0 4.667h8.167a1.167 1.167 0 110 2.333H24a1.167 1.167 0 010-2.333zm0 4.666h8.167a1.167 1.167 0 010 2.334H24a1.167 1.167 0 010-2.334z"/></g></svg>'  });
    }
};
