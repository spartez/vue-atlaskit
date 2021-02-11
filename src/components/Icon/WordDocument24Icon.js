import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'WordDocument24Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path fill="#004E8C" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm1.376 6.013A.437.437 0 004 6.446v11.15c0 .219.161.404.378.434l11.125 1.538a.437.437 0 00.497-.434V4.868a.437.437 0 00-.499-.434L4.376 6.014zm5.629 5.324L8.687 16H7.295L5.43 8.954h1.533l1.099 4.966h.078l1.284-4.966h1.245l1.309 4.966h.078l1.089-4.966h1.523L12.798 16h-1.382l-1.333-4.663h-.078zM17 7v10h2.5a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H17z"/></svg>'  });
    }
};
