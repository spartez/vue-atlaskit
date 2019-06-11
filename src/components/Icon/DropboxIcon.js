import IconWrapper from './IconWrapper';

export default {
    name: 'DropboxIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M16.19 2l-4.216 3.494 5.812 3.608L22 5.77 16.19 2zM2 5.958l4.162 3.214 5.812-3.678-3.992-3.492L2 5.958zm14.01 12.355l-.014-.986-3.994-2.975-3.833 2.934-.036.057-2.113-1.278v2.115l5.977 3.824 5.93-3.824v-2.037l-1.917 1.17v1zM6.15 9.179l-4.143 3.352 3.604 2.166.002-.002.785.476 1.585.952 2.652-2.014 1.328-1.017.004.004.007-.004.021.016.014-.016 3.156 2.348.921.68 5.91-3.593-4.21-3.422-5.809 3.681L6.151 9.18zm11.636-.074l.001-.003h-.002l.001.003z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
