import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Changes24Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FFAB00" fill-rule="evenodd" d="M16.587 15H5a1 1 0 000 2h11.591l-1.298 1.296a1.001 1.001 0 001.414 1.416l3.005-3.001a1.002 1.002 0 000-1.415l-3.005-3.003a.999.999 0 10-1.414 1.414L16.587 15zM7.418 7l1.294-1.293a.999.999 0 10-1.414-1.414L4.293 7.296a1 1 0 000 1.415l3.005 3a1 1 0 001.414-1.415L7.414 9H19a1 1 0 000-2H7.418zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3z"/></svg>' });
    }
};
