class ProgressBar {
  constructor({
    backgroundColor = '#0052CC',
    transition = 'all 0.5s ease-out',
    zIndex = '999999',
    height = '3px'
  } = {}) {
    this.el = null;
    this.timer = null;
    this.progress = 0;
    this.props = {
      backgroundColor,
      transition,
      zIndex,
      height
    };
    this.max = 0.95;
  }

  applyCss() {
    // eslint-disable-next-line no-restricted-syntax
    for (const [prop, value] of Object.entries(this.props)) {
      this.el.style[prop] = value;
    }
  }

  clamp(n) {
    return n > this.max ? this.max : n;
  }

  createElement() {
    this.el = document.createElement('div');
    this.el.style.position = 'fixed';
    this.el.style.top = '0';
    this.el.style.left = '0';
    this.applyCss();
    document.body.appendChild(this.el);
  }

  start() {
    if (!this.el) {
      this.createElement();
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.increase();
      }, 200);
    }
  }

  hide() {
    clearInterval(this.timer);
    setTimeout(() => {
      document.body.removeChild(this.el);
      this.reset();
    }, 300);
  }

  reset() {
    this.timer = null;
    this.progress = 0;
    this.el = null;
  }

  setProgress() {
    this.el.style.width = `${this.progress * 100}%`;
  }

  increase(amount) {
    let increment = amount;

    if (this.progress > 1) {
      return;
    }

    if (typeof increment !== 'number') {
      if (this.progress >= 0 && this.progress < 0.01) {
        increment = 0.01;
      } else if (this.progress >= 0.01 && this.progress < 0.3) {
        increment = 0.1;
      } else if (this.progress >= 0.3 && this.progress < 0.5) {
        increment = 0.05;
      } else if (this.progress >= 0.5 && this.progress < 0.8) {
        increment = 0.03;
      } else if (this.progress >= 0.8 && this.progress < 0.99) {
        increment = 0.005;
      } else {
        increment = 0;
      }
    }

    this.progress = this.clamp(this.progress + increment);
    this.setProgress();
  }

  finish() {
    if (this.el) {
      this.progress = 1;
      this.setProgress();
      this.hide();
    }
  }

}

export { ProgressBar as P };
