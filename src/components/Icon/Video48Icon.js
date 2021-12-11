import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Video48Icon',
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
    render() {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#FF5630" d="M14.667 27.161c0-.549.443-.994.994-.994h9.678c.549 0 .994.443.994.994v9.678a.993.993 0 01-.994.994H15.66a.993.993 0 01-.994-.994V27.16zm17.686 9.434l-3.686-1.784v-5.62l3.686-1.786c.444-.215.98.078.98.533v8.124c0 .455-.536.748-.98.533z"/></g></svg>' });
    }
};
