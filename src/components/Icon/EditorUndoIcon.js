import IconWrapper from './IconWrapper';

export default {
    name: 'EditorUndoIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.931 11.658C9.92 10.055 11.596 9 13.5 9c3.038 0 5.492 2.686 5.5 6h-1.5c0-2.513-1.821-4.5-4-4.5-1.337 0-2.54.749-3.27 1.908l2.03 1.172c.24.139.22.325-.029.41l-2.73.93L9.5 15v-.08l-1.372.467a.422.422 0 0 1-.559-.323l-.84-4.251c-.053-.266.106-.365.34-.23l1.862 1.075z" fill="currentColor"/></svg>' } });
    }
};
