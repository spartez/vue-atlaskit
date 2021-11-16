'use strict';

var vue = require('vue');
var IconWrapper = require('./IconWrapper-0c4abb40.js');

var ActivityIcon = {
  name: 'ActivityIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M19.004 17C19 17 19 7.006 19 7.006 19 7 4.996 7 4.996 7 5 7 5 16.994 5 16.994 5 17 19.004 17 19.004 17zM3 7.006A2 2 0 014.995 5h14.01A2 2 0 0121 7.006v9.988A2 2 0 0119.005 19H4.995A2 2 0 013 16.994V7.006z" fill-rule="nonzero"/><path d="M4 6h16v5H4V6zm5 2c0 .556.446 1 .995 1h8.01c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1h-8.01C9.455 7 9 7.448 9 8zM5 8c0 .556.448 1 1 1 .556 0 1-.448 1-1 0-.556-.448-1-1-1-.556 0-1 .448-1 1z"/></g></svg>'
    });
  }

};

var AddCircleIcon = {
  name: 'AddCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M11.046 7.958v3.088H7.958a.954.954 0 100 1.908h3.088v3.088a.954.954 0 101.908 0v-3.088h3.088a.954.954 0 100-1.908h-3.088V7.958a.954.954 0 10-1.908 0z" fill="inherit"/></g></svg>'
    });
  }

};

var AddItemIcon = {
  name: 'AddItemIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M16.002 3H4.995A1.995 1.995 0 003 4.995v14.01C3 20.107 3.893 21 4.995 21h14.01A1.995 1.995 0 0021 19.005V7.998 11h-2v8H5V5h8V3h3.002z" fill-rule="nonzero"/><path d="M19 5V3.99A1 1 0 0018 3c-.556 0-1 .444-1 .99V5h-1a1 1 0 000 2h1v1.01A1 1 0 0018 9c.556 0 1-.444 1-.99V7h1a1 1 0 000-2h-1z"/></g></svg>'
    });
  }

};

var AddIcon = {
  name: 'AddIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M13 11V3.993A.997.997 0 0012 3c-.556 0-1 .445-1 .993V11H3.993A.997.997 0 003 12c0 .557.445 1 .993 1H11v7.007c0 .548.448.993 1 .993.556 0 1-.445 1-.993V13h7.007A.997.997 0 0021 12c0-.556-.445-1-.993-1H13z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var AddonIcon = {
  name: 'AddonIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5.376 6.455l5.248-3.104c.792-.469 1.963-.467 2.752 0l5.248 3.104C19.416 6.923 20 7.962 20 8.895v6.21c0 .936-.587 1.973-1.376 2.44l-5.248 3.104c-.792.469-1.963.467-2.752 0l-5.248-3.104C4.584 17.077 4 16.038 4 15.105v-6.21c0-.936.587-1.973 1.376-2.44zm6.99-1.314c-.165-.098-.566-.098-.733 0L6.385 8.245c-.166.098-.367.454-.367.65v6.21c0 .195.2.551.367.65l5.248 3.104c.166.098.567.098.734 0l5.248-3.104c.166-.098.367-.454.367-.65v-6.21c0-.195-.2-.551-.367-.65l-5.248-3.104z"/><path d="M12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/></g></svg>'
    });
  }

};

var AppAccessIcon = {
  name: 'AppAccessIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M12.682 12H5.01A2.006 2.006 0 003 14v4.446c0 2.162 4.836 2.951 8.368 2.368A5.975 5.975 0 0110 17a5.994 5.994 0 012.682-5z" fill="currentColor"/><circle fill="currentColor" cx="9" cy="7" r="4"/><circle fill="currentColor" cx="16" cy="17" r="5"/><path d="M14.674 19.331c.36.36.941.36 1.3 0l2.758-2.763a.92.92 0 00-1.301-1.298l-2.108 2.11-.755-.754a.92.92 0 00-1.3 1.3l1.406 1.405z" fill="inherit"/></g></svg>'
    });
  }

};

var AppSwitcherIcon = {
  name: 'AppSwitcherIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4 5.01C4 4.451 4.443 4 5.01 4h1.98C7.549 4 8 4.443 8 5.01v1.98C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C14 7.549 13.557 8 12.99 8h-1.98C10.451 8 10 7.557 10 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C20 7.549 19.557 8 18.99 8h-1.98C16.451 8 16 7.557 16 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm-12 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98z"/></svg>'
    });
  }

};

var ArrowDownCircleIcon = {
  name: 'ArrowDownCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" fill-rule="nonzero" cx="12" cy="12" r="10"/><path d="M10.994 8v5.586l-1.279-1.272a1.01 1.01 0 00-1.421 0 .998.998 0 000 1.416l2.994 2.977a1.01 1.01 0 001.423 0l2.994-2.977a.998.998 0 000-1.416 1.01 1.01 0 00-1.421 0l-1.279 1.272V8c0-.552-.45-1-1.005-1-.555 0-1.006.448-1.006 1z" fill="inherit"/></g></svg>'
    });
  }

};

var ArrowDownIcon = {
  name: 'ArrowDownIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11 6v9.586l-3.793-3.793a.999.999 0 00-1.414 0c-.39.39-.39 1.024 0 1.415l5.5 5.499A.993.993 0 0012 19a.993.993 0 00.707-.293l5.5-5.499a1 1 0 10-1.414-1.415L13 15.586V6a1 1 0 00-2 0z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var ArrowLeftCircleIcon = {
  name: 'ArrowLeftCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M16 10.995h-5.586l1.272-1.279a1.01 1.01 0 000-1.421.996.996 0 00-1.415 0l-2.978 2.994a1.01 1.01 0 000 1.423l2.978 2.993a.999.999 0 001.415 0 1.01 1.01 0 000-1.421l-1.272-1.279H16c.552 0 1-.45 1-1.005 0-.555-.448-1.005-1-1.005" fill="inherit"/></svg>'
    });
  }

};

var ArrowLeftIcon = {
  name: 'ArrowLeftIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.414 11.5H18a1 1 0 010 2H8.414l3.793 3.793a1 1 0 01-1.414 1.414l-5.5-5.5a1 1 0 010-1.414l5.5-5.5a1 1 0 011.414 1.414L8.414 11.5z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var ArrowRightCircleIcon = {
  name: 'ArrowRightCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" fill-rule="nonzero" cx="12" cy="12" r="10"/><path d="M12.314 8.294a1.01 1.01 0 000 1.422l1.271 1.279H8c-.553 0-1.001.45-1.001 1.005 0 .555.448 1.005 1.001 1.005h5.585l-1.271 1.279a1.01 1.01 0 000 1.422 1.001 1.001 0 001.415 0l2.978-2.995a1.01 1.01 0 000-1.422l-2.978-2.995a.998.998 0 00-1.415 0z" fill="inherit"/></g></svg>'
    });
  }

};

var ArrowRightIcon = {
  name: 'ArrowRightIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.793 5.793a.999.999 0 000 1.414L15.586 11H6a1 1 0 000 2h9.586l-3.793 3.793a.999.999 0 000 1.414c.39.39 1.024.39 1.415 0l5.499-5.5a.997.997 0 00.293-.679v-.057a.996.996 0 00-.293-.678l-5.499-5.5a1 1 0 00-1.415 0z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var ArrowUpCircleIcon = {
  name: 'ArrowUpCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" fill-rule="nonzero" cx="12" cy="12" r="10"/><path d="M11.288 7.293L8.294 10.27a1.002 1.002 0 000 1.416 1.01 1.01 0 001.421 0l1.279-1.272V16c0 .552.451 1 1.006 1 .555 0 1.005-.448 1.005-1v-5.586l1.279 1.272a1.01 1.01 0 001.421 0 .998.998 0 000-1.416l-2.994-2.977a1.01 1.01 0 00-1.423 0z" fill="inherit"/></g></svg>'
    });
  }

};

var ArrowUpIcon = {
  name: 'ArrowUpIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.293 5.293l-5.5 5.499a1.002 1.002 0 000 1.415.999.999 0 001.414 0L11 8.414V18a1 1 0 002 0V8.414l3.793 3.793a1 1 0 101.414-1.415l-5.5-5.499A.993.993 0 0012 5a.993.993 0 00-.707.293z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var AttachmentIcon = {
  name: 'AttachmentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.643 17.965c-1.53 1.495-4.016 1.496-5.542.004a3.773 3.773 0 01.002-5.412l7.147-6.985a2.316 2.316 0 013.233-.003c.893.873.895 2.282.004 3.153l-6.703 6.55a.653.653 0 01-.914-.008.62.62 0 010-.902l6.229-6.087a.941.941 0 000-1.353.995.995 0 00-1.384 0l-6.23 6.087a2.502 2.502 0 000 3.607 2.643 2.643 0 003.683.009l6.703-6.55a4.074 4.074 0 00-.003-5.859 4.306 4.306 0 00-6.002.003l-7.148 6.985a5.655 5.655 0 00-.001 8.118c2.29 2.239 6.015 2.238 8.31-.005l6.686-6.533a.941.941 0 000-1.353.995.995 0 00-1.384 0l-6.686 6.534z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var AudioCircleIcon = {
  name: 'AudioCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M16 9.283V13.6h-.003A1.5 1.5 0 1114.5 12c.175 0 .344.03.5.085v-2.08l-4 .431V14.6h-.003A1.5 1.5 0 018 14.5a1.5 1.5 0 012-1.415V9.034c0-.238.186-.451.432-.478l5.136-.553a.38.38 0 01.432.384v.896z" fill="inherit"/></svg>'
    });
  }

};

var AudioIcon = {
  name: 'AudioIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M19 6.673V15.2a2.8 2.8 0 01-2.8 2.8h-.4a2.8 2.8 0 01-2.8-2.8v-.4a2.8 2.8 0 012.8-2.8h.4c.278 0 .547.04.8.116V8.242l-6 .621V16.2A2.8 2.8 0 018.2 19h-.4A2.8 2.8 0 015 16.2v-.4A2.8 2.8 0 017.8 13h.4c.278 0 .547.04.8.116V6.654c0-.38.31-.721.72-.764l8.56-.886c.398-.041.72.235.72.615v1.054z" fill="currentColor"/></svg>'
    });
  }

};

var BacklogIcon = {
  name: 'BacklogIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M5 19.002C5 19 17 19 17 19v-2.002C17 17 5 17 5 17v2.002zm-2-2.004C3 15.894 3.895 15 4.994 15h12.012c1.101 0 1.994.898 1.994 1.998v2.004A1.997 1.997 0 0117.006 21H4.994A1.998 1.998 0 013 19.002v-2.004z"/><path d="M5 15h12v-2H5v2zm-2-4h16v6H3v-6z"/><path d="M7 11.002C7 11 19 11 19 11V8.998C19 9 7 9 7 9v2.002zM5 8.998C5 7.894 5.895 7 6.994 7h12.012C20.107 7 21 7.898 21 8.998v2.004A1.997 1.997 0 0119.006 13H6.994A1.998 1.998 0 015 11.002V8.998z"/><path d="M5 5v2h12V5H5zm-2-.002C3 3.894 3.895 3 4.994 3h12.012C18.107 3 19 3.898 19 4.998V9H3V4.998z"/></g></svg>'
    });
  }

};

var BillingFilledIcon = {
  name: 'BillingFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M5 3.99C5 2.892 5.897 2 7.006 2h9.988C18.102 2 19 2.898 19 3.99v16.02c0 1.099-.897 1.99-2.006 1.99H7.006A2.003 2.003 0 015 20.01V3.99z" fill="currentColor" fill-rule="nonzero"/><rect fill="inherit" x="8" y="6" width="8" height="2" rx="1"/><rect fill="inherit" x="8" y="9" width="5" height="2" rx="1"/><rect fill="inherit" x="8" y="12" width="5" height="2" rx="1"/><rect fill="inherit" x="8" y="15" width="5" height="2" rx="1"/><rect fill="inherit" x="14" y="12" width="2" height="2" rx="1"/><rect fill="inherit" x="14" y="15" width="2" height="2" rx="1"/><rect fill="inherit" x="14" y="9" width="2" height="2" rx="1"/></g></svg>'
    });
  }

};

var BillingIcon = {
  name: 'BillingIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M7 4v16h10V4H7zm-2-.01C5 2.892 5.897 2 7.006 2h9.988C18.102 2 19 2.898 19 3.99v16.02c0 1.099-.897 1.99-2.006 1.99H7.006A2.003 2.003 0 015 20.01V3.99z" fill-rule="nonzero"/><rect x="8" y="6" width="8" height="2" rx="1"/><rect x="8" y="9" width="5" height="2" rx="1"/><rect x="8" y="12" width="5" height="2" rx="1"/><rect x="8" y="15" width="5" height="2" rx="1"/><rect x="14" y="12" width="2" height="2" rx="1"/><rect x="14" y="15" width="2" height="2" rx="1"/><rect x="14" y="9" width="2" height="2" rx="1"/></g></svg>'
    });
  }

};

var BitbucketBranchesIcon = {
  name: 'BitbucketBranchesIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M19 11c0 1.3-.8 2.4-2 2.8V15c0 2.2-1.8 4-4 4h-2.2c-.4 1.2-1.5 2-2.8 2-1.7 0-3-1.3-3-3 0-1.3.8-2.4 2-2.8V8.8C5.9 8.4 5 7.3 5 6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.3-.8 2.4-2.1 2.8v6.4c.9.3 1.6.9 1.9 1.8H13c1.1 0 2-.9 2-2v-1.2c-1.2-.4-2-1.5-2-2.8 0-1.7 1.3-3 3-3s3 1.3 3 3zM8 5c-.5 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm8 7c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm-8 7c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var BitbucketBuildsIcon = {
  name: 'BitbucketBuildsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M10 5a1 1 0 00.997 1h3.006a1 1 0 000-2h-3.006C10.45 4 10 4.45 10 5zM8 5c0-1.657 1.347-3 2.997-3h3.006a3 3 0 010 6h-3.006A3 3 0 018 5zm2 7a1 1 0 00.997 1h3.006a1 1 0 000-2h-3.006c-.547 0-.997.45-.997 1zm-2 0c0-1.657 1.347-3 2.997-3h3.006a3 3 0 010 6h-3.006A3 3 0 018 12zm2 7a1 1 0 00.997 1h3.006a1 1 0 000-2h-3.006c-.547 0-.997.45-.997 1zm-2 0c0-1.657 1.347-3 2.997-3h3.006a3 3 0 010 6h-3.006A3 3 0 018 19z"/><path d="M16.062 6h2.415c.812 0 1.472.66 1.472 1.47v1.954c0 .815-.654 1.47-1.475 1.47H16v2h2.474a3.466 3.466 0 003.475-3.47V7.47A3.472 3.472 0 0018.477 4h-2.415v2zm-7.175 5H6.472A3.472 3.472 0 003 14.47v1.954c0 1.92 1.55 3.47 3.474 3.47H8.95v-2H6.474c-.82 0-1.474-.655-1.474-1.47V14.47c0-.81.66-1.47 1.472-1.47h2.415v-2z"/></g></svg>'
    });
  }

};

var BitbucketCloneIcon = {
  name: 'BitbucketCloneIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M8 3.998H4.995A2.003 2.003 0 003 6.008v7.983c0 1.107.893 2.008 1.995 2.008h14.01A2.001 2.001 0 0021 13.991V6.007a2.004 2.004 0 00-1.995-2.008H16v2h3v8H5v-8h3v-2z" fill-rule="nonzero"/><path d="M10 16.998h4v3h-4z"/><path d="M9 19.998a1 1 0 01.99-1h4.02c.546 0 .99.444.99 1v1H9v-1zm.292-11.707a1.004 1.004 0 000 1.415l1.997 1.996c.197.197.453.298.712.298.254 0 .511-.099.711-.298l1.995-1.996a1 1 0 10-1.414-1.415L12 9.585l-1.294-1.294a1 1 0 00-1.414 0z"/><rect x="11" y="2.998" width="2" height="7" rx="1"/></g></svg>'
    });
  }

};

var BitbucketCommitsIcon = {
  name: 'BitbucketCommitsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M16 12c0-1.9-1.3-3.4-3-3.9V4c0-.6-.4-1-1-1s-1 .4-1 1v4.1c-1.7.4-3 2-3 3.9s1.3 3.4 3 3.9V20c0 .6.4 1 1 1s1-.4 1-1v-4.1c1.7-.5 3-2 3-3.9zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var BitbucketCompareIcon = {
  name: 'BitbucketCompareIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M10.067 16.441c.334.918 1.306 1.6 2.28 1.6h6.167c.55 0 .996-.444.996-1a1 1 0 00-.996-1h-6.167c-.133 0-.355-.156-.401-.284l-.816-2.263-1.063 2.947zM7.94 10.547l-.816-2.263C7.08 8.16 6.851 8 6.722 8H3.998C3.456 8 3 7.552 3 7c0-.556.447-1 .998-1h2.724c.97 0 1.949.686 2.282 1.6L7.94 10.546z"/><path d="M19.51 7a1 1 0 00-.996-1h-6.167c-.976 0-1.95.684-2.283 1.605l-2.94 8.152c-.044.123-.273.284-.402.284H3.998a.996.996 0 00-.998 1c0 .552.456 1 .998 1h2.724c.972 0 1.953-.689 2.284-1.606l2.94-8.151c.046-.128.268-.284.401-.284h6.167c.55 0 .996-.444.996-1z"/><path d="M17.293 8.293a1 1 0 101.414 1.414l1.996-1.996a.999.999 0 000-1.422l-1.996-1.996a1 1 0 00-1.414 1.414L18.586 7l-1.293 1.293zm0 10a1 1 0 001.414 1.414l1.996-1.996a.999.999 0 000-1.422l-1.996-1.996a1 1 0 00-1.414 1.414L18.586 17l-1.293 1.293z"/></g></svg>'
    });
  }

};

var BitbucketForksIcon = {
  name: 'BitbucketForksIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M3 12c0-.552.446-1 .998-1H12v2H3.998A.996.996 0 013 12z"/><path d="M12 11V9c0-.551.45-1 1-1h6.395V6H13c-1.655 0-3 1.344-3 3v2h2zm-2 2v2c0 1.656 1.345 3 3 3h6.395v-2H13c-.55 0-1-.449-1-1v-2h-2z" fill-rule="nonzero"/><path d="M17.293 8.293a1 1 0 101.414 1.414l1.996-1.996a.999.999 0 000-1.422l-1.996-1.996a1 1 0 00-1.414 1.414L18.586 7l-1.293 1.293zm0 10a1 1 0 001.414 1.414l1.996-1.996a.999.999 0 000-1.422l-1.996-1.996a1 1 0 00-1.414 1.414L18.586 17l-1.293 1.293z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var BitbucketOutputIcon = {
  name: 'BitbucketOutputIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M7 15v1.994C7 18.103 7.898 19 9.006 19h9.988A2.005 2.005 0 0021 16.994V7.006A2.005 2.005 0 0018.994 5H9.006A2.005 2.005 0 007 7.006V9h2.003c0-1.175.002-2 .003-2 0 0 9.994.002 9.994.006 0 0-.002 9.994-.006 9.994 0 0-9.994-.002-9.994-.006V15H7z" fill-rule="nonzero"/><path d="M8 6h12v3H8zM4.291 9.293l-1.994 1.995a1 1 0 000 1.423l1.994 1.997a1.001 1.001 0 001.413 0c.39-.391.39-1.025 0-1.415L4.412 12l1.292-1.293a1 1 0 00-1.413-1.414z"/><rect x="3" y="11" width="12" height="2" rx="1"/></g></svg>'
    });
  }

};

var BitbucketPipelinesIcon = {
  name: 'BitbucketPipelinesIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M7.293 5.293a.999.999 0 000 1.414L8.586 8 7.293 9.293a1 1 0 101.415 1.414l1.995-1.995a1 1 0 000-1.423L8.708 5.293a.997.997 0 00-1.415 0z"/><path d="M16.473 7c-2.861.01-5.093 2.063-5.392 4.847L10.973 13a3.509 3.509 0 01-4.243 2.917 3.481 3.481 0 01-2.634-2.593 3.506 3.506 0 013.806-4.302c.582.066 1.105-.347 1.105-.934v-.102a.948.948 0 00-.82-.944 5.71 5.71 0 00-1.866.081c-2.08.433-3.764 2.113-4.198 4.194A5.508 5.508 0 007.505 18a5.503 5.503 0 005.482-5l.105-1.265c.228-1.645 2.057-3.087 4.148-2.659a3.491 3.491 0 012.68 2.677 3.506 3.506 0 01-2.246 4.044 1.012 1.012 0 00-.691.946c0 .683.673 1.178 1.317.954a5.505 5.505 0 003.61-6.204C21.452 8.908 19.096 6.991 16.473 7"/></g></svg>'
    });
  }

};

var BitbucketPullrequestsIcon = {
  name: 'BitbucketPullrequestsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M18 15.2V11c0-1.7-1.3-3-3-3h-1.9l.8-.8c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-2.3 2.3c-.3.4-.3.9 0 1.2l2.3 2.3c.2.2.3.2.5.2s.4-.1.6-.3c.3-.3.3-.8 0-1.1l-.7-.7H15c.6 0 1 .4 1 1v4.2c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8zM17 19c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM7 3C5.4 3 4 4.3 4 6c0 1.3.8 2.4 2 2.8V20c0 .6.4 1 1 1s1-.4 1-1V8.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3zm0 4c-.5 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var BitbucketReposIcon = {
  name: 'BitbucketReposIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 5v14h14V5H5zm0-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" fill-rule="nonzero"/><path d="M9.232 8.306l-2.93 2.954a1.056 1.056 0 000 1.478l2.93 2.956a1.034 1.034 0 001.465 0 1.05 1.05 0 000-1.478L8.5 11.999l2.197-2.217a1.048 1.048 0 000-1.476A1.024 1.024 0 009.965 8c-.267 0-.53.101-.733.306zm4.072-.001a1.05 1.05 0 000 1.478L15.5 12l-2.196 2.217a1.05 1.05 0 000 1.477c.404.408 1.06.408 1.464 0l2.93-2.955a1.054 1.054 0 000-1.478l-2.93-2.956a1.031 1.031 0 00-1.464 0z"/></g></svg>'
    });
  }

};

var BitbucketSnippetsIcon = {
  name: 'BitbucketSnippetsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M16 9c.8 0 1.6-.3 2.1-.9.6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1c-1.1-1.1-3.1-1.1-4.2 0-.6.5-.9 1.3-.9 2.1s.3 1.5.8 2L12 11.1 10.2 8c.5-.5.8-1.2.8-2s-.3-1.6-.9-2.1C9 2.7 7 2.7 5.9 3.9 5.3 4.4 5 5.2 5 6s.3 1.6.9 2.1c.6.6 1.3.9 2.1.9h.4l6.7 11.5c.2.3.5.5.9.5.2 0 .3 0 .5-.1.5-.3.6-.9.4-1.4l-3.7-6.4 2.4-4.2c.1.1.3.1.4.1zM8.7 6.7c-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7zm6.6-1.4c.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7z"/><path d="M10.3 14.1l-3.1 5.4c-.3.5-.2 1.1.3 1.3.2.1.3.2.5.2.3 0 .7-.2.9-.5l2.6-4.4-1.2-2z"/></g></svg>'
    });
  }

};

var BitbucketSourceIcon = {
  name: 'BitbucketSourceIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.852 6.743l-4.558 4.548a1 1 0 00-.001 1.415v.001l4.559 4.549a1.052 1.052 0 001.489-1.486l-.001-.001-3.775-3.77 3.775-3.768a1.051 1.051 0 00.002-1.486l-.001-.001a1.052 1.052 0 00-1.489-.001zm4.806.001a1.05 1.05 0 000 1.486v.001L17.435 12l-3.776 3.769a1.05 1.05 0 000 1.487 1.052 1.052 0 001.488 0l4.558-4.547a1 1 0 00.001-1.414v-.002l-4.559-4.55a1.05 1.05 0 00-.744-.307 1.05 1.05 0 00-.745.308z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var BoardIcon = {
  name: 'BoardIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M4 18h16.008C20 18 20 6 20 6H3.992C4 6 4 18 4 18zM2 5.994C2 4.893 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0120.01 20H3.99A1.994 1.994 0 012 18.006V5.994z"/><path d="M8 6v12h2V6zm6 0v12h2V6z"/></g></svg>'
    });
  }

};

var BookIcon = {
  name: 'BookIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M7 6.002v9.996c0 .546.446 1.002.995 1.002h8.01c.54 0 .995-.449.995-1.002V6.002C17 5.456 16.554 5 16.005 5h-8.01C7.455 5 7 5.449 7 6.002zm-2 0A3.005 3.005 0 017.995 3h8.01A3.003 3.003 0 0119 6.002v9.996A3.005 3.005 0 0116.005 19h-8.01A3.003 3.003 0 015 15.998V6.002z" fill-rule="nonzero"/><path d="M9 7h6v4H9zm0 6h6v2H9zm1 7.857V20H7v.857L8.5 20l1.5.857zM7 18h3v2H7z"/></g></svg>'
    });
  }

};

var BulletListIcon = {
  name: 'BulletListIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="10" y="15" width="8" height="2" rx="1"/><rect x="6" y="15" width="2" height="2" rx="1"/><rect x="10" y="11" width="8" height="2" rx="1"/><rect x="6" y="11" width="2" height="2" rx="1"/><rect x="10" y="7" width="8" height="2" rx="1"/><rect x="6" y="7" width="2" height="2" rx="1"/></g></svg>'
    });
  }

};

var CalendarFilledIcon = {
  name: 'CalendarFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M19 5h.005C20.107 5 21 5.895 21 6.994v12.012A1.994 1.994 0 0119.005 21H4.995A1.995 1.995 0 013 19.006V6.994C3 5.893 3.892 5 4.995 5H5v1c0 1.112.895 2 2 2 1.112 0 2-.895 2-2V5h6v1c0 1.112.895 2 2 2 1.112 0 2-.895 2-2V5z" fill="currentColor"/><path fill="inherit" d="M7 13.001h2V11H7zm0 4h2V15H7zm4-4h2V11h-2zm0 4h2V15h-2zm4-4h2V11h-2zm0 4h2V15h-2z"/><path d="M16 6V5h2v1a1 1 0 01-2 0zm0-2a1 1 0 012 0v1h-2V4zM6 4a1 1 0 012 0v1H6V4zm0 2V5h2v1a1 1 0 01-2 0z" fill="currentColor"/></g></svg>'
    });
  }

};

var CameraFilledIcon = {
  name: 'CameraFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M2 6.994C2 5.893 2.898 5 3.99 5h16.02C21.108 5 22 5.895 22 6.994v12.012A1.997 1.997 0 0120.01 21H3.99A1.994 1.994 0 012 19.006V6.994zM12 17a4 4 0 100-8 4 4 0 000 8zm5-8c0 .556.448 1 1 1 .556 0 1-.448 1-1 0-.556-.448-1-1-1-.556 0-1 .448-1 1zM8 4c0-.552.453-1 .997-1h6.006c.55 0 .997.444.997 1v1H8V4z"/><circle cx="12" cy="13" r="2"/></g></svg>'
    });
  }

};

var CameraRotateIcon = {
  name: 'CameraRotateIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="2" y="5" width="20" height="16" rx="2"/><path d="M8 4c0-.552.453-1 .997-1h6.006c.55 0 .997.444.997 1v1H8V4z" fill="currentColor"/><circle fill="inherit" cx="12" cy="17" r="1"/><path d="M16.9 14a5 5 0 10-4.9 4v-2a3 3 0 112.83-2h2.07z" fill="inherit" fill-rule="nonzero"/><path d="M13.292 12.291a1.004 1.004 0 000 1.415l1.997 1.996c.197.197.453.298.712.298.254 0 .511-.099.711-.298l1.995-1.996a1 1 0 10-1.414-1.415L16 13.585l-1.294-1.294a1 1 0 00-1.414 0z" fill="inherit"/></g></svg>'
    });
  }

};

var CameraTakePictureIcon = {
  name: 'CameraTakePictureIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><circle cx="12" cy="12" r="5"/><path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0 1a7 7 0 110-14 7 7 0 010 14z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var CameraIcon = {
  name: 'CameraIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M2 6.994C2 5.893 2.898 5 3.99 5h16.02C21.108 5 22 5.895 22 6.994v12.012A1.997 1.997 0 0120.01 21H3.99A1.994 1.994 0 012 19.006V6.994zM4 7v12h16V7H4z"/><path d="M12 17a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z" fill-rule="nonzero"/><path d="M8 4c0-.552.453-1 .997-1h6.006c.55 0 .997.444.997 1v1H8V4z"/><rect x="17" y="8" width="2" height="2" rx="1"/></g></svg>'
    });
  }

};

var CanvasIcon = {
  name: 'CanvasIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M10.25 19l-1.02 2.462a.995.995 0 01-1.306.54.994.994 0 01-.541-1.305L8.086 19h2.164zm5.426 0l.702 1.697a.995.995 0 01-.541 1.305.997.997 0 01-1.306-.54L13.511 19h2.165z"/><path d="M11 2.999A.997.997 0 0112 2c.552 0 1 .443 1 .999V5h-2V2.999zM8 15.997C8 16 15.991 16 15.991 16c.005 0 .009-8.997.009-8.997C16 7 8.009 7 8.009 7 8.004 7 8 15.997 8 15.997zM6 7.003C6 5.897 6.902 5 8.009 5h7.982C17.101 5 18 5.894 18 7.003v8.994A2.007 2.007 0 0115.991 18H8.01A2.004 2.004 0 016 15.997V7.003z" fill-rule="nonzero"/><rect x="5" y="16" width="14" height="2" rx="1"/><rect x="5" y="5" width="14" height="2" rx="1"/></g></svg>'
    });
  }

};

var CheckCircleOutlineIcon = {
  name: 'CheckCircleOutlineIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill-rule="nonzero"/><path d="M9.707 11.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 12.586l-1.293-1.293z"/></g></svg>'
    });
  }

};

var CheckIcon = {
  name: 'CheckIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6.735 12.322a1 1 0 00-1.47 1.356l3.612 3.919c.537.526 1.337.526 1.834.03l.364-.359a2335.638 2335.638 0 003.939-3.883l.04-.04a492.598 492.598 0 003.658-3.643 1 1 0 00-1.424-1.404 518.42 518.42 0 01-3.64 3.625l-.04.04a2049.114 2049.114 0 01-3.775 3.722l-3.098-3.363z" fill="currentColor"/></svg>'
    });
  }

};

var ChevronDownCircleIcon = {
  name: 'ChevronDownCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="inherit"/></g></svg>'
    });
  }

};

var ChevronLeftCircleIcon = {
  name: 'ChevronLeftCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M13.706 9.698a.988.988 0 000-1.407 1.01 1.01 0 00-1.419 0l-2.965 2.94a1.09 1.09 0 000 1.548l2.955 2.93a1.01 1.01 0 001.42 0 .988.988 0 000-1.407l-2.318-2.297 2.327-2.307z" fill="inherit"/></g></svg>'
    });
  }

};

var ChevronLeftIcon = {
  name: 'ChevronLeftIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M13.706 9.698a.988.988 0 000-1.407 1.01 1.01 0 00-1.419 0l-2.965 2.94a1.09 1.09 0 000 1.548l2.955 2.93a1.01 1.01 0 001.42 0 .988.988 0 000-1.407l-2.318-2.297 2.327-2.307z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var ChevronRightCircleIcon = {
  name: 'ChevronRightCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M10.294 9.698a.988.988 0 010-1.407 1.01 1.01 0 011.419 0l2.965 2.94a1.09 1.09 0 010 1.548l-2.955 2.93a1.01 1.01 0 01-1.42 0 .988.988 0 010-1.407l2.318-2.297-2.327-2.307z" fill="inherit"/></g></svg>'
    });
  }

};

var ChevronRightIcon = {
  name: 'ChevronRightIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M10.294 9.698a.988.988 0 010-1.407 1.01 1.01 0 011.419 0l2.965 2.94a1.09 1.09 0 010 1.548l-2.955 2.93a1.01 1.01 0 01-1.42 0 .988.988 0 010-1.407l2.318-2.297-2.327-2.307z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var ChevronUpCircleIcon = {
  name: 'ChevronUpCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M11.221 9.322l-2.929 2.955a1.009 1.009 0 000 1.419.986.986 0 001.405 0l2.298-2.317 2.307 2.327a.989.989 0 001.407 0 1.01 1.01 0 000-1.419l-2.94-2.965A1.106 1.106 0 0011.991 9c-.279 0-.557.107-.77.322z" fill="inherit"/></g></svg>'
    });
  }

};

var ChildIssuesIcon = {
  name: 'ChildIssuesIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11 7h2v5h-2zm5 6h2v3h-2zM6 13h2v3H6z"/><path d="M7 11h10a1 1 0 011 1v1H6v-1a1 1 0 011-1z"/><path d="M5 18v1h4v-1H5zm0-2h4a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2zm10 2v1h4v-1h-4zm0-2h4a2 2 0 012 2v1a2 2 0 01-2 2h-4a2 2 0 01-2-2v-1a2 2 0 012-2zM10 5v1h4V5h-4zm0-2h4a2 2 0 012 2v1a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var CodeIcon = {
  name: 'CodeIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M14.155 4.055a1 1 0 00-1.271.62l-4.83 14.046a1 1 0 001.891.65l4.83-14.045a1 1 0 00-.62-1.271m-6.138 8.21l-2.58-2.501L8.236 7.05a.999.999 0 10-1.392-1.436l-3.54 3.432a1 1 0 000 1.436l3.32 3.219a1 1 0 101.393-1.436m12.219 1.568l-3.32-3.22a.999.999 0 10-1.393 1.437l2.58 2.5-2.799 2.715a.999.999 0 101.392 1.436l3.54-3.432a1 1 0 000-1.436" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var CommentIcon = {
  name: 'CommentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M4.998 11.513c0-3.038 3.141-5.51 7.002-5.51 3.861 0 7.002 2.472 7.002 5.51 0 3.039-3.141 5.51-7.002 5.51-3.861 0-7.002-2.471-7.002-5.51zm14.84 7.771v-.002s-1.564-2.26-.767-3.116l-.037.02C20.261 14.902 21 13.279 21 11.513 21 7.371 16.963 4 12 4s-9 3.37-9 7.513 4.037 7.514 9 7.514c1.42 0 2.76-.285 3.957-.776 1.003 1.022 2.287 1.572 3.24 1.719l.002-.003a.524.524 0 00.164.033.515.515 0 00.474-.716z"/><rect x="7" y="9" width="10" height="2" rx="1"/><rect x="7" y="12" width="5" height="2" rx="1"/></g></svg>'
    });
  }

};

