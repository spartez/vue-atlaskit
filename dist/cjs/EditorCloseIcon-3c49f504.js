'use strict';

var vue = require('vue');
var IconWrapper = require('./IconWrapper-0c4abb40.js');

var EditorCloseIcon = {
  name: 'EditorCloseIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.185 7.4l-3.184 3.185-3.186-3.186a.507.507 0 00-.712.003l-.7.701a.496.496 0 00-.004.712l3.185 3.184L7.4 15.185a.507.507 0 00.004.712l.7.7c.206.207.516.2.712.004l3.186-3.185 3.184 3.185a.507.507 0 00.712-.004l.701-.7a.496.496 0 00.003-.712l-3.186-3.186 3.186-3.184a.507.507 0 00-.003-.712l-.7-.7a.508.508 0 00-.36-.153.5.5 0 00-.353.15z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

exports.EditorCloseIcon = EditorCloseIcon;
