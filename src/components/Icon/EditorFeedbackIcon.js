import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorFeedbackIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M10.922 14.517L5.87 12.68l-.932-.339C4.418 12.151 4 11.552 4 11c0-.556.42-1.153.938-1.341l9.124-3.318c.52-.19.938.105.938.654v8.01c0 .54-.42.842-.938.654l-3.14-1.142zM6 14.227l2 .728V17c0 .552-.405 1.202-.895 1.447l-.21.106C6.4 18.8 6 18.549 6 18.009v-3.782zm11.224-4.78a.5.5 0 11-.448-.894l2-1a.5.5 0 11.448.894l-2 1zm-.448 4a.5.5 0 01.448-.894l2 1a.5.5 0 01-.448.894l-2-1zM17 11.5a.5.5 0 110-1h3a.5.5 0 110 1h-3z" fill="currentColor"/></svg>'  });
    }
};
