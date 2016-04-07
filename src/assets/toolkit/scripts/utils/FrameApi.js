class FrameApi {
  static get isIe() {
    /* global is */
    if (typeof(is) !== 'undefined') {
      return is.ie();// || is.edge();
    }

    return true;
  }

  static bindMessageListener(listener) {
    const callback = function callbackHandler(event) {
      let message = null;
      if (FrameApi.isIe) {
        message = JSON.parse(event.data);
      } else {
        message = event.data;
      }

      if (listener[message.func]) {
        listener[message.func].apply(listener, message.args);
      }
    };

    if (window.addEventListener) {
      window.addEventListener('message', callback);
    } else {
      // IE8
      window.attachEvent('onmessage', callback);
    }
  }

  static sendMessage(target, func, args) {
    const data = {
      'func': func,
      'args': args,
    };
    const message = FrameApi.isIe ? JSON.stringify(data) : data;

    target.postMessage(message, '*');
  }
}

export default FrameApi;