var ComponentIcon = {
  name: 'ComponentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 17.991c0 .007 14.005.009 14.005.009-.006 0-.005-7.991-.005-7.991C19 10.002 4.995 10 4.995 10 5.001 10 5 17.991 5 17.991zM3 10.01C3 8.899 3.893 8 4.995 8h14.01C20.107 8 21 8.902 21 10.009v7.982c0 1.11-.893 2.009-1.995 2.009H4.995A2.004 2.004 0 013 17.991V10.01z"/><path d="M7 8.335c0-.002 2.002-.002 2.002-.002C9 8.333 9 6.665 9 6.665c0 .002-2.002.002-2.002.002C7 6.667 7 8.335 7 8.335zm-2-1.67C5 5.745 5.898 5 6.998 5h2.004C10.106 5 11 5.749 11 6.665v1.67C11 9.255 10.102 10 9.002 10H6.998C5.894 10 5 9.251 5 8.335v-1.67zm10 1.67c0-.002 2.002-.002 2.002-.002C17 8.333 17 6.665 17 6.665c0 .002-2.002.002-2.002.002.002 0 .002 1.668.002 1.668zm-2-1.67C13 5.745 13.898 5 14.998 5h2.004C18.106 5 19 5.749 19 6.665v1.67c0 .92-.898 1.665-1.998 1.665h-2.004C13.894 10 13 9.251 13 8.335v-1.67z"/></g></svg>'
    });
  }

};

var CreditcardFilledIcon = {
  name: 'CreditcardFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M3 10.988h18V17c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.012zM6.013 16h2v-2h-2v2zM21 8.993V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v1.993" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var CreditcardIcon = {
  name: 'CreditcardIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5.013 17h14v-6h-14v6zm0-8h14V7h-14v2zM19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"/><path d="M7.013 15h2v-2h-2z"/></g></svg>'
    });
  }

};

var CrossCircleIcon = {
  name: 'CrossCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M13.477 9.113l-4.36 4.386a1 1 0 101.418 1.41l4.36-4.386a1 1 0 00-1.418-1.41z" fill="inherit"/><path d="M9.084 10.501l4.358 4.377a1 1 0 101.418-1.411L10.5 9.09a1 1 0 00-1.417 1.411z" fill="inherit"/></g></svg>'
    });
  }

};

var DashboardIcon = {
  name: 'DashboardIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M4 18h16.008C20 18 20 6 20 6H3.992C4 6 4 18 4 18zM2 5.994C2 4.893 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0120.01 20H3.99A1.994 1.994 0 012 18.006V5.994z"/><path d="M7 5v14h2V5z"/><path d="M7 11h14V9H7z"/></g></svg>'
    });
  }

};

var DecisionIcon = {
  name: 'DecisionIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M19.293 3.293l-5 5a1 1 0 101.414 1.414l5-5a1 1 0 10-1.414-1.414zM8.038 4.929a.957.957 0 10.008-1.912L4.058 3A1.053 1.053 0 003 4.044l.017 4.004a.957.957 0 001.916-.008L4.92 4.916l3.118.013z"/><path d="M11 19.998A.998.998 0 0012 21c.552 0 1-.454 1-1.007v-7.4c0-.556-.315-1.322-.705-1.713L5.207 3.793 3.793 5.207 11 12.414v7.584z"/></g></svg>'
    });
  }

};

var DepartmentIcon = {
  name: 'DepartmentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M11 5v2h2V5h-2zm0 6V9h-1a1 1 0 01-1-1V4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-1v2h5a1 1 0 011 1v3h1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1h1v-2H7v2h1a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1h1v-3a1 1 0 011-1h5zm-6 6v2h2v-2H5zm12 0v2h2v-2h-2z"/></svg>'
    });
  }

};

var DetailViewIcon = {
  name: 'DetailViewIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M14 17h6c.003 0 0-9.994 0-9.994C20 7 14 7 14 7v10zM12 5h8c1.105 0 2 .897 2 2.006v9.988A1.998 1.998 0 0120 19h-8V5zM2 7h8V5H2.997A.996.996 0 002 6v1zm0 4h8V9H2zm0 7c0 .552.453 1 .997 1H10v-2H2v1zm0-3h8v-2H2z" fill="currentColor"/></svg>'
    });
  }

};

var DiscoverFilledIcon = {
  name: 'DiscoverFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 21a9 9 0 110-18 9 9 0 010 18zm-1.101-10.78c-.248.127-.55.427-.678.678L8.24 14.797c-.55 1.084-.118 1.514.965.963l3.898-1.98c.248-.127.55-.427.677-.678l1.981-3.899c.552-1.083.12-1.514-.964-.964L10.9 10.221zM12 13a1 1 0 110-2 1 1 0 010 2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var DiscoverIcon = {
  name: 'DiscoverIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M12 19a7 7 0 100-14 7 7 0 000 14zm0 2a9 9 0 110-18 9 9 0 010 18z" fill-rule="nonzero"/><path d="M10.86 10.186l3.896-1.948c1.11-.555 1.562-.108 1.005 1.006l-1.948 3.896c-.126.251-.426.55-.673.673l-3.897 1.948c-1.11.556-1.561.11-1.004-1.006l1.947-3.896c.126-.25.426-.55.673-.673zM12 13a1 1 0 100-2 1 1 0 000 2z"/></g></svg>'
    });
  }

};

var DocumentFilledIcon = {
  name: 'DocumentFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M18.99 8.99l.01 1.015V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h5.275c.469 0 .922.164 1.282.464L18.631 7.7c.227.19.359.471.359.768v.521zM12.02 5L12 8.192a.99.99 0 00.994.991h4L12.02 5z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var DocumentIcon = {
  name: 'DocumentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M17 10.005V19H7V5h5.99v2.49a1.5 1.5 0 001.5 1.5h4.5v-.522c0-.297-.132-.578-.359-.768l-5.074-4.236c-.36-.3-.813-.464-1.282-.464H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-8.995h-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var DocumentsIcon = {
  name: 'DocumentsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 17H5V7h1V5H5a2 2 0 00-2 2v10a2 2 0 002 2h1v-2zm13-6.995V19H9V5h5.99v2.49a1.5 1.5 0 001.5 1.5h4.5v-.522c0-.297-.132-.578-.359-.768l-5.074-4.236c-.36-.3-.813-.464-1.282-.464H9a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-8.995h-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var DownloadIcon = {
  name: 'DownloadIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M10.687 17.292a.983.983 0 00-1.397 0 1 1 0 000 1.407l1.964 1.98a1.082 1.082 0 001.538 0l1.919-1.933a1 1 0 000-1.408.983.983 0 00-1.398 0l-1.29 1.3-1.336-1.346z" fill-rule="nonzero"/><path d="M13.001 19.993L13 10.006C13 9.451 12.552 9 12 9s-1 .45-1 1.007l.001 9.987c0 .555.448 1.006 1 1.006s1-.45 1-1.007z" fill-rule="nonzero"/><path d="M7.938 5.48a4.8 4.8 0 00-.777-.062C4.356 5.418 2 7.62 2 10.498 2 13.409 4.385 16 7.1 16h2.881v-1.993H7.1c-1.657 0-3.115-1.663-3.115-3.508 0-1.778 1.469-3.087 3.104-3.087h.012c.389 0 .686.05.97.15l.17.063c.605.248.875-.246.875-.246l.15-.267c.73-1.347 2.201-2.096 3.716-2.12a4.14 4.14 0 014.069 3.645l.046.34s.071.525.665.525c.013 0 .012.005.023.005h.254c1.136 0 1.976.959 1.976 2.158 0 1.207-.987 2.342-2.07 2.342h-3.964V16h3.964C20.105 16 22 13.955 22 11.665c0-2-1.312-3.663-3.138-4.074-.707-2.707-3.053-4.552-5.886-4.591-1.975.02-3.901.9-5.038 2.48z"/></g></svg>'
    });
  }

};

var DragHandlerIcon = {
  name: 'DragHandlerIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><circle cx="10" cy="8" r="1"/><circle cx="14" cy="8" r="1"/><circle cx="10" cy="16" r="1"/><circle cx="14" cy="16" r="1"/><circle cx="10" cy="12" r="1"/><circle cx="14" cy="12" r="1"/></g></svg>'
    });
  }

};

var DropboxIcon = {
  name: 'DropboxIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M16.19 2l-4.216 3.494 5.812 3.608L22 5.77 16.19 2zM2 5.958l4.162 3.214 5.812-3.678-3.992-3.492L2 5.958zm14.01 12.355l-.014-.986-3.994-2.975-3.833 2.934-.036.057-2.113-1.278v2.115l5.977 3.824 5.93-3.824v-2.037l-1.917 1.17v1zM6.15 9.179l-4.143 3.352 3.604 2.166.002-.002.785.476 1.585.952 2.652-2.014 1.328-1.017.004.004.007-.004.021.016.014-.016 3.156 2.348.921.68 5.91-3.593-4.21-3.422-5.809 3.681L6.151 9.18zm11.636-.074l.001-.003h-.002l.001.003z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditIcon = {
  name: 'EditIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M4.02 19.23a1 1 0 001.18 1.18l3.81-.78-4.21-4.21-.78 3.81zm5.921-2.62l-2.12-2.12L16.306 6h.002l2.121 2.121-8.489 8.49zm9.903-9.903l-2.12-2.122A1.997 1.997 0 0016.308 4c-.512 0-1.024.195-1.415.585l-9.757 9.758 4.95 4.95 9.757-9.758a2 2 0 000-2.828z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorAddIcon = {
  name: 'EditorAddIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M13 11V7a1 1 0 00-2 0v4H7a1 1 0 000 2h4v4a1 1 0 002 0v-4h4a1 1 0 000-2h-4z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorAddonIcon = {
  name: 'EditorAddonIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.691 14.932c-.184.546-.336.797-.719 1.011-.851.478-1.54.299-2.033-.532-.498-.837-.31-1.52.547-2 .388-.218.673-.217 1.251-.1.078.017.139.029.19.038l-1.434-2.414a.333.333 0 01.123-.461L8.64 9.339a.333.333 0 01.49.222c.023.113.065.22.127.325.439.737 1.006.885 1.769.457.757-.425.906-.962.47-1.694a1.075 1.075 0 00-.226-.271.333.333 0 01.054-.544l2.023-1.135a.333.333 0 01.45.12l1.447 2.437c.019-.05.04-.11.066-.187.184-.546.336-.797.719-1.012.851-.477 1.54-.298 2.033.533.498.837.31 1.52-.547 2-.26.146-.521.193-.816.169a3.345 3.345 0 01-.435-.07 7.373 7.373 0 00-.19-.037l1.434 2.413c.095.16.04.369-.124.46l-2.11 1.184a.333.333 0 01-.496-.28 1.03 1.03 0 00-.15-.51c-.438-.738-1.005-.886-1.768-.458-.758.425-.906.963-.471 1.694.1.168.225.29.384.386a.333.333 0 01-.009.576l-2.11 1.184a.333.333 0 01-.449-.12l-1.447-2.436c-.019.05-.04.11-.066.187z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorAdvancedIcon = {
  name: 'EditorAdvancedIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M9.8 17L9 19H7l.763-2H9.8zm-.893-3l1.907-5h2.372l1.907 5h-1.926L12 10.5 10.833 14H8.907zm7.33 3L17 19h-2l-.8-2h2.037zM5 15h14v1H5v-1zM18 5v1h-2v2h2v1h-3V5h3zm0 1h1v2h-1V6z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorAlignCenterIcon = {
  name: 'EditorAlignCenterIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 11h10a1 1 0 010 2H7a1 1 0 010-2zm2.5 4h5a1 1 0 010 2h-5a1 1 0 010-2zm0-8h5a1 1 0 010 2h-5a1 1 0 110-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorAlignImageCenterIcon = {
  name: 'EditorAlignImageCenterIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 17h12a1 1 0 010 2H6a1 1 0 010-2zm4-8h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1zM6 5h12a1 1 0 010 2H6a1 1 0 110-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorAlignImageLeftIcon = {
  name: 'EditorAlignImageLeftIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 17h12a1 1 0 010 2H6a1 1 0 010-2zm0-8h4a1 1 0 011 1v4a1 1 0 01-1 1H6a1 1 0 01-1-1v-4a1 1 0 011-1zm0-4h12a1 1 0 010 2H6a1 1 0 110-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorAlignImageRightIcon = {
  name: 'EditorAlignImageRightIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 17h12a1 1 0 010 2H6a1 1 0 010-2zm8-8h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1zM6 5h12a1 1 0 010 2H6a1 1 0 110-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorAlignLeftIcon = {
  name: 'EditorAlignLeftIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 7h10a1 1 0 010 2H7a1 1 0 110-2zm0 4h10a1 1 0 010 2H7a1 1 0 010-2zm0 4h5a1 1 0 010 2H7a1 1 0 010-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorAlignRightIcon = {
  name: 'EditorAlignRightIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 11h10a1 1 0 010 2H7a1 1 0 010-2zm5 4h5a1 1 0 010 2h-5a1 1 0 010-2zM7 7h10a1 1 0 010 2H7a1 1 0 110-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorAttachmentIcon = {
  name: 'EditorAttachmentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M17.222 11.557L12.11 16.64a3.012 3.012 0 01-4.238.004 2.97 2.97 0 01.002-4.21L13.339 7a1.75 1.75 0 012.472-.002c.683.679.684 1.775.002 2.452l-5.126 5.095a.493.493 0 01-.699-.007.488.488 0 010-.701l4.764-4.735a.74.74 0 000-1.052.752.752 0 00-1.058 0L8.93 12.785a1.97 1.97 0 000 2.805c.781.777 2.038.78 2.816.007l5.126-5.094a3.206 3.206 0 00-.003-4.557 3.253 3.253 0 00-4.589.002l-5.466 5.433a4.451 4.451 0 00-.001 6.314 4.516 4.516 0 006.355-.004l5.113-5.081a.74.74 0 000-1.053.752.752 0 00-1.059 0z" fill="currentColor"/></svg>'
    });
  }

};

var EditorBackgroundColorIcon = {
  name: 'EditorBackgroundColorIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7.818 12.56l4.243 4.243 4.242-4.242-4.242-4.243-4.243 4.243zm-1.414 1.415a1.995 1.995 0 010-2.828l4.243-4.243a1.995 1.995 0 012.828 0l4.243 4.243c.78.78.786 2.041 0 2.828l-4.243 4.243a1.996 1.996 0 01-2.828 0l-4.243-4.243zM6.5 13h11l-5.44 5.218L6.5 13zm2.732-8.925a1 1 0 011.414 0l3.536 3.536-1.414 1.414L9.232 5.49a1 1 0 010-1.415zM18 16s1.5 2 1.5 3.5c0 1-1 1.5-1.5 1.5s-1.5-.4-1.5-1.5C16.5 18 18 16 18 16z" fill="currentColor"/></svg>'
    });
  }

};

var EditorBoldIcon = {
  name: 'EditorBoldIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8 6h4.832C13.908 6 16 6.5 16 9c0 1.333-.333 2.167-1 2.5 1.333.333 2 1.333 2 3 0 .5 0 3.5-4 3.5H8a1 1 0 01-1-1V7a1 1 0 011-1zm1 10h3.5c1 0 2-.25 2-1.5s-1.104-1.5-2-1.5H9v3zm0-4.975h3c.504 0 2 0 2-1.525S12 8 12 8H9v3.025z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorBulletListIcon = {
  name: 'EditorBulletListIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 8c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1zm5-1h6a1 1 0 010 2h-6a1 1 0 010-2zm-5 5c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1zm5-1h6a1 1 0 010 2h-6a1 1 0 010-2zm-5 5c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1zm5-1h6a1 1 0 010 2h-6a1 1 0 010-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorCodeIcon = {
  name: 'EditorCodeIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M10.208 7.308a1.09 1.09 0 010 1.483l-3.515 3.71 3.515 3.708a1.09 1.09 0 010 1.483.957.957 0 01-1.405 0l-3.866-4.08a1.635 1.635 0 010-2.225l3.866-4.08a.957.957 0 011.405 0zm3.584 0a.957.957 0 011.405 0l3.866 4.08c.583.614.583 1.61 0 2.225l-3.866 4.08a.957.957 0 01-1.405 0 1.09 1.09 0 010-1.484l3.515-3.708-3.515-3.71a1.09 1.09 0 010-1.483z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorCollapseIcon = {
  name: 'EditorCollapseIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.062 11L6.5 9.914A1 1 0 017.914 8.5l2.616 2.616c.28.167.47.5.47.884s-.19.717-.47.884L7.914 15.5A1 1 0 116.5 14.086L8.062 13h-3.68c-.487 0-.882-.448-.882-1s.395-1 .882-1h3.68zm5.408 1.884c-.28-.167-.47-.5-.47-.884s.19-.717.47-.884L16.086 8.5A1 1 0 0117.5 9.914L15.938 11h3.68c.487 0 .882.448.882 1s-.395 1-.882 1h-3.68l1.562 1.086a1 1 0 01-1.414 1.414l-2.616-2.616z" fill="currentColor"/></svg>'
    });
  }

};

var EditorDateIcon = {
  name: 'EditorDateIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 8.51c0-.282.229-.51.5-.51h11c.276 0 .5.228.5.51v8.98c0 .282-.229.51-.5.51h-11a.505.505 0 01-.5-.51V8.51zm2 2.995v.99c0 .291.226.505.505.505h.99a.497.497 0 00.505-.505v-.99A.497.497 0 009.495 11h-.99a.497.497 0 00-.505.505zm3 0v.99c0 .291.226.505.505.505h.99a.497.497 0 00.505-.505v-.99a.497.497 0 00-.505-.505h-.99a.497.497 0 00-.505.505zm-3 3v.99c0 .291.226.505.505.505h.99a.497.497 0 00.505-.505v-.99A.497.497 0 009.495 14h-.99a.497.497 0 00-.505.505zM7.5 8v1h3V8h-3zm6 0v1h3V8h-3zm.5-1.495c0-.279.214-.505.505-.505h.99c.279 0 .505.214.505.505V8h-2V6.505zm-6 0C8 6.226 8.214 6 8.505 6h.99c.279 0 .505.214.505.505V8H8V6.505z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorDecisionIcon = {
  name: 'EditorDecisionIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M9.414 8l3.293 3.293c.187.187.293.442.293.707v5a1 1 0 01-2 0v-4.586l-3-3V10.5a1 1 0 01-2 0V7a1 1 0 011-1h3.5a1 1 0 010 2H9.414zm8.293-1.707a.999.999 0 010 1.414l-2.5 2.5a.997.997 0 01-1.414 0 .999.999 0 010-1.414l2.5-2.5a.999.999 0 011.414 0z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorDividerIcon = {
  name: 'EditorDividerIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="2" rx="1" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorEditIcon = {
  name: 'EditorEditIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.148 6.852a.502.502 0 01.708.004l2.288 2.288a.5.5 0 01.004.708L11 17l-3-3 7.148-7.148zM7 15l3 3-3.51.877c-.27.068-.436-.092-.367-.367L7 15z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorEmojiIcon = {
  name: 'EditorEmojiIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 5a7 7 0 110 14 7 7 0 010-14zm0 12.5c3.033 0 5.5-2.467 5.5-5.5S15.033 6.5 12 6.5A5.506 5.506 0 006.5 12c0 3.033 2.467 5.5 5.5 5.5zm-1.5-6a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2zm.27 1.583a.626.626 0 01.932.834A3.63 3.63 0 0112 15.125a3.63 3.63 0 01-2.698-1.204.625.625 0 01.93-.835c.901 1.003 2.639 1.003 3.538-.003z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorExpandIcon = {
  name: 'EditorExpandIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M18.062 11L16.5 9.914A1 1 0 1117.914 8.5l2.616 2.616c.28.167.47.5.47.884s-.19.717-.47.884L17.914 15.5a1 1 0 01-1.414-1.414L18.062 13h-3.68c-.487 0-.882-.448-.882-1s.395-1 .882-1h3.68zM3.47 12.884c-.28-.167-.47-.5-.47-.884s.19-.717.47-.884L6.086 8.5A1 1 0 017.5 9.914L5.938 11h3.68c.487 0 .882.448.882 1s-.395 1-.882 1h-3.68L7.5 14.086A1 1 0 016.086 15.5L3.47 12.884z" fill="currentColor"/></svg>'
    });
  }

};

var EditorFeedbackIcon = {
  name: 'EditorFeedbackIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M10.922 14.517L5.87 12.68l-.932-.339C4.418 12.151 4 11.552 4 11c0-.556.42-1.153.938-1.341l9.124-3.318c.52-.19.938.105.938.654v8.01c0 .54-.42.842-.938.654l-3.14-1.142zM6 14.227l2 .728V17c0 .552-.405 1.202-.895 1.447l-.21.106C6.4 18.8 6 18.549 6 18.009v-3.782zm11.224-4.78a.5.5 0 11-.448-.894l2-1a.5.5 0 11.448.894l-2 1zm-.448 4a.5.5 0 01.448-.894l2 1a.5.5 0 01-.448.894l-2-1zM17 11.5a.5.5 0 110-1h3a.5.5 0 110 1h-3z" fill="currentColor"/></svg>'
    });
  }

};

var EditorFileIcon = {
  name: 'EditorFileIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 6.5c0-.276.228-.5.491-.5H13l4 4v7.5c0 .276-.228.5-.51.5H7.51a.508.508 0 01-.51-.5v-11zm5 1v2.999c0 .271.225.501.501.501H15.5L12 7.5z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorHelpIcon = {
  name: 'EditorHelpIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8 10h2.5c0-2 1.5-2 1.5-2 1.5 0 2.5 1.5.5 3-1.5 1-1.5 1.5-1.5 3 0 .144-.016.824 0 1h2c0-1.568 0-2 1.5-3 1.446-.964 1.5-1.896 1.5-3 0-2-1.5-3-4-3-2 0-4 1-4 4zm5 8v-2h-2v2h2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorHintIcon = {
  name: 'EditorHintIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M14 16h-4s0-.5-1-2-2.5-3-2.5-5S7 4 12 4s5.5 3 5.5 5-1.5 3.5-2.5 5-1 2-1 2zm-4 1h4v1l-1.5 2h-1L10 18v-1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorHorizontalRuleIcon = {
  name: 'EditorHorizontalRuleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><rect fill="currentColor" x="5" y="11" width="14" height="2" rx="1" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorImageBorderIcon = {
  name: 'EditorImageBorderIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M17 9h1v3h-1V9zm0 4h1v2h-1v-2zM6 9h1v2H6V9zm0 3h1v3H6v-3zm3 5h2v1H9v-1zm3 0h3v1h-3v-1zM9 6h3v1H9V6zm4 0h2v1h-2V6zm-7 .505C6 6.226 6.214 6 6.505 6H8v1H7v1H6V6.505zm12 0V8h-1V7h-1V6h1.495c.291 0 .505.226.505.505zM6 17.495V16h1v1h1v1H6.505A.497.497 0 016 17.495zm12 0a.497.497 0 01-.505.505H16v-1h1v-1h1v1.495z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorImageResizeIcon = {
  name: 'EditorImageResizeIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M15 9.707V11h1V8h-3v1h1.293L9 14.293V13H8v3h3v-1H9.707L15 9.707zM6 6.5c0-.276.229-.5.5-.5h11c.276 0 .5.229.5.5v11c0 .276-.229.5-.5.5h-11a.504.504 0 01-.5-.5v-11z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorImageIcon = {
  name: 'EditorImageIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11 15l-1-1-2 2h8v-1.8L14 12l-3 3zM6 6.5c0-.276.229-.5.5-.5h11c.276 0 .5.229.5.5v11c0 .276-.229.5-.5.5h-11a.504.504 0 01-.5-.5v-11zM9.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorIndentIcon = {
  name: 'EditorIndentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M9 9H6.49a.495.495 0 00-.49.505v.99c0 .291.22.505.49.505H9v2l3-3-3-3v2zm4-1.495c0-.279.228-.505.491-.505h5.018a.49.49 0 01.491.505v.99a.503.503 0 01-.491.505h-5.018A.49.49 0 0113 8.495v-.99zm0 4c0-.279.228-.505.491-.505h5.018a.49.49 0 01.491.505v.99a.503.503 0 01-.491.505h-5.018a.49.49 0 01-.491-.505v-.99zm-6 4c0-.279.229-.505.5-.505h11c.276 0 .5.214.5.505v.99a.506.506 0 01-.5.505h-11a.495.495 0 01-.5-.505v-.99z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorInfoIcon = {
  name: 'EditorInfoIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 20a8 8 0 110-16 8 8 0 010 16zm0-8.5a1 1 0 00-1 1V15a1 1 0 002 0v-2.5a1 1 0 00-1-1zm0-1.125a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorItalicIcon = {
  name: 'EditorItalicIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M10 6h6a1 1 0 010 2h-6a1 1 0 110-2zM8 16h6a1 1 0 010 2H8a1 1 0 010-2zm4-8h2l-2 8h-2l2-8z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorLayoutThreeEqualIcon = {
  name: 'EditorLayoutThreeEqualIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 5h2a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1zm6 0h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V6a1 1 0 011-1zm6 0h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V6a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorLayoutThreeWithSidebarsIcon = {
  name: 'EditorLayoutThreeWithSidebarsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 5a1 1 0 011 1v12a1 1 0 01-2 0V6a1 1 0 011-1zm4 0h6a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1zm10 0a1 1 0 011 1v12a1 1 0 01-2 0V6a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorLayoutTwoEqualIcon = {
  name: 'EditorLayoutTwoEqualIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 5h5a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1zm9 0h5a1 1 0 011 1v12a1 1 0 01-1 1h-5a1 1 0 01-1-1V6a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorLayoutTwoLeftSidebarIcon = {
  name: 'EditorLayoutTwoLeftSidebarIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 5h1a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1zm5 0h9a1 1 0 011 1v12a1 1 0 01-1 1h-9a1 1 0 01-1-1V6a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorLayoutTwoRightSidebarIcon = {
  name: 'EditorLayoutTwoRightSidebarIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M18 5h1a1 1 0 011 1v12a1 1 0 01-1 1h-1a1 1 0 01-1-1V6a1 1 0 011-1zM5 5h9a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorLinkIcon = {
  name: 'EditorLinkIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12.654 8.764a.858.858 0 01-1.213-1.213l1.214-1.214a3.717 3.717 0 015.257 0 3.714 3.714 0 01.001 5.258l-1.214 1.214-.804.804a3.72 3.72 0 01-5.263.005.858.858 0 011.214-1.214c.781.782 2.05.78 2.836-.005l.804-.803 1.214-1.214a1.998 1.998 0 00-.001-2.831 2 2 0 00-2.83 0l-1.215 1.213zm-.808 6.472a.858.858 0 011.213 1.213l-1.214 1.214a3.717 3.717 0 01-5.257 0 3.714 3.714 0 01-.001-5.258l1.214-1.214.804-.804a3.72 3.72 0 015.263-.005.858.858 0 01-1.214 1.214 2.005 2.005 0 00-2.836.005l-.804.803L7.8 13.618a1.998 1.998 0 00.001 2.831 2 2 0 002.83 0l1.215-1.213z" fill="currentColor"/></svg>'
    });
  }

};

var EditorMediaCenterIcon = {
  name: 'EditorMediaCenterIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 5h12a1 1 0 010 2H6a1 1 0 110-2zm0 12h12a1 1 0 010 2H6a1 1 0 010-2zm0-8h12a1 1 0 011 1v4a1 1 0 01-1 1H6a1 1 0 01-1-1v-4a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorMediaFullWidthIcon = {
  name: 'EditorMediaFullWidthIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 17h10a1 1 0 010 2H7a1 1 0 010-2zM4 5h16a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorMediaWideIcon = {
  name: 'EditorMediaWideIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 5h10a1 1 0 010 2H7a1 1 0 110-2zm0 12h10a1 1 0 010 2H7a1 1 0 010-2zM4 9h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorMediaWrapLeftIcon = {
  name: 'EditorMediaWrapLeftIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 17h12a1 1 0 010 2H6a1 1 0 010-2zm8-8h4a1 1 0 010 2h-4a1 1 0 010-2zm0 4h4a1 1 0 010 2h-4a1 1 0 010-2zM6 9h4a1 1 0 011 1v4a1 1 0 01-1 1H6a1 1 0 01-1-1v-4a1 1 0 011-1zm0-4h12a1 1 0 010 2H6a1 1 0 110-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorMediaWrapRightIcon = {
  name: 'EditorMediaWrapRightIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 17h12a1 1 0 010 2H6a1 1 0 010-2zm0-8h4a1 1 0 010 2H6a1 1 0 010-2zm0 4h4a1 1 0 010 2H6a1 1 0 010-2zm8-4h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1zM6 5h12a1 1 0 010 2H6a1 1 0 110-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorMentionIcon = {
  name: 'EditorMentionIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12.062 13.93c-.904 0-1.451-.734-1.451-1.945 0-1.226.538-1.952 1.466-1.952.928 0 1.422.764 1.422 1.967 0 1.195-.502 1.93-1.438 1.93M12 5c-3.925 0-7 3.075-7 7 0 4.596 3.522 7 7 7 .874 0 1.614-.09 2.26-.279a.751.751 0 00-.42-1.44c-.508.147-1.11.22-1.84.22-2.648 0-5.5-1.722-5.5-5.5 0-3.085 2.417-5.5 5.5-5.5 3.24 0 5.5 1.952 5.5 4.75 0 2.045-1.043 3-1.748 3-.008 0-.752-.11-.752-.75v-4a.75.75 0 10-1.5 0v.187c-.346-.585-1.016-.952-1.795-.952C10.102 8.736 9 10.04 9 11.938c0 1.984 1.103 3.312 2.753 3.312.865 0 1.51-.387 1.865-1.076.334 1.016 1.37 1.576 2.132 1.576 1.598 0 3.25-1.683 3.25-4.5C19 7.628 16.058 5 12 5" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorMoreIcon = {
  name: 'EditorMoreIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 14a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-4.5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorNoteIcon = {
  name: 'EditorNoteIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8 4h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2zm1.5 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-5zm0 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-3z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorNumberListIcon = {
  name: 'EditorNumberListIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11 7h6a1 1 0 010 2h-6a1 1 0 010-2zm0 4h6a1 1 0 010 2h-6a1 1 0 010-2zm0 4h6a1 1 0 010 2h-6a1 1 0 010-2zm-5 0h3v1H6v-1zm0 2h3v1H6v-1zm1-9H6V7h2v3H7V8zm-1 3h3v1.333h-.6V13H7.2v-.667H6V11zm0 2h3v1H6v-1zm2 3h2v1H8v-1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorOpenIcon = {
  name: 'EditorOpenIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M9.873 7.63c-.28 0-.344.159-.147.357l2.436 2.436-4.386 4.386a.509.509 0 000 .713l.7.7a.495.495 0 00.713.001l4.387-4.386 2.436 2.436c.197.197.357.124.357-.147V8.133a.507.507 0 00-.503-.503H9.873z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorOutdentIcon = {
  name: 'EditorOutdentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M9 9V7l-3 3 3 3v-2h2.51a.49.49 0 00.49-.505v-.99A.495.495 0 0011.51 9H9zm4-1.495c0-.279.228-.505.491-.505h5.018a.49.49 0 01.491.505v.99a.503.503 0 01-.491.505h-5.018A.49.49 0 0113 8.495v-.99zm0 4c0-.279.228-.505.491-.505h5.018a.49.49 0 01.491.505v.99a.503.503 0 01-.491.505h-5.018a.49.49 0 01-.491-.505v-.99zm-6 4c0-.279.229-.505.5-.505h11c.276 0 .5.214.5.505v.99a.506.506 0 01-.5.505h-11a.495.495 0 01-.5-.505v-.99z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorPanelIcon = {
  name: 'EditorPanelIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 19a7 7 0 110-14 7 7 0 010 14zm0-1.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0-6a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorPhotoIcon = {
  name: 'EditorPhotoIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 8.51c0-.282.22-.51.498-.51h13.004c.275 0 .498.228.498.51v8.98c0 .282-.22.51-.498.51H5.498A.504.504 0 015 17.49V8.51zm5-1.01c0-.276.215-.5.49-.5h3.02a.5.5 0 01.49.5V8h-4v-.5zm2 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-1.5a2 2 0 110-4 2 2 0 010 4z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorQuoteIcon = {
  name: 'EditorQuoteIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.698 17C16.97 17 18 15.982 18 14.727c0-1.255-1.03-2.273-2.302-2.273-2.301 0-.767-4.393 2.302-4.393V7c-5.478 0-7.624 10-2.302 10zm-4.33-2.273c0-1.255-1.031-2.273-2.301-2.273-2.302 0-.768-4.393 2.301-4.393V7C5.891 7 3.744 17 9.067 17c1.27 0 2.301-1.018 2.301-2.273z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorRecentIcon = {
  name: 'EditorRecentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.305 12.282c.037.09.091.175.165.248l2 2a.75.75 0 001.06-1.06l-1.78-1.78V9a.75.75 0 10-1.5 0v3c0 .104.021.202.059.292zM12 6a6 6 0 110 12 6 6 0 010-12z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorRedoIcon = {
  name: 'EditorRedoIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6.72 15h1.5c0-2.513 1.821-4.5 4-4.5 1.338 0 2.54.75 3.27 1.908l-2.03 1.172c-.24.14-.219.325.029.41l2.73.93.001.08v-.08l1.372.467a.42.42 0 00.559-.323l.841-4.25c.052-.267-.107-.366-.341-.23l-1.862 1.075C15.801 10.055 14.124 9 12.22 9c-3.037 0-5.492 2.687-5.5 6z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorRemoveIcon = {
  name: 'EditorRemoveIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 7h10a1 1 0 010 2H7a1 1 0 110-2zm2.78 11a1 1 0 01-.97-.757L7.156 10.62A.5.5 0 017.64 10h8.72a.5.5 0 01.485.621l-1.656 6.622a1 1 0 01-.97.757H9.781zM11 6h2a1 1 0 011 1h-4a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorSearchIcon = {
  name: 'EditorSearchIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M14.823 15.883a5.5 5.5 0 111.06-1.06l2.647 2.647c.293.293.53.59 0 1.06-.53.47-.767.293-1.06 0l-2.647-2.647zM11.5 15.5a4 4 0 100-8 4 4 0 000 8z" fill="currentColor"/></svg>'
    });
  }

};

