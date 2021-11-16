import { h } from 'vue';
import { s as script } from './IconWrapper-76cd3b73.js';

var Clear = {
  name: 'EditorErrorIcon',
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
    return h(script, { ...this.$props,
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M13.485 11.929l2.122-2.121a1 1 0 00-1.415-1.415l-2.12 2.122L9.95 8.393a1 1 0 00-1.414 1.415l2.12 2.12-2.12 2.122a1 1 0 001.414 1.414l2.121-2.12 2.121 2.12a1 1 0 101.415-1.414l-2.122-2.121zM12 20a8 8 0 110-16 8 8 0 010 16z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var Caret = {
  name: 'HipchatChevronDownIcon',
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
    return h(script, { ...this.$props,
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6.744 8.744a1.053 1.053 0 000 1.49l4.547 4.557a1 1 0 001.416 0l4.55-4.558a1.051 1.051 0 10-1.488-1.488l-3.77 3.776-3.768-3.776a1.051 1.051 0 00-1.487 0z" fill="currentColor"/></svg>'
    });
  }

};

export { Clear as C, Caret as a };
