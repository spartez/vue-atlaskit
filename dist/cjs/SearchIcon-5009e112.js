'use strict';

var vue = require('vue');
var IconWrapper = require('./IconWrapper-0c4abb40.js');

var QuestionIcon = {
  name: 'QuestionIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M12 18a1 1 0 010-2 1 1 0 010 2m-2-9a1 1 0 11-2 0 1 1 0 012 0"/><path d="M15.89 8.048a3.971 3.971 0 00-2.951-2.94A4.005 4.005 0 008 9.087a.073.073 0 00.009.008l1.878.022.112-.116A2.002 2.002 0 0112 7c1.103 0 2 .897 2 2 0 1.102-.897 2-2 2h.008a1 1 0 00-.998.987v2.014a1 1 0 102 0v-.782c0-.217.145-.399.349-.472a3.991 3.991 0 002.53-4.699"/></g></svg>'
    });
  }

};

var SearchIcon = {
  name: 'SearchIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

exports.QuestionIcon = QuestionIcon;
exports.SearchIcon = SearchIcon;
