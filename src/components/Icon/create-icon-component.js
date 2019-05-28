import Vue from 'vue';
import IconWrapper from './IconWrapper';

export default (name, IconGlyph) => Vue.component(name, {
    props: {
        size: {
            type: String,
            default: 'medium'
        }
    },
    render(h) {
        return h(
            IconWrapper,
            {
                props: { size: this.size },
                attrs: { }
            }, [
                h(IconGlyph)
            ]
        );
    }
});
