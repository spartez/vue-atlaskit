import IconWrapper from './IconWrapper';

export default {
    name: 'FeedbackIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M10.881 5.48l-8.426 6.829c-.396.32-.582.956-.413 1.417l.099.272c.168.462.726.829 1.227.82l1.131-.02 6.062-.102 3.652-.063c.51-.01.788-.385.616-.861l-2.923-8.03c-.105-.288-.324-.441-.567-.441a.731.731 0 0 0-.458.179zM4.98 15.953l1.754 4.818a1 1 0 1 0 1.879-.684l-1.539-4.228-2.094.094zm13.711-9.111l-2.819 1.026a1 1 0 1 0 .684 1.879l2.82-1.026a1 1 0 1 0-.685-1.88zm-1.792 3.845a1.006 1.006 0 0 0-.644.766 1.002 1.002 0 0 0 .811 1.159l2.955.52a1 1 0 0 0 1.122-1.301l-.017-.047a.997.997 0 0 0-.758-.621l-2.955-.521a.974.974 0 0 0-.514.045zm-.548-7.639l-1.929 2.298a1 1 0 0 0 1.532 1.286l1.928-2.298a1.001 1.001 0 0 0-.765-1.643.993.993 0 0 0-.766.357z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
