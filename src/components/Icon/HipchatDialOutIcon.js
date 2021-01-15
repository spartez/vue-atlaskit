import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'HipchatDialOutIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M7.794 5.364c-1.726 2.133-.611 4.957.266 7.089.416 1.012 1.073 2.025 1.629 2.84.973 1.424 3.189 4.13 5.901 3.722 1.168-.176 2.527-1.555 1.597-2.436l-1.869-1.94s-.523-.436-1.171-.08l-1.048.613s-.428.202-.799-.275c-1.163-1.371-1.995-2.797-2.578-4.496-.227-.663.168-.828.168-.828l.767-.45c.637-.378.524-1.051.524-1.051l-.438-2.738c-.132-.568-.601-.803-1.145-.803-.648 0-1.4.334-1.804.833z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
