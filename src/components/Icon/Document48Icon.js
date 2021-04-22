import IconWrapper from './IconWrapper';

export default {
    name: 'Document48Icon',
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
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 0 1 2.52 1.072l11.994 12.45a3.5 3.5 0 0 1 .979 2.429V60a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 60V4A3.5 3.5 0 0 1 4 .5z"/><path fill="#2684FF" d="M14.667 39c0-.644.531-1.167 1.161-1.167h9.344c.641 0 1.161.518 1.161 1.167 0 .644-.531 1.167-1.161 1.167h-9.344A1.161 1.161 0 0 1 14.667 39zm0-4.667c0-.644.518-1.166 1.167-1.166h16.332c.645 0 1.167.518 1.167 1.166 0 .645-.518 1.167-1.167 1.167H15.834a1.164 1.164 0 0 1-1.167-1.167zm0-4.666c0-.645.518-1.167 1.167-1.167h16.332c.645 0 1.167.518 1.167 1.167 0 .644-.518 1.166-1.167 1.166H15.834a1.164 1.164 0 0 1-1.167-1.166zm0-4.667c0-.644.518-1.167 1.167-1.167h16.332c.645 0 1.167.518 1.167 1.167 0 .644-.518 1.167-1.167 1.167H15.834A1.164 1.164 0 0 1 14.667 25z"/></g></svg>' } });
    }
};
