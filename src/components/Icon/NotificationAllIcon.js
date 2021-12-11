import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'NotificationAllIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11.384 5.478A5.036 5.036 0 0114.954 4c.972 0 1.945.28 2.788.839.02-.026.043-.05.066-.074a1.01 1.01 0 111.354 1.494 5.048 5.048 0 01-.64 6.356l-.725.725c-.782.783-1.813 2.21-2.312 3.207l-1.509 3.016c-.249.5-.773.584-1.171.187l-8.556-8.555c-.397-.397-.308-.924.187-1.172l3.017-1.508c.989-.494 2.42-1.526 3.206-2.312l.725-.725z" fill-rule="nonzero"/><path d="M7.924 3.618l.401.968a1 1 0 11-1.848.765l-.4-.968a1 1 0 111.848-.765M4.383 6.076l.968.401a1.001 1.001 0 01-.766 1.848l-.968-.4a1.001 1.001 0 01.766-1.848m11.835 11.999a1.003 1.003 0 00-.542 1.307l.402.968a1 1 0 101.848-.766l-.401-.967a1 1 0 00-1.307-.542zm1.859-1.857a1 1 0 00.54 1.306l.969.401a1.001 1.001 0 00.766-1.848l-.97-.401a1 1 0 00-1.306.542zm-11.592 1.45a2 2 0 002.829 0l-2.829-2.83a2 2 0 000 2.83z"/></g></svg>' });
    }
};
