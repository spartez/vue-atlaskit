import { h } from 'vue';
import { s as script } from './IconWrapper-76cd3b73.js';

var QuestionCircleIcon = {
  name: 'QuestionCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><circle fill="inherit" cx="12" cy="18" r="1"/><path d="M15.89 9.05a3.975 3.975 0 00-2.957-2.942C10.321 5.514 8.017 7.446 8 9.95l.005.147a.992.992 0 00.982.904c.552 0 1-.447 1.002-.998a2.004 2.004 0 014.007-.002c0 1.102-.898 2-2.003 2H12a1 1 0 00-1 .987v2.014a1.001 1.001 0 002.004 0v-.782c0-.217.145-.399.35-.472A3.99 3.99 0 0015.89 9.05" fill="inherit"/></g></svg>'
    });
  }

};

export { QuestionCircleIcon as Q };
