import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'PriorityMajorIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M12.02 5.187L5.567 9.05A1 1 0 114.54 7.335l6.97-4.173a1 1 0 011.03.002l6.906 4.173A1 1 0 1118.41 9.05l-6.39-3.862z" fill="#FF5630"/><path d="M5.567 15.054a1 1 0 11-1.027-1.716l6.97-4.174a1 1 0 011.03.002l6.906 4.174a1 1 0 11-1.035 1.712l-6.39-3.863-6.454 3.865z" fill="#FF7452"/><path d="M5.567 21.068a1 1 0 11-1.027-1.716l6.97-4.174a1 1 0 011.03.002l6.906 4.174a1 1 0 11-1.035 1.712l-6.39-3.863-6.454 3.865z" fill="#FF8F73"/></svg>'  });
    }
};