var EditorSettingsIcon = {
  name: 'EditorSettingsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12.002 15.504a3.502 3.502 0 110-7.004 3.502 3.502 0 010 7.004m6.732-1.987a1.605 1.605 0 01-.001-3.034.386.386 0 00.253-.462 7.2 7.2 0 00-.672-1.604.384.384 0 00-.481-.156c-.31.127-.668.16-1.039.065a1.6 1.6 0 01-1.129-1.124 1.641 1.641 0 01.061-1.043.385.385 0 00-.157-.48 7.225 7.225 0 00-1.59-.665.385.385 0 00-.461.252 1.604 1.604 0 01-3.032 0 .387.387 0 00-.463-.252c-.57.16-1.11.39-1.613.677a.378.378 0 00-.159.468 1.611 1.611 0 01-2.088 2.108.385.385 0 00-.479.158 7.2 7.2 0 00-.67 1.604.386.386 0 00.248.46 1.605 1.605 0 010 3.021.385.385 0 00-.249.46c.143.504.34.986.582 1.44.096.179.318.24.502.156.479-.22 1.08-.213 1.693.191a.881.881 0 01.243.242c.424.643.412 1.272.16 1.76a.381.381 0 00.134.506 7.197 7.197 0 001.697.721.381.381 0 00.459-.251A1.605 1.605 0 0112 17.645c.707 0 1.302.457 1.518 1.09.066.19.265.306.459.251a7.212 7.212 0 001.677-.71.38.38 0 00.134-.508c-.256-.49-.271-1.12.154-1.766a.884.884 0 01.243-.243c.62-.411 1.228-.413 1.71-.185a.384.384 0 00.505-.153c.244-.454.441-.937.585-1.443a.385.385 0 00-.252-.461" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorStrikethroughIcon = {
  name: 'EditorStrikethroughIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.58 11H6a1 1 0 000 2h6.327c1.295.34 1.847.822 1.847 1.642 0 .958-.872 1.648-2.075 1.648-1.008 0-1.779-.398-2.127-1.056-.19-.361-.522-.624-.93-.624h-.16c-.484 0-.868.46-.731.925C8.602 17.068 10.013 18 11.986 18 14.464 18 16 16.614 16 14.388c0-.532-.081-.991-.253-1.388H18a1 1 0 000-2h-5.556l-.564-.145c-1.268-.324-1.784-.775-1.784-1.544 0-.975.778-1.608 1.953-1.608.871 0 1.544.383 1.86 1.027.174.356.499.612.894.612h.145c.486 0 .875-.463.729-.927C15.221 6.958 13.846 6 12.057 6 9.77 6 8.255 7.378 8.255 9.453c0 .597.107 1.11.325 1.547z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorSuccessIcon = {
  name: 'EditorSuccessIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 20a8 8 0 110-16 8 8 0 010 16zm1.364-10.964l-2.152 4.11-1.543-1.39a1 1 0 10-1.338 1.487l2.5 2.25a1 1 0 001.555-.279l2.75-5.25a1 1 0 00-1.772-.928z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorTableDisplayOptionsIcon = {
  name: 'EditorTableDisplayOptionsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 6h10a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1zm3 10h6v-5h-6v5z" fill="currentColor"/></svg>'
    });
  }

};

var EditorTableIcon = {
  name: 'EditorTableIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8 6h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2zm0 2v3h3V8H8zm5 0v3h3V8h-3zm-5 5v3h3v-3H8zm5 0v3h3v-3h-3z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorTaskIcon = {
  name: 'EditorTaskIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7.5 6h9A1.5 1.5 0 0118 7.5v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 16.5v-9A1.5 1.5 0 017.5 6zm3.072 8.838l.143.154a.5.5 0 00.769-.042l.13-.175 3.733-5.045a.8.8 0 00-.11-1.064.665.665 0 00-.984.118l-3.243 4.387-1.315-1.422a.663.663 0 00-.99 0 .801.801 0 000 1.07l1.867 2.019z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorTextColorIcon = {
  name: 'EditorTextColorIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorTextStyleIcon = {
  name: 'EditorTextStyleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6.26 6.678l-3.237 9.534a.5.5 0 00.473.66h1.032a.75.75 0 00.717-.53l.648-2.107H9.63l.647 2.107a.75.75 0 00.717.53h1.113a.5.5 0 00.473-.66L9.337 6.677A1 1 0 008.39 6H7.207a1 1 0 00-.947.678zM7.736 8.08h.051l1.364 4.453H6.372L7.736 8.08zm11.113 2.043v-.327a1 1 0 011-1H20a1 1 0 011 1v6.078a1 1 0 01-1 1h-.151a1 1 0 01-1-1v-.312h-.088c-.392.874-1.232 1.439-2.418 1.439-1.975 0-3.221-1.613-3.221-4.182 0-2.546 1.254-4.15 3.221-4.15 1.172 0 2.026.595 2.418 1.454h.088zm-.045 2.712c0-1.47-.685-2.404-1.754-2.404-1.068 0-1.725.92-1.725 2.404 0 1.491.657 2.395 1.725 2.395 1.076 0 1.754-.911 1.754-2.395z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EditorUnderlineIcon = {
  name: 'EditorUnderlineIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 7a1 1 0 112 0v4c0 1.884.93 3 3 3s3-1.116 3-3V7a1 1 0 012 0v4c0 2.916-1.737 5-5 5s-5-2.084-5-5V7zm0 10h10a1 1 0 010 2H7a1 1 0 010-2z" fill="currentColor"/></svg>'
    });
  }

};

var EditorUndoIcon = {
  name: 'EditorUndoIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.931 11.658C9.92 10.055 11.596 9 13.5 9c3.038 0 5.492 2.686 5.5 6h-1.5c0-2.513-1.821-4.5-4-4.5-1.337 0-2.54.749-3.27 1.908l2.03 1.172c.24.139.22.325-.029.41l-2.73.93L9.5 15v-.08l-1.372.467a.422.422 0 01-.559-.323l-.84-4.251c-.053-.266.106-.365.34-.23l1.862 1.075z" fill="currentColor"/></svg>'
    });
  }

};

var EditorUnlinkIcon = {
  name: 'EditorUnlinkIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 10V9h2v1H5zm4-5h1v2H9V5zm7.646 12.354l.708-.708 2 2-.708.708-2-2zM17 15v-1h2v1h-2zm-3 2h1v2h-1v-2zM7.354 6.646l-.708.708-2-2 .708-.708 2 2zm3.567 9.037l1.061-1.062a.75.75 0 111.06 1.061l-1.06 1.061a3.249 3.249 0 01-4.596 0 3.247 3.247 0 010-4.596l1.06-1.061.703-.703c.793-.63 1.773.35 1.06 1.06l-.702.703-1.06 1.062a1.747 1.747 0 000 2.474 1.749 1.749 0 002.474 0zm2.658-7.608l-1.061 1.061a.75.75 0 01-1.06-1.06l1.06-1.062a3.249 3.249 0 014.596 0 3.247 3.247 0 010 4.596l-1.06 1.062-.703.702c-.565.565-1.581-.45-1.06-1.06l.702-.703 1.06-1.061a1.747 1.747 0 000-2.475 1.749 1.749 0 00-2.474 0z" fill="currentColor"/></svg>'
    });
  }

};

var EditorWarningIcon = {
  name: 'EditorWarningIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M13.31 5.343l7.359 13.17A1 1 0 0119.796 20H4.204a1 1 0 01-.873-1.488l7.36-13.169a1.5 1.5 0 012.618 0zM12 8.5a1.091 1.091 0 00-1.081 1.239l.513 3.766a.573.573 0 001.136 0l.513-3.766A1.091 1.091 0 0012 8.5zm0 8.63a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmailIcon = {
  name: 'EmailIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 7v10h14V7H5zm14-2c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h14z" fill-rule="nonzero"/><path d="M5.498 6.5H3.124c.149.44.399.854.75 1.205l5.882 5.881a3.117 3.117 0 004.41 0l5.882-5.881c.35-.351.6-.765.749-1.205h-2.373l-5.672 5.672a1.119 1.119 0 01-1.583 0L5.498 6.5z"/></g></svg>'
    });
  }

};

var EmojiActivityIcon = {
  name: 'EmojiActivityIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.677 16.738A5.97 5.97 0 0112 18a5.97 5.97 0 01-3.677-1.262 6.329 6.329 0 001.982-4.589 6.33 6.33 0 00-2.157-4.746A5.973 5.973 0 0112 6c1.465 0 2.808.528 3.851 1.403a6.33 6.33 0 00-2.156 4.746c0 1.751.736 3.41 1.982 4.589zm1.354-1.472c.613-.94.969-2.063.969-3.266 0-1.124-.31-2.176-.85-3.076a4.321 4.321 0 00-1.455 3.225c0 1.187.495 2.313 1.336 3.117zm-10.062 0A5.964 5.964 0 016 12c0-1.124.31-2.176.85-3.076a4.324 4.324 0 011.455 3.225 4.323 4.323 0 01-1.336 3.117zM12 4a8 8 0 100 16 8 8 0 000-16z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmojiAtlassianIcon = {
  name: 'EmojiAtlassianIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.703 11.475c-.237-.253-.61-.239-.767.087L4.05 19.33a.464.464 0 00.415.672h5.412a.448.448 0 00.415-.26c1.167-2.408.46-6.077-1.59-8.267zm2.851-7.065c-2.174 3.443-2.03 7.257-.598 10.12l2.608 5.217c.078.159.24.26.416.26h5.411a.464.464 0 00.416-.671s-7.28-14.567-7.46-14.93c-.167-.325-.583-.332-.793.003z" fill="currentColor"/></svg>'
    });
  }

};

var EmojiCustomIcon = {
  name: 'EmojiCustomIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M13 11V7.002a.999.999 0 10-2 0V11H7.002a.999.999 0 100 2H11v3.998a.999.999 0 102 0V13h3.998a.999.999 0 100-2H13z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmojiEmojiIcon = {
  name: 'EmojiEmojiIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 21a9 9 0 110-18 9 9 0 010 18zm0-2a7 7 0 100-14 7 7 0 000 14zm-3.95-4.803c-.167-.477.102-.991.601-1.15.5-.159 1.039.099 1.205.575.06.174.225.487.495.796.426.488.956.764 1.649.764.693 0 1.223-.276 1.65-.764.27-.31.433-.622.494-.796.166-.476.706-.734 1.205-.575.499.159.768.673.602 1.15a4.38 4.38 0 01-.839 1.385C14.348 16.458 13.306 17 12 17s-2.348-.542-3.112-1.418a4.382 4.382 0 01-.839-1.385zM9.5 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmojiFlagsIcon = {
  name: 'EmojiFlagsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 12.235v6.446c0 .537.45.977 1 .977s1-.44 1-.977v-5.778c1.17-.341 2.389-.045 3.768.29.982.238 2.036.495 3.13.495a5.73 5.73 0 002.547-.567 1 1 0 00.563-.9V5.466a.998.998 0 00-1.437-.9c-1.345.654-2.731.317-4.331-.071-1.729-.42-3.687-.895-5.678.072A1 1 0 006 5.466v6.769zm3.111-1.48c1.094 0 2.148.256 3.129.495 1.381.335 2.6.63 3.768.289V6.836c-1.488.27-2.93-.08-4.24-.398-1.379-.335-2.598-.632-3.768-.29v4.704a6.195 6.195 0 011.111-.097z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmojiFoodIcon = {
  name: 'EmojiFoodIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M9.425 4.798v.005L9.271 7H4.995a.881.881 0 00-.885.999L5.319 19c.06.552.556.999 1.108.999H17.99A2.006 2.006 0 0020 18v-3.99A3.998 3.998 0 0016.004 10H13.56l.294-2.001c.08-.552-.3-.999-.85-.999h-1.728l.075-1.07 3.002.21a1 1 0 001.058-.928.993.993 0 00-.919-1.067l-4.008-.28a1 1 0 00-1.059.933zM18 15v-1.002A2 2 0 0016.002 12h-4.004A1.993 1.993 0 0010 13.998V15h8zm0 2v1h-8v-1h8zm-6.111-6.999L12 9H6l1 9h1v-3.99A4.008 4.008 0 0111.889 10z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmojiFrequentIcon = {
  name: 'EmojiFrequentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 4c-4.412 0-8 3.588-8 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8zm0 14.222A6.23 6.23 0 015.778 12 6.23 6.23 0 0112 5.778 6.23 6.23 0 0118.222 12 6.23 6.23 0 0112 18.222zm.889-6.59V8.448c0-.489-.4-.889-.889-.889s-.889.4-.889.89v3.555c0 .248.103.471.268.633l2.195 2.194a.891.891 0 001.257 0 .891.891 0 000-1.256l-1.942-1.943z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmojiKeyboardIcon = {
  name: 'EmojiKeyboardIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5.836 6.95l-3.825 9.97a.5.5 0 00.467.68h1.208a.5.5 0 00.47-.33l.683-1.877a.5.5 0 01.47-.33H9.12a.5.5 0 01.47.33l.683 1.878a.5.5 0 00.47.329h1.272a.5.5 0 00.468-.678L8.685 6.95a.7.7 0 00-.655-.45H6.49a.7.7 0 00-.654.45zm1.566 2.457l1.25 3.414a.2.2 0 01-.188.269H5.966a.2.2 0 01-.188-.269l1.249-3.414a.2.2 0 01.375 0zm10.148 6.465c1.222 0 2.142-1.01 2.142-2.603 0-1.594-.902-2.532-2.142-2.532-1.256 0-2.178.938-2.178 2.532 0 1.575.904 2.603 2.178 2.603zm2.161.602c-.372.833-1.276 1.433-2.445 1.433-2.567 0-4.266-2-4.266-4.638 0-2.551 1.664-4.569 4.195-4.569 1.56 0 2.284.833 2.497 1.329v-.34c0-.247.007-.392.213-.576.137-.122.344-.177.62-.165h.764a.581.581 0 01.496.165c.213.203.192.421.192.577v6.394c0 .227.008.526.023.899 0 .191-.041.336-.124.434a.628.628 0 01-.508.242h-.93c-.193 0-.45-.084-.533-.184-.083-.1-.165-.23-.183-.532a6.342 6.342 0 01-.01-.364v-.105z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmojiNatureIcon = {
  name: 'EmojiNatureIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M13 16h3.625l-2.5-4h1.208L12 7l-3.333 5h1.208l-2.5 4H11v2h2v-2zm4.33-2.06l1.527 2.546A1 1 0 0118 18h-3c-.003 1.105-.9 2-1.998 2h-2.004A1.999 1.999 0 019 18H6a1 1 0 01-.857-1.514L6.67 13.94c-.6-.23-.888-1.068-.484-1.697l5-7.778c.4-.62 1.229-.62 1.628 0l5 7.778c.404.629.117 1.467-.484 1.697z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmojiObjectsIcon = {
  name: 'EmojiObjectsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.998 4A5.997 5.997 0 006 9.998c0 2.218 2.288 4.484 2.288 4.484.39.387.71 1.112.71 1.611 0 .499.45.907 1 .907h4c.55 0 1-.408 1-.907 0-.499.32-1.224.71-1.611 0 0 2.288-2.266 2.288-4.484A5.997 5.997 0 0011.998 4zm0 2a4.003 4.003 0 013.998 3.998c0 1.029-1.145 2.511-1.695 3.064-.507.501-.912 1.216-1.13 1.938h-2.346c-.217-.722-.622-1.435-1.125-1.934-.555-.557-1.7-2.039-1.7-3.068A4.003 4.003 0 0111.998 6zm2.965 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v.003c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V19z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmojiPeopleIcon = {
  name: 'EmojiPeopleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 4c-4.412 0-8 3.588-8 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8zm0 14.222A6.23 6.23 0 015.778 12 6.23 6.23 0 0112 5.778 6.23 6.23 0 0118.222 12 6.23 6.23 0 0112 18.222zM14.83 14a3.001 3.001 0 01-5.66 0h5.66zM14 11a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmojiProductivityIcon = {
  name: 'EmojiProductivityIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0 2a8 8 0 110-16 8 8 0 010 16z"/><path d="M14.301 9.485a1 1 0 011.398 1.43l-4.261 4.166a1 1 0 01-1.406-.008l-2.04-2.04a1 1 0 111.415-1.413l1.34 1.34L14.3 9.484z"/></g></svg>'
    });
  }

};

var EmojiSymbolsIcon = {
  name: 'EmojiSymbolsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 9.44l1.76-1.744a2.505 2.505 0 013.52 0 2.451 2.451 0 010 3.488L12 16.417l-5.28-5.232a2.451 2.451 0 010-3.49 2.505 2.505 0 013.52 0v.001L12 9.44zm-6.684 3.143l.003.004 6.322 6.266a.508.508 0 00.718 0l6.322-6.266.003-.004.004-.003a4.412 4.412 0 000-6.28 4.509 4.509 0 00-6.336 0l-.003.004-.004.003L12 6.65l-.345-.342-.004-.003-.003-.003a4.509 4.509 0 00-6.336 0 4.412 4.412 0 000 6.279l.004.003z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmojiTravelIcon = {
  name: 'EmojiTravelIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.584 17H8.416l-2.708 2.709a1.004 1.004 0 01-1.415 0l-.002-.002a1.004 1.004 0 010-1.415l1.618-1.617A1.998 1.998 0 015 14.997V6.003C5 4.897 5.897 4 7.006 4h9.988C18.102 4 19 4.894 19 6.003v8.994a2 2 0 01-.909 1.678l1.618 1.617a1.004 1.004 0 010 1.415 1.004 1.004 0 01-1.417.002L15.584 17zM17 10V6H7v4h10zm0 2v3H7v-3h10zm-1.5 6.997c0 .55-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1zm.2-5.517a1 1 0 11-2 0 1 1 0 012 0zm-6.691 1a1 1 0 110-2 1 1 0 010 2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var EmojiAddIcon = {
  name: 'EmojiAddIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.049 14.197c-.166-.476.103-.991.602-1.15.5-.159 1.039.098 1.205.575.06.174.225.487.495.796.426.488.955.764 1.649.764.693 0 1.223-.276 1.65-.764.27-.31.433-.622.494-.796.166-.476.706-.734 1.204-.575.5.159.77.673.603 1.15-.13.371-.395.876-.839 1.385C14.348 16.458 13.306 17 12 17s-2.348-.542-3.112-1.418a4.382 4.382 0 01-.839-1.385zM9.5 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19 5h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V7h-1a1 1 0 010-2h1V4a1 1 0 012 0v1zm-5-1.777V5.29A7 7 0 1018.71 10h2.067A9 9 0 1114 3.223z" fill="currentColor"/></svg>'
    });
  }

};

var EmojiIcon = {
  name: 'EmojiIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 16.071c3.9 0 7.071-3.171 7.071-7.071S15.9 4.929 12 4.929A7.079 7.079 0 004.929 12c0 3.9 3.171 7.071 7.071 7.071zm-1.929-7.714a1.286 1.286 0 11.001-2.572 1.286 1.286 0 010 2.572zm3.858 0a1.286 1.286 0 110-2.572 1.286 1.286 0 010 2.572zm.347 2.035a.805.805 0 011.198 1.073A4.668 4.668 0 0112 16.018a4.666 4.666 0 01-3.469-1.548.804.804 0 011.196-1.074c1.158 1.29 3.393 1.29 4.549-.004z" fill="currentColor"/></svg>'
    });
  }

};

var ExportIcon = {
  name: 'ExportIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M13 6.491V16a1 1 0 01-2 0V6.491L9.784 7.697a1.051 1.051 0 01-1.478 0 1.029 1.029 0 010-1.465l2.955-2.929a1.051 1.051 0 011.478 0l2.955 2.93c.408.404.408 1.06 0 1.464a1.051 1.051 0 01-1.478 0L13 6.49zM9 9v2H7c-.002 0 0 7.991 0 7.991 0 .004 9.994.009 9.994.009.003 0 .006-7.991.006-7.991 0-.006-2-.009-2-.009V9h2c1.105 0 2 .902 2 2.009v7.982c0 1.11-.897 2.009-2.006 2.009H7.006A2.009 2.009 0 015 18.991V11.01A2 2 0 017 9h2z" fill="currentColor"/></svg>'
    });
  }

};

var FeedbackIcon = {
  name: 'FeedbackIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M10.881 5.48l-8.426 6.829c-.396.32-.582.956-.413 1.417l.099.272c.168.462.726.829 1.227.82l1.131-.02 6.062-.102 3.652-.063c.51-.01.788-.385.616-.861l-2.923-8.03c-.105-.288-.324-.441-.567-.441a.731.731 0 00-.458.179zM4.98 15.953l1.754 4.818a1 1 0 101.879-.684l-1.539-4.228-2.094.094zm13.711-9.111l-2.819 1.026a1 1 0 10.684 1.879l2.82-1.026a1 1 0 10-.685-1.88zm-1.792 3.845a1.006 1.006 0 00-.644.766 1.002 1.002 0 00.811 1.159l2.955.52a1 1 0 001.122-1.301l-.017-.047a.997.997 0 00-.758-.621l-2.955-.521a.974.974 0 00-.514.045zm-.548-7.639l-1.929 2.298a1 1 0 001.532 1.286l1.928-2.298a1.001 1.001 0 00-.765-1.643.993.993 0 00-.766.357z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var FileIcon = {
  name: 'FileIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M17 10.005V19H7V5h5.99v2.49a1.5 1.5 0 001.5 1.5h4.5v-.522c0-.297-.132-.578-.359-.768l-5.074-4.236c-.36-.3-.813-.464-1.282-.464H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-8.995h-2z"/><rect x="8" y="12" width="8" height="2" rx="1"/><rect x="8" y="15" width="4" height="2" rx="1"/></g></svg>'
    });
  }

};

var FilterIcon = {
  name: 'FilterIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 13h10l1-2H6zM3.993 6c-.548 0-.79.405-.546.895L4 8h16l.553-1.105C20.8 6.4 20.555 6 20.007 6H3.993zm6.785 11.556a.87.87 0 00.727.444h.99c.279 0 .605-.2.727-.444L14 16h-4l.778 1.556z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var FlagFilledIcon = {
  name: 'FlagFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 12.235v6.446c0 .537.45.977 1 .977s1-.44 1-.977v-5.778c1.17-.341 2.389-.045 3.768.29.982.238 2.036.495 3.13.495a5.73 5.73 0 002.547-.567 1 1 0 00.563-.9V5.466a.998.998 0 00-1.437-.9c-1.345.654-2.731.317-4.331-.071-1.729-.42-3.687-.895-5.678.072A1 1 0 006 5.466v6.769z" fill="currentColor"/></svg>'
    });
  }

};

var FolderFilledIcon = {
  name: 'FolderFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12.2 6h7.81C21.108 6 22 6.893 22 7.992v11.016c0 1.1-.898 1.992-1.99 1.992H3.99A1.992 1.992 0 012 19.008V5.006C2 3.898 2.896 3 3.997 3h5.006c1.103 0 2.327.826 2.742 1.862L12.2 6z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var FolderIcon = {
  name: 'FolderIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M20 19V8h-9.154l-.503-1.258-.455-1.136C9.778 5.33 9.291 5 9.003 5H3.997C4.002 5 4 19 4 19h16zM12.2 6h7.809C21.109 6 22 6.893 22 7.992v11.016c0 1.1-.898 1.992-1.991 1.992H3.991C2.891 21 2 20.107 2 19.008V5.006C2 3.898 2.896 3 3.997 3h5.006c1.103 0 2.327.826 2.742 1.862L12.2 6z" fill="currentColor"/></svg>'
    });
  }

};

var FollowersIcon = {
  name: 'FollowersIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"/><circle cx="11" cy="7" r="4"/><path d="M17.293 9.293a1 1 0 101.414 1.414l1.996-1.996a.999.999 0 000-1.422l-1.996-1.996a1 1 0 00-1.414 1.414L18.586 8l-1.293 1.293z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var FollowingIcon = {
  name: 'FollowingIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M20.99 6a.983.983 0 01-.286.7l-1.333 1.269 1.284 1.3a.982.982 0 01-.412 1.704.99.99 0 01-.98-.317l-1.976-1.969a.982.982 0 010-1.387l2.035-2.028a.99.99 0 011.077-.19c.365.16.598.522.592.918zM5 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"/><circle cx="11" cy="7" r="4"/></g></svg>'
    });
  }

};

var GoogledriveIcon = {
  name: 'GoogledriveIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.81 3l-6.776.068 5.846 10.126 6.777-.07L15.811 3zM2 14.315l3.447 5.835 5.846-10.126L7.846 4.19 2 14.315zm8.307.175l-3.33 5.902H18.67L22 14.49H10.307z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var GraphBarIcon = {
  name: 'GraphBarIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="17" y="5" width="4" height="11" rx="2"/><rect x="11" y="8" width="4" height="8" rx="2"/><rect x="5" y="11" width="4" height="5" rx="2"/><path d="M21 17H4.995C4.448 17 4 16.548 4 15.991V6a1 1 0 10-2 0v9.991A3.004 3.004 0 004.995 19H21a1 1 0 000-2z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var GraphLineIcon = {
  name: 'GraphLineIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M21 17H4.995C4.448 17 4 16.548 4 15.991V6a1 1 0 10-2 0v9.991A3.004 3.004 0 004.995 19H21a1 1 0 000-2zm-3-8v3a1 1 0 002 0V8a1 1 0 00-1-1h-4a1 1 0 000 2h3z"/><path d="M13.293 13.707a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L14 11.586l-2.293-2.293a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L11 11.414l2.293 2.293z"/></g></svg>'
    });
  }

};

var GsuiteIcon = {
  name: 'GsuiteIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M16.83 7.662a7.075 7.075 0 00-2.033-1.474c-.723-.34-1.637-.505-2.688-.505-.846 0-1.65.15-2.401.45a5.94 5.94 0 00-1.964 1.27 5.851 5.851 0 00-1.351 1.991c-.328.778-.491 1.637-.491 2.592 0 .955.163 1.815.49 2.592a5.794 5.794 0 001.352 1.979 6.24 6.24 0 001.991 1.282c.75.3 1.57.45 2.429.45.914 0 1.719-.123 2.4-.382a5.64 5.64 0 001.76-1.05c.328-.3.628-.669.887-1.105.26-.45.464-.942.614-1.487h-5.77V10.99h9.413c.055.219.095.478.136.805.041.328.055.628.055.942 0 1.296-.191 2.469-.573 3.547a8.259 8.259 0 01-1.733 2.851c-.86.914-1.882 1.61-3.083 2.115-1.2.504-2.578.75-4.12.75-1.391 0-2.701-.246-3.929-.75a10.296 10.296 0 01-3.233-2.088 10.103 10.103 0 01-2.183-3.151C2.259 14.797 2 13.446 2 12c0-1.446.273-2.783.805-4.01a9.584 9.584 0 012.183-3.166C5.902 3.937 6.98 3.255 8.22 2.75A10.326 10.326 0 0112.15 2c1.582 0 2.987.273 4.201.819a9.65 9.65 0 013.151 2.25L16.83 7.663z" fill="currentColor"/></svg>'
    });
  }

};

var HighlightsIcon = {
  name: 'HighlightsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M19 7c1.105.003 2 .899 2 2.006v9.988A2.005 2.005 0 0118.994 21H9.006A2.005 2.005 0 017 19h11c.555 0 1-.448 1-1V7zM3 5.006C3 3.898 3.897 3 5.006 3h9.988C16.102 3 17 3.897 17 5.006v9.988A2.005 2.005 0 0114.994 17H5.006A2.005 2.005 0 013 14.994V5.006zM5 5v10h10V5H5z" fill-rule="nonzero"/><path d="M9.577 6.77l-.814 1.743-1.867.287a.473.473 0 00-.263.794l1.365 1.405-.317 1.955a.465.465 0 00.686.487L10 12.535l1.633.906a.465.465 0 00.686-.487l-.317-1.955 1.364-1.405a.47.47 0 00-.263-.794l-1.866-.287-.815-1.743A.468.468 0 0010 6.5c-.175 0-.343.1-.423.27z"/></g></svg>'
    });
  }

};

var HipchatAudioOnlyIcon = {
  name: 'HipchatAudioOnlyIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11.983 15.984a4.005 4.005 0 01-4.002-4c0-2.206 1.795-4 4.002-4a4.005 4.005 0 014.002 4c0 2.206-1.795 4-4.002 4M12 4C6.48 4 2 8.84 2 12c0 3.086 4.577 8 10 8s10-4.914 10-8c0-3.16-4.481-8-10-8"/><circle cx="12" cy="12" r="2"/></g></svg>'
    });
  }

};

var HipchatChevronDoubleDownIcon = {
  name: 'HipchatChevronDoubleDownIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M14.302 13.294l-2.308 2.327-2.297-2.317a.986.986 0 00-1.405 0 1.009 1.009 0 000 1.419l2.928 2.955c.214.215.492.322.77.322.28 0 .56-.107.778-.322l2.94-2.965a1.012 1.012 0 000-1.419.988.988 0 00-1.406 0zm0-6l-2.308 2.327-2.297-2.317a.986.986 0 00-1.405 0 1.009 1.009 0 000 1.419l2.928 2.955c.214.215.492.322.77.322.28 0 .56-.107.778-.322l2.94-2.965a1.012 1.012 0 000-1.419.988.988 0 00-1.406 0z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var HipchatChevronDoubleUpIcon = {
  name: 'HipchatChevronDoubleUpIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.22 6.322L8.293 9.277a1.009 1.009 0 000 1.419.986.986 0 001.405 0l2.298-2.317 2.307 2.327a.989.989 0 001.407 0 1.01 1.01 0 000-1.419l-2.94-2.965A1.106 1.106 0 0011.99 6c-.28 0-.557.107-.77.322zm0 6l-2.928 2.955a1.009 1.009 0 000 1.419.986.986 0 001.405 0l2.298-2.317 2.307 2.327a.989.989 0 001.407 0 1.01 1.01 0 000-1.419l-2.94-2.965A1.106 1.106 0 0011.99 12c-.28 0-.557.107-.77.322z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var HipchatChevronUpIcon = {
  name: 'HipchatChevronUpIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.294 8.708l-.001.001-4.549 4.559a1.051 1.051 0 101.486 1.488l.001-.001 3.77-3.776 3.768 3.776a1.05 1.05 0 001.486.001h.001a1.054 1.054 0 00.001-1.489l-4.548-4.558a1 1 0 00-1.415-.001z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var HipchatDialOutIcon = {
  name: 'HipchatDialOutIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7.794 5.364c-1.726 2.133-.611 4.957.266 7.089.416 1.012 1.073 2.025 1.629 2.84.973 1.424 3.189 4.13 5.901 3.722 1.168-.176 2.527-1.555 1.597-2.436l-1.869-1.94s-.523-.436-1.171-.08l-1.048.613s-.428.202-.799-.275c-1.163-1.371-1.995-2.797-2.578-4.496-.227-.663.168-.828.168-.828l.767-.45c.637-.378.524-1.051.524-1.051l-.438-2.738c-.132-.568-.601-.803-1.145-.803-.648 0-1.4.334-1.804.833z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var HipchatLobbyIcon = {
  name: 'HipchatLobbyIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 14a7.002 7.002 0 0113.858 0H5z"/><rect x="4" y="15" width="16" height="2" rx="1"/><path d="M11 7h2v3h-2z"/><rect x="10" y="6" width="4" height="1" rx=".5"/></g></svg>'
    });
  }

};

var HipchatMediaAttachmentCountIcon = {
  name: 'HipchatMediaAttachmentCountIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var HipchatOutgoingSoundIcon = {
  name: 'HipchatOutgoingSoundIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M17.229 7.652c.04.048.124.16.238.33.198.294.398.631.584 1.006 1.138 2.288 1.243 4.648-.316 6.864a7.86 7.86 0 01-.377.492 1 1 0 00.156 1.43 1.062 1.062 0 001.467-.152 9.55 9.55 0 00.475-.62c2.045-2.907 1.907-6.017.472-8.901-.392-.788-.788-1.376-1.07-1.72a1.062 1.062 0 00-1.466-.158 1 1 0 00-.163 1.429z" fill-rule="nonzero"/><path d="M14.214 9.619c.079.101.225.33.376.658.608 1.318.608 2.72-.404 4.141-.32.45-.217 1.074.23 1.395a.992.992 0 001.389-.231c1.476-2.073 1.476-4.226.591-6.146a5.494 5.494 0 00-.619-1.055.992.992 0 00-1.398-.166c-.431.341-.506.97-.165 1.404z" fill-rule="nonzero"/><path d="M7 15V9l4.74-3.892c.57-.323 1.26.116 1.26.8v12.184c0 .684-.69 1.123-1.26.8L7 15zM4 9h2v6H4a1 1 0 01-1-1v-4a1 1 0 011-1z"/></g></svg>'
    });
  }

};

var HipchatSdVideoIcon = {
  name: 'HipchatSdVideoIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M21 7c.523 0 1 .395 1 .94v8.12c0 .545-.477.94-1 .94-.157 0-.318-.035-.47-.112L17 15.118V8.873l3.531-1.763c.152-.075.312-.11.469-.11zM3.998 6H14a2 2 0 012 2.003v7.995A2 2 0 0114.001 18H4a2 2 0 01-2-2.002V8.003A2 2 0 013.999 6z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var HomeCircleIcon = {
  name: 'HomeCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="currentColor"/><path d="M11.643 6.357a.506.506 0 01.714 0l4.931 4.931c.393.393.256.712-.29.712H7.002c-.553 0-.68-.323-.29-.712l4.93-4.93z" fill="inherit"/><path d="M8 12.003c0-.554.453-1.003.997-1.003h6.006c.55 0 .997.438.997 1.003v4.994c0 .554-.453 1.003-.997 1.003H8.997A.993.993 0 018 16.997v-4.994zm2.667 3.514V18h2.666v-2.483a1.334 1.334 0 10-2.666 0z" fill="inherit"/></g></svg>'
    });
  }

};

var HomeFilledIcon = {
  name: 'HomeFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M18 12v8.004c0 .55-.456.996-1.002.996H7.002A.998.998 0 016 20.004V12H3.993c-.548 0-.673-.32-.287-.706l7.941-7.941a.497.497 0 01.706 0l7.94 7.94c.39.39.262.707-.286.707H18zm-8 4.998V21h4v-4.002a2 2 0 00-4 0z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var ImageBorderIcon = {
  name: 'ImageBorderIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M3 17v3.41c0 .326.262.59.59.59H7v-2H5v-2H3zm16 0v2h-2v2h3.41c.328 0 .59-.264.59-.59V17h-2zM3.59 3a.589.589 0 00-.59.59V7h2V5h2V3H3.59zM17 3v2h2v2h2V3.59a.589.589 0 00-.59-.59H17zm-3 2h2V2.999h-2V5zM8 5h5V2.999H8V5zm11 5h2.001V8H19v2zM3 12h2V8H3v4zm16 4h2.001v-5H19v5zM3 16h2v-3H3v3zm9 5h4v-2h-4v2zm-4 0h3v-2H8v2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var ImageResizeIcon = {
  name: 'ImageResizeIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="3" y="3" width="18" height="18" rx="2"/><path d="M5 14v3.89a1.1 1.1 0 001.1 1.1H10a1 1 0 100-2H7V14a1 1 0 10-2 0z" fill="inherit"/><path d="M5.707 18.121c.39.39 1.027.388 1.41.004L18.125 7.117a.995.995 0 00-.004-1.41 1.001 1.001 0 00-1.41-.004L5.703 16.711a.995.995 0 00.004 1.41z" fill="inherit"/><path d="M17 7v2.99a1 1 0 002 0V6.1A1.1 1.1 0 0017.9 5H14a1 1 0 000 2h3z" fill="inherit"/></g></svg>'
    });
  }

};

var ImageIcon = {
  name: 'ImageIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0119.005 21H4.995A1.995 1.995 0 013 19.005V4.995zM10.5 16.5L9 15l-3 3h12v-2.7L15 12l-4.5 4.5zM8 10a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var InviteTeamIcon = {
  name: 'InviteTeamIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="18" y="5" width="2" height="6" rx="1"/><rect x="16" y="7" width="6" height="2" rx="1"/><path d="M5 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"/><circle cx="11" cy="7" r="4"/></g></svg>'
    });
  }

};

