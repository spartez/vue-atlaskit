import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'PowerpointPresentation48Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#CA5010" d="M15.043 25.024l13.125-1.862a.438.438 0 01.499.433v16.812a.438.438 0 01-.498.433l-13.125-1.814a.438.438 0 01-.377-.433V25.457c0-.217.16-.402.376-.433zm14.79 1.143h3a.5.5 0 01.5.5v10.666a.5.5 0 01-.5.5h-3V26.167zm-10.67 1.696v8.22h1.721v-2.552h1.623c1.732 0 2.934-1.133 2.934-2.825 0-1.71-1.156-2.843-2.848-2.843h-3.43zm1.721 1.413h1.253c.991 0 1.555.501 1.555 1.435 0 .923-.575 1.425-1.56 1.425h-1.248v-2.86z"/></g></svg>' });
    }
};
