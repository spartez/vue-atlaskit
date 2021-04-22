import IconWrapper from './IconWrapper';

export default {
    name: 'SourceCode48Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 0 1 2.52 1.072l11.994 12.45a3.5 3.5 0 0 1 .979 2.429V60a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 60V4A3.5 3.5 0 0 1 4 .5z"/><path fill="#00B8D9" d="M26.514 22.73c.609.21.933.874.723 1.483L21.603 40.6a1.166 1.166 0 1 1-2.206-.76l5.634-16.385c.21-.61.874-.934 1.483-.724zm-7.161 9.579a1.168 1.168 0 0 1-1.624 1.675l-3.875-3.755a1.167 1.167 0 0 1 0-1.675l4.13-4.004a1.165 1.165 0 1 1 1.624 1.675l-3.265 3.166 3.01 2.918zm14.256 1.83a1.167 1.167 0 0 1 0 1.675l-4.13 4.004a1.167 1.167 0 1 1-1.624-1.676l3.265-3.166-3.01-2.918a1.168 1.168 0 0 1 1.624-1.675l3.875 3.755z"/></g></svg>' } });
    }
};