var IssueRaiseIcon = {
  name: 'IssueRaiseIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="11" y="9" width="2" height="6" rx="1"/><path d="M5 15.991c0 .007 14.005.009 14.005.009C18.999 16 19 8.009 19 8.009 19 8.002 4.995 8 4.995 8 5.001 8 5 15.991 5 15.991zM3 8.01C3 6.899 3.893 6 4.995 6h14.01C20.107 6 21 6.902 21 8.009v7.982c0 1.11-.893 2.009-1.995 2.009H4.995A2.004 2.004 0 013 15.991V8.01z" fill-rule="nonzero"/><rect x="9" y="11" width="6" height="2" rx="1"/></g></svg>'
    });
  }

};

var IssueIcon = {
  name: 'IssueIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 15.991c0 .007 14.005.009 14.005.009C18.999 16 19 8.009 19 8.009 19 8.002 4.995 8 4.995 8 5.001 8 5 15.991 5 15.991zM3 8.01C3 6.899 3.893 6 4.995 6h14.01C20.107 6 21 6.902 21 8.009v7.982c0 1.11-.893 2.009-1.995 2.009H4.995A2.004 2.004 0 013 15.991V8.01z" fill-rule="nonzero"/><path d="M10.674 14.331c.36.36.941.36 1.3 0l2.758-2.763a.92.92 0 00-1.301-1.298l-2.108 2.11-.755-.754a.92.92 0 00-1.3 1.3l1.406 1.405z"/></g></svg>'
    });
  }

};

var IssuesIcon = {
  name: 'IssuesIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 12.991c0 .007 14.005.009 14.005.009C18.999 13 19 5.009 19 5.009 19 5.002 4.995 5 4.995 5 5.001 5 5 12.991 5 12.991zM3 5.01C3 3.899 3.893 3 4.995 3h14.01C20.107 3 21 3.902 21 5.009v7.982c0 1.11-.893 2.009-1.995 2.009H4.995A2.004 2.004 0 013 12.991V5.01zM19 19c-.005 1.105-.9 2-2.006 2H7.006A2.009 2.009 0 015 19h14zm1-3a2.002 2.002 0 01-1.994 2H5.994A2.003 2.003 0 014 16h16z" fill-rule="nonzero"/><path d="M10.674 11.331c.36.36.941.36 1.3 0l2.758-2.763a.92.92 0 00-1.301-1.298l-2.108 2.11-.755-.754a.92.92 0 00-1.3 1.3l1.406 1.405z"/></g></svg>'
    });
  }

};

var JiraCaptureIcon = {
  name: 'JiraCaptureIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 15a3 3 0 110-6 3 3 0 010 6zm1-12h6c1.136 0 2 1 2 2v6l-2-2V5h-4l-2-2zM3 11V5c0-1.136 1-2 2-2h6L9 5H5v4l-2 2zm8 10H5c-1.136 0-2-1-2-2v-6l2 2v4h4l2 2zm10-8v6c0 1.136-1 2-2 2h-6l2-2h4v-4l2-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var JiraFailedBuildStatusIcon = {
  name: 'JiraFailedBuildStatusIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M12 14a1 1 0 01-1-1V8a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2" fill="inherit"/></g></svg>'
    });
  }

};

var JiraLabsIcon = {
  name: 'JiraLabsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M10.935 6v4.738L6.997 19h10.005l-3.938-8.262V6h-2.129zm7.873 12.14A2 2 0 0117.002 21H6.997a2 2 0 01-1.805-2.86l3.743-7.854V4h6.13v6.286l3.743 7.853z" fill-rule="nonzero"/><path d="M9 13h6l3 7H6z"/><rect x="8" y="3" width="8" height="2" rx="1"/></g></svg>'
    });
  }

};

var JiraTestSessionIcon = {
  name: 'JiraTestSessionIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M7 9.306C7 6.376 9.238 4 12 4c2.761 0 4.999 2.376 4.999 5.306v6.388C16.999 18.624 14.761 21 12 21c-2.762 0-5-2.376-5-5.306V9.306zm1.999 6.388c0 1.758 1.344 3.183 3.001 3.183 1.657 0 3-1.425 3-3.183V9.306c0-1.758-1.343-3.183-3-3.183S8.999 7.548 8.999 9.306v6.388z"/><path d="M4 12.397a1 1 0 100 2h3a1 1 0 100-2H4zm13 0a1 1 0 000 1.999h3.001a1 1 0 100-1.999H17zM7.673 15.74L3.65 17.22a1.003 1.003 0 00-.59 1.281.986.986 0 001.267.597l4.021-1.48a1.002 1.002 0 00-.338-1.939.978.978 0 00-.338.06zM3.062 8.272a.977.977 0 00.606 1.262l3.97 1.4c.527.187 1.11-.076 1.3-.587a.977.977 0 00-.606-1.263l-3.97-1.4a1.042 1.042 0 00-.347-.06c-.414 0-.805.248-.953.648zm16.536-.532l-3.916 1.368c-.54.189-.82.763-.622 1.282.197.519.795.786 1.335.597l3.916-1.368c.54-.189.82-.763.622-1.281a1.041 1.041 0 00-.979-.658c-.117 0-.238.019-.356.06zm-4.538 8.62a1.031 1.031 0 00.622 1.323l3.916 1.413a1.044 1.044 0 001.335-.617 1.031 1.031 0 00-.622-1.324l-3.916-1.414a1.043 1.043 0 00-1.335.618z"/><path d="M8.715 9.397a1 1 0 100 2h6a1 1 0 100-2h-6zM8.83 3.33a1 1 0 00-.366 1.366l.75 1.3a1 1 0 101.732-1l-.75-1.3a.998.998 0 00-1.367-.366zm5.13.385l-.745 1.289a1.003 1.003 0 101.739 1.005l.742-1.29a1.006 1.006 0 00-.866-1.508 1 1 0 00-.87.504z"/></g></svg>'
    });
  }

};

var LabelIcon = {
  name: 'LabelIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.433 5.428l-4.207.6A2 2 0 005.53 7.727l-.6 4.207a1 1 0 00.281.849l6.895 6.894a.999.999 0 001.414 0l5.657-5.657a1 1 0 000-1.414L12.282 5.71a.998.998 0 00-.849-.283m-.647 5.858A1.666 1.666 0 118.43 8.929a1.666 1.666 0 012.357 2.357" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var LightbulbFilledIcon = {
  name: 'LightbulbFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.998 4A5.997 5.997 0 006 9.998c0 2.218 2.288 4.484 2.288 4.484.39.387.71 1.112.71 1.611 0 .499.45.907 1 .907h4c.55 0 1-.408 1-.907 0-.499.32-1.224.71-1.611 0 0 2.288-2.266 2.288-4.484A5.997 5.997 0 0011.998 4zm2.965 15c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v.003c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V19z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var LightbulbIcon = {
  name: 'LightbulbIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.998 4A5.997 5.997 0 006 9.998c0 2.218 2.288 4.484 2.288 4.484.39.387.71 1.112.71 1.611 0 .499.45.907 1 .907h4c.55 0 1-.408 1-.907 0-.499.32-1.224.71-1.611 0 0 2.288-2.266 2.288-4.484A5.997 5.997 0 0011.998 4zm0 2a4.003 4.003 0 013.998 3.998c0 1.029-1.145 2.511-1.695 3.064-.507.501-.912 1.216-1.13 1.938h-2.346c-.217-.722-.622-1.435-1.125-1.934-.555-.557-1.7-2.039-1.7-3.068A4.003 4.003 0 0111.998 6zm2.965 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v.003c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V19z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var LikeIcon = {
  name: 'LikeIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M4 12v7a.971.971 0 00.278.704.99.99 0 00.701.296H6v-9H4.98a.99.99 0 00-.701.296A.971.971 0 004 12zm15.281-.96a3.046 3.046 0 00-2.321-1.061h-2.634c.04-.181.08-.36.11-.532.515-2.934 0-4-.504-4.594A2.432 2.432 0 0012.075 4a3.078 3.078 0 00-2.968 2.751c-.393 1.839-.454 2-.968 2.725l-.768 1.089a2.011 2.011 0 00-.363 1.141v6.273c.001.532.216 1.041.596 1.416s.896.585 1.433.584h7.247a3.014 3.014 0 002.997-2.507l.677-4a2.963 2.963 0 00-.677-2.432zm-1.998 6.1a1.007 1.007 0 01-1 .835H9.038v-6.269l.767-1.089a7.577 7.577 0 001.302-3.509c.036-.543.255-1.209.969-1.108.714.1.575 1.916.363 3.1a19.712 19.712 0 01-.868 2.882l5.39-.008c.297-.001.58.128.773.352a.993.993 0 01.226.813l-.676 4.001z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var LinkFilledIcon = {
  name: 'LinkFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M11.75 16.15l.548-.537a.585.585 0 000-.838.61.61 0 00-.854 0l-.574.564c-.564.553-1.483.662-2.101.168a1.482 1.482 0 01-.119-2.223l1.694-1.663a1.543 1.543 0 012.156 0l.647.635.853-.839-.646-.635a2.775 2.775 0 00-3.863 0l-1.694 1.664a2.659 2.659 0 00.208 3.979c1.104.884 2.738.715 3.746-.275" fill="inherit"/><path d="M12.25 7.85l-.547.537a.585.585 0 000 .838.61.61 0 00.853 0l.574-.564c.564-.553 1.483-.662 2.101-.168.71.57.75 1.603.119 2.223l-1.694 1.663a1.543 1.543 0 01-2.156 0l-.647-.635-.853.839.646.635a2.775 2.775 0 003.863 0l1.695-1.664a2.659 2.659 0 00-.209-3.979c-1.104-.884-2.738-.715-3.746.275" fill="inherit"/></g></svg>'
    });
  }

};

var LinkIcon = {
  name: 'LinkIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M12.856 5.457l-.937.92a1.002 1.002 0 000 1.437 1.047 1.047 0 001.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 01.203 3.81l-2.903 2.852a2.646 2.646 0 01-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 00-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47"/><path d="M11.144 19.543l.937-.92a1.002 1.002 0 000-1.437 1.047 1.047 0 00-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 01-.203-3.81l2.903-2.852a2.646 2.646 0 013.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 00.357 6.82c1.893 1.517 4.695 1.226 6.422-.47"/></g></svg>'
    });
  }

};

var ListIcon = {
  name: 'ListIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M3 18c0 .552.445 1 .993 1h16.014A.994.994 0 0021 18v-1H3v1zm0-7h18V9H3zm0-4h18V6c0-.552-.445-1-.993-1H3.993A.994.994 0 003 6v1zm0 8h18v-2H3z" fill="currentColor"/></svg>'
    });
  }

};

var LocationIcon = {
  name: 'LocationIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 21c-2.28 0-6-8.686-6-12a6 6 0 1112 0c0 3.314-3.72 12-6 12zm0-9a2.912 2.912 0 100-5.824A2.912 2.912 0 0012 12z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var LockCircleIcon = {
  name: 'LockCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M12.02 8h-.04A1.98 1.98 0 0010 9.98V11h1V9.99a.99.99 0 01.99-.99h.02a.99.99 0 01.99.99V11h1V9.98A1.98 1.98 0 0012.02 8M10 11h1v1h-1zm3 0h1v1h-1zm0 1h-3a1 1 0 00-1 1v2.001a1 1 0 00.991.999h4.018a.992.992 0 00.991-.999V13a1 1 0 00-1-1h-1z" fill="inherit"/></g></svg>'
    });
  }

};

var LockIcon = {
  name: 'LockIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M16 11V9h-2V7.002A2.001 2.001 0 0012 5c-1.102 0-2 .898-2 2.002V9H8v2H7v8h10v-8h-1zm-2 0h-4V9h4v2zM8 9V7.002A4.004 4.004 0 0112 3a4 4 0 014 4.002V9h.994A2.01 2.01 0 0119 11.009v7.982c0 1.11-.897 2.009-2.006 2.009H7.006A2.009 2.009 0 015 18.991V11.01C5 9.899 5.897 9 7.006 9H8zm0 0h2v2H8V9zm6 0h2v2h-2V9z"/><circle cx="12" cy="15" r="2"/></g></svg>'
    });
  }

};

var MarketplaceIcon = {
  name: 'MarketplaceIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M4 11h2v5H4zm.556-7.112C4.801 3.398 5.45 3 6.006 3h11.987c.556 0 1.206.398 1.45.888L21 7H3l1.556-3.112zM3 7h18v1H3V7zm15 4h2v5h-2zM3 8c.14 1.128 1.094 2 2.25 2s2.11-.872 2.25-2H3zm4.5 0c.14 1.128 1.094 2 2.25 2s2.11-.872 2.25-2H7.5zM12 8c.14 1.128 1.094 2 2.25 2s2.11-.872 2.25-2H12zm4.5 0c.14 1.128 1.094 2 2.25 2s2.11-.872 2.25-2h-4.5zM4 16h16v2.995A2 2 0 0118.006 21H5.994A1.997 1.997 0 014 18.995V16z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var MediaServicesActualSizeIcon = {
  name: 'MediaServicesActualSizeIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M16.587 6.003H15A1 1 0 1115 4h3.9l.047.001a.975.975 0 01.736.285l.032.032c.2.2.296.47.284.736l.001.048v3.896a1 1 0 11-2 0V7.411l-3.309 3.308a.977.977 0 01-1.374-.005l-.032-.032a.976.976 0 01-.005-1.374l3.307-3.305zM7.413 17.997H9A1 1 0 119 20H5.1l-.047-.001a.975.975 0 01-.736-.285l-.032-.032A.977.977 0 014 18.946a1.12 1.12 0 010-.048v-3.896a1 1 0 112 0v1.587l3.309-3.308a.977.977 0 011.374.005l.032.032a.976.976 0 01.005 1.374l-3.307 3.305z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var MediaServicesAddCommentIcon = {
  name: 'MediaServicesAddCommentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M14 4.187A10.704 10.704 0 0012 4c-4.963 0-9 3.37-9 7.513s4.037 7.514 9 7.514c1.42 0 2.76-.285 3.957-.776 1.003 1.022 2.287 1.572 3.24 1.719l.002-.003a.524.524 0 00.164.033.515.515 0 00.474-.716v-.002s-1.563-2.26-.766-3.116l-.037.02C20.261 14.902 21 13.279 21 11.513a6.34 6.34 0 00-.02-.513h-2.008c.02.169.03.34.03.513 0 3.039-3.141 5.51-7.002 5.51-3.861 0-7.002-2.471-7.002-5.51 0-3.038 3.141-5.51 7.002-5.51.695 0 1.366.08 2 .229V4.187z"/><rect x="17" y="4" width="2" height="6" rx="1"/><rect x="15" y="6" width="6" height="2" rx="1"/></g></svg>'
    });
  }

};

var MediaServicesAnnotateIcon = {
  name: 'MediaServicesAnnotateIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M9.864 10.736c.77-.746 1.893-.536 2.72.265.826.8 1.043 1.888.273 2.634-1.816 1.76-5.482 2.002-4.765 1.207 1.587-1.76.578-2.949 1.772-4.106zM19.968 4.03c.402.378-3.1 4.732-4.427 5.98-.659.62-1.012.826-1.276 1.016-.115.082-.15-.027-.177-.076a3.743 3.743 0 00-.63-.801c-.236-.222-.607-.445-.867-.572-.053-.025-.169-.058-.08-.166.201-.249.421-.58 1.08-1.2 1.327-1.247 5.974-4.56 6.377-4.181zM18.38 19.946a1.033 1.033 0 01-.332.054.946.946 0 01-.913-.628c-.343-.957-1.14-1.642-2.257-1.933-2.182-.568-3.22-.264-5.053.995l-.16.11a9.341 9.341 0 01-1.049.644c-1.477.755-2.632.825-3.482.419-.586-.28-.989-.794-1.1-1.407-.254-1.403.93-2.647 2.602-3.156a.906.906 0 011.155.601.92.92 0 01-.62 1.186c-.33.1-.717.311-.978.533-.195.165-.33.355-.306.434.042.138.088.185.16.214.155.063.445.029.818-.096.164-.055.34-.126.524-.21.196-.088.348-.165.58-.287.076-.04.177-.11.445-.303 1.09-.784 1.802-1.198 2.845-1.52 1.562-.482 3.18-.39 4.802.272 1.399.57 2.399 1.589 2.883 2.94.174.483-.07.97-.564 1.138z" fill="currentColor"/></svg>'
    });
  }

};

var MediaServicesArrowIcon = {
  name: 'MediaServicesArrowIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M10.527 11.078l-.842-1.867c-.588-1.305-1.456-1.269-1.942.07l-3.69 10.153c-.164.45.067.676.513.514l10.148-3.692c1.339-.488 1.37-1.357.07-1.944l-1.856-.837c.393-.37.79-.756 1.19-1.156 3.861-3.864 6.448-7.54 5.776-8.213-.672-.672-4.347 1.916-8.209 5.78-.4.4-.787.799-1.158 1.192z" fill="currentColor"/></svg>'
    });
  }

};

var MediaServicesAudioIcon = {
  name: 'MediaServicesAudioIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><path d="M16 9.283V13.6h-.003A1.5 1.5 0 1114.5 12c.175 0 .344.03.5.085v-2.08l-4 .431V14.6h-.003A1.5 1.5 0 018 14.5a1.5 1.5 0 012-1.415V9.034c0-.238.186-.451.432-.478l5.136-.553a.38.38 0 01.432.384v.896z" fill="inherit"/></svg>'
    });
  }

};

var MediaServicesBlurIcon = {
  name: 'MediaServicesBlurIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M4.889 4H12v8H4V4.889C4 4.398 4.398 4 4.889 4z"/><path d="M4 12h8v8H4.889A.889.889 0 014 19.111V12z" opacity=".4"/><path d="M12 4h7.111c.491 0 .889.398.889.889V12h-8V4z" opacity=".55"/><path d="M12 12h8v7.111a.889.889 0 01-.889.889H12v-8z" opacity=".75"/></g></svg>'
    });
  }

};

var MediaServicesBrushIcon = {
  name: 'MediaServicesBrushIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6.486 13.728c-1.593 1.599-.248 3.24-2.364 5.674-.955 1.098 3.932.763 6.354-1.668 1.027-1.03.737-2.534-.364-3.64-1.102-1.106-2.6-1.397-3.626-.366zm13.471-9.685c-.537-.548-6.733 4.25-8.503 6.058-.878.897-1.171 1.378-1.44 1.738-.118.156.037.204.107.241.348.184.842.507 1.156.828.315.321.665.815.84 1.161.036.071.083.23.236.11.352-.275.823-.574 1.701-1.472 1.77-1.807 6.44-8.115 5.903-8.664z" fill="currentColor"/></svg>'
    });
  }

};

var MediaServicesButtonOptionIcon = {
  name: 'MediaServicesButtonOptionIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M13.29 10.234l-3.059 3.059c-.391.392-.264.71.285.71h2.988a.492.492 0 00.496-.497v-2.988c0-.334-.118-.509-.299-.509-.116 0-.259.072-.411.225z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var MediaServicesCodeIcon = {
  name: 'MediaServicesCodeIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><path d="M15.652 12.014l-1.367-1.367a.98.98 0 01.005-1.38.973.973 0 011.38-.005l2.02 2.022a.953.953 0 01.219.339.97.97 0 01-.193 1.096l-2.02 2.02a.98.98 0 01-1.378-.006.973.973 0 01-.006-1.379l1.34-1.34zm-9.56-.391a.953.953 0 01.217-.34l2.022-2.02a.973.973 0 011.38.004.98.98 0 01.004 1.38l-1.367 1.367 1.34 1.34a.98.98 0 01-1.384 1.384l-2.02-2.02a.97.97 0 01-.193-1.095zm7.19-3.572c.546.177.844.763.667 1.308l-1.924 5.923a1.038 1.038 0 11-1.974-.641l1.924-5.923a1.038 1.038 0 011.308-.667z" fill="inherit"/></svg>'
    });
  }

};

var MediaServicesDocumentIcon = {
  name: 'MediaServicesDocumentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><rect fill="inherit" x="7" y="8" width="10" height="2" rx="1"/><rect fill="inherit" x="7" y="11" width="10" height="2" rx="1"/><rect fill="inherit" x="7" y="14" width="5" height="2" rx="1"/></g></svg>'
    });
  }

};

var MediaServicesFilterIcon = {
  name: 'MediaServicesFilterIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 13h10l1-2H6zM3.993 6c-.548 0-.79.405-.546.895L4 8h16l.553-1.105C20.8 6.4 20.555 6 20.007 6H3.993zm6.785 11.556a.87.87 0 00.727.444h.99c.279 0 .605-.2.727-.444L14 16h-4l.778 1.556z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var MediaServicesFitToPageIcon = {
  name: 'MediaServicesFitToPageIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M16.413 8.997H18A1 1 0 1118 11h-3.9l-.047-.001a.975.975 0 01-.736-.285l-.032-.032A.977.977 0 0113 9.946a1.12 1.12 0 010-.048V6.002a1 1 0 112 0v1.587l3.309-3.308a.977.977 0 011.374.005l.032.032a.976.976 0 01.005 1.374l-3.307 3.305zm-8.826 6.006H6A1 1 0 116 13h3.9l.047.001a.975.975 0 01.736.285l.032.032c.2.2.296.47.284.736l.001.048v3.896a1 1 0 11-2 0v-1.587l-3.309 3.308a.977.977 0 01-1.374-.005l-.032-.032a.976.976 0 01-.005-1.374l3.307-3.305z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var MediaServicesFullScreenIcon = {
  name: 'MediaServicesFullScreenIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M16 8h3a1 1 0 010 2h-3a2 2 0 01-2-2V5a1 1 0 012 0v3zm-8 2H5a1 1 0 110-2h3V5a1 1 0 112 0v3a2 2 0 01-2 2zm8 4h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3a2 2 0 012-2zm-8 2H5a1 1 0 010-2h3a2 2 0 012 2v3a1 1 0 01-2 0v-3z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var MediaServicesGridIcon = {
  name: 'MediaServicesGridIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></g></svg>'
    });
  }

};

var MediaServicesImageIcon = {
  name: 'MediaServicesImageIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><circle fill="inherit" cx="8.667" cy="8.667" r="2"/><path fill="inherit" d="M6.667 17.333l2.666-2.666L12 17.333z"/><path fill="inherit" d="M14.667 12l2.666 2.933v2.4h-8z"/></g></svg>'
    });
  }

};

var MediaServicesLineThicknessIcon = {
  name: 'MediaServicesLineThicknessIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M4 4.495C4 4.222 4.226 4 4.496 4h15.008c.274 0 .496.216.496.495v2.01a.498.498 0 01-.496.495H4.496A.492.492 0 014 6.505v-2.01zm0 8.01c0-.279.226-.505.496-.505h15.008c.274 0 .496.214.496.505v.99a.503.503 0 01-.496.505H4.496A.493.493 0 014 13.495v-.99zm0 6.747c0-.139.102-.252.251-.252H19.75c.138 0 .251.107.251.252v.496a.245.245 0 01-.251.252H4.25a.248.248 0 01-.25-.252v-.496z" fill="currentColor"/></svg>'
    });
  }

};

var MediaServicesLineIcon = {
  name: 'MediaServicesLineIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M4.36 17.904L17.904 4.36a1.228 1.228 0 111.736 1.736L6.096 19.64a1.228 1.228 0 11-1.736-1.736z" fill="currentColor"/></svg>'
    });
  }

};

var MediaServicesNoImageIcon = {
  name: 'MediaServicesNoImageIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M19.41 3.041l.72-.72a1.095 1.095 0 111.55 1.548L3.87 21.68a1.095 1.095 0 11-1.55-1.55l.72-.72a2.005 2.005 0 01-.04-.405V4.995C3 3.893 3.893 3 4.995 3h14.01c.139 0 .274.014.405.041zM21 7.531v11.474A1.995 1.995 0 0119.005 21H7.53l3-3H18v-2.7l-2.271-2.498L21 7.53zM8 10a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/></svg>'
    });
  }

};

var MediaServicesOpenMediaviewerIcon = {
  name: 'MediaServicesOpenMediaviewerIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M14 11.414l-3 3V18h3v2H6.006A1.999 1.999 0 014 17.994V10h2v3h3.586l3-3H12c-.552 0-1-.444-1-1 0-.552.444-1 1-1h3a.997.997 0 011 1v3c0 .552-.444 1-1 1-.552 0-1-.444-1-1v-.586zM16 18v2h2c1.105 0 2-.888 2-2v-2h-2v1.497c0 .27-.225.503-.503.503H16zM8 6V4H6c-1.105 0-2 .888-2 2v2h2V6.503c0-.27.225-.503.503-.503H8zm10 2h2V6c0-1.112-.895-2-2-2h-2v2h1.497c.278 0 .503.233.503.503V8zm-8-4h4v2h-4V4zm8 6h2v4h-2v-4z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var MediaServicesOvalIcon = {
  name: 'MediaServicesOvalIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 20c-4.943 0-9-3.55-9-8s4.057-8 9-8 9 3.55 9 8-4.057 8-9 8zm0-2c3.893 0 7-2.718 7-6s-3.107-6-7-6-7 2.718-7 6 3.107 6 7 6z" fill="currentColor"/></svg>'
    });
  }

};

var MediaServicesPdfIcon = {
  name: 'MediaServicesPdfIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><rect fill="inherit" x="7" y="8" width="10" height="2" rx="1"/><path d="M16.187 16h-3.373c-.45 0-.814-.222-.814-.497v-4.006c0-.275.364-.497.814-.497h3.373c.45 0 .813.222.813.497v4.006c0 .275-.364.497-.813.497" fill="inherit"/><rect fill="inherit" x="7" y="11" width="4" height="2" rx="1"/><rect fill="inherit" x="7" y="14" width="4" height="2" rx="1"/></g></svg>'
    });
  }

};

var MediaServicesPreselectedIcon = {
  name: 'MediaServicesPreselectedIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 19a7 7 0 100-14 7 7 0 000 14zm0 2a9 9 0 110-18 9 9 0 010 18z" fill="currentColor"/></svg>'
    });
  }

};

var MediaServicesPresentationIcon = {
  name: 'MediaServicesPresentationIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><rect fill="inherit" x="8" y="12" width="2" height="3" rx="1"/><rect fill="inherit" x="11" y="10" width="2" height="5" rx="1"/><rect fill="inherit" x="14" y="8" width="2" height="7" rx="1"/></g></svg>'
    });
  }

};

var MediaServicesRectangleIcon = {
  name: 'MediaServicesRectangleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 6v12h14V6H5zm0-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" fill="currentColor"/></svg>'
    });
  }

};

var MediaServicesScaleLargeIcon = {
  name: 'MediaServicesScaleLargeIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 6.007v11.986C5 18.55 5.45 19 6.007 19h11.986C18.55 19 19 18.55 19 17.993V6.007C19 5.45 18.55 5 17.993 5H6.007C5.45 5 5 5.45 5 6.007zm-2 0A3.006 3.006 0 016.007 3h11.986A3.006 3.006 0 0121 6.007v11.986A3.006 3.006 0 0117.993 21H6.007A3.006 3.006 0 013 17.993V6.007z" fill-rule="nonzero"/><path d="M11.005 17H16.5c.27 0 .5-.228.5-.509v-1.634a.725.725 0 00-.167-.44L14.5 11.85a.238.238 0 00-.344-.006L11 15l-.821-.821a.248.248 0 00-.358 0l-2.465 2.465c-.195.195-.136.356.135.356h3.514z"/><circle cx="9" cy="9" r="2"/></g></svg>'
    });
  }

};

var MediaServicesScaleSmallIcon = {
  name: 'MediaServicesScaleSmallIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M8 8.575v6.85a.57.57 0 00.575.575h6.85a.57.57 0 00.575-.575v-6.85A.57.57 0 0015.425 8h-6.85A.57.57 0 008 8.575zm-2 0A2.57 2.57 0 018.575 6h6.85A2.57 2.57 0 0118 8.575v6.85A2.57 2.57 0 0115.425 18h-6.85A2.57 2.57 0 016 15.425v-6.85z" fill-rule="nonzero"/><path d="M11.425 14.857h3.146a.29.29 0 00.286-.29v-.935a.424.424 0 00-.1-.256l-1.324-1.456c-.062-.069-.145-.065-.201-.01l-1.803 1.804-.47-.469a.141.141 0 00-.204 0L9.34 14.66c-.105.105-.066.197.095.197h1.99z"/><circle cx="10.286" cy="10.286" r="1.143"/></g></svg>'
    });
  }

};

var MediaServicesSpreadsheetIcon = {
  name: 'MediaServicesSpreadsheetIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><rect fill="inherit" x="7" y="8" width="4" height="2" rx="1"/><rect fill="inherit" x="7" y="11" width="4" height="2" rx="1"/><rect fill="inherit" x="13" y="11" width="4" height="2" rx="1"/><rect fill="inherit" x="7" y="14" width="4" height="2" rx="1"/><rect fill="inherit" x="13" y="14" width="4" height="2" rx="1"/><rect fill="inherit" x="13" y="8" width="4" height="2" rx="1"/></g></svg>'
    });
  }

};

var MediaServicesTextIcon = {
  name: 'MediaServicesTextIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11 7h2v11h-2zM6 5h12v2H6z"/><path d="M5 5h2v3H5zm5 13h4v2h-4zm7-13h2v3h-2z"/></g></svg>'
    });
  }

};

var MediaServicesUnknownIcon = {
  name: 'MediaServicesUnknownIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><path d="M12 11h3.502a.5.5 0 01.498.491v4.518A.993.993 0 0115 17H9.01C8.451 17 8 16.544 8 16.005v-8.01C8 7.445 8.443 7 9.01 7h2.5a.5.5 0 01.49.51V11zm1-4l3 3h-3V7z" fill="inherit"/></g></svg>'
    });
  }

};

var MediaServicesVideoIcon = {
  name: 'MediaServicesVideoIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><path d="M16.37 14.954L14 13.807v-3.613l2.37-1.148c.285-.138.63.05.63.343v5.222c0 .293-.345.481-.63.343" fill="inherit"/><rect fill="inherit" x="7" y="9" width="6" height="6" rx="1"/></g></svg>'
    });
  }

};

var MediaServicesZipIcon = {
  name: 'MediaServicesZipIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><path d="M9 6.999C9 6.447 9.443 6 9.999 6H12v3H9.999A.996.996 0 019 8.001V6.999zM12 9h2.001c.552 0 .999.443.999.999v1.002a.996.996 0 01-.999.999H12V9zm-3 3.999c0-.552.443-.999.999-.999H12v3H9.999A.996.996 0 019 14.001v-1.002zM12 15h2.001c.552 0 .999.443.999.999v1.002a.996.996 0 01-.999.999H12v-3z" fill="inherit"/></g></svg>'
    });
  }

};

var MediaServicesZoomInIcon = {
  name: 'MediaServicesZoomInIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM13.5 11.5a1 1 0 000-2h-2v-2a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var MediaServicesZoomOutIcon = {
  name: 'MediaServicesZoomOutIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM13.5 11.5h-6a1 1 0 010-2h6a1 1 0 010 2" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var MentionIcon = {
  name: 'MentionIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11.94 12H5.008A2.006 2.006 0 003 14v4.446c0 2.233 5.16 3.002 8.713 2.306A6.475 6.475 0 0110.13 16.5c0-1.746.689-3.332 1.81-4.5z"/><path d="M21.153 13.123c.795 1.036 1.042 2.316.69 3.603-.34 1.254-.95 2.077-1.814 2.446-1.139.486-2.2-.052-2.315-.114a2.21 2.21 0 01-.575-.482c-.448.328-.94.52-1.417.52a1.74 1.74 0 01-.832-.206 1.837 1.837 0 01-.883-1.12c-.21-.715-.08-1.574.357-2.358.718-1.288 2.168-1.882 3.23-1.335.058.028.094.082.147.117a.85.85 0 01.808-.1c.442.18.654.683.471 1.123l-.072.173c-.438 1.052-.768 1.94-.386 2.168.005 0 .423.19.795.029.343-.154.627-.607.82-1.313.21-.778.077-1.488-.397-2.106-.675-.879-1.953-1.446-3.255-1.446-2.093 0-3.796 1.694-3.796 3.778 0 2.083 1.703 3.78 3.796 3.78.478 0 .865.385.865.86s-.387.86-.865.86C13.478 22 11 19.533 11 16.5s2.478-5.5 5.525-5.5c1.848 0 3.622.814 4.628 2.123zm-3.898 3.757c.413-.738.354-1.466-.141-1.72-.522-.267-1.274.129-1.637.776-.414.737-.35 1.545.14 1.806.491.26 1.224-.126 1.638-.863z"/><circle cx="9" cy="7" r="4"/></g></svg>'
    });
  }

};

var MenuExpandIcon = {
  name: 'MenuExpandIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 12c0-.552.456-1 1.002-1h9.996a.999.999 0 110 2H7.002A.999.999 0 016 12zm0 4c0-.552.456-1 1.002-1h9.996a.999.999 0 110 2H7.002A.999.999 0 016 16zm0-8c0-.552.456-1 1.002-1h9.996a.999.999 0 110 2H7.002A.999.999 0 016 8z" fill="currentColor"/></svg>'
    });
  }

};

var MenuIcon = {
  name: 'MenuIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var MoreVerticalIcon = {
  name: 'MoreVerticalIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><circle cx="12" cy="19" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="2"/></g></svg>'
    });
  }

};

var MoreIcon = {
  name: 'MoreIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></g></svg>'
    });
  }

};

var NotificationAllIcon = {
  name: 'NotificationAllIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11.384 5.478A5.036 5.036 0 0114.954 4c.972 0 1.945.28 2.788.839.02-.026.043-.05.066-.074a1.01 1.01 0 111.354 1.494 5.048 5.048 0 01-.64 6.356l-.725.725c-.782.783-1.813 2.21-2.312 3.207l-1.509 3.016c-.249.5-.773.584-1.171.187l-8.556-8.555c-.397-.397-.308-.924.187-1.172l3.017-1.508c.989-.494 2.42-1.526 3.206-2.312l.725-.725z" fill-rule="nonzero"/><path d="M7.924 3.618l.401.968a1 1 0 11-1.848.765l-.4-.968a1 1 0 111.848-.765M4.383 6.076l.968.401a1.001 1.001 0 01-.766 1.848l-.968-.4a1.001 1.001 0 01.766-1.848m11.835 11.999a1.003 1.003 0 00-.542 1.307l.402.968a1 1 0 101.848-.766l-.401-.967a1 1 0 00-1.307-.542zm1.859-1.857a1 1 0 00.54 1.306l.969.401a1.001 1.001 0 00.766-1.848l-.97-.401a1 1 0 00-1.306.542zm-11.592 1.45a2 2 0 002.829 0l-2.829-2.83a2 2 0 000 2.83z"/></g></svg>'
    });
  }

};

