import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Figma16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.165 0C.97 0 0 .97 0 2.165v11.67C0 15.03.97 16 2.165 16h11.67C15.03 16 16 15.03 16 13.835V2.165C16 .97 15.03 0 13.835 0H2.165zm5.837 11.342a1.67 1.67 0 11-1.67-1.671 1.67 1.67 0 010-3.342 1.67 1.67 0 010-3.342h3.34a1.67 1.67 0 010 3.342h-1.67v1.667a1.67 1.67 0 110 .008v3.338z" fill="#5243AA"/></svg>'  });
    }
};
