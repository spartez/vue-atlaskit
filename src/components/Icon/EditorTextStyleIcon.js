import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorTextStyleIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M6.26 6.678l-3.237 9.534a.5.5 0 0 0 .473.66h1.032a.75.75 0 0 0 .717-.53l.648-2.107H9.63l.647 2.107a.75.75 0 0 0 .717.53h1.113a.5.5 0 0 0 .473-.66L9.337 6.677A1 1 0 0 0 8.39 6H7.207a1 1 0 0 0-.947.678zM7.736 8.08h.051l1.364 4.453H6.372L7.736 8.08zm11.113 2.043v-.327a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v6.078a1 1 0 0 1-1 1h-.151a1 1 0 0 1-1-1v-.312h-.088c-.392.874-1.232 1.439-2.418 1.439-1.975 0-3.221-1.613-3.221-4.182 0-2.546 1.254-4.15 3.221-4.15 1.172 0 2.026.595 2.418 1.454h.088zm-.045 2.712c0-1.47-.685-2.404-1.754-2.404-1.068 0-1.725.92-1.725 2.404 0 1.491.657 2.395 1.725 2.395 1.076 0 1.754-.911 1.754-2.395z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