var NotificationDirectIcon = {
  name: 'NotificationDirectIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6.586 17.829a2 2 0 002.829 0L6.585 15a2 2 0 000 2.829zm4.798-12.351A5.036 5.036 0 0114.954 4c.972 0 1.945.28 2.788.839.02-.026.043-.05.066-.074a1.01 1.01 0 111.354 1.494 5.048 5.048 0 01-.64 6.356l-.725.725c-.782.783-1.813 2.21-2.312 3.207l-1.509 3.016c-.249.5-.773.584-1.171.187l-8.556-8.555c-.397-.397-.308-.924.187-1.172l3.017-1.508c.989-.494 2.42-1.526 3.206-2.312l.725-.725zm2.739 9.63c.517-.975 1.568-2.396 2.354-3.182l.725-.726a3.048 3.048 0 00.387-3.835c-.19-.286-.718-.766-.859-.86A3.043 3.043 0 0015.047 6a3.04 3.04 0 00-2.156.892l-.95.951c-.784.785-2.219 1.82-3.201 2.311l-1.74.87 6.07 6.069 1.053-1.985z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var NotificationIcon = {
  name: 'NotificationIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6.485 17.669a2 2 0 002.829 0l-2.829-2.83a2 2 0 000 2.83zm4.897-12.191l-.725.725c-.782.782-2.21 1.813-3.206 2.311l-3.017 1.509c-.495.248-.584.774-.187 1.171l8.556 8.556c.398.396.922.313 1.171-.188l1.51-3.016c.494-.988 1.526-2.42 2.311-3.206l.725-.726a5.048 5.048 0 00.64-6.356 1.01 1.01 0 10-1.354-1.494c-.023.025-.046.049-.066.075a5.043 5.043 0 00-2.788-.84 5.036 5.036 0 00-3.57 1.478z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var OfficeBuildingFilledIcon = {
  name: 'OfficeBuildingFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M8 6H5.009C3.902 6 3 6.962 3 8.15v10.7C3 20.04 3.9 21 5.009 21h5.487H8V6z" fill="currentColor" fill-rule="nonzero"/><path fill="inherit" d="M6 10h2v2H6zm0 3h2v2H6z"/><path d="M9 4.995C9 3.893 9.902 3 11.009 3h7.982C20.101 3 21 3.893 21 4.995v14.01A2.004 2.004 0 0118.991 21H9V4.995z" fill="currentColor"/><path fill="inherit" d="M12 7h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zm2 3h2v3h-2zm2-9h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"/></g></svg>'
    });
  }

};

var OfficeBuildingIcon = {
  name: 'OfficeBuildingIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M8 6H5.009C3.902 6 3 6.962 3 8.15v10.7C3 20.04 3.9 21 5.009 21h5.487H8v-2.145c-1.616-.001-3-.003-3-.004 0 0 .005-10.708.009-10.708L8 8.144V6z" fill-rule="nonzero"/><path d="M12 7h2v2h-2zm-6 3h2v2H6zm0 3h2v2H6zm6-3h2v2h-2zm0 3h2v2h-2zm2 3h2v3h-2zm2-9h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"/><path d="M18.991 19C18.998 19 19 4.995 19 4.995c0 .006-7.991.005-7.991.005C11.002 5 11 19 11 19h7.991zM9 4.995C9 3.893 9.902 3 11.009 3h7.982C20.101 3 21 3.893 21 4.995v14.01A2.004 2.004 0 0118.991 21H9V4.995z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var OpenIcon = {
  name: 'OpenIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11.031 7A1.03 1.03 0 0010 8.036a1.05 1.05 0 001.044 1.045l3.121.014.014 3.121a1.05 1.05 0 001.045 1.044 1.03 1.03 0 001.036-1.035l-.019-4.161a1.053 1.053 0 00-1.045-1.045L11.035 7h-.004z"/><path d="M13.364 8.292l-7.072 7.071a1.002 1.002 0 000 1.415c.39.39 1.024.39 1.415 0l7.071-7.071A1.002 1.002 0 0014.071 8a1 1 0 00-.707.292z"/></g></svg>'
    });
  }

};

var OverviewIcon = {
  name: 'OverviewIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.01 18c.546 0 .99-.444.99-1a1 1 0 00-.99-1H3.99A.993.993 0 003 17a1 1 0 00.99 1h4.02zM3 7c0 .552.445 1 .993 1h16.014A.994.994 0 0021 7c0-.552-.445-1-.993-1H3.993A.994.994 0 003 7zm10.998 6A.999.999 0 0015 12c0-.552-.456-1-1.002-1H4.002A.999.999 0 003 12c0 .552.456 1 1.002 1h9.996z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var PageFilledIcon = {
  name: 'PageFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M5 3.99C5 2.892 5.897 2 7.006 2h9.988C18.102 2 19 2.898 19 3.99v16.02c0 1.099-.897 1.99-2.006 1.99H7.006A2.003 2.003 0 015 20.01V3.99z" fill="currentColor"/><rect fill="inherit" x="8" y="6" width="8" height="2" rx="1"/><rect fill="inherit" x="8" y="9" width="8" height="2" rx="1"/><rect fill="inherit" x="8" y="12" width="4" height="2" rx="1"/></g></svg>'
    });
  }

};

var PageIcon = {
  name: 'PageIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="8" y="6" width="8" height="2" rx="1"/><rect x="8" y="9" width="8" height="2" rx="1"/><rect x="8" y="12" width="4" height="2" rx="1"/><path d="M7 4v16h10V4H7zm-2-.01C5 2.892 5.897 2 7.006 2h9.988C18.102 2 19 2.898 19 3.99v16.02c0 1.099-.897 1.99-2.006 1.99H7.006A2.003 2.003 0 015 20.01V3.99z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var PdfIcon = {
  name: 'PdfIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="5" y="4" width="14" height="16" rx="2"/><rect fill="inherit" x="8" y="8" width="8" height="2" rx="1"/><path d="M15.512 16H13.49a.492.492 0 01-.489-.497v-4.006c0-.275.218-.497.489-.497h2.023c.27 0 .488.222.488.497v4.006a.492.492 0 01-.488.497" fill="inherit"/><rect fill="inherit" x="8" y="11" width="4" height="2" rx="1"/><rect fill="inherit" x="8" y="14" width="4" height="2" rx="1"/></g></svg>'
    });
  }

};

var PeopleGroupIcon = {
  name: 'PeopleGroupIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M8.126 10H4c-1.113 0-2 .895-2 2v3.73c0 1.31 1.874 2.053 4 2.23v-2.964A3.002 3.002 0 019 12h.354a4 4 0 01-1.228-2zm7.748 0H20c1.105 0 2 .885 2 2v3.73c0 1.31-1.874 2.053-4 2.23v-2.964A3 3 0 0015 12h-.354a4 4 0 001.228-2zM9.967 5.554a3 3 0 10-1.963 3.274 3.999 3.999 0 011.963-3.274zm6.03 3.274a3 3 0 10-1.963-3.276 3.994 3.994 0 011.963 3.276z"/><path d="M7 15c0-1.105.887-2 2-2h6c1.105 0 2 .885 2 2v3.73c0 3.027-10 3.027-10 0V15z"/><circle cx="12" cy="9" r="3"/></g></svg>'
    });
  }

};

var PeopleIcon = {
  name: 'PeopleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><circle cx="16" cy="9" r="3"/><circle cx="8" cy="6" r="3"/><path d="M11 15c0-1.105.887-2 2-2h6c1.105 0 2 .885 2 2v3.73c0 3.027-10 3.027-10 0V15z"/><path d="M13 12a1.997 1.997 0 00-2-2H5c-1.113 0-2 .897-2 2.003v3.826c0 1.921 4.054 2.518 7 1.984v-2.807A3.001 3.001 0 0112.997 12H13z"/></g></svg>'
    });
  }

};

var PersonCircleIcon = {
  name: 'PersonCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M14.5 13.009h-5c-1.38 0-2.5 1.12-2.5 2.503v3.978a8.951 8.951 0 005 1.519 8.95 8.95 0 005-1.519v-3.978a2.502 2.502 0 00-2.5-2.503"/><circle cx="12" cy="9" r="3"/><path d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var PersonIcon = {
  name: 'PersonIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"/><circle cx="12" cy="7" r="4"/></g></svg>'
    });
  }

};

var PortfolioIcon = {
  name: 'PortfolioIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.83 17h6.34a3.001 3.001 0 110 2H8.83a3.001 3.001 0 110-2zM3 5c0-1.105.895-2 1.994-2h12.012C18.107 3 19 3.888 19 5c0 1.105-.895 2-1.994 2H4.994A1.992 1.992 0 013 5zm5 6a2 2 0 012.003-2h8.994a2 2 0 110 4h-8.994A1.996 1.996 0 018 11z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var PreferencesIcon = {
  name: 'PreferencesIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M3 7h3v2H3zm0 8h11v2H3zm7-8h11v2H10zm8 8h3v2h-3z"/><path d="M11 8a3 3 0 11-5.999.001A3 3 0 0111 8zM9 8a1 1 0 10-1.999-.001A1 1 0 009 8zm10 8a3 3 0 11-5.999.001A3 3 0 0119 16zm-2 0a1 1 0 10-1.999-.001A1 1 0 0017 16z"/></g></svg>'
    });
  }

};

var PremiumIcon = {
  name: 'PremiumIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.572 9.351c.15.148.404.102.489-.09l2.113-4.73c.317-.706 1.333-.708 1.653-.003l2.143 4.736c.087.19.34.236.488.089l4.998-4.951c.61-.603 1.647-.1 1.536.744l-1.957 11.337a.6.6 0 01-.598.517H4.6a.599.599 0 01-.596-.517L2.008 5.14c-.11-.845.925-1.349 1.535-.747L8.572 9.35zM4.546 18H19.49a.5.5 0 01.478.353l.615 2a.5.5 0 01-.478.647H3.935a.5.5 0 01-.478-.646l.61-2a.5.5 0 01.48-.354z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var PresenceActiveIcon = {
  name: 'PresenceActiveIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var PresenceBusyIcon = {
  name: 'PresenceBusyIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M12 18a6 6 0 100-12 6 6 0 000 12z" fill="currentColor"/><path d="M9.367 9.363a1.241 1.241 0 011.747-.008l3.527 3.527c.48.48.48 1.26-.008 1.747a1.241 1.241 0 01-1.747.008l-3.527-3.526c-.48-.48-.48-1.26.008-1.748z" fill="inherit"/></g></svg>'
    });
  }

};

var PresenceUnavailableIcon = {
  name: 'PresenceUnavailableIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 12a6 6 0 1112 0 6 6 0 01-12 0z" fill="inherit"/><path d="M15 12a3 3 0 10-6 0 3 3 0 006 0zm-9 0a6 6 0 1112 0 6 6 0 01-12 0z" fill="currentColor"/></svg>'
    });
  }

};

var QuestionsIcon = {
  name: 'QuestionsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M15 16h4V6H5v10h7.333L15 18v-2zm2 2v2a1 1 0 01-1.6.8L11.667 18H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2z" fill-rule="nonzero"/><path d="M7 10h10V8H7zm0 4h6v-2H7z"/></g></svg>'
    });
  }

};

var QueuesIcon = {
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
    return vue.h(IconWrapper.script, { ...this.$props,
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M19 5h.006C20.107 5 21 5.895 21 6.994v12.012A1.995 1.995 0 0119.006 21H6.994A1.995 1.995 0 015 19.006V19h13c.555 0 1-.448 1-1V5zM3 5.006C3 3.898 3.897 3 5.006 3h9.988C16.102 3 17 3.897 17 5.006v9.988A2.005 2.005 0 0114.994 17H5.006A2.005 2.005 0 013 14.994V5.006zM5 5v10h10V5H5zm1 3c0-.552.453-1 .997-1h6.006c.55 0 .997.444.997 1 0 .552-.453 1-.997 1H6.997A.996.996 0 016 8zm0 3c0-.552.453-1 .997-1h6.006c.55 0 .997.444.997 1 0 .552-.453 1-.997 1H6.997A.996.996 0 016 11z" fill="currentColor"/></svg>'
    });
  }

};

var QuoteIcon = {
  name: 'QuoteIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M16.051 6c-1.571 0-2.847 1.312-2.847 2.93 0 1.617 1.276 2.93 2.847 2.93 2.699 0 1.135 5.088-2.269 5.618a.68.68 0 00-.578.671c0 .416.372.745.784.682 6.187-.938 8.387-12.83 2.063-12.83M7.848 6C6.275 6 5 7.311 5 8.93c0 1.616 1.275 2.928 2.848 2.928 2.698 0 1.134 5.09-2.27 5.62a.68.68 0 00-.578.67c0 .416.372.745.783.682C11.972 17.892 14.172 6 7.848 6" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var RadioIcon = {
  name: 'RadioIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="6"/><circle fill="inherit" cx="12" cy="12" r="2"/></g></svg>'
    });
  }

};

var RecentIcon = {
  name: 'RecentIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11 8.002v4.002c0 .28.116.53.301.712l2.47 2.47a1.003 1.003 0 001.414 0 1.003 1.003 0 000-1.415L13 11.586V8.004A1.009 1.009 0 0013 8V6a1 1 0 00-2 0v2.002zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var RedoIcon = {
  name: 'RedoIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M4.101 13.569c-.247.5-.026 1.095.493 1.333.52.237 1.142.025 1.388-.473C7.011 12.351 9.193 11 11.63 11c2.266 0 4.319 1.167 5.425 3.021.286.479.922.645 1.421.371a.98.98 0 00.386-1.366C17.389 10.557 14.65 9 11.63 9c-3.247 0-6.158 1.802-7.529 4.569z"/><path d="M17.497 10v3h-2.995a1 1 0 100 2h3.896c.608 0 1.102-.493 1.102-1.1V10a1.001 1.001 0 00-2.003 0z"/></g></svg>'
    });
  }

};

var RefreshIcon = {
  name: 'RefreshIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M8 6.003v2.995a1 1 0 102 0V5.102C10 4.494 9.507 4 8.9 4H5a1 1 0 000 2.003h3z" fill-rule="nonzero"/><path d="M9.428 18.018C7.351 16.989 6 14.807 6 12.37c0-2.266 1.167-4.319 3.02-5.425.48-.286.646-.922.371-1.421a.979.979 0 00-1.364-.386C5.557 6.611 4 9.35 4 12.37c0 3.248 1.802 6.158 4.57 7.529.498.247 1.095.026 1.332-.493.237-.52.025-1.141-.474-1.388z" fill-rule="nonzero"/><path d="M14 15.002v3.896c0 .608.493 1.102 1.1 1.102H19a1 1 0 000-2.003h-3v-2.995a1 1 0 10-2 0z"/><path d="M14.097 4.596c-.237.52-.025 1.14.474 1.387 2.077 1.029 3.428 3.21 3.428 5.647 0 2.266-1.167 4.32-3.021 5.425a1.063 1.063 0 00-.37 1.42c.274.5.885.673 1.364.387 2.47-1.473 4.027-4.212 4.027-7.232 0-3.248-1.802-6.158-4.57-7.528A.957.957 0 0015.002 4a1 1 0 00-.905.596z"/></g></svg>'
    });
  }

};

var RetryIcon = {
  name: 'RetryIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M6 10h2.954a1 1 0 010 2H5.099A1.1 1.1 0 014 10.9V7a1 1 0 112 0v3z" fill-rule="nonzero"/><path d="M7.39 10.09H5.3a8 8 0 11.818 6H7.84v-1.02a6 6 0 10-.45-4.98z" fill-rule="nonzero"/><circle cx="7" cy="15.61" r="1"/></g></svg>'
    });
  }

};

var RoadmapIcon = {
  name: 'RoadmapIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 2h10a3 3 0 010 6H6a3 3 0 110-6zm0 2a1 1 0 100 2h10a1 1 0 000-2H6zm4 5h8a3 3 0 010 6h-8a3 3 0 010-6zm0 2a1 1 0 000 2h8a1 1 0 000-2h-8zm-4 5h6a3 3 0 010 6H6a3 3 0 010-6zm0 2a1 1 0 000 2h6a1 1 0 000-2H6z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var RoomMenuIcon = {
  name: 'RoomMenuIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M14 17h4V7h-4v10zM12 6.007C12 5.45 12.453 5 12.997 5h6.006c.55 0 .997.45.997 1.007v11.986c0 .556-.453 1.007-.997 1.007h-6.006c-.55 0-.997-.45-.997-1.007V6.007z" fill-rule="nonzero"/><rect x="4" y="5" width="6" height="2" rx="1"/><rect x="4" y="9" width="6" height="2" rx="1"/><rect x="4" y="13" width="6" height="2" rx="1"/><rect x="4" y="17" width="6" height="2" rx="1"/></g></svg>'
    });
  }

};

var ScheduleFilledIcon = {
  name: 'ScheduleFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M19 10.341V6.745C19 5.783 18.206 5 17.227 5H17v1c0 1.105-.888 2-2 2-1.105 0-2-.888-2-2V5H9v1c0 1.105-.888 2-2 2-1.105 0-2-.888-2-2V5h-.227C3.793 5 3 5.781 3 6.745v10.51C3 18.218 3.794 19 4.773 19h7.03A6 6 0 0119 10.341z"/><path d="M14 6V5h2v1a1 1 0 01-2 0zm0-2a1 1 0 012 0v1h-2V4zM6 4a1 1 0 012 0v1H6V4zm0 2V5h2v1a1 1 0 01-2 0zm12 9v-1.01a1 1 0 00-1-.99c-.556 0-1 .444-1 .99V15h-1.01a1 1 0 00-.99 1c0 .556.444 1 .99 1H16v1.01a1 1 0 001 .99c.556 0 1-.444 1-.99V17h1.01a1 1 0 00.99-1c0-.556-.444-1-.99-1H18zm-1 6a5 5 0 110-10 5 5 0 010 10z"/></g></svg>'
    });
  }

};

var ScheduleIcon = {
  name: 'ScheduleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M19 10.341V7.006A2 2 0 0017.006 5H4.994A2 2 0 003 7.006v9.988A2 2 0 004.994 19h6.809a5.96 5.96 0 01-.72-2.001c-3.028 0-6.083-.002-6.083-.005C5 16.994 5 7 4.994 7 4.994 7 17 7 17 7.006V10c.701 0 1.374.12 2 .341z" fill-rule="nonzero"/><path d="M5 4v1h2V4a1 1 0 00-2 0zm10 0v1h2V4a1 1 0 00-2 0zM4 7h14v2H4zm14 8v-1.01a1 1 0 00-1-.99c-.556 0-1 .444-1 .99V15h-1.01a1 1 0 00-.99 1c0 .556.444 1 .99 1H16v1.01a1 1 0 001 .99c.556 0 1-.444 1-.99V17h1.01a1 1 0 00.99-1c0-.556-.444-1-.99-1H18zm-1 6a5 5 0 110-10 5 5 0 010 10z"/></g></svg>'
    });
  }

};

var ScreenIcon = {
  name: 'ScreenIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M3 6.009C3 4.899 3.893 4 4.995 4h14.01C20.107 4 21 4.902 21 6.009v7.982c0 1.11-.893 2.009-1.995 2.009H4.995A2.004 2.004 0 013 13.991V6.01zM5 14h14V6H5v8z" fill-rule="nonzero"/><path d="M10 17h4v3h-4zm-1 3.5a.5.5 0 01.491-.5h5.018a.5.5 0 01.491.5v.5H9v-.5z"/></g></svg>'
    });
  }

};

var SelectClearIcon = {
  name: 'SelectClearIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="9"/><path d="M16.155 14.493a1.174 1.174 0 11-1.662 1.663L12 13.662l-2.494 2.494a1.172 1.172 0 01-1.662 0 1.176 1.176 0 010-1.663L10.337 12 7.844 9.507a1.176 1.176 0 011.662-1.662L12 10.338l2.493-2.493a1.174 1.174 0 111.662 1.662L13.662 12l2.493 2.493z" fill="inherit"/></g></svg>'
    });
  }

};

var SendIcon = {
  name: 'SendIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M6.978 19.477c0 1.371 1.645 2.042 2.577 1.05L21.558 7.723C22.518 6.695 21.803 5 20.409 5H3.496C2.178 5 1.505 6.607 2.418 7.572l4.56 4.828v7.077zm1.993-1.265v-6.627L3.856 6.169c.303.322.078.857-.36.857h15.963L8.971 18.212z"/><path d="M8.416 12.902l4.01-1.95a1.04 1.04 0 00.474-1.365.982.982 0 00-1.324-.489l-4.01 1.95c-.497.242-.71.853-.475 1.364a.982.982 0 001.325.49z"/></g></svg>'
    });
  }

};

var SettingsIcon = {
  name: 'SettingsIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.701 16.7a5.002 5.002 0 110-10.003 5.002 5.002 0 010 10.004m8.368-3.117a1.995 1.995 0 01-1.346-1.885c0-.876.563-1.613 1.345-1.885a.48.48 0 00.315-.574 8.947 8.947 0 00-.836-1.993.477.477 0 00-.598-.195 2.04 2.04 0 01-1.29.08 1.988 1.988 0 01-1.404-1.395 2.04 2.04 0 01.076-1.297.478.478 0 00-.196-.597 8.98 8.98 0 00-1.975-.826.479.479 0 00-.574.314 1.995 1.995 0 01-1.885 1.346 1.994 1.994 0 01-1.884-1.345.482.482 0 00-.575-.315c-.708.2-1.379.485-2.004.842a.47.47 0 00-.198.582A2.002 2.002 0 014.445 7.06a.478.478 0 00-.595.196 8.946 8.946 0 00-.833 1.994.48.48 0 00.308.572 1.995 1.995 0 011.323 1.877c0 .867-.552 1.599-1.324 1.877a.479.479 0 00-.308.57 8.99 8.99 0 00.723 1.79.477.477 0 00.624.194c.595-.273 1.343-.264 2.104.238.117.077.225.185.302.3.527.8.512 1.58.198 2.188a.473.473 0 00.168.628 8.946 8.946 0 002.11.897.474.474 0 00.57-.313 1.995 1.995 0 011.886-1.353c.878 0 1.618.567 1.887 1.353a.475.475 0 00.57.313 8.964 8.964 0 002.084-.883.473.473 0 00.167-.631c-.318-.608-.337-1.393.191-2.195.077-.116.185-.225.302-.302.772-.511 1.527-.513 2.125-.23a.477.477 0 00.628-.19 8.925 8.925 0 00.728-1.793.478.478 0 00-.314-.573" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var ShareIcon = {
  name: 'ShareIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M6 15a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm12-4a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm0 14a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2z" fill-rule="nonzero"/><path d="M7 13.562l8.66 5 1-1.732-8.66-5z"/><path d="M7 10.83l1 1.732 8.66-5-1-1.732z"/></g></svg>'
    });
  }

};

var ShipIcon = {
  name: 'ShipIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M6 12h8v-2H6v2zM4 8.99C4 8.445 4.456 8 5.002 8h9.996C15.55 8 16 8.451 16 8.99V14H4V8.99z" fill-rule="nonzero"/><path d="M6 7.005C6 5.898 6.898 5 7.998 5h2.004C11.106 5 12 5.894 12 7.005V10H6V7.005zm4 0V7H7.999c.005 0 .002.003.002.005V8h2v-.995z"/><path d="M4.5 17h13.994l1.002-3H4.14l.36 3zm-2.495-4.012A.862.862 0 012.883 12h18.393c.55 0 .857.417.681.944l-1.707 5.112c-.174.521-.758.944-1.315.944H3.725a1.149 1.149 0 01-1.118-.988l-.602-5.024z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var ShortcutIcon = {
  name: 'ShortcutIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M19.005 19c-.003 0-.005.002-.005.002l.005-.002zM5 19.006c0-.004-.002-.006-.005-.006H5v.006zM5 4.994V5v-.006zM19 19v-6h2v6.002A1.996 1.996 0 0119.005 21H4.995A1.996 1.996 0 013 19.006V4.994C3 3.893 3.896 3 4.997 3H11v2H5v14h14zM5 4.994V5v-.006zm0 14.012c0-.004-.002-.006-.005-.006H5v.006zM11 5H5v14h14v-6h2v6.002A1.996 1.996 0 0119.005 21H4.995A1.996 1.996 0 013 19.006V4.994C3 3.893 3.896 3 4.997 3H11v2zm8 0v3a1 1 0 002 0V4a1 1 0 00-1-1h-4a1 1 0 000 2h3z"/><path d="M12.707 12.707l8-8a1 1 0 10-1.414-1.414l-8 8a1 1 0 001.414 1.414z"/></g></svg>'
    });
  }

};

var SignInIcon = {
  name: 'SignInIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M15.503 3H12v2h7v14h-7v2h7.006c1.1 0 1.994-.893 1.994-1.995V4.995A1.993 1.993 0 0019.006 3h-3.503z"/><path d="M3.977 11A.99.99 0 003 12.001c0 .551.437.999.977.999h11.047a.988.988 0 00.976-.999.99.99 0 00-.976-1.001H3.977z"/><path d="M12.303 8.305a1.053 1.053 0 000 1.478L14.5 12l-2.197 2.217a1.05 1.05 0 000 1.476c.404.409 1.06.409 1.465 0l2.93-2.955a1.055 1.055 0 000-1.477l-2.93-2.956a1.034 1.034 0 00-1.465 0z"/></g></svg>'
    });
  }

};

var SignOutIcon = {
  name: 'SignOutIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M4.977 11A.989.989 0 004 12c0 .551.437 1 .977 1h11.046A.99.99 0 0017 12a.99.99 0 00-.977-1H4.977z"/><path d="M6.231 8.306l-2.93 2.956a1.054 1.054 0 000 1.476l2.93 2.957a1.034 1.034 0 001.466 0 1.05 1.05 0 000-1.478L5.5 12.001l2.197-2.218a1.05 1.05 0 000-1.477 1.033 1.033 0 00-1.466 0zM15.503 3H12v2h7v14h-7v2h7.006c1.1 0 1.994-.893 1.994-1.995V4.995A1.993 1.993 0 0019.006 3h-3.503z"/></g></svg>'
    });
  }

};

var StarFilledIcon = {
  name: 'StarFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12.072 17.284l-3.905 2.053a1 1 0 01-1.451-1.054l.745-4.349-3.159-3.08a1 1 0 01.554-1.705l4.366-.635 1.953-3.956a1 1 0 011.794 0l1.952 3.956 4.366.635a1 1 0 01.555 1.705l-3.16 3.08.746 4.349a1 1 0 01-1.45 1.054l-3.906-2.053z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var StarLargeIcon = {
  name: 'StarLargeIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.673 14.042l3.673-3.58-5.076-.738L12 5.125l-2.27 4.6-5.076.737 3.673 3.58-.867 5.055L12 16.711l4.54 2.386-.867-5.055zM12 19.04l-4.505 2.37a1.546 1.546 0 01-2.244-1.63l.86-5.017-3.644-3.553a1.546 1.546 0 01.857-2.637l5.037-.732 2.252-4.564a1.546 1.546 0 012.774 0l2.252 4.564 5.037.732a1.546 1.546 0 01.857 2.637l-3.645 3.553.86 5.016a1.546 1.546 0 01-2.243 1.63L12 19.04z" fill="currentColor"/></svg>'
    });
  }

};

var StarIcon = {
  name: 'StarIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 16.373l3.98 2.193-.76-4.655 3.276-3.347-4.524-.69L12 5.687l-1.972 4.189-4.524.689L8.78 13.91l-.762 4.655L12 16.373zm0 2.283l-3.016 1.662a2 2 0 01-2.939-2.075l.599-3.656-2.57-2.624a2 2 0 011.129-3.377l3.47-.528 1.518-3.224a2 2 0 013.618 0l1.519 3.224 3.47.528a2 2 0 011.127 3.377l-2.569 2.624.599 3.656a2 2 0 01-2.94 2.075L12 18.656z" fill="currentColor"/></svg>'
    });
  }

};

var StatusIcon = {
  name: 'StatusIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M4 5h16c1.105 0 2 1.045 2 2.333v9.334C22 17.955 21.105 19 20 19H4c-1.105 0-2-1.045-2-2.333V7.333C2 6.045 2.895 5 4 5zm3.465 9.887h1.278L6.786 9.251H5.399l-1.957 5.636h1.183l.434-1.343h1.98l.426 1.343zM6.02 10.423h.07l.7 2.21H5.313l.707-2.21zm6.215 4.464c1.203 0 1.95-.625 1.95-1.613 0-.726-.544-1.289-1.29-1.344v-.07a1.219 1.219 0 001.02-1.203c0-.871-.653-1.406-1.747-1.406H9.704v5.636h2.53zm-1.352-4.734h.985c.562 0 .886.27.886.719 0 .453-.347.715-.984.715h-.887v-1.434zm0 3.832v-1.601h1.024c.695 0 1.074.273 1.074.789 0 .527-.367.812-1.047.812h-1.05zm6.762 1.047c1.36 0 2.352-.84 2.45-2.059h-1.15c-.112.621-.62 1.02-1.296 1.02-.89 0-1.441-.738-1.441-1.926 0-1.187.55-1.922 1.437-1.922.672 0 1.184.426 1.297 1.074h1.148c-.086-1.226-1.109-2.113-2.445-2.113-1.637 0-2.645 1.13-2.645 2.961 0 1.836 1.012 2.965 2.645 2.965z" fill="currentColor"/></svg>'
    });
  }

};

var SubtaskIcon = {
  name: 'SubtaskIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M19 7c1.105.003 2 .899 2 2.006v9.988A2.005 2.005 0 0118.994 21H9.006A2.005 2.005 0 017 19h11c.555 0 1-.448 1-1V7zM3 5.006C3 3.898 3.897 3 5.006 3h9.988C16.102 3 17 3.897 17 5.006v9.988A2.005 2.005 0 0114.994 17H5.006A2.005 2.005 0 013 14.994V5.006zM5 5v10h10V5H5z"/><path d="M7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293z"/></g></svg>'
    });
  }

};

var SuitcaseIcon = {
  name: 'SuitcaseIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17 14h2V9H5v5h2v-1a1 1 0 012 0v1h6v-1a1 1 0 012 0v1zm0 2v1a1 1 0 01-2 0v-1H9v1a1 1 0 01-2 0v-1H5v3h14v-3h-2zM9 7h6V6H9v1zM7 7V5a1 1 0 011-1h8a1 1 0 011 1v2h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h2z"/></svg>'
    });
  }

};

var SwitcherIcon = {
  name: 'SwitcherIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M3.507 15H16.5c-.007 0-.007-10-.007-10H3.5c.007 0 .007 10 .007 10zM1.5 4.994C1.5 3.893 2.263 3 3.192 3h13.616c.934 0 1.692.895 1.692 1.994v10.012c0 1.101-.763 1.994-1.692 1.994H3.192c-.934 0-1.692-.895-1.692-1.994V4.994zM6.5 5v10h2V5h-2zm5 0v10h2V5h-2z"/><path d="M20.5 5h.006c1.101 0 1.994.895 1.994 1.994v12.012A1.995 1.995 0 0120.506 21H8.494A1.995 1.995 0 016.5 19.006V19h13c.555 0 1-.448 1-1V5z"/></g></svg>'
    });
  }

};

var TableIcon = {
  name: 'TableIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M4 17.995h15.992c-.009 0-.009-9.99-.009-9.99H3.992c.008 0 .008 9.99.008 9.99zm-2-12C2 4.892 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0120.01 20H3.99A1.994 1.994 0 012 18.006V5.994z" fill-rule="nonzero"/><path fill-rule="nonzero" d="M8 6v12h2V6zm6 0v12h2V6z"/><path d="M4 12h17v2H4z"/></g></svg>'
    });
  }

};

var TaskIcon = {
  name: 'TaskIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 01-.993.993H3.993A.994.994 0 013 20.007V3.993zM5 5v14h14V5H5z"/><path d="M9.707 11.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 12.586l-1.293-1.293z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var TrashIcon = {
  name: 'TrashIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 5a1 1 0 00-1 1v1h16V6a1 1 0 00-1-1H5zm11.15 15H7.845a1 1 0 01-.986-.835L5 8h14l-1.864 11.166a.999.999 0 01-.986.834M9 4.5a.5.5 0 01.491-.5h5.018a.5.5 0 01.491.5V5H9v-.5z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var TrayIcon = {
  name: 'TrayIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 19h14V5H5v14zM3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0119.005 21H4.995A1.995 1.995 0 013 19.005V4.995z" fill-rule="nonzero"/><path d="M9.17 17H4v1.5A1.5 1.5 0 005.505 20h12.99c.838 0 1.505-.672 1.505-1.5V17h-5.17a3.001 3.001 0 01-5.66 0zM7 12h10v2H7zm0-4h10v2H7z"/></g></svg>'
    });
  }

};

var UndoIcon = {
  name: 'UndoIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5.138 13.026a.98.98 0 00.386 1.366 1.066 1.066 0 001.421-.371C8.051 12.167 10.104 11 12.37 11c2.437 0 4.619 1.351 5.648 3.429.246.498.868.71 1.388.473.519-.238.74-.833.493-1.333C18.528 10.802 15.618 9 12.37 9c-3.02 0-5.759 1.557-7.232 4.026z"/><path d="M4.5 10v3.9c0 .607.494 1.1 1.102 1.1h3.896a1 1 0 100-2H6.503v-3A1 1 0 004.5 10z"/></g></svg>'
    });
  }

};

var UnlinkIcon = {
  name: 'UnlinkIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M13.721 14.43a.972.972 0 00-1.37-.004l-2.088 2.059a1.928 1.928 0 01-1.37.568c-.588 0-1.135-.26-1.525-.738-.634-.777-.505-1.933.203-2.643l1.321-1.322.002.001.688-.686a.974.974 0 000-1.377l-.002-.003a.972.972 0 00-1.375 0l-2.068 2.07a3.892 3.892 0 000 5.497l.009.01A3.87 3.87 0 008.892 19a3.87 3.87 0 002.746-1.139l2.083-2.085a.951.951 0 000-1.345zm-3.442-4.86a.972.972 0 001.37.004l2.088-2.058c.366-.367.853-.57 1.37-.57.588 0 1.135.26 1.525.739.634.777.505 1.933-.203 2.643l-1.321 1.322-.002-.001-.688.686a.974.974 0 000 1.377l.002.003c.38.38.995.38 1.375 0l2.068-2.07a3.892 3.892 0 000-5.497l-.009-.01A3.87 3.87 0 0015.108 5a3.87 3.87 0 00-2.746 1.139l-2.083 2.085a.951.951 0 000 1.345zM8.924 4.618l.401.968a1 1 0 11-1.848.765l-.4-.968a1 1 0 111.848-.765M5.383 7.076l.968.401a1.001 1.001 0 01-.766 1.848l-.968-.4a1.001 1.001 0 01.766-1.848m9.932 10.413a1.003 1.003 0 00-.542 1.307l.402.968A1 1 0 1017.023 19l-.401-.967a1 1 0 00-1.307-.542zm2.176-2.174a1 1 0 00.54 1.306l.969.401a1.001 1.001 0 00.766-1.848l-.969-.4a1 1 0 00-1.306.542z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var UnlockCircleIcon = {
  name: 'UnlockCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M11 9.99V11h-1V9.98A1.98 1.98 0 0111.98 8h.04A1.98 1.98 0 0114 9.98V11h-1V9.99a.99.99 0 00-.99-.99h-.02a.99.99 0 00-.99.99zm2 .51v.5h1v-.5h-1z" fill="inherit"/><path fill="inherit" d="M10 10h1v2h-1zm-1 5.001a1 1 0 00.99.999h4.02c.546 0 .99-.443.99-.999V13a1 1 0 00-1-1h-4a1 1 0 00-1 1v2.001z"/><rect fill="inherit" x="13" y="10" width="1" height="1" rx=".5"/></g></svg>'
    });
  }

};

