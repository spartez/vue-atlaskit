import IconWrapper from './IconWrapper';

export default {
    name: 'EditorCodeIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M10.208 7.308a1.09 1.09 0 0 1 0 1.483l-3.515 3.71 3.515 3.708a1.09 1.09 0 0 1 0 1.483.957.957 0 0 1-1.405 0l-3.866-4.08a1.635 1.635 0 0 1 0-2.225l3.866-4.08a.957.957 0 0 1 1.405 0zm3.584 0a.957.957 0 0 1 1.405 0l3.866 4.08c.583.614.583 1.61 0 2.225l-3.866 4.08a.957.957 0 0 1-1.405 0 1.09 1.09 0 0 1 0-1.484l3.515-3.708-3.515-3.71a1.09 1.09 0 0 1 0-1.483z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
