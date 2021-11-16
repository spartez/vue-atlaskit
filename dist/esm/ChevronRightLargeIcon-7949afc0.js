import { h } from 'vue';
import { s as script } from './IconWrapper-76cd3b73.js';

var CalendarIcon = {
  name: 'CalendarIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M4.995 5h14.01C20.107 5 21 5.895 21 6.994v12.012A1.994 1.994 0 0119.005 21H4.995A1.995 1.995 0 013 19.006V6.994C3 5.893 3.892 5 4.995 5zM5 9v9a1 1 0 001 1h12a1 1 0 001-1V9H5zm1-5a1 1 0 012 0v1H6V4zm10 0a1 1 0 012 0v1h-2V4zm-9 9v-2.001h2V13H7zm8 0v-2.001h2V13h-2zm-4 0v-2.001h2.001V13H11zm-4 4v-2h2v2H7zm4 0v-2h2.001v2H11zm4 0v-2h2v2h-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var ChevronLeftLargeIcon = {
  name: 'ChevronLeftLargeIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.005 10.995l4.593-4.593a.99.99 0 111.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 01-1.4 1.4L9.005 12.41a1 1 0 010-1.414z"/></svg>'
    });
  }

};

var ChevronRightLargeIcon = {
  name: 'ChevronRightLargeIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.995 10.995a1 1 0 010 1.414l-4.593 4.593a.99.99 0 01-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 011.4-1.4l4.593 4.593z"/></svg>'
    });
  }

};

export { CalendarIcon as C, ChevronLeftLargeIcon as a, ChevronRightLargeIcon as b };