var UnlockIcon = {
  name: 'UnlockIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M5 11.009C5 9.899 5.897 9 7.006 9h9.988A2.01 2.01 0 0119 11.009v7.982c0 1.11-.897 2.009-2.006 2.009H7.006A2.009 2.009 0 015 18.991V11.01zM7 11v8h10v-8H7z"/><circle cx="12" cy="15" r="2"/><path d="M8 6.251v-.249A4.004 4.004 0 0112 2a4 4 0 014 4.002V6.5h-2v-.498A2.001 2.001 0 0012 4c-1.102 0-2 .898-2 2.002V11H8V6.251zm6 .249h2a1 1 0 01-2 0z"/></g></svg>'
    });
  }

};

var UploadIcon = {
  name: 'UploadIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11.208 9.32L9.29 11.253a1 1 0 000 1.409.982.982 0 001.397 0l1.29-1.301 1.336 1.347a.982.982 0 001.397.001 1.002 1.002 0 00.001-1.408l-1.965-1.98a1.08 1.08 0 00-1.538-.001z"/><path d="M11 10.007l.001 9.986c0 .557.448 1.008 1 1.007.553 0 1-.45 1-1.007L13 10.006C13 9.451 12.552 9 12 9s-1.001.451-1 1.007z"/><path d="M7.938 5.481a4.8 4.8 0 00-.777-.063C4.356 5.419 2 7.62 2 10.499 2 13.408 4.385 16 7.1 16h2.881v-1.993H7.1c-1.657 0-3.115-1.663-3.115-3.508 0-1.778 1.469-3.087 3.104-3.087h.012c.389 0 .686.051.97.15l.17.063c.605.248.875-.246.875-.246l.15-.267c.73-1.347 2.201-2.096 3.716-2.119a4.14 4.14 0 014.069 3.644l.046.34s.071.525.665.525c.013 0 .012.005.023.005h.254c1.136 0 1.976.959 1.976 2.158 0 1.207-.987 2.342-2.07 2.342h-3.964V16h3.964C20.105 16 22 13.955 22 11.665c0-1.999-1.312-3.663-3.138-4.074-.707-2.707-3.053-4.552-5.886-4.591-1.975.021-3.901.901-5.038 2.481z"/></g></svg>'
    });
  }

};

var UserAvatarCircleIcon = {
  name: 'UserAvatarCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><circle fill="inherit" cx="12" cy="9" r="3"/><path d="M7 18.245A7.966 7.966 0 0012 20c1.892 0 3.63-.657 5-1.755V15c0-1.115-.895-2-2-2H9c-1.113 0-2 .895-2 2v3.245z" fill="inherit" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var VidAudioMutedIcon = {
  name: 'VidAudioMutedIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M13.293 14.707A2.998 2.998 0 019 12.003v-1.589l-1-1v2.592A4.004 4.004 0 0012 16a3.98 3.98 0 002.031-.554l-.738-.739zm2.183 2.183A5.974 5.974 0 0113 17.917v2.074a1 1 0 11-2 0v-2.074c-2.838-.478-5-2.951-5-5.91V9a1 1 0 01.65-.937L3.704 5.12a.996.996 0 01.002-1.413.996.996 0 011.413-.002L20.123 18.71a.996.996 0 01-.002 1.412.996.996 0 01-1.412.002l-3.233-3.233zM9.186 4.958A3.004 3.004 0 0112 3c1.657 0 3 1.342 3 2.997v4.775L9.186 4.958zm8.608 8.608L16 11.772V9a1 1 0 012 0v3.006c0 .54-.072 1.063-.206 1.56z" fill="currentColor"/></svg>'
    });
  }

};

var VidAudioOnIcon = {
  name: 'VidAudioOnIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M13 17.917c2.833-.476 5-2.941 5-5.91V9a1 1 0 00-2 0v3.006A4.001 4.001 0 0112 16c-2.205 0-4-1.795-4-3.994V9a1 1 0 10-2 0v3.006c0 2.96 2.162 5.433 5 5.91v2.075a1 1 0 102 0v-2.074z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var VidBackwardIcon = {
  name: 'VidBackwardIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M13.02 13.857l6.273 3.858c.937.577 1.697.155 1.697-.955V7.212c0-1.103-.757-1.533-1.697-.955l-6.273 3.858V7.212c0-1.103-.757-1.533-1.697-.955l-7.62 4.686c-.936.576-.94 1.51 0 2.087l7.62 4.685c.937.577 1.697.155 1.697-.955v-2.903z"/></svg>'
    });
  }

};

var VidCameraOffIcon = {
  name: 'VidCameraOffIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5.586 7l-1.88-1.88a.996.996 0 01.001-1.413.996.996 0 011.413-.002L20.123 18.71a.996.996 0 01-.002 1.412.996.996 0 01-1.412.002l-3.455-3.454c-.31.208-.693.331-1.11.331H4.856C3.83 17 3 16.253 3 15.331V8.67C3 7.747 3.83 7 4.856 7h.73zm14.623 8.994l-3.144-3.144V9.5l2.613-1.411c.137-.061.28-.089.421-.089.472 0 .901.316.901.753v6.494c0 .403-.365.703-.791.747zM11.214 7h2.93C15.17 7 16 7.747 16 8.669v3.117L11.214 7z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var VidCameraOnIcon = {
  name: 'VidCameraOnIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M19.678 8.089c.137-.061.28-.089.421-.089.472 0 .901.316.901.753v6.494c0 .437-.43.753-.9.753-.141 0-.286-.028-.424-.09l-2.611-1.416V9.499l2.613-1.41zM4.856 7h9.288C15.17 7 16 7.747 16 8.669v6.662c0 .922-.83 1.669-1.856 1.669H4.856C3.83 17 3 16.253 3 15.331V8.67C3 7.747 3.83 7 4.856 7z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var VidConnectionCircleIcon = {
  name: 'VidConnectionCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><rect fill="inherit" x="14" y="8" width="2" height="8" rx="1"/><rect fill="inherit" x="11" y="10" width="2" height="6" rx="1"/><rect fill="inherit" x="8" y="13" width="2" height="3" rx="1"/></g></svg>'
    });
  }

};

var VidForwardIcon = {
  name: 'VidForwardIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M10.97 13.87l-6.273 3.858C3.76 18.305 3 17.883 3 16.773V7.226c0-1.104.757-1.533 1.697-.956l6.273 3.858V7.226c0-1.104.757-1.533 1.697-.956l7.62 4.686c.936.576.939 1.509 0 2.087l-7.62 4.685c-.937.577-1.697.155-1.697-.955V13.87z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var VidFullScreenOffIcon = {
  name: 'VidFullScreenOffIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M9 15.003v2.995a1 1 0 102 0v-3.896C11 13.494 10.507 13 9.9 13H6a1 1 0 000 2.003h3z" fill-rule="nonzero"/><path d="M3.74 20.294a.997.997 0 001.407.005l5.152-5.152a1 1 0 00-.005-1.407l-.034-.034a.997.997 0 00-1.407-.005l-5.152 5.152a1 1 0 00.005 1.407l.034.034z" fill-rule="nonzero"/><path d="M19.067 3.321L13.32 9.066a1.115 1.115 0 00.005 1.57l.036.037a1.112 1.112 0 001.571.005l5.747-5.744a1.116 1.116 0 00-.006-1.57l-.037-.037a1.117 1.117 0 00-1.57-.006z"/><path d="M13 6.002v3.896c0 .608.493 1.102 1.1 1.102H18a1 1 0 000-2.003h-3V6.002a1 1 0 10-2 0z"/></g></svg>'
    });
  }

};

var VidFullScreenOnIcon = {
  name: 'VidFullScreenOnIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 18h3a1 1 0 010 2H6a2 2 0 01-2-2v-3a1 1 0 012 0v3zm12 2h-3a1 1 0 010-2h3v-3a1 1 0 012 0v3a2 2 0 01-2 2zM6 4h3a1 1 0 110 2H6v3a1 1 0 11-2 0V6a2 2 0 012-2zm12 2h-3a1 1 0 010-2h3a2 2 0 012 2v3a1 1 0 01-2 0V6z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var VidHangUpIcon = {
  name: 'VidHangUpIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5.467 14.95l2.611-.656s.64-.237.652-.978l-.01-1.212s.038-.471.637-.557c1.768-.327 3.418-.34 5.182 0 .689.131.636.557.636.557l.007.889c.013.74.652.977.652.977l2.593.982c1.227.37 1.868-1.473 1.44-2.574-.991-2.557-3.996-2.994-6.281-3.294-1.085-.143-2.291-.077-3.274 0-1.72.137-5.17.713-6.165 3.27-.427 1.1.093 2.966 1.32 2.596z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var VidHdCircleIcon = {
  name: 'VidHdCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M11.359 15V9.004h-1.5v2.352H7.504V9.004H6V15h1.504v-2.418h2.355V15h1.5zm1.393-6v6h2.483C17.013 15 18 13.911 18 11.942 18 10.068 16.996 9 15.235 9h-2.483zm1.503 1.226h.71c.946 0 1.503.627 1.503 1.745 0 1.188-.529 1.803-1.504 1.803h-.709v-3.548z" fill="inherit"/></g></svg>'
    });
  }

};

var VidPauseIcon = {
  name: 'VidPauseIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 4h2a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1zm10 0h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var VidPlayIcon = {
  name: 'VidPlayIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.595 19.522C7.162 20.364 6 19.702 6 18.04V5.963C6 4.3 7.158 3.635 8.595 4.479l11.083 6.51c.951.559.958 1.46 0 2.023l-11.083 6.51z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var VidRaisedHandIcon = {
  name: 'VidRaisedHandIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11 3a4 4 0 100 8 4 4 0 000-8m3 9H8a3 3 0 00-3 3v3.7a9.07 9.07 0 005.9 2.3 9 9 0 006.1-2.4V15a3 3 0 00-3-3"/><path d="M16.6 10.6a.998.998 0 00.2 1.4 1.005 1.005 0 001.402-.203l1.996-2.661c.333-.443.602-1.25.602-1.808V5.005A1 1 0 0019.8 4c-.552 0-1 .45-1 1.002v2.665l-2.2 2.932z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var VidShareScreenIcon = {
  name: 'VidShareScreenIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M13 4H4.995C3.893 4 3 4.9 3 6.009v7.982C3 15.098 3.893 16 4.995 16h14.01C20.107 16 21 15.1 21 13.991V7.5 11h-2v3H5V6h8V4z" fill-rule="nonzero"/><path d="M10 17h4v3h-4z"/><path d="M9 20a1 1 0 01.99-1h4.02c.546 0 .99.444.99 1v1H9v-1z"/><path d="M19 5v3a1 1 0 002 0V4a1 1 0 00-1-1h-4a1 1 0 000 2h3z" fill-rule="nonzero"/><path d="M19 3.586l-6.707 6.707a1 1 0 001.414 1.414L20.414 5H19V3.586z" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var VidSpeakingCircleIcon = {
  name: 'VidSpeakingCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" fill="currentColor"/><path d="M12.229 7.652c.04.048.124.16.238.33.198.294.398.631.584 1.006 1.138 2.288 1.243 4.648-.316 6.864a7.86 7.86 0 01-.377.492 1 1 0 00.156 1.43 1.062 1.062 0 001.467-.152 9.55 9.55 0 00.475-.62c2.045-2.907 1.907-6.017.472-8.901-.392-.788-.788-1.376-1.07-1.72a1.062 1.062 0 00-1.466-.158 1 1 0 00-.163 1.429z" fill="inherit" fill-rule="nonzero"/><path d="M9.213 9.619c.08.101.226.33.377.658.608 1.318.608 2.72-.404 4.141-.32.45-.217 1.074.23 1.395a.992.992 0 001.389-.231c1.476-2.073 1.476-4.226.591-6.146a5.494 5.494 0 00-.619-1.055.992.992 0 00-1.398-.166c-.431.341-.506.97-.166 1.404z" fill="inherit" fill-rule="nonzero"/></g></svg>'
    });
  }

};

var VidVolumeFullIcon = {
  name: 'VidVolumeFullIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.121 8.024l5.073-3.92A.5.5 0 0114 4.5v14.964a.5.5 0 01-.806.395l-4.962-3.835H3.999c-.552 0-.999-.453-.999-.997V9.022c0-.551.441-.998.999-.998h2.606l.036.001h1.48zm8.455-.715c-.372-.202-.522-.69-.335-1.09.187-.4.64-.561 1.012-.36C19.72 7.196 21 9.27 21 11.98c0 2.71-1.277 4.795-3.74 6.165-.37.206-.824.05-1.015-.348-.191-.398-.046-.888.323-1.093 1.98-1.102 2.925-2.645 2.925-4.724 0-2.075-.942-3.6-2.917-4.671zm-1.03 3.245c-.37-.202-.52-.69-.334-1.09.188-.4.64-.561 1.012-.36 1.133.614 1.745 1.606 1.745 2.88 0 1.27-.61 2.265-1.738 2.893-.37.206-.824.05-1.015-.349-.19-.398-.046-.887.324-1.093.645-.358.922-.812.922-1.452 0-.637-.274-1.082-.915-1.43z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var VidVolumeHalfIcon = {
  name: 'VidVolumeHalfIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M8.121 8.024l5.073-3.92A.5.5 0 0114 4.5v14.964a.5.5 0 01-.806.395l-4.962-3.835H3.999c-.552 0-.999-.453-.999-.997V9.022c0-.551.441-.998.999-.998h2.606l.036.001h1.48zm7.426 2.53c-.372-.202-.522-.69-.335-1.09.188-.4.64-.561 1.012-.36 1.133.614 1.745 1.606 1.745 2.88 0 1.27-.61 2.265-1.738 2.893-.37.206-.824.05-1.015-.349-.19-.398-.046-.887.324-1.093.645-.358.922-.812.922-1.452 0-.637-.274-1.082-.915-1.43z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var VidVolumeMutedIcon = {
  name: 'VidVolumeMutedIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M14 16.001v4.05a.5.5 0 01-.806.395l-4.962-3.834H3.999c-.552 0-.999-.453-.999-.997V9.609c0-.55.441-.997.999-.997H6.61L3.705 5.707a.996.996 0 01.002-1.413.996.996 0 011.413-.001l15.003 15.003a.996.996 0 01-.002 1.413.996.996 0 01-1.412.001L14 16.001zm5.829.495l-1.112-1.112c.522-.803.776-1.738.776-2.816 0-2.076-.942-3.601-2.917-4.672-.372-.202-.522-.69-.335-1.09.187-.4.64-.561 1.012-.36C19.72 7.784 21 9.856 21 12.568c0 1.507-.396 2.822-1.171 3.928zm-2.28-2.28l-1.153-1.152c.045-.152.066-.315.066-.494 0-.637-.274-1.082-.915-1.429-.372-.201-.522-.689-.335-1.09.188-.4.64-.56 1.012-.36 1.133.614 1.745 1.606 1.745 2.88 0 .616-.144 1.168-.42 1.645zM14 10.669l-3.724-3.723 2.918-2.254a.5.5 0 01.806.395v5.582z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var VideoCircleIcon = {
  name: 'VideoCircleIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M17.37 14.954L15 13.807v-3.613l2.37-1.148c.285-.138.63.05.63.343v5.222c0 .293-.345.481-.63.343" fill="inherit"/><rect fill="inherit" x="6" y="9" width="8" height="6" rx="1"/></g></svg>'
    });
  }

};

var VideoFilledIcon = {
  name: 'VideoFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M17.37 14.954L15 13.807v-3.613l2.37-1.148c.285-.138.63.05.63.343v5.222c0 .293-.345.481-.63.343"/><rect x="6" y="9" width="8" height="6" rx="1"/></g></svg>'
    });
  }

};

var WatchFilledIcon = {
  name: 'WatchFilledIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11.983 15.984a4.005 4.005 0 01-4.002-4c0-2.206 1.795-4 4.002-4a4.005 4.005 0 014.002 4c0 2.206-1.795 4-4.002 4M12 4C6.48 4 2 8.84 2 12c0 3.086 4.577 8 10 8s10-4.914 10-8c0-3.16-4.481-8-10-8"/><circle cx="12" cy="12" r="2"/></g></svg>'
    });
  }

};

var WatchIcon = {
  name: 'WatchIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M12 18c-4.536 0-7.999-4.26-7.999-6 0-2.001 3.459-6 8-6 4.376 0 7.998 3.973 7.998 6 0 1.74-3.462 6-7.998 6m0-14C6.48 4 2 8.841 2 12c0 3.086 4.576 8 10 8 5.423 0 10-4.914 10-8 0-3.159-4.48-8-10-8"/><path d="M11.977 13.984c-1.103 0-2-.897-2-2s.897-2 2-2c1.104 0 2 .897 2 2s-.896 2-2 2m0-6c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.207 0 4-1.794 4-4s-1.793-4-4-4"/></g></svg>'
    });
  }

};

var WorldSmallIcon = {
  name: 'WorldSmallIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zm-.5-2.035A3.994 3.994 0 018 12c0-.31.04-.605.105-.895L10.5 13.5v.5c0 .55.45 1 1 1v.965zm3.45-1.27A.992.992 0 0014 14h-.5v-1.5c0-.275-.225-.5-.5-.5h-3v-1h1c.275 0 .5-.225.5-.5v-1h1c.55 0 1-.45 1-1v-.205A4.002 4.002 0 0116 12c0 1.04-.4 1.985-1.05 2.695z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var WorldIcon = {
  name: 'WorldIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 21a9 9 0 100-18 9 9 0 000 18zm-.9-1.863A7.19 7.19 0 014.8 12c0-.558.072-1.089.189-1.611L9.3 14.7v.9c0 .99.81 1.8 1.8 1.8v1.737zm6.21-2.286A1.786 1.786 0 0015.6 15.6h-.9v-2.7c0-.495-.405-.9-.9-.9H8.4v-1.8h1.8c.495 0 .9-.405.9-.9V7.5h1.8c.99 0 1.8-.81 1.8-1.8v-.369c2.637 1.071 4.5 3.654 4.5 6.669 0 1.872-.72 3.573-1.89 4.851z" fill="currentColor" fill-rule="evenodd"/></svg>'
    });
  }

};

var Blog16Icon = {
  name: 'Blog16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M6.972 6.128a2.5 2.5 0 10-2.37 2.87c-.277.394-.616.815-1.016 1.265a.916.916 0 00-.058 1.147.607.607 0 00.948.043c1.939-2.221 2.77-3.996 2.496-5.325zm7 0a2.5 2.5 0 10-2.37 2.87c-.277.394-.616.815-1.016 1.265a.916.916 0 00-.058 1.147.607.607 0 00.948.043c1.939-2.221 2.77-3.996 2.496-5.325zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"/></svg>'
    });
  }

};

var Blog24Icon = {
  name: 'Blog24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#2684FF" fill-rule="evenodd" d="M10.998 9.035a3.5 3.5 0 10-3.046 3.94c-.473.836-1.096 1.778-1.87 2.827a1.168 1.168 0 00.102 1.506.85.85 0 001.298-.092c2.675-3.68 3.847-6.407 3.516-8.18zm8.895 0a3.5 3.5 0 10-3.046 3.94c-.473.836-1.096 1.778-1.87 2.827a1.168 1.168 0 00.102 1.506.85.85 0 001.298-.092c2.675-3.68 3.847-6.407 3.516-8.18zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3z"/></svg>'
    });
  }

};

var Branch16Icon = {
  name: 'Branch16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M10 8.732v.28A1.993 1.993 0 018.002 11l-.004 2A3.995 3.995 0 0012 9.007v-.274a2 2 0 10-2 0zm-4-3a2 2 0 10-2 0v4.536a2 2 0 102 0V5.732zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"/></svg>'
    });
  }

};

var Branch24Icon = {
  name: 'Branch24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#2684FF" fill-rule="evenodd" d="M9 15.17V8.83a3.001 3.001 0 10-2 0v6.34A3.001 3.001 0 1010.83 19H15a3 3 0 003-3v-2.308a3.001 3.001 0 10-2 0V16a1 1 0 01-1 1h-4.17A3.008 3.008 0 009 15.17zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm5 7a1 1 0 110-2 1 1 0 010 2zm9 4.862a1 1 0 110-2 1 1 0 010 2zM8 19a1 1 0 110-2 1 1 0 010 2z"/></svg>'
    });
  }

};

var Bug16Icon = {
  name: 'Bug16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm6 12a4 4 0 100-8 4 4 0 000 8z"/></svg>'
    });
  }

};

var Bug24Icon = {
  name: 'Bug24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm9 17a5 5 0 100-10 5 5 0 000 10z"/></svg>'
    });
  }

};

var Calendar16Icon = {
  name: 'Calendar16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M6 5H4a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1H6zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm8 4v1h2V4a1 1 0 00-2 0zM4 4v1h2V4a1 1 0 00-2 0zm1 4h6v3H5V8z"/></svg>'
    });
  }

};

var Calendar24Icon = {
  name: 'Calendar24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M16 6H8V5a1 1 0 10-2 0v1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2V5a1 1 0 00-2 0v1zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm3 10v8h12v-8H6z"/></svg>'
    });
  }

};

var Changes16Icon = {
  name: 'Changes16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FFAB00" fill-rule="evenodd" d="M10.58 7H5.467l.866-.865A1 1 0 104.92 4.72L2.34 7.3a.998.998 0 000 1.414l2.58 2.578a1 1 0 001.414-1.416L5.456 9h5.134l-.877.876a1 1 0 101.414 1.415l2.58-2.58a1 1 0 000-1.414L11.126 4.72a.996.996 0 00-.706-.292.999.999 0 00-.707 1.707l.866.865zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"/></svg>'
    });
  }

};

var Changes24Icon = {
  name: 'Changes24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FFAB00" fill-rule="evenodd" d="M16.587 15H5a1 1 0 000 2h11.591l-1.298 1.296a1.001 1.001 0 001.414 1.416l3.005-3.001a1.002 1.002 0 000-1.415l-3.005-3.003a.999.999 0 10-1.414 1.414L16.587 15zM7.418 7l1.294-1.293a.999.999 0 10-1.414-1.414L4.293 7.296a1 1 0 000 1.415l3.005 3a1 1 0 001.414-1.415L7.414 9H19a1 1 0 000-2H7.418zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3z"/></svg>'
    });
  }

};

var Code16Icon = {
  name: 'Code16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#6554C0" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm2.92 4.72L2.34 7.3a.998.998 0 000 1.414l2.58 2.578a1 1 0 001.414-1.416L4.46 8.006l1.873-1.871A1 1 0 104.92 4.72zm4.792 0a.999.999 0 000 1.415l1.874 1.87-1.873 1.87a1 1 0 101.414 1.416l2.58-2.58a1 1 0 000-1.414L11.126 4.72a.996.996 0 00-.706-.292.995.995 0 00-.708.293z"/></svg>'
    });
  }

};

var Code24Icon = {
  name: 'Code24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#6554C0" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm5.583 7.002l-4.29 4.287a1 1 0 000 1.415l4.291 4.285a.999.999 0 001.414-.002 1.002 1.002 0 00-.001-1.414l-3.582-3.576 3.582-3.58a1.002 1.002 0 00-.707-1.708.993.993 0 00-.707.293zm5.41-.013a.999.999 0 00.002 1.413l3.59 3.587-3.59 3.588a1.001 1.001 0 001.414 1.415l4.298-4.296a1 1 0 000-1.415l-4.3-4.293a.994.994 0 00-1.414.001z"/></svg>'
    });
  }

};

var Commit16Icon = {
  name: 'Commit16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FFAB00" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm6 9a1 1 0 100-2 1 1 0 000 2zm-.986 1.834a3.001 3.001 0 010-5.668A1.007 1.007 0 017 5V3a1 1 0 112 0v2c0 .057-.005.112-.014.166a3.001 3.001 0 010 5.668c.01.054.014.11.014.166v2a1 1 0 01-2 0v-2c0-.057.005-.112.014-.166z"/></svg>'
    });
  }

};

var Commit24Icon = {
  name: 'Commit24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FFAB00" fill-rule="evenodd" d="M11.008 8.124a4.002 4.002 0 000 7.752A1.01 1.01 0 0011 16v4a1 1 0 002 0v-4a1.01 1.01 0 00-.008-.124 4.002 4.002 0 000-7.752A1.01 1.01 0 0013 8V4a1 1 0 00-2 0v4c0 .042.003.083.008.124zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm9 14a2 2 0 110-4 2 2 0 010 4z"/></svg>'
    });
  }

};

var Epic16Icon = {
  name: 'Epic16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#6554C0" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm9.912 7.767A.486.486 0 0012 7.5a.5.5 0 00-.5-.5H9V3.5a.495.495 0 00-.872-.327l-.002-.001-3.977 4.973-.008.009-.028.036.002.004A.487.487 0 004 8.5a.5.5 0 00.5.5c.028 0 .051-.011.077-.016H7V12.5a.5.5 0 00.5.5c.124 0 .234-.05.321-.124l.004.001.007-.009c.03-.027.051-.059.074-.092l3.934-4.913c.019-.018.031-.039.047-.06l.027-.033-.002-.003z"/></svg>'
    });
  }

};

var Epic24Icon = {
  name: 'Epic24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#6554C0" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm15.188 9.4h-3.063V4.8a1.807 1.807 0 00-3.16-1.192l-.197.21c-.095.114-.095.114-.324.397a678.151 678.151 0 00-2.976 3.699l-.093.117C5.188 12.03 5 12.274 5 12.8c0 1.01.819 1.599 1.77 1.76l.168.014h2.937V19.2c0 .997.815 1.8 1.813 1.8.43 0 .963-.236 1.52-.793l.073-.083.28-.35a1306.403 1306.403 0 002.973-3.744l.049-.061a403.17 403.17 0 002.21-2.815c.315-.407.562-.729.734-.96.095-.127.169-.229.223-.306.042-.062.042-.062.085-.13.05-.046.05-.046.165-.558 0-.997-.815-1.8-1.813-1.8zm-5.063 2V5.317a357.977 357.977 0 00-.863 1.066 626.68 626.68 0 00-2.23 2.778l-.047.058-.046.059c-1.573 1.973-2.217 2.788-2.596 3.296h4.532v6.106l.122-.154a1304.666 1304.666 0 002.969-3.736l.048-.061A400.017 400.017 0 0017.62 11.4h-4.495z"/></svg>'
    });
  }

};

var Improvement16Icon = {
  name: 'Improvement16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#36B37E" fill-rule="evenodd" d="M9 5.413l2.294 2.294a1 1 0 101.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L7 5.415V13a1 1 0 002 0V5.413zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"/></svg>'
    });
  }

};

var Improvement24Icon = {
  name: 'Improvement24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#36B37E" fill-rule="evenodd" d="M13 7.422l3.284 3.285a1 1 0 101.414-1.414l-4.998-5a1 1 0 00-1.414 0l-4.998 5a1 1 0 101.414 1.414L11 7.407V19a1 1 0 002 0V7.422zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3z"/></svg>'
    });
  }

};

var Incident16Icon = {
  name: 'Incident16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M4.785 10h6.43L10.5 8H5.499l-.714 2zM4 11a1 1 0 00-1 1v1h10v-1a1 1 0 00-1-1H4zm1.856-4h4.288L8.942 3.632a1 1 0 00-1.884 0L5.856 7zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"/></svg>'
    });
  }

};

var Incident24Icon = {
  name: 'Incident24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M8.829 12l-.906 3h8.154l-.906-3H8.83zm.604-2h5.134l-1.61-5.332a1 1 0 00-1.914 0L9.433 10zM17 17H6a1 1 0 00-1 1v2h14v-2a1 1 0 00-1-1h-1zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3z"/></svg>'
    });
  }

};

var Issue16Icon = {
  name: 'Issue16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1 4a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H3zm1 2v4h8V6H4z"/></svg>'
    });
  }

};

var Issue24Icon = {
  name: 'Issue24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#2684FF" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm0 8.009v7.982C3 17.098 3.893 18 4.995 18h14.01C20.107 18 21 17.1 21 15.991V8.01A2.004 2.004 0 0019.005 6H4.995C3.893 6 3 6.9 3 8.009zm11.293 1.284a1 1 0 011.414 1.414l-3.5 3.5a1 1 0 01-1.415-.001l-1.97-1.978a1 1 0 111.416-1.411l1.263 1.267 2.792-2.791zM5 15.99c0 .007 14.005.009 14.005.009C18.999 16 19 8.009 19 8.009 19 8.002 4.995 8 4.995 8 5.001 8 5 15.991 5 15.991z"/></svg>'
    });
  }

};

var NewFeature16Icon = {
  name: 'NewFeature16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#36B37E" fill-rule="evenodd" d="M9 7V4a1 1 0 10-2 0v3H4a1 1 0 100 2h3v3a1 1 0 002 0V9h3a1 1 0 000-2H9zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"/></svg>'
    });
  }

};

var NewFeature24Icon = {
  name: 'NewFeature24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#36B37E" fill-rule="evenodd" d="M13 11V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2h-6zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3z"/></svg>'
    });
  }

};

var Page16Icon = {
  name: 'Page16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm2 3a1 1 0 100 2h8a1 1 0 000-2H4zm0 4a1 1 0 100 2h8a1 1 0 000-2H4zm0 4a1 1 0 000 2h4a1 1 0 000-2H4z"/></svg>'
    });
  }

};

var Page24Icon = {
  name: 'Page24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#2684FF" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm1 18c0 .556.446 1 .995 1h8.01c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1h-8.01c-.54 0-.995.448-.995 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1z"/></svg>'
    });
  }

};

var Problem16Icon = {
  name: 'Problem16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M5.968 11.446l5.478-5.478a4 4 0 01-5.478 5.478zm-.796-.618zm-.618-.796a4 4 0 015.478-5.478l-5.478 5.478zm6.274-4.86zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm6 14A6 6 0 108 2a6 6 0 000 12z"/></svg>'
    });
  }

};

var Problem24Icon = {
  name: 'Problem24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M7.654 17.488l9.834-9.834a7 7 0 01-9.834 9.834zM6.28 16.035a7 7 0 019.756-9.756L6.28 16.035zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm9 21a9 9 0 100-18 9 9 0 000 18z"/></svg>'
    });
  }

};

var PullRequest16Icon = {
  name: 'PullRequest16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#36B37E" fill-rule="evenodd" d="M6.417 6H9a1 1 0 011 1v1a1 1 0 002 0V7a3 3 0 00-3-3H6.415l.294-.295a1 1 0 10-1.413-1.414l-2.003 2a1 1 0 00.001 1.415l2.002 2.001a.999.999 0 001.414-.002.999.999 0 00-.001-1.413L6.417 6zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm9 14a2 2 0 100-4 2 2 0 000 4z"/></svg>'
    });
  }

};

var PullRequest24Icon = {
  name: 'PullRequest24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#36B37E" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm4 3C5.4 3 4 4.3 4 6c0 1.3.8 2.4 2 2.8V20c0 .6.4 1 1 1s1-.4 1-1V8.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3zm7.414 2H15a3 3 0 013 3v7.17a3.001 3.001 0 11-2 0V8a1 1 0 00-1-1h-.583l.292.292a.999.999 0 11-1.413 1.415l-2.002-2a1 1 0 01-.001-1.415l2.003-2.002a.998.998 0 011.414 0 1 1 0 01-.001 1.415L14.414 5zM7 7c-.5 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm10 12a1 1 0 100-2 1 1 0 000 2z"/></svg>'
    });
  }

};

var Question16Icon = {
  name: 'Question16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#6554C0" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm9.751 5.75a3.75 3.75 0 00-7.5 0 1 1 0 002 0 1.75 1.75 0 112.687 1.476l-1.48.957a1 1 0 00-.457.84V10a1 1 0 002 0v-.454l.873-.565c1.117-.65 1.877-1.846 1.877-3.231zM8.001 12a1 1 0 100 2 1 1 0 000-2z"/></svg>'
    });
  }

};

var Question24Icon = {
  name: 'Question24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#6554C0" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm9 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14zm3.238-8.88a3.12 3.12 0 00-6.238 0 1 1 0 102 0 1.119 1.119 0 012.238 0 1.1 1.1 0 01-.329.775l-1.499.994a.999.999 0 00-.448.834v.022h-.002v.753a1 1 0 002 0v-.228l.717-.464a3.106 3.106 0 001.561-2.687zm-3.285 4.882a.998.998 0 100 1.997.998.998 0 000-1.997z"/></svg>'
    });
  }

};

var Story16Icon = {
  name: 'Story16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#36B37E" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm6 11l-2.863 1.822c-.42.38-1.137.111-1.137-.427v-8.19C4 3.54 4.596 3 5.333 3h5.334C11.403 3 12 3.539 12 4.206v8.19c0 .537-.719.806-1.139.426L8 11zm0-2.371l2 1.274V5H6v4.902L8 8.63z"/></svg>'
    });
  }

};

var Story24Icon = {
  name: 'Story24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#36B37E" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm12.647 19.515l1.29-1.528L12 13.82l-4.939 4.167c-.022.018-.061.005-.061.166V6.688C7 6.348 7.412 6 8 6h8c.587 0 1 .349 1 .688v11.465c0-.162-.04-.147-.063-.166l-1.29 1.528C16.885 20.56 19 19.821 19 18.153V6.688C19 5.162 17.623 4 16 4H8C6.376 4 5 5.161 5 6.688v11.465c0 1.668 2.113 2.407 3.351 1.362L12 16.437l3.647 3.078z"/></svg>'
    });
  }

};

var Subtask16Icon = {
  name: 'Subtask16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M9 7V4a1 1 0 00-1-1H4a1 1 0 00-1 1v4a1 1 0 001 1h3v3a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H9zM0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0114.006 16H1.994A1.995 1.995 0 010 14.006V1.994zM9 9h2v2H9V9zM5 5h2v2H5V5z"/></svg>'
    });
  }

};

var Subtask24Icon = {
  name: 'Subtask24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#2684FF" fill-rule="evenodd" d="M13 11V6a1 1 0 00-1-1H6a1 1 0 00-1 1v6a1 1 0 001 1h5v5a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1h-5zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm4 7h4v4H7V7zm6 6h4v4h-4v-4z"/></svg>'
    });
  }

};

var Task16Icon = {
  name: 'Task16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0114.006 16H1.994A1.995 1.995 0 010 14.006V1.994zM4.667 3C3.747 3 3 3.746 3 4.667v6.666C3 12.253 3.746 13 4.667 13h6.666c.92 0 1.667-.746 1.667-1.667V4.667C13 3.747 12.254 3 11.333 3H4.667zM5 5v6h6V5H5z"/></svg>'
    });
  }

};

var Task24Icon = {
  name: 'Task24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#2684FF" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm3 4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6zm0 2v12h12V6H6z"/></svg>'
    });
  }

};

