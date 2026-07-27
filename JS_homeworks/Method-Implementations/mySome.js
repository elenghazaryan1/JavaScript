 Array.prototype.mySome = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.mySome called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const Obj = Object(this);
    const len = Obj.length >>> 0; 

    for (let i = 0; i < len; i++) {
      if (i in Obj) {
        const result = callback.call(thisArg, Obj[i], i, Obj);
        
        if (result) {
          return true;
        }
      }
    }

    return false;
  };