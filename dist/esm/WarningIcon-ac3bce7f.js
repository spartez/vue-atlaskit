import { h } from 'vue';
import { s as script } from './IconWrapper-76cd3b73.js';

var ErrorIcon = {
  name: 'ErrorIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M13.416 4.417a2.002 2.002 0 00-2.832 0l-6.168 6.167a2.002 2.002 0 000 2.833l6.168 6.167a2.002 2.002 0 002.832 0l6.168-6.167a2.002 2.002 0 000-2.833l-6.168-6.167z" fill="currentColor"/><path d="M12 14a1 1 0 01-1-1V8a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2" fill="inherit"/></g></svg>'
    });
  }

};

var WarningIcon = {
  name: 'WarningIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M12.938 4.967c-.518-.978-1.36-.974-1.876 0L3.938 18.425c-.518.978-.045 1.771 1.057 1.771h14.01c1.102 0 1.573-.797 1.057-1.771L12.938 4.967z" fill="currentColor"/><path d="M12 15a1 1 0 01-1-1V9a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2" fill="inherit"/></g></svg>'
    });
  }

};

export { ErrorIcon as E, WarningIcon as W };
