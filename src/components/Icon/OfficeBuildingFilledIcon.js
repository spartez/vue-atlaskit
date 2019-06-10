import IconWrapper from './IconWrapper';

export default {
    name: 'OfficeBuildingFilledIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M8 6H5.009C3.902 6 3 6.962 3 8.15v10.7C3 20.04 3.9 21 5.009 21h5.487H8V6z" fill="currentColor" fill-rule="nonzero"/><path fill="inherit" d="M6 10h2v2H6zm0 3h2v2H6z"/><path d="M9 4.995C9 3.893 9.902 3 11.009 3h7.982C20.101 3 21 3.893 21 4.995v14.01A2.004 2.004 0 0 1 18.991 21H9V4.995z" fill="currentColor"/><path fill="inherit" d="M12 7h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zm2 3h2v3h-2zm2-9h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"/></g></svg>' } });
    }
};
