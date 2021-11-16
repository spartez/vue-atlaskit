'use strict';

var vue = require('vue');
var IconWrapper = require('./IconWrapper-0c4abb40.js');

var CheckboxIndeterminateIcon = {
  name: 'CheckboxIndeterminateIcon',
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
    return vue.h(IconWrapper.script, { ...this.$props,
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2"/><rect fill="inherit" x="8" y="11" width="8" height="2" rx="1"/></g></svg>'
    });
  }

};

var CheckboxIcon = {
  name: 'CheckboxIcon',
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
    return vue.h(IconWrapper.script, { ...this.$props,
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2"/><path d="M9.707 11.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit"/></g></svg>'
    });
  }

};

exports.CheckboxIcon = CheckboxIcon;
exports.CheckboxIndeterminateIcon = CheckboxIndeterminateIcon;
