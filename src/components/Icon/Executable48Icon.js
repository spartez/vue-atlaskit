import IconWrapper from './IconWrapper';

export default {
    name: 'Executable48Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 0 1 2.52 1.072l11.994 12.45a3.5 3.5 0 0 1 .979 2.429V60a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 60V4A3.5 3.5 0 0 1 4 .5z"/><path fill="#5E6C84" d="M15.833 33.167l1.058-8.458a1 1 0 0 1 .992-.876h12.234a1 1 0 0 1 .992.876l1.058 8.458v6a1 1 0 0 1-1 1H16.833a1 1 0 0 1-1-1v-6zm3.334 2.333a1 1 0 0 0-1 1v.333a1 1 0 0 0 1 1h9.666a1 1 0 0 0 1-1V36.5a1 1 0 0 0-1-1h-9.666z"/></g></svg>' } });
    }
};