var Archive16Icon = {
  name: 'Archive16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#5E6C84" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm4 3v2h2V3H6zm2 2v2h2V5H8zM6 7v2h2V7H6zm2 2v2h2V9H8zm-2.307 2v2h2v-2h-2z"/></svg>'
    });
  }

};

var Archive24Icon = {
  name: 'Archive24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#5E6C84" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm6 3v3h3V3H9zm3 3v3h3V6h-3zM9 9v3h3V9H9zm3 3v3h3v-3h-3zm-3 3v3h3v-3H9zm3 3v3h3v-3h-3z"/></svg>'
    });
  }

};

var Archive48Icon = {
  name: 'Archive48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#5E6C84" d="M20.5 21.5H24V25h-3.5v-3.5zM24 25h3.5v3.5H24V25zm-3.5 3.5H24V32h-3.5v-3.5zM24 32h3.5v3.5H24V32zm-3.5 3.5H24V39h-3.5v-3.5zM24 39h3.5v3.5H24V39z"/></g></svg>'
    });
  }

};

var Audio16Icon = {
  name: 'Audio16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm11 4.195v-.753c0-.271-.23-.468-.514-.44l-6.115.634a.565.565 0 00-.514.545v4.616a2 2 0 00-.571-.083H5a2 2 0 00-2 2V11a2 2 0 002 2h.286a2 2 0 002-2V5.76l4.285-.444v2.767A2 2 0 0011 8h-.286a2 2 0 00-2 2v.286a2 2 0 002 2H11a2 2 0 002-2V4.195z"/></svg>'
    });
  }

};

var Audio24Icon = {
  name: 'Audio24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm16 6.673V5.619c0-.38-.322-.656-.72-.615l-8.56.886c-.41.043-.72.383-.72.764v6.462A2.8 2.8 0 008.2 13h-.4A2.8 2.8 0 005 15.8v.4A2.8 2.8 0 007.8 19h.4a2.8 2.8 0 002.8-2.8V8.863l6-.62v3.873a2.8 2.8 0 00-.8-.116h-.4a2.8 2.8 0 00-2.8 2.8v.4a2.8 2.8 0 002.8 2.8h.4a2.8 2.8 0 002.8-2.8V6.673z"/></svg>'
    });
  }

};

var Audio48Icon = {
  name: 'Audio48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#FF5630" d="M32.167 25.785v9.948A3.267 3.267 0 0128.9 39h-.467a3.267 3.267 0 01-3.266-3.267v-.466A3.267 3.267 0 0128.433 32h.467c.324 0 .638.047.933.135v-4.52l-7 .726V36.9a3.267 3.267 0 01-3.266 3.267H19.1a3.267 3.267 0 01-3.267-3.267v-.467a3.267 3.267 0 013.267-3.266h.467c.324 0 .637.047.933.135v-7.539c0-.444.362-.842.839-.89l9.989-1.035c.463-.048.839.274.839.717v1.23z"/></g></svg>'
    });
  }

};

var Document16Icon = {
  name: 'Document16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm2 3a1 1 0 100 2h8a1 1 0 000-2H4zm0 4a1 1 0 100 2h8a1 1 0 000-2H4zm0 4a1 1 0 000 2h4a1 1 0 000-2H4z"/></svg>'
    });
  }

};

var Document24Icon = {
  name: 'Document24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#2684FF" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm1 18c0 .556.446 1 .995 1h8.01c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1h-8.01c-.54 0-.995.448-.995 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1z"/></svg>'
    });
  }

};

var Document48Icon = {
  name: 'Document48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#2684FF" d="M14.667 39c0-.644.531-1.167 1.161-1.167h9.344c.641 0 1.161.518 1.161 1.167 0 .644-.531 1.167-1.161 1.167h-9.344A1.161 1.161 0 0114.667 39zm0-4.667c0-.644.518-1.166 1.167-1.166h16.332c.645 0 1.167.518 1.167 1.166 0 .645-.518 1.167-1.167 1.167H15.834a1.164 1.164 0 01-1.167-1.167zm0-4.666c0-.645.518-1.167 1.167-1.167h16.332c.645 0 1.167.518 1.167 1.167 0 .644-.518 1.166-1.167 1.166H15.834a1.164 1.164 0 01-1.167-1.166zm0-4.667c0-.644.518-1.167 1.167-1.167h16.332c.645 0 1.167.518 1.167 1.167 0 .644-.518 1.167-1.167 1.167H15.834A1.164 1.164 0 0114.667 25z"/></g></svg>'
    });
  }

};

var ExcelSpreadsheet16Icon = {
  name: 'ExcelSpreadsheet16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#007442" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1.235 4.258A.273.273 0 003 4.53v6.969c0 .136.1.252.236.27l6.953.962a.273.273 0 00.311-.271V3.542a.273.273 0 00-.312-.27l-6.953.986zm7.89.617v6.25h1.563c.172 0 .312-.14.312-.313V5.189a.312.312 0 00-.313-.313h-1.562zM4.858 10.2l1.35-2.13-1.341-2.098h1.04l.881 1.48h.053l.89-1.48h.991L7.33 8.085 8.702 10.2H7.694l-.908-1.433h-.053l-.92 1.433h-.955z"/></svg>'
    });
  }

};

var ExcelSpreadsheet24Icon = {
  name: 'ExcelSpreadsheet24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#007442" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm1.376 6.013A.437.437 0 004 6.446v11.15c0 .219.161.404.378.434l11.125 1.538a.437.437 0 00.497-.434V4.868a.437.437 0 00-.499-.434L4.376 6.014zM17 7v10h2.5a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H17zM6.93 15.5l2.25-3.55-2.236-3.496h1.734l1.47 2.466h.087l1.485-2.466h1.65l-2.32 3.52 2.286 3.526h-1.68l-1.513-2.388h-.088L8.52 15.5H6.93z"/></svg>'
    });
  }

};

var ExcelSpreadsheet48Icon = {
  name: 'ExcelSpreadsheet48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#007442" d="M15.043 25.024l13.125-1.862a.438.438 0 01.499.433v16.812a.438.438 0 01-.498.433l-13.125-1.814a.438.438 0 01-.377-.433V25.457c0-.217.16-.402.376-.433zm14.79 1.143h3a.5.5 0 01.5.5v10.666a.5.5 0 01-.5.5h-3V26.167zm-11.748 9.916h1.857l1.788-2.785h.103l1.766 2.785h1.96l-2.666-4.113 2.705-4.107h-1.925l-1.732 2.877h-.102l-1.715-2.877h-2.022l2.609 4.079-2.626 4.141z"/></g></svg>'
    });
  }

};

var Executable16Icon = {
  name: 'Executable16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#5E6C84" fill-rule="evenodd" d="M0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0114.006 16H1.994A1.995 1.995 0 010 14.006V1.994zm3 6.72v3.572c0 .394.32.714.714.714h8.572c.394 0 .714-.32.714-.714V8.714H3zM4.345 3a.714.714 0 00-.709.626L3 8.714h10l-.636-5.088A.714.714 0 0011.655 3h-7.31zm.798 7.143h5.714a.714.714 0 010 1.428H5.143a.714.714 0 110-1.428z"/></svg>'
    });
  }

};

var Executable24Icon = {
  name: 'Executable24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#5E6C84" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm2 13v5a1 1 0 001 1h12a1 1 0 001-1v-5H5zm1.883-8a1 1 0 00-.992.876L5 13h14l-.89-7.124A1 1 0 0017.116 5H6.883zM8 15h8a1 1 0 010 2H8a1 1 0 010-2z"/></svg>'
    });
  }

};

var Executable48Icon = {
  name: 'Executable48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#5E6C84" d="M15.833 33.167l1.058-8.458a1 1 0 01.992-.876h12.234a1 1 0 01.992.876l1.058 8.458v6a1 1 0 01-1 1H16.833a1 1 0 01-1-1v-6zm3.334 2.333a1 1 0 00-1 1v.333a1 1 0 001 1h9.666a1 1 0 001-1V36.5a1 1 0 00-1-1h-9.666z"/></g></svg>'
    });
  }

};

var Figma16Icon = {
  name: 'Figma16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.165 0C.97 0 0 .97 0 2.165v11.67C0 15.03.97 16 2.165 16h11.67C15.03 16 16 15.03 16 13.835V2.165C16 .97 15.03 0 13.835 0H2.165zm5.837 11.342a1.67 1.67 0 11-1.67-1.671 1.67 1.67 0 010-3.342 1.67 1.67 0 010-3.342h3.34a1.67 1.67 0 010 3.342h-1.67v1.667a1.67 1.67 0 110 .008v3.338z" fill="#5243AA"/></svg>'
    });
  }

};

var Figma24Icon = {
  name: 'Figma24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.248 0A3.248 3.248 0 000 3.248v17.504A3.248 3.248 0 003.248 24h17.504A3.248 3.248 0 0024 20.752V3.248A3.248 3.248 0 0020.752 0H3.248zm8.755 17.012a2.506 2.506 0 01-2.505 2.507 2.506 2.506 0 010-5.013 2.506 2.506 0 010-5.012 2.506 2.506 0 010-5.013h5.009a2.506 2.506 0 010 5.013h-2.505v2.5a2.506 2.506 0 012.505-2.5 2.506 2.506 0 010 5.012 2.506 2.506 0 01-2.505-2.5v5.006z" fill="#5243AA"/></svg>'
    });
  }

};

var Figma48Icon = {
  name: 'Figma48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5v0z" fill="#fff" stroke="#091E42" stroke-opacity=".08"/><path d="M21.493 39.52A2.508 2.508 0 0024 37.013v-2.506h-2.507a2.508 2.508 0 000 5.013zM18.987 32a2.508 2.508 0 012.506-2.507H24v5.014h-2.507A2.508 2.508 0 0118.987 32zm0-5.013a2.508 2.508 0 012.506-2.507H24v5.013h-2.507a2.508 2.508 0 01-2.506-2.506zM24 24.48h2.507a2.508 2.508 0 010 5.013H24V24.48z" fill="#5243AA"/><path d="M29.013 32A2.508 2.508 0 0124 32a2.508 2.508 0 015.013 0z" fill="#5243AA"/></svg>'
    });
  }

};

var Folder16Icon = {
  name: 'Folder16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><g fill="#B3D4FF" fill-rule="evenodd"><path d="M6.667 3H15a1 1 0 011 1v10.05a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1h4.667a1 1 0 011 1z"/><path d="M0 4.05h16v10a1 1 0 01-1 1H1a1 1 0 01-1-1v-10z" style="mix-blend-mode:multiply"/></g></svg>'
    });
  }

};

var Folder24Icon = {
  name: 'Folder24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><g fill="#B3D4FF" fill-rule="evenodd"><path d="M10 4h12a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V4a2 2 0 012-2h6a2 2 0 012 2z"/><path d="M0 6h24v14a2 2 0 01-2 2H2a2 2 0 01-2-2V6z" style="mix-blend-mode:multiply"/></g></svg>'
    });
  }

};

var Folder48Icon = {
  name: 'Folder48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill="#B3D4FF" fill-rule="evenodd"><path d="M20 16h24a4 4 0 014 4v28a4 4 0 01-4 4H4a4 4 0 01-4-4V16a4 4 0 014-4h12a4 4 0 014 4z"/><path d="M0 20h48v28a4 4 0 01-4 4H4a4 4 0 01-4-4V20z" style="mix-blend-mode:multiply"/></g></svg>'
    });
  }

};

var Generic16Icon = {
  name: 'Generic16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#5E6C84" fill-rule="evenodd" d="M8 3H5.333C4.597 3 4 3.617 4 4.378v7.244C4 12.382 4.597 13 5.333 13h5.334c.736 0 1.333-.617 1.333-1.378V8h-1.333v3.622H5.333V4.378H8v1.414c0 .736.597 1.333 1.333 1.333h2.334c.184 0 .333-.15.333-.333v-.903a.333.333 0 00-.093-.231l-2.164-2.25A1.333 1.333 0 008.782 3H8zM0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0114.006 16H1.994A1.995 1.995 0 010 14.006V1.994z"/></svg>'
    });
  }

};

var Generic24Icon = {
  name: 'Generic24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#5E6C84" fill-rule="evenodd" d="M12 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2v-6.995h-2V18H8V6h4v2a2 2 0 002 2h3.5a.5.5 0 00.5-.5V8.213a.5.5 0 00-.145-.352L14.61 4.59A2 2 0 0013.19 4H12zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3z"/></svg>'
    });
  }

};

var Generic48Icon = {
  name: 'Generic48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#5E6C84" d="M24 22.667h1.528a2 2 0 011.42.59l3.907 3.938a.5.5 0 01.145.352v1.62a.5.5 0 01-.5.5H26a2 2 0 01-2-2V25h-4.667v14h9.334v-8.16H31V39a2.333 2.333 0 01-2.333 2.334h-9.334A2.333 2.333 0 0117 39V25a2.333 2.333 0 012.333-2.333H24z"/></g></svg>'
    });
  }

};

var Gif16Icon = {
  name: 'Gif16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FFAB00" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm7.042 11.09H7.755a.162.162 0 01-.162-.161v-5.34c0-.09.072-.162.162-.162h1.287c.09 0 .163.072.163.163v5.339c0 .09-.073.162-.163.162m2.528 0h-1.288a.162.162 0 01-.162-.162v-5.34c0-.09.072-.162.162-.162h3.556c.089 0 .162.072.162.163v1.048c0 .09-.073.162-.162.162h-2.106v.947h1.898c.09 0 .162.073.162.162v1.013c0 .09-.072.162-.162.162h-1.898v1.845c0 .09-.074.162-.162.162m-7.045.097C2.944 11.188 2 10.207 2 8.562v-.641c0-1.597.968-2.588 2.528-2.588 1.544 0 2.291.978 2.349 1.948a.161.161 0 01-.162.172H5.463a.162.162 0 01-.16-.133c-.066-.367-.368-.595-.786-.595-.74 0-.894.657-.894 1.207v.626c0 .822.312 1.238.929 1.238.59 0 .8-.359.8-.667v-.06h-.77a.162.162 0 01-.161-.163v-.915c0-.09.072-.162.162-.162h2.144c.09 0 .162.072.162.162v1.036c0 .997-.62 2.161-2.364 2.161"/></svg>'
    });
  }

};

var Gif24Icon = {
  name: 'Gif24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FFAB00" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm10.564 16.636h-1.93a.243.243 0 01-.244-.243V8.384c0-.135.108-.243.243-.243h1.93c.135 0 .244.108.244.243v8.009a.243.243 0 01-.243.243m3.79 0h-1.931a.243.243 0 01-.243-.243V8.384c0-.135.109-.243.243-.243h5.334c.133 0 .243.108.243.243v1.573c0 .134-.11.243-.243.243h-3.16v1.42h2.848c.135 0 .244.11.244.244v1.518a.243.243 0 01-.244.244h-2.847v2.767c0 .134-.11.243-.244.243m-10.567.146C4.416 16.782 3 15.31 3 12.843v-.962C3 9.487 4.453 8 6.793 8c2.314 0 3.436 1.467 3.522 2.922a.241.241 0 01-.242.258H8.195a.243.243 0 01-.24-.2c-.1-.55-.552-.892-1.18-.892-1.108 0-1.34.985-1.34 1.81v.94c0 1.231.467 1.856 1.393 1.856.885 0 1.2-.538 1.2-1v-.092H6.874a.243.243 0 01-.243-.243v-1.373c0-.134.11-.243.243-.243h3.216c.134 0 .243.109.243.243v1.555c0 1.496-.929 3.241-3.546 3.241"/></svg>'
    });
  }

};

var Gif48Icon = {
  name: 'Gif48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#FFAB00" d="M25.824 37.409h-2.252a.283.283 0 01-.284-.284v-9.343c0-.158.126-.284.284-.284h2.252c.157 0 .284.126.284.284v9.343a.284.284 0 01-.284.284zm4.423 0h-2.254a.284.284 0 01-.283-.284v-9.343c0-.158.127-.284.283-.284h6.223c.156 0 .284.126.284.284v1.834a.285.285 0 01-.284.284H30.53v1.657h3.323c.157 0 .284.127.284.284v1.772a.284.284 0 01-.284.284H30.53v3.228a.285.285 0 01-.283.284m-12.33.17c-2.765 0-4.417-1.717-4.417-4.595v-1.123c0-2.793 1.695-4.528 4.425-4.528 2.7 0 4.01 1.712 4.109 3.41a.282.282 0 01-.283.3h-2.19a.284.284 0 01-.28-.233c-.117-.642-.645-1.04-1.377-1.04-1.293 0-1.564 1.148-1.564 2.112v1.095c0 1.437.546 2.166 1.626 2.166 1.033 0 1.4-.628 1.4-1.167v-.107H18.02a.283.283 0 01-.284-.283v-1.602c0-.157.127-.284.284-.284h3.752c.156 0 .284.127.284.284v1.814c0 1.745-1.085 3.781-4.138 3.781"/></g></svg>'
    });
  }

};

var GoogleDoc16Icon = {
  name: 'GoogleDoc16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2196F3" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm8.287 2.5l-4.067.04 3.508 6.114 4.066-.041L10.287 2.5zM2 9.33l2.068 3.523L7.576 6.74 5.508 3.217 2 9.331zm4.984.106L4.987 13h7.015L14 9.437H6.984z"/></svg>'
    });
  }

};

var GoogleDoc24Icon = {
  name: 'GoogleDoc24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#2196F3" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm12.049 5l-5.422.055 4.677 8.15 5.422-.055L15.049 5zM4 14.108l2.757 4.697 4.677-8.15-2.757-4.697L4 14.108zm6.646.141L7.982 19h9.354L20 14.249h-9.354z"/></svg>'
    });
  }

};

var GoogleDoc48Icon = {
  name: 'GoogleDoc48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#2196F3" d="M27.557 23.833l5.456 9.509-6.325.064-5.456-9.509 6.325-.064zM14.667 34.46l3.217 5.48 5.456-9.51-3.217-5.48-5.456 9.51zm7.753.164l-3.107 5.543h10.913l3.107-5.543H22.42z"/></g></svg>'
    });
  }

};

var GoogleForm16Icon = {
  name: 'GoogleForm16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#673AB7" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm8.287 2.5l-4.067.04 3.508 6.114 4.066-.041L10.287 2.5zM2 9.33l2.068 3.523L7.576 6.74 5.508 3.217 2 9.331zm4.984.106L4.987 13h7.015L14 9.437H6.984z"/></svg>'
    });
  }

};

var GoogleForm24Icon = {
  name: 'GoogleForm24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#673AB7" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm12.049 5l-5.422.055 4.677 8.15 5.422-.055L15.049 5zM4 14.108l2.757 4.697 4.677-8.15-2.757-4.697L4 14.108zm6.646.141L7.982 19h9.354L20 14.249h-9.354z"/></svg>'
    });
  }

};

var GoogleForm48Icon = {
  name: 'GoogleForm48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#673AB7" d="M27.557 23.833l5.456 9.509-6.325.064-5.456-9.509 6.325-.064zM14.667 34.46l3.217 5.48 5.456-9.51-3.217-5.48-5.456 9.51zm7.753.164l-3.107 5.543h10.913l3.107-5.543H22.42z"/></g></svg>'
    });
  }

};

var GoogleSheet16Icon = {
  name: 'GoogleSheet16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#0A9D58" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm8.287 2.5l-4.067.04 3.508 6.114 4.066-.041L10.287 2.5zM2 9.33l2.068 3.523L7.576 6.74 5.508 3.217 2 9.331zm4.984.106L4.987 13h7.015L14 9.437H6.984z"/></svg>'
    });
  }

};

var GoogleSheet24Icon = {
  name: 'GoogleSheet24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#0A9D58" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm12.049 5l-5.422.055 4.677 8.15 5.422-.055L15.049 5zM4 14.108l2.757 4.697 4.677-8.15-2.757-4.697L4 14.108zm6.646.141L7.982 19h9.354L20 14.249h-9.354z"/></svg>'
    });
  }

};

var GoogleSheet48Icon = {
  name: 'GoogleSheet48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#0A9D58" d="M27.557 23.833l5.456 9.509-6.325.064-5.456-9.509 6.325-.064zM14.667 34.46l3.217 5.48 5.456-9.51-3.217-5.48-5.456 9.51zm7.753.164l-3.107 5.543h10.913l3.107-5.543H22.42z"/></g></svg>'
    });
  }

};

var GoogleSlide16Icon = {
  name: 'GoogleSlide16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FFC107" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm8.287 2.5l-4.067.04 3.508 6.114 4.066-.041L10.287 2.5zM2 9.33l2.068 3.523L7.576 6.74 5.508 3.217 2 9.331zm4.984.106L4.987 13h7.015L14 9.437H6.984z"/></svg>'
    });
  }

};

var GoogleSlide24Icon = {
  name: 'GoogleSlide24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FFC107" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm12.049 5l-5.422.055 4.677 8.15 5.422-.055L15.049 5zM4 14.108l2.757 4.697 4.677-8.15-2.757-4.697L4 14.108zm6.646.141L7.982 19h9.354L20 14.249h-9.354z"/></svg>'
    });
  }

};

var GoogleSlide48Icon = {
  name: 'GoogleSlide48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#FFC107" d="M27.557 23.833l5.456 9.509-6.325.064-5.456-9.509 6.325-.064zM14.667 34.46l3.217 5.48 5.456-9.51-3.217-5.48-5.456 9.51zm7.753.164l-3.107 5.543h10.913l3.107-5.543H22.42z"/></g></svg>'
    });
  }

};

var Image16Icon = {
  name: 'Image16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FFAB00" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm4.75 11.75l-.543-.543a1 1 0 00-1.414 0L3 13h10v-2.25l-1.795-1.974a1 1 0 00-1.447-.034L6.75 11.75zM4.667 6.333a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"/></svg>'
    });
  }

};

var Image24Icon = {
  name: 'Image24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FFAB00" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm7 17l-1.293-1.293a1 1 0 00-1.414 0L4 19h16v-3.6l-3.295-3.624a1 1 0 00-1.447-.034L10 17zm-3.333-6.667a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333z"/></svg>'
    });
  }

};

var Image48Icon = {
  name: 'Image48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#FFAB00" d="M21.667 37.833l6.258-6.258a1 1 0 011.447.034l3.961 4.358v4.2H14.667l3.96-3.96a1 1 0 011.413 0l1.627 1.626zm-3.89-7.777a3.111 3.111 0 110-6.223 3.111 3.111 0 010 6.223z"/></g></svg>'
    });
  }

};

var PdfDocument16Icon = {
  name: 'PdfDocument16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1.23 8.113h.323c.744 0 .802-.214.802-.517 0-.346-.179-.514-.545-.514h-.58v1.03zm4.194 1.456h.443c.494 0 1-.147 1-1.237 0-1.1-.534-1.24-1-1.24h-.443v2.477zM2.975 10.66h-.72A.256.256 0 012 10.404V6.255c0-.14.114-.255.255-.255h1.663c.989 0 1.68.656 1.68 1.596 0 .953-.677 1.593-1.683 1.593H3.23v1.215a.256.256 0 01-.256.256zm4.968 0H6.448a.256.256 0 01-.255-.256V6.255c0-.14.114-.255.255-.255h1.495c1.404 0 2.178.825 2.178 2.323 0 1.507-.774 2.337-2.178 2.337zm3.85 0h-.72a.256.256 0 01-.256-.256V6.255c0-.14.114-.255.255-.255h2.673c.14 0 .255.115.255.255v.587a.256.256 0 01-.255.255h-1.697v.76h1.528c.141 0 .255.115.255.256v.577c0 .14-.114.256-.255.256h-1.528v1.458a.256.256 0 01-.255.256z"/></svg>'
    });
  }

};

var PdfDocument24Icon = {
  name: 'PdfDocument24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm1.846 12.17h.483c1.116 0 1.203-.322 1.203-.776 0-.518-.268-.771-.817-.771h-.869v1.546zm6.29 2.183h.664c.742 0 1.501-.22 1.501-1.855 0-1.65-.802-1.86-1.501-1.86h-.665v3.715zM4.462 15.99h-1.08A.384.384 0 013 15.606V9.383c0-.21.171-.383.383-.383h2.494c1.483 0 2.52.984 2.52 2.394 0 1.43-1.015 2.39-2.525 2.39H4.846v1.822a.384.384 0 01-.383.384zm7.45 0h-2.24a.384.384 0 01-.384-.384V9.383c0-.21.172-.383.383-.383h2.242c2.107 0 3.268 1.237 3.268 3.484 0 2.26-1.16 3.506-3.268 3.506zm5.776 0h-1.08a.384.384 0 01-.384-.384V9.383c0-.21.172-.383.383-.383h4.009c.21 0 .383.172.383.383v.88a.383.383 0 01-.383.383h-2.545v1.14h2.292c.212 0 .383.172.383.383v.867c0 .21-.171.383-.383.383h-2.292v2.187a.384.384 0 01-.383.384z"/></svg>'
    });
  }

};

var PdfDocument48Icon = {
  name: 'PdfDocument48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#FF5630" d="M15.654 32.197v-1.804h1.014c.64 0 .953.295.953.9 0 .53-.102.904-1.403.904h-.564zm7.337 2.548h.776c.865 0 1.751-.257 1.751-2.165 0-1.923-.936-2.17-1.751-2.17h-.776v4.335zm-7.784 1.91h-1.26a.448.448 0 01-.447-.448v-7.26c0-.246.2-.447.447-.447h2.91c1.73 0 2.94 1.148 2.94 2.793 0 1.667-1.184 2.788-2.946 2.788h-1.197v2.126c0 .247-.2.448-.447.448zm8.692 0h-2.614a.448.448 0 01-.447-.448v-7.26c0-.246.2-.447.447-.447h2.614c2.459 0 3.813 1.443 3.813 4.065 0 2.637-1.354 4.09-3.813 4.09zm6.738 0h-1.26a.448.448 0 01-.448-.448v-7.26c0-.246.2-.447.447-.447h4.677c.246 0 .447.201.447.447v1.026a.447.447 0 01-.447.447h-2.969v1.33h2.674c.247 0 .447.2.447.447v1.011c0 .246-.2.447-.447.447h-2.674v2.552c0 .247-.2.448-.447.448z"/></g></svg>'
    });
  }

};

var PowerpointPresentation16Icon = {
  name: 'PowerpointPresentation16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#CA5010" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1.235 4.258A.273.273 0 003 4.53v6.969c0 .136.1.252.236.27l6.953.962a.273.273 0 00.311-.271V3.542a.273.273 0 00-.312-.27l-6.953.986zm7.89.617v6.25h1.563c.172 0 .312-.14.312-.313V5.189a.312.312 0 00-.313-.313h-1.562zM5.313 6.072h1.763c.87 0 1.465.583 1.465 1.462 0 .87-.618 1.454-1.509 1.454h-.835V10.3h-.884V6.072zm.884.727v1.47h.642c.507 0 .803-.257.803-.732 0-.48-.29-.738-.8-.738h-.645z"/></svg>'
    });
  }

};

var PowerpointPresentation24Icon = {
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

  render() {
    // eslint-disable-next-line max-len
    return vue.h(IconWrapper.script, { ...this.$props,
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#CA5010" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm1.376 6.013A.437.437 0 004 6.446v11.15c0 .219.161.404.378.434l11.125 1.538a.437.437 0 00.497-.434V4.868a.437.437 0 00-.499-.434L4.376 6.014zM17 7v10h2.5a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H17zM7.854 8.454h2.94c1.45 0 2.441.972 2.441 2.437 0 1.45-1.03 2.421-2.514 2.421H9.329V15.5H7.854V8.454zM9.33 9.665v2.451h1.07c.844 0 1.337-.43 1.337-1.22 0-.801-.483-1.231-1.333-1.231H9.33z"/></svg>'
    });
  }

};

var PowerpointPresentation48Icon = {
  name: 'PowerpointPresentation48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#CA5010" d="M15.043 25.024l13.125-1.862a.438.438 0 01.499.433v16.812a.438.438 0 01-.498.433l-13.125-1.814a.438.438 0 01-.377-.433V25.457c0-.217.16-.402.376-.433zm14.79 1.143h3a.5.5 0 01.5.5v10.666a.5.5 0 01-.5.5h-3V26.167zm-10.67 1.696v8.22h1.721v-2.552h1.623c1.732 0 2.934-1.133 2.934-2.825 0-1.71-1.156-2.843-2.848-2.843h-3.43zm1.721 1.413h1.253c.991 0 1.555.501 1.555 1.435 0 .923-.575 1.425-1.56 1.425h-1.248v-2.86z"/></g></svg>'
    });
  }

};

var Presentation16Icon = {
  name: 'Presentation16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#6554C0" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm10 3a1 1 0 00-1 1v8a1 1 0 002 0V4a1 1 0 00-1-1zM8 6a1 1 0 00-1 1v5a1 1 0 002 0V7a1 1 0 00-1-1zM4 9a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"/></svg>'
    });
  }

};

var Presentation24Icon = {
  name: 'Presentation24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#6554C0" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm3 14a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1zm8-6a1 1 0 00-1 1v9a1 1 0 002 0V9a1 1 0 00-1-1zm-4 4a1 1 0 00-1 1v5a1 1 0 002 0v-5a1 1 0 00-1-1zm8-7a1 1 0 00-1 1v12a1 1 0 002 0V6a1 1 0 00-1-1z"/></svg>'
    });
  }

};

var Presentation48Icon = {
  name: 'Presentation48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#6554C0" d="M17 34.333c.644 0 1.167.523 1.167 1.167V39a1.167 1.167 0 01-2.334 0v-3.5c0-.644.523-1.167 1.167-1.167zm9.333-7c.645 0 1.167.523 1.167 1.167V39a1.167 1.167 0 01-2.333 0V28.5c0-.644.522-1.167 1.166-1.167zM21.667 32c.644 0 1.166.522 1.166 1.167V39a1.167 1.167 0 11-2.333 0v-5.833c0-.645.522-1.167 1.167-1.167zM31 23.833c.644 0 1.167.523 1.167 1.167v14a1.167 1.167 0 01-2.334 0V25c0-.644.523-1.167 1.167-1.167z"/></g></svg>'
    });
  }

};

var Sketch16Icon = {
  name: 'Sketch16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF8B00" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm6.02 13.333a.669.669 0 00.502-.228L13.17 7.77a.667.667 0 00.063-.79l-1.657-2.666A.668.668 0 0011.01 4H5.116a.669.669 0 00-.554.296L2.779 6.963a.667.667 0 00.054.81l4.686 5.334a.665.665 0 00.5.226z"/></svg>'
    });
  }

};

var Sketch24Icon = {
  name: 'Sketch24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF8B00" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm9.03 20h.001c.29-.001.562-.126.752-.343l6.971-8a1 1 0 00.095-1.185l-2.485-4a1.003 1.003 0 00-.85-.472h-8.84c-.334 0-.646.167-.832.444l-2.674 4a1 1 0 00.081 1.216l7.03 8c.188.216.462.34.75.34z"/></svg>'
    });
  }

};

var Sketch48Icon = {
  name: 'Sketch48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#FF8B00" d="M24.034 41.333c-.336 0-.655-.144-.876-.396l-8.2-9.334a1.167 1.167 0 01-.095-1.418l3.12-4.667a1.17 1.17 0 01.97-.518h10.314c.403 0 .778.209.991.55l2.9 4.667c.27.436.225.997-.111 1.383l-8.133 9.333a1.17 1.17 0 01-.877.4h-.003z"/></g></svg>'
    });
  }

};

var SourceCode16Icon = {
  name: 'SourceCode16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#00B8D9" fill-rule="evenodd" d="M0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0114.006 16H1.994A1.995 1.995 0 010 14.006V1.994zm6.639 8.417L4.253 8.1l2.589-2.51a.924.924 0 10-1.288-1.328L2.281 7.435a.925.925 0 000 1.328l3.07 2.976a.925.925 0 101.288-1.328zm7.203-3.173L10.77 4.26a.924.924 0 10-1.286 1.33l2.385 2.313-2.588 2.51a.924.924 0 101.287 1.327l3.274-3.173a.925.925 0 000-1.328z"/></svg>'
    });
  }

};

var SourceCode24Icon = {
  name: 'SourceCode24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#00B8D9" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm5.017 12.265l-2.58-2.501L8.236 7.05a.999.999 0 10-1.392-1.436l-3.54 3.432a1 1 0 000 1.436l3.32 3.219a1 1 0 101.393-1.436zm6.638-8.21a1 1 0 00-1.271.62l-4.83 14.046a1 1 0 001.892.65l4.829-14.045a1 1 0 00-.62-1.271zm6.081 9.776l-3.32-3.219a.999.999 0 10-1.393 1.436l2.58 2.501-2.799 2.714a.999.999 0 101.392 1.436l3.54-3.432a1 1 0 000-1.436z"/></svg>'
    });
  }

};

var SourceCode48Icon = {
  name: 'SourceCode48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#00B8D9" d="M26.514 22.73c.609.21.933.874.723 1.483L21.603 40.6a1.166 1.166 0 11-2.206-.76l5.634-16.385c.21-.61.874-.934 1.483-.724zm-7.161 9.579a1.168 1.168 0 01-1.624 1.675l-3.875-3.755a1.167 1.167 0 010-1.675l4.13-4.004a1.165 1.165 0 111.624 1.675l-3.265 3.166 3.01 2.918zm14.256 1.83a1.167 1.167 0 010 1.675l-4.13 4.004a1.167 1.167 0 11-1.624-1.676l3.265-3.166-3.01-2.918a1.168 1.168 0 011.624-1.675l3.875 3.755z"/></g></svg>'
    });
  }

};

var Spreadsheet16Icon = {
  name: 'Spreadsheet16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#36B37E" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm2 3a1 1 0 100 2h1a1 1 0 100-2H4zm0 4a1 1 0 100 2h1a1 1 0 100-2H4zm0 4a1 1 0 000 2h1a1 1 0 000-2H4zm5-8a1 1 0 100 2h3a1 1 0 000-2H9zm0 4a1 1 0 100 2h3a1 1 0 000-2H9zm0 4a1 1 0 000 2h3a1 1 0 000-2H9z"/></svg>'
    });
  }

};

var Spreadsheet24Icon = {
  name: 'Spreadsheet24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#36B37E" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm2 5a1 1 0 100 2h3a1 1 0 100-2H5zm0 4a1 1 0 100 2h3a1 1 0 000-2H5zm0 4a1 1 0 000 2h3a1 1 0 000-2H5zm0 4a1 1 0 000 2h3a1 1 0 000-2H5zm7-12a1 1 0 000 2h7a1 1 0 000-2h-7zm0 4a1 1 0 000 2h7a1 1 0 000-2h-7zm0 4a1 1 0 000 2h7a1 1 0 000-2h-7zm0 4a1 1 0 000 2h7a1 1 0 000-2h-7z"/></svg>'
    });
  }

};

