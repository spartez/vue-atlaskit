import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'QueuesIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M19 5h.006C20.107 5 21 5.895 21 6.994v12.012A1.995 1.995 0 0 1 19.006 21H6.994A1.995 1.995 0 0 1 5 19.006V19h13c.555 0 1-.448 1-1V5zM3 5.006C3 3.898 3.897 3 5.006 3h9.988C16.102 3 17 3.897 17 5.006v9.988A2.005 2.005 0 0 1 14.994 17H5.006A2.005 2.005 0 0 1 3 14.994V5.006zM5 5v10h10V5H5zm1 3c0-.552.453-1 .997-1h6.006c.55 0 .997.444.997 1 0 .552-.453 1-.997 1H6.997A.996.996 0 0 1 6 8zm0 3c0-.552.453-1 .997-1h6.006c.55 0 .997.444.997 1 0 .552-.453 1-.997 1H6.997A.996.996 0 0 1 6 11z" fill="currentColor"/></svg>'  });
    }
};
