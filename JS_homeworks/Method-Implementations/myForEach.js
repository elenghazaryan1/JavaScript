Array.prototype.myForEach = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.forEach called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const Obj = Object(this);

    const length = Obj.length >>> 0;

    for (let i = 0; i < length; i++) {
      if (i in Obj) {
        callback.call(thisArg, Obj[i], i, Obj);
      }
    }
  };