import IconWrapper from './IconWrapper';

export default {
    name: 'PowerpointPresentation24Icon',
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
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#CA5010" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm1.376 6.013A.437.437 0 0 0 4 6.446v11.15c0 .219.161.404.378.434l11.125 1.538a.437.437 0 0 0 .497-.434V4.868a.437.437 0 0 0-.499-.434L4.376 6.014zM17 7v10h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H17zM7.854 8.454h2.94c1.45 0 2.441.972 2.441 2.437 0 1.45-1.03 2.421-2.514 2.421H9.329V15.5H7.854V8.454zM9.33 9.665v2.451h1.07c.844 0 1.337-.43 1.337-1.22 0-.801-.483-1.231-1.333-1.231H9.33z"/></svg>' } });
    }
};
