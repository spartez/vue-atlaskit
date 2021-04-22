import IconWrapper from './IconWrapper';

export default {
    name: 'ExcelSpreadsheet24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#007442" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm1.376 6.013A.437.437 0 0 0 4 6.446v11.15c0 .219.161.404.378.434l11.125 1.538a.437.437 0 0 0 .497-.434V4.868a.437.437 0 0 0-.499-.434L4.376 6.014zM17 7v10h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H17zM6.93 15.5l2.25-3.55-2.236-3.496h1.734l1.47 2.466h.087l1.485-2.466h1.65l-2.32 3.52 2.286 3.526h-1.68l-1.513-2.388h-.088L8.52 15.5H6.93z"/></svg>' } });
    }
};