var Spreadsheet48Icon = {
  name: 'Spreadsheet48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#36B37E" d="M15.833 23.833h3.5a1.167 1.167 0 010 2.334h-3.5a1.167 1.167 0 010-2.334zm0 4.667h3.5a1.167 1.167 0 010 2.333h-3.5a1.167 1.167 0 110-2.333zm0 4.667h3.5a1.167 1.167 0 110 2.333h-3.5a1.167 1.167 0 010-2.333zm0 4.666h3.5a1.167 1.167 0 010 2.334h-3.5a1.167 1.167 0 010-2.334zm8.167-14h8.167a1.167 1.167 0 010 2.334H24a1.167 1.167 0 010-2.334zm0 4.667h8.167a1.167 1.167 0 010 2.333H24a1.167 1.167 0 110-2.333zm0 4.667h8.167a1.167 1.167 0 110 2.333H24a1.167 1.167 0 010-2.333zm0 4.666h8.167a1.167 1.167 0 010 2.334H24a1.167 1.167 0 010-2.334z"/></g></svg>'
    });
  }

};

var Video16Icon = {
  name: 'Video16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm11.37 10.954c.285.138.63-.05.63-.343V5.39c0-.293-.345-.481-.63-.343L11 6.194v3.613l2.37 1.147zM2 5.99v4.018c0 .54.449.991 1.003.991h4.994A.99.99 0 009 10.01V5.99C9 5.452 8.551 5 7.997 5H3.003A.99.99 0 002 5.99z"/></svg>'
    });
  }

};

var Video24Icon = {
  name: 'Video24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm1 7.995v8.01c0 .54.446.995.995.995h8.01c.54 0 .995-.446.995-.995v-8.01c0-.54-.446-.995-.995-.995h-8.01C4.455 7 4 7.446 4 7.995zm15.16 7.943c.38.185.84-.066.84-.457V8.52c0-.39-.46-.642-.84-.457L16 9.592v4.817l3.16 1.53z"/></svg>'
    });
  }

};

var Video48Icon = {
  name: 'Video48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#FF5630" d="M14.667 27.161c0-.549.443-.994.994-.994h9.678c.549 0 .994.443.994.994v9.678a.993.993 0 01-.994.994H15.66a.993.993 0 01-.994-.994V27.16zm17.686 9.434l-3.686-1.784v-5.62l3.686-1.786c.444-.215.98.078.98.533v8.124c0 .455-.536.748-.98.533z"/></g></svg>'
    });
  }

};

var WordDocument16Icon = {
  name: 'WordDocument16Icon',
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
      innerHTML: '<svg viewBox="0 0 16 16"><path fill="#004E8C" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1.235 4.258A.273.273 0 003 4.53v6.969c0 .136.1.252.236.27l6.953.962a.273.273 0 00.311-.271V3.542a.273.273 0 00-.312-.27l-6.953.986zm7.89.617v6.25h1.563c.172 0 .312-.14.312-.313V5.189a.312.312 0 00-.313-.313h-1.562zM6.803 7.602L6.012 10.4h-.835l-1.12-4.228h.92l.66 2.98h.047l.77-2.98h.747l.786 2.98h.046l.654-2.98H9.6L8.479 10.4h-.83l-.8-2.798h-.046z"/></svg>'
    });
  }

};

var WordDocument24Icon = {
  name: 'WordDocument24Icon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path fill="#004E8C" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm1.376 6.013A.437.437 0 004 6.446v11.15c0 .219.161.404.378.434l11.125 1.538a.437.437 0 00.497-.434V4.868a.437.437 0 00-.499-.434L4.376 6.014zm5.629 5.324L8.687 16H7.295L5.43 8.954h1.533l1.099 4.966h.078l1.284-4.966h1.245l1.309 4.966h.078l1.089-4.966h1.523L12.798 16h-1.382l-1.333-4.663h-.078zM17 7v10h2.5a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H17z"/></svg>'
    });
  }

};

var WordDocument48Icon = {
  name: 'WordDocument48Icon',
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
      innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#004E8C" d="M15.043 25.024l13.125-1.862a.438.438 0 01.499.433v16.812a.438.438 0 01-.498.433l-13.125-1.814a.438.438 0 01-.377-.433V25.457c0-.217.16-.402.376-.433zm6.63 6.202h.09l1.556 5.44h1.612l2.182-8.22h-1.778l-1.27 5.794h-.091l-1.527-5.794h-1.453l-1.498 5.794h-.09l-1.283-5.794h-1.788l2.176 8.22h1.623l1.538-5.44zm8.16-5.06h3a.5.5 0 01.5.5v10.667a.5.5 0 01-.5.5h-3V26.167z"/></g></svg>'
    });
  }

};

var PriorityBlockerIcon = {
  name: 'PriorityBlockerIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM6 11a1 1 0 000 2h12a1 1 0 000-2H6z" fill="#FF5630"/></svg>'
    });
  }

};

var PriorityCriticalIcon = {
  name: 'PriorityCriticalIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M4.671 7.165l6.643-3.946a1.372 1.372 0 011.403.002l6.614 3.944c.415.247.669.695.669 1.178v11.253a1.372 1.372 0 01-2.074 1.179l-5.91-3.52-5.944 3.526A1.372 1.372 0 014 19.6V8.345c0-.484.255-.933.671-1.18z" fill="#FF5630"/></svg>'
    });
  }

};

var PriorityHighIcon = {
  name: 'PriorityHighIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12.017 11.182l-6.454 3.865a1 1 0 11-1.027-1.716l6.97-4.174a1 1 0 011.03.003l6.906 4.173a1 1 0 01-1.035 1.712l-6.39-3.863z" fill="#FF5630"/></svg>'
    });
  }

};

var PriorityHighestIcon = {
  name: 'PriorityHighestIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12.005 8.187l-6.453 3.865a1 1 0 01-1.028-1.716l6.97-4.174a1 1 0 011.031.002l6.906 4.174a1 1 0 11-1.035 1.712l-6.39-3.863z" fill="#FF5630"/><path d="M5.552 18.054a1 1 0 11-1.028-1.715l6.97-4.174a1 1 0 011.031.002l6.906 4.174a1 1 0 11-1.035 1.711l-6.39-3.862-6.454 3.864z" fill="#FF7452"/></svg>'
    });
  }

};

var PriorityLowIcon = {
  name: 'PriorityLowIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.996 13.861l6.454-3.865a1 1 0 111.027 1.716l-6.97 4.174a1 1 0 01-1.03-.002L4.57 11.71A1 1 0 015.606 10l6.39 3.862z" fill="#0065FF"/></svg>'
    });
  }

};

var PriorityLowestIcon = {
  name: 'PriorityLowestIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M18.46 11.936a1 1 0 111.028 1.716l-6.97 4.174a1 1 0 01-1.03-.002L4.581 13.65a1 1 0 011.034-1.711l6.391 3.862 6.454-3.865z" fill="#0065FF"/><path d="M12.007 9.798l6.454-3.864a1 1 0 011.027 1.716l-6.97 4.173a1 1 0 01-1.03-.002L4.581 7.648a1 1 0 011.034-1.712l6.391 3.862z" fill="#2684FF"/></svg>'
    });
  }

};

var PriorityMajorIcon = {
  name: 'PriorityMajorIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12.02 5.187L5.567 9.05A1 1 0 114.54 7.335l6.97-4.173a1 1 0 011.03.002l6.906 4.173A1 1 0 1118.41 9.05l-6.39-3.862z" fill="#FF5630"/><path d="M5.567 15.054a1 1 0 11-1.027-1.716l6.97-4.174a1 1 0 011.03.002l6.906 4.174a1 1 0 11-1.035 1.712l-6.39-3.863-6.454 3.865z" fill="#FF7452"/><path d="M5.567 21.068a1 1 0 11-1.027-1.716l6.97-4.174a1 1 0 011.03.002l6.906 4.174a1 1 0 11-1.035 1.712l-6.39-3.863-6.454 3.865z" fill="#FF8F73"/></svg>'
    });
  }

};

var PriorityMediumIcon = {
  name: 'PriorityMediumIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 8h14a1 1 0 010 2H5a1 1 0 110-2zm0 6h14a1 1 0 010 2H5a1 1 0 010-2z" fill="#FFAB00"/></svg>'
    });
  }

};

var PriorityMinorIcon = {
  name: 'PriorityMinorIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M18.449 14.975a1 1 0 011.027 1.716l-6.97 4.173a1 1 0 01-1.03-.002L4.57 16.69a1 1 0 011.034-1.712l6.391 3.862 6.454-3.864z" fill="#0065FF"/><path d="M11.995 12.837l6.454-3.865a1 1 0 011.027 1.716l-6.97 4.174a1 1 0 01-1.03-.002L4.57 10.686a1 1 0 011.034-1.712l6.391 3.863z" fill="#2684FF"/><path d="M11.995 6.823l6.454-3.865a1 1 0 111.027 1.716l-6.97 4.174a1 1 0 01-1.03-.002L4.57 4.672A1 1 0 015.604 2.96l6.391 3.863z" fill="#4C9AFF"/></svg>'
    });
  }

};

var PriorityTrivialIcon = {
  name: 'PriorityTrivialIcon',
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
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="#7A8699"/></svg>'
    });
  }

};

exports.ActivityIcon = ActivityIcon;
exports.AddCircleIcon = AddCircleIcon;
exports.AddIcon = AddIcon;
exports.AddItemIcon = AddItemIcon;
exports.AddonIcon = AddonIcon;
exports.AppAccessIcon = AppAccessIcon;
exports.AppSwitcherIcon = AppSwitcherIcon;
exports.Archive16Icon = Archive16Icon;
exports.Archive24Icon = Archive24Icon;
exports.Archive48Icon = Archive48Icon;
exports.ArrowDownCircleIcon = ArrowDownCircleIcon;
exports.ArrowDownIcon = ArrowDownIcon;
exports.ArrowLeftCircleIcon = ArrowLeftCircleIcon;
exports.ArrowLeftIcon = ArrowLeftIcon;
exports.ArrowRightCircleIcon = ArrowRightCircleIcon;
exports.ArrowRightIcon = ArrowRightIcon;
exports.ArrowUpCircleIcon = ArrowUpCircleIcon;
exports.ArrowUpIcon = ArrowUpIcon;
exports.AttachmentIcon = AttachmentIcon;
exports.Audio16Icon = Audio16Icon;
exports.Audio24Icon = Audio24Icon;
exports.Audio48Icon = Audio48Icon;
exports.AudioCircleIcon = AudioCircleIcon;
exports.AudioIcon = AudioIcon;
exports.BacklogIcon = BacklogIcon;
exports.BillingFilledIcon = BillingFilledIcon;
exports.BillingIcon = BillingIcon;
exports.BitbucketBranchesIcon = BitbucketBranchesIcon;
exports.BitbucketBuildsIcon = BitbucketBuildsIcon;
exports.BitbucketCloneIcon = BitbucketCloneIcon;
exports.BitbucketCommitsIcon = BitbucketCommitsIcon;
exports.BitbucketCompareIcon = BitbucketCompareIcon;
exports.BitbucketForksIcon = BitbucketForksIcon;
exports.BitbucketOutputIcon = BitbucketOutputIcon;
exports.BitbucketPipelinesIcon = BitbucketPipelinesIcon;
exports.BitbucketPullrequestsIcon = BitbucketPullrequestsIcon;
exports.BitbucketReposIcon = BitbucketReposIcon;
exports.BitbucketSnippetsIcon = BitbucketSnippetsIcon;
exports.BitbucketSourceIcon = BitbucketSourceIcon;
exports.Blog16Icon = Blog16Icon;
exports.Blog24Icon = Blog24Icon;
exports.BoardIcon = BoardIcon;
exports.BookIcon = BookIcon;
exports.Branch16Icon = Branch16Icon;
exports.Branch24Icon = Branch24Icon;
exports.Bug16Icon = Bug16Icon;
exports.Bug24Icon = Bug24Icon;
exports.BulletListIcon = BulletListIcon;
exports.Calendar16Icon = Calendar16Icon;
exports.Calendar24Icon = Calendar24Icon;
exports.CalendarFilledIcon = CalendarFilledIcon;
exports.CameraFilledIcon = CameraFilledIcon;
exports.CameraIcon = CameraIcon;
exports.CameraRotateIcon = CameraRotateIcon;
exports.CameraTakePictureIcon = CameraTakePictureIcon;
exports.CanvasIcon = CanvasIcon;
exports.Changes16Icon = Changes16Icon;
exports.Changes24Icon = Changes24Icon;
exports.CheckCircleOutlineIcon = CheckCircleOutlineIcon;
exports.CheckIcon = CheckIcon;
exports.ChevronDownCircleIcon = ChevronDownCircleIcon;
exports.ChevronLeftCircleIcon = ChevronLeftCircleIcon;
exports.ChevronLeftIcon = ChevronLeftIcon;
exports.ChevronRightCircleIcon = ChevronRightCircleIcon;
exports.ChevronRightIcon = ChevronRightIcon;
exports.ChevronUpCircleIcon = ChevronUpCircleIcon;
exports.ChildIssuesIcon = ChildIssuesIcon;
exports.Code16Icon = Code16Icon;
exports.Code24Icon = Code24Icon;
exports.CodeIcon = CodeIcon;
exports.CommentIcon = CommentIcon;
exports.Commit16Icon = Commit16Icon;
exports.Commit24Icon = Commit24Icon;
exports.ComponentIcon = ComponentIcon;
exports.CreditcardFilledIcon = CreditcardFilledIcon;
exports.CreditcardIcon = CreditcardIcon;
exports.CrossCircleIcon = CrossCircleIcon;
exports.DashboardIcon = DashboardIcon;
exports.DecisionIcon = DecisionIcon;
exports.DepartmentIcon = DepartmentIcon;
exports.DetailViewIcon = DetailViewIcon;
exports.DiscoverFilledIcon = DiscoverFilledIcon;
exports.DiscoverIcon = DiscoverIcon;
exports.Document16Icon = Document16Icon;
exports.Document24Icon = Document24Icon;
exports.Document48Icon = Document48Icon;
exports.DocumentFilledIcon = DocumentFilledIcon;
exports.DocumentIcon = DocumentIcon;
exports.DocumentsIcon = DocumentsIcon;
exports.DownloadIcon = DownloadIcon;
exports.DragHandlerIcon = DragHandlerIcon;
exports.DropboxIcon = DropboxIcon;
exports.EditIcon = EditIcon;
exports.EditorAddIcon = EditorAddIcon;
exports.EditorAddonIcon = EditorAddonIcon;
exports.EditorAdvancedIcon = EditorAdvancedIcon;
exports.EditorAlignCenterIcon = EditorAlignCenterIcon;
exports.EditorAlignImageCenterIcon = EditorAlignImageCenterIcon;
exports.EditorAlignImageLeftIcon = EditorAlignImageLeftIcon;
exports.EditorAlignImageRightIcon = EditorAlignImageRightIcon;
exports.EditorAlignLeftIcon = EditorAlignLeftIcon;
exports.EditorAlignRightIcon = EditorAlignRightIcon;
exports.EditorAttachmentIcon = EditorAttachmentIcon;
exports.EditorBackgroundColorIcon = EditorBackgroundColorIcon;
exports.EditorBoldIcon = EditorBoldIcon;
exports.EditorBulletListIcon = EditorBulletListIcon;
exports.EditorCodeIcon = EditorCodeIcon;
exports.EditorCollapseIcon = EditorCollapseIcon;
exports.EditorDateIcon = EditorDateIcon;
exports.EditorDecisionIcon = EditorDecisionIcon;
exports.EditorDividerIcon = EditorDividerIcon;
exports.EditorEditIcon = EditorEditIcon;
exports.EditorEmojiIcon = EditorEmojiIcon;
exports.EditorExpandIcon = EditorExpandIcon;
exports.EditorFeedbackIcon = EditorFeedbackIcon;
exports.EditorFileIcon = EditorFileIcon;
exports.EditorHelpIcon = EditorHelpIcon;
exports.EditorHintIcon = EditorHintIcon;
exports.EditorHorizontalRuleIcon = EditorHorizontalRuleIcon;
exports.EditorImageBorderIcon = EditorImageBorderIcon;
exports.EditorImageIcon = EditorImageIcon;
exports.EditorImageResizeIcon = EditorImageResizeIcon;
exports.EditorIndentIcon = EditorIndentIcon;
exports.EditorInfoIcon = EditorInfoIcon;
exports.EditorItalicIcon = EditorItalicIcon;
exports.EditorLayoutThreeEqualIcon = EditorLayoutThreeEqualIcon;
exports.EditorLayoutThreeWithSidebarsIcon = EditorLayoutThreeWithSidebarsIcon;
exports.EditorLayoutTwoEqualIcon = EditorLayoutTwoEqualIcon;
exports.EditorLayoutTwoLeftSidebarIcon = EditorLayoutTwoLeftSidebarIcon;
exports.EditorLayoutTwoRightSidebarIcon = EditorLayoutTwoRightSidebarIcon;
exports.EditorLinkIcon = EditorLinkIcon;
exports.EditorMediaCenterIcon = EditorMediaCenterIcon;
exports.EditorMediaFullWidthIcon = EditorMediaFullWidthIcon;
exports.EditorMediaWideIcon = EditorMediaWideIcon;
exports.EditorMediaWrapLeftIcon = EditorMediaWrapLeftIcon;
exports.EditorMediaWrapRightIcon = EditorMediaWrapRightIcon;
exports.EditorMentionIcon = EditorMentionIcon;
exports.EditorMoreIcon = EditorMoreIcon;
exports.EditorNoteIcon = EditorNoteIcon;
exports.EditorNumberListIcon = EditorNumberListIcon;
exports.EditorOpenIcon = EditorOpenIcon;
exports.EditorOutdentIcon = EditorOutdentIcon;
exports.EditorPanelIcon = EditorPanelIcon;
exports.EditorPhotoIcon = EditorPhotoIcon;
exports.EditorQuoteIcon = EditorQuoteIcon;
exports.EditorRecentIcon = EditorRecentIcon;
exports.EditorRedoIcon = EditorRedoIcon;
exports.EditorRemoveIcon = EditorRemoveIcon;
exports.EditorSearchIcon = EditorSearchIcon;
exports.EditorSettingsIcon = EditorSettingsIcon;
exports.EditorStrikethroughIcon = EditorStrikethroughIcon;
exports.EditorSuccessIcon = EditorSuccessIcon;
exports.EditorTableDisplayOptionsIcon = EditorTableDisplayOptionsIcon;
exports.EditorTableIcon = EditorTableIcon;
exports.EditorTaskIcon = EditorTaskIcon;
exports.EditorTextColorIcon = EditorTextColorIcon;
exports.EditorTextStyleIcon = EditorTextStyleIcon;
exports.EditorUnderlineIcon = EditorUnderlineIcon;
exports.EditorUndoIcon = EditorUndoIcon;
exports.EditorUnlinkIcon = EditorUnlinkIcon;
exports.EditorWarningIcon = EditorWarningIcon;
exports.EmailIcon = EmailIcon;
exports.EmojiActivityIcon = EmojiActivityIcon;
exports.EmojiAddIcon = EmojiAddIcon;
exports.EmojiAtlassianIcon = EmojiAtlassianIcon;
exports.EmojiCustomIcon = EmojiCustomIcon;
exports.EmojiEmojiIcon = EmojiEmojiIcon;
exports.EmojiFlagsIcon = EmojiFlagsIcon;
exports.EmojiFoodIcon = EmojiFoodIcon;
exports.EmojiFrequentIcon = EmojiFrequentIcon;
exports.EmojiIcon = EmojiIcon;
exports.EmojiKeyboardIcon = EmojiKeyboardIcon;
exports.EmojiNatureIcon = EmojiNatureIcon;
exports.EmojiObjectsIcon = EmojiObjectsIcon;
exports.EmojiPeopleIcon = EmojiPeopleIcon;
exports.EmojiProductivityIcon = EmojiProductivityIcon;
exports.EmojiSymbolsIcon = EmojiSymbolsIcon;
exports.EmojiTravelIcon = EmojiTravelIcon;
exports.Epic16Icon = Epic16Icon;
exports.Epic24Icon = Epic24Icon;
exports.ExcelSpreadsheet16Icon = ExcelSpreadsheet16Icon;
exports.ExcelSpreadsheet24Icon = ExcelSpreadsheet24Icon;
exports.ExcelSpreadsheet48Icon = ExcelSpreadsheet48Icon;
exports.Executable16Icon = Executable16Icon;
exports.Executable24Icon = Executable24Icon;
exports.Executable48Icon = Executable48Icon;
exports.ExportIcon = ExportIcon;
exports.FeedbackIcon = FeedbackIcon;
exports.Figma16Icon = Figma16Icon;
exports.Figma24Icon = Figma24Icon;
exports.Figma48Icon = Figma48Icon;
exports.FileIcon = FileIcon;
exports.FilterIcon = FilterIcon;
exports.FlagFilledIcon = FlagFilledIcon;
exports.Folder16Icon = Folder16Icon;
exports.Folder24Icon = Folder24Icon;
exports.Folder48Icon = Folder48Icon;
exports.FolderFilledIcon = FolderFilledIcon;
exports.FolderIcon = FolderIcon;
exports.FollowersIcon = FollowersIcon;
exports.FollowingIcon = FollowingIcon;
exports.Generic16Icon = Generic16Icon;
exports.Generic24Icon = Generic24Icon;
exports.Generic48Icon = Generic48Icon;
exports.Gif16Icon = Gif16Icon;
exports.Gif24Icon = Gif24Icon;
exports.Gif48Icon = Gif48Icon;
exports.GoogleDoc16Icon = GoogleDoc16Icon;
exports.GoogleDoc24Icon = GoogleDoc24Icon;
exports.GoogleDoc48Icon = GoogleDoc48Icon;
exports.GoogleForm16Icon = GoogleForm16Icon;
exports.GoogleForm24Icon = GoogleForm24Icon;
exports.GoogleForm48Icon = GoogleForm48Icon;
exports.GoogleSheet16Icon = GoogleSheet16Icon;
exports.GoogleSheet24Icon = GoogleSheet24Icon;
exports.GoogleSheet48Icon = GoogleSheet48Icon;
exports.GoogleSlide16Icon = GoogleSlide16Icon;
exports.GoogleSlide24Icon = GoogleSlide24Icon;
exports.GoogleSlide48Icon = GoogleSlide48Icon;
exports.GoogledriveIcon = GoogledriveIcon;
exports.GraphBarIcon = GraphBarIcon;
exports.GraphLineIcon = GraphLineIcon;
exports.GsuiteIcon = GsuiteIcon;
exports.HighlightsIcon = HighlightsIcon;
exports.HipchatAudioOnlyIcon = HipchatAudioOnlyIcon;
exports.HipchatChevronDoubleDownIcon = HipchatChevronDoubleDownIcon;
exports.HipchatChevronDoubleUpIcon = HipchatChevronDoubleUpIcon;
exports.HipchatChevronUpIcon = HipchatChevronUpIcon;
exports.HipchatDialOutIcon = HipchatDialOutIcon;
exports.HipchatLobbyIcon = HipchatLobbyIcon;
exports.HipchatMediaAttachmentCountIcon = HipchatMediaAttachmentCountIcon;
exports.HipchatOutgoingSoundIcon = HipchatOutgoingSoundIcon;
exports.HipchatSdVideoIcon = HipchatSdVideoIcon;
exports.HomeCircleIcon = HomeCircleIcon;
exports.HomeFilledIcon = HomeFilledIcon;
exports.Image16Icon = Image16Icon;
exports.Image24Icon = Image24Icon;
exports.Image48Icon = Image48Icon;
exports.ImageBorderIcon = ImageBorderIcon;
exports.ImageIcon = ImageIcon;
exports.ImageResizeIcon = ImageResizeIcon;
exports.Improvement16Icon = Improvement16Icon;
exports.Improvement24Icon = Improvement24Icon;
exports.Incident16Icon = Incident16Icon;
exports.Incident24Icon = Incident24Icon;
exports.InviteTeamIcon = InviteTeamIcon;
exports.Issue16Icon = Issue16Icon;
exports.Issue24Icon = Issue24Icon;
exports.IssueIcon = IssueIcon;
exports.IssueRaiseIcon = IssueRaiseIcon;
exports.IssuesIcon = IssuesIcon;
exports.JiraCaptureIcon = JiraCaptureIcon;
exports.JiraFailedBuildStatusIcon = JiraFailedBuildStatusIcon;
exports.JiraLabsIcon = JiraLabsIcon;
exports.JiraTestSessionIcon = JiraTestSessionIcon;
exports.LabelIcon = LabelIcon;
exports.LightbulbFilledIcon = LightbulbFilledIcon;
exports.LightbulbIcon = LightbulbIcon;
exports.LikeIcon = LikeIcon;
exports.LinkFilledIcon = LinkFilledIcon;
exports.LinkIcon = LinkIcon;
exports.ListIcon = ListIcon;
exports.LocationIcon = LocationIcon;
exports.LockCircleIcon = LockCircleIcon;
exports.LockIcon = LockIcon;
exports.MarketplaceIcon = MarketplaceIcon;
exports.MediaServicesActualSizeIcon = MediaServicesActualSizeIcon;
exports.MediaServicesAddCommentIcon = MediaServicesAddCommentIcon;
exports.MediaServicesAnnotateIcon = MediaServicesAnnotateIcon;
exports.MediaServicesArrowIcon = MediaServicesArrowIcon;
exports.MediaServicesAudioIcon = MediaServicesAudioIcon;
exports.MediaServicesBlurIcon = MediaServicesBlurIcon;
exports.MediaServicesBrushIcon = MediaServicesBrushIcon;
exports.MediaServicesButtonOptionIcon = MediaServicesButtonOptionIcon;
exports.MediaServicesCodeIcon = MediaServicesCodeIcon;
exports.MediaServicesDocumentIcon = MediaServicesDocumentIcon;
exports.MediaServicesFilterIcon = MediaServicesFilterIcon;
exports.MediaServicesFitToPageIcon = MediaServicesFitToPageIcon;
exports.MediaServicesFullScreenIcon = MediaServicesFullScreenIcon;
exports.MediaServicesGridIcon = MediaServicesGridIcon;
exports.MediaServicesImageIcon = MediaServicesImageIcon;
exports.MediaServicesLineIcon = MediaServicesLineIcon;
exports.MediaServicesLineThicknessIcon = MediaServicesLineThicknessIcon;
exports.MediaServicesNoImageIcon = MediaServicesNoImageIcon;
exports.MediaServicesOpenMediaviewerIcon = MediaServicesOpenMediaviewerIcon;
exports.MediaServicesOvalIcon = MediaServicesOvalIcon;
exports.MediaServicesPdfIcon = MediaServicesPdfIcon;
exports.MediaServicesPreselectedIcon = MediaServicesPreselectedIcon;
exports.MediaServicesPresentationIcon = MediaServicesPresentationIcon;
exports.MediaServicesRectangleIcon = MediaServicesRectangleIcon;
exports.MediaServicesScaleLargeIcon = MediaServicesScaleLargeIcon;
exports.MediaServicesScaleSmallIcon = MediaServicesScaleSmallIcon;
exports.MediaServicesSpreadsheetIcon = MediaServicesSpreadsheetIcon;
exports.MediaServicesTextIcon = MediaServicesTextIcon;
exports.MediaServicesUnknownIcon = MediaServicesUnknownIcon;
exports.MediaServicesVideoIcon = MediaServicesVideoIcon;
exports.MediaServicesZipIcon = MediaServicesZipIcon;
exports.MediaServicesZoomInIcon = MediaServicesZoomInIcon;
exports.MediaServicesZoomOutIcon = MediaServicesZoomOutIcon;
exports.MentionIcon = MentionIcon;
exports.MenuExpandIcon = MenuExpandIcon;
exports.MenuIcon = MenuIcon;
exports.MoreIcon = MoreIcon;
exports.MoreVerticalIcon = MoreVerticalIcon;
exports.NewFeature16Icon = NewFeature16Icon;
exports.NewFeature24Icon = NewFeature24Icon;
exports.NotificationAllIcon = NotificationAllIcon;
exports.NotificationDirectIcon = NotificationDirectIcon;
exports.NotificationIcon = NotificationIcon;
exports.OfficeBuildingFilledIcon = OfficeBuildingFilledIcon;
exports.OfficeBuildingIcon = OfficeBuildingIcon;
exports.OpenIcon = OpenIcon;
exports.OverviewIcon = OverviewIcon;
exports.Page16Icon = Page16Icon;
exports.Page24Icon = Page24Icon;
exports.PageFilledIcon = PageFilledIcon;
exports.PageIcon = PageIcon;
exports.PdfDocument16Icon = PdfDocument16Icon;
exports.PdfDocument24Icon = PdfDocument24Icon;
exports.PdfDocument48Icon = PdfDocument48Icon;
exports.PdfIcon = PdfIcon;
exports.PeopleGroupIcon = PeopleGroupIcon;
exports.PeopleIcon = PeopleIcon;
exports.PersonCircleIcon = PersonCircleIcon;
exports.PersonIcon = PersonIcon;
exports.PortfolioIcon = PortfolioIcon;
exports.PowerpointPresentation16Icon = PowerpointPresentation16Icon;
exports.PowerpointPresentation24Icon = PowerpointPresentation24Icon;
exports.PowerpointPresentation48Icon = PowerpointPresentation48Icon;
exports.PreferencesIcon = PreferencesIcon;
exports.PremiumIcon = PremiumIcon;
exports.PresenceActiveIcon = PresenceActiveIcon;
exports.PresenceBusyIcon = PresenceBusyIcon;
exports.PresenceUnavailableIcon = PresenceUnavailableIcon;
exports.Presentation16Icon = Presentation16Icon;
exports.Presentation24Icon = Presentation24Icon;
exports.Presentation48Icon = Presentation48Icon;
exports.PriorityBlockerIcon = PriorityBlockerIcon;
exports.PriorityCriticalIcon = PriorityCriticalIcon;
exports.PriorityHighIcon = PriorityHighIcon;
exports.PriorityHighestIcon = PriorityHighestIcon;
exports.PriorityLowIcon = PriorityLowIcon;
exports.PriorityLowestIcon = PriorityLowestIcon;
exports.PriorityMajorIcon = PriorityMajorIcon;
exports.PriorityMediumIcon = PriorityMediumIcon;
exports.PriorityMinorIcon = PriorityMinorIcon;
exports.PriorityTrivialIcon = PriorityTrivialIcon;
exports.Problem16Icon = Problem16Icon;
exports.Problem24Icon = Problem24Icon;
exports.PullRequest16Icon = PullRequest16Icon;
exports.PullRequest24Icon = PullRequest24Icon;
exports.Question16Icon = Question16Icon;
exports.Question24Icon = Question24Icon;
exports.QuestionsIcon = QuestionsIcon;
exports.QueuesIcon = QueuesIcon;
exports.QuoteIcon = QuoteIcon;
exports.RadioIcon = RadioIcon;
exports.RecentIcon = RecentIcon;
exports.RedoIcon = RedoIcon;
exports.RefreshIcon = RefreshIcon;
exports.RetryIcon = RetryIcon;
exports.RoadmapIcon = RoadmapIcon;
exports.RoomMenuIcon = RoomMenuIcon;
exports.ScheduleFilledIcon = ScheduleFilledIcon;
exports.ScheduleIcon = ScheduleIcon;
exports.ScreenIcon = ScreenIcon;
exports.SelectClearIcon = SelectClearIcon;
exports.SendIcon = SendIcon;
exports.SettingsIcon = SettingsIcon;
exports.ShareIcon = ShareIcon;
exports.ShipIcon = ShipIcon;
exports.ShortcutIcon = ShortcutIcon;
exports.SignInIcon = SignInIcon;
exports.SignOutIcon = SignOutIcon;
exports.Sketch16Icon = Sketch16Icon;
exports.Sketch24Icon = Sketch24Icon;
exports.Sketch48Icon = Sketch48Icon;
exports.SourceCode16Icon = SourceCode16Icon;
exports.SourceCode24Icon = SourceCode24Icon;
exports.SourceCode48Icon = SourceCode48Icon;
exports.Spreadsheet16Icon = Spreadsheet16Icon;
exports.Spreadsheet24Icon = Spreadsheet24Icon;
exports.Spreadsheet48Icon = Spreadsheet48Icon;
exports.StarFilledIcon = StarFilledIcon;
exports.StarIcon = StarIcon;
exports.StarLargeIcon = StarLargeIcon;
exports.StatusIcon = StatusIcon;
exports.Story16Icon = Story16Icon;
exports.Story24Icon = Story24Icon;
exports.Subtask16Icon = Subtask16Icon;
exports.Subtask24Icon = Subtask24Icon;
exports.SubtaskIcon = SubtaskIcon;
exports.SuitcaseIcon = SuitcaseIcon;
exports.SwitcherIcon = SwitcherIcon;
exports.TableIcon = TableIcon;
exports.Task16Icon = Task16Icon;
exports.Task24Icon = Task24Icon;
exports.TaskIcon = TaskIcon;
exports.TrashIcon = TrashIcon;
exports.TrayIcon = TrayIcon;
exports.UndoIcon = UndoIcon;
exports.UnlinkIcon = UnlinkIcon;
exports.UnlockCircleIcon = UnlockCircleIcon;
exports.UnlockIcon = UnlockIcon;
exports.UploadIcon = UploadIcon;
exports.UserAvatarCircleIcon = UserAvatarCircleIcon;
exports.VidAudioMutedIcon = VidAudioMutedIcon;
exports.VidAudioOnIcon = VidAudioOnIcon;
exports.VidBackwardIcon = VidBackwardIcon;
exports.VidCameraOffIcon = VidCameraOffIcon;
exports.VidCameraOnIcon = VidCameraOnIcon;
exports.VidConnectionCircleIcon = VidConnectionCircleIcon;
exports.VidForwardIcon = VidForwardIcon;
exports.VidFullScreenOffIcon = VidFullScreenOffIcon;
exports.VidFullScreenOnIcon = VidFullScreenOnIcon;
exports.VidHangUpIcon = VidHangUpIcon;
exports.VidHdCircleIcon = VidHdCircleIcon;
exports.VidPauseIcon = VidPauseIcon;
exports.VidPlayIcon = VidPlayIcon;
exports.VidRaisedHandIcon = VidRaisedHandIcon;
exports.VidShareScreenIcon = VidShareScreenIcon;
exports.VidSpeakingCircleIcon = VidSpeakingCircleIcon;
exports.VidVolumeFullIcon = VidVolumeFullIcon;
exports.VidVolumeHalfIcon = VidVolumeHalfIcon;
exports.VidVolumeMutedIcon = VidVolumeMutedIcon;
exports.Video16Icon = Video16Icon;
exports.Video24Icon = Video24Icon;
exports.Video48Icon = Video48Icon;
exports.VideoCircleIcon = VideoCircleIcon;
exports.VideoFilledIcon = VideoFilledIcon;
exports.WatchFilledIcon = WatchFilledIcon;
exports.WatchIcon = WatchIcon;
exports.WordDocument16Icon = WordDocument16Icon;
exports.WordDocument24Icon = WordDocument24Icon;
exports.WordDocument48Icon = WordDocument48Icon;
exports.WorldIcon = WorldIcon;
exports.WorldSmallIcon = WorldSmallIcon;
