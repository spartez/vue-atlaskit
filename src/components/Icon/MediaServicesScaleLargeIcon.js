import IconWrapper from './IconWrapper';

export default {
    name: 'MediaServicesScaleLargeIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 6.007v11.986C5 18.55 5.45 19 6.007 19h11.986C18.55 19 19 18.55 19 17.993V6.007C19 5.45 18.55 5 17.993 5H6.007C5.45 5 5 5.45 5 6.007zm-2 0A3.006 3.006 0 0 1 6.007 3h11.986A3.006 3.006 0 0 1 21 6.007v11.986A3.006 3.006 0 0 1 17.993 21H6.007A3.006 3.006 0 0 1 3 17.993V6.007z" fill-rule="nonzero"/><path d="M11.005 17H16.5c.27 0 .5-.228.5-.509v-1.634a.725.725 0 0 0-.167-.44L14.5 11.85a.238.238 0 0 0-.344-.006L11 15l-.821-.821a.248.248 0 0 0-.358 0l-2.465 2.465c-.195.195-.136.356.135.356h3.514z"/><circle cx="9" cy="9" r="2"/></g></svg>' } });
    }
};
