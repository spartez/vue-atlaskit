import IconWrapper from './IconWrapper';

export default {
    name: 'VidAudioMutedIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M13.293 14.707A2.998 2.998 0 0 1 9 12.003v-1.589l-1-1v2.592A4.004 4.004 0 0 0 12 16a3.98 3.98 0 0 0 2.031-.554l-.738-.739zm2.183 2.183A5.974 5.974 0 0 1 13 17.917v2.074a1 1 0 1 1-2 0v-2.074c-2.838-.478-5-2.951-5-5.91V9a1 1 0 0 1 .65-.937L3.704 5.12a.996.996 0 0 1 .002-1.413.996.996 0 0 1 1.413-.002L20.123 18.71a.996.996 0 0 1-.002 1.412.996.996 0 0 1-1.412.002l-3.233-3.233zM9.186 4.958A3.004 3.004 0 0 1 12 3c1.657 0 3 1.342 3 2.997v4.775L9.186 4.958zm8.608 8.608L16 11.772V9a1 1 0 0 1 2 0v3.006c0 .54-.072 1.063-.206 1.56z" fill="currentColor"/></svg>' } });
    }
};
