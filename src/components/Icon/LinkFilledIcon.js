import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'LinkFilledIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M11.75 16.15l.548-.537a.585.585 0 000-.838.61.61 0 00-.854 0l-.574.564c-.564.553-1.483.662-2.101.168a1.482 1.482 0 01-.119-2.223l1.694-1.663a1.543 1.543 0 012.156 0l.647.635.853-.839-.646-.635a2.775 2.775 0 00-3.863 0l-1.694 1.664a2.659 2.659 0 00.208 3.979c1.104.884 2.738.715 3.746-.275" fill="inherit"/><path d="M12.25 7.85l-.547.537a.585.585 0 000 .838.61.61 0 00.853 0l.574-.564c.564-.553 1.483-.662 2.101-.168.71.57.75 1.603.119 2.223l-1.694 1.663a1.543 1.543 0 01-2.156 0l-.647-.635-.853.839.646.635a2.775 2.775 0 003.863 0l1.695-1.664a2.659 2.659 0 00-.209-3.979c-1.104-.884-2.738-.715-3.746.275" fill="inherit"/></g></svg>'  });
    }
};
