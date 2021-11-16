'use strict';

var vue = require('vue');
var IconWrapper = require('./IconWrapper-0c4abb40.js');

var LockFilledIcon = {
  name: 'LockFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8 10V8.002A4.004 4.004 0 0112 4a4 4 0 014 4.002V10a2 2 0 012 2v6c0 1.105-.902 2-2.009 2H8.01A2 2 0 016 18v-6c0-1.102.897-1.995 2-2zm2 0h4V8.002A2.001 2.001 0 0012 6c-1.102 0-2 .898-2 2.002V10zm2 7a2 2 0 100-4 2 2 0 000 4z"/></svg>'
    });
  }

};

var UnlockFilledIcon = {
  name: 'UnlockFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 11.009C5 9.899 5.897 9 7.006 9h9.988A2.01 2.01 0 0119 11.009v7.982c0 1.11-.897 2.009-2.006 2.009H7.006A2.009 2.009 0 015 18.991V11.01zM12 17a2 2 0 100-4 2 2 0 000 4z"/><path d="M8 6.251v-.249A4.004 4.004 0 0112 2a4 4 0 014 4.002V6.5h-2v-.498A2.001 2.001 0 0012 4c-1.102 0-2 .898-2 2.002V11H8V6.251zm6 .249h2a1 1 0 01-2 0z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

exports.LockFilledIcon = LockFilledIcon;
exports.UnlockFilledIcon = UnlockFilledIcon;
