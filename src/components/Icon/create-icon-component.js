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
        console.log(this.size);
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
