import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'CameraRotateIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="2" y="5" width="20" height="16" rx="2"/><path d="M8 4c0-.552.453-1 .997-1h6.006c.55 0 .997.444.997 1v1H8V4z" fill="currentColor"/><circle fill="inherit" cx="12" cy="17" r="1"/><path d="M16.9 14a5 5 0 10-4.9 4v-2a3 3 0 112.83-2h2.07z" fill="inherit" fill-rule="nonzero"/><path d="M13.292 12.291a1.004 1.004 0 000 1.415l1.997 1.996c.197.197.453.298.712.298.254 0 .511-.099.711-.298l1.995-1.996a1 1 0 10-1.414-1.415L16 13.585l-1.294-1.294a1 1 0 00-1.414 0z" fill="inherit"/></g></svg>' });
    }
};
