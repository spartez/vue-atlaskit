import Vue from 'vue';
import IconWrapper from './IconWrapper';

export default (name, IconGlyph) => Vue.component(name, {
    props: {
        size: {
            type: String,
            default: 'medium'
        },
        primaryColor: {
            type: String,
            default: '#344563'
        },
        secondaryColor: {
            type: String,
            default: '#fff'
        }
    },
    render(h) {
        return h(
            IconWrapper,
            {
                props: { ...this.$props },
                style: { color: this.primaryColor, fill: this.secondaryColor },
                attrs: { }
            }, [
                h(IconGlyph)
            ]
        );
    }
});
