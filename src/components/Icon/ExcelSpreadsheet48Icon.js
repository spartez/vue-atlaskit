import IconWrapper from './IconWrapper';

export default {
    name: 'ExcelSpreadsheet48Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 0 1 2.52 1.072l11.994 12.45a3.5 3.5 0 0 1 .979 2.429V60a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 60V4A3.5 3.5 0 0 1 4 .5z"/><path fill="#007442" d="M15.043 25.024l13.125-1.862a.438.438 0 0 1 .499.433v16.812a.438.438 0 0 1-.498.433l-13.125-1.814a.438.438 0 0 1-.377-.433V25.457c0-.217.16-.402.376-.433zm14.79 1.143h3a.5.5 0 0 1 .5.5v10.666a.5.5 0 0 1-.5.5h-3V26.167zm-11.748 9.916h1.857l1.788-2.785h.103l1.766 2.785h1.96l-2.666-4.113 2.705-4.107h-1.925l-1.732 2.877h-.102l-1.715-2.877h-2.022l2.609 4.079-2.626 4.141z"/></g></svg>' } });
    }
};
