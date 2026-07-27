 Array.prototype.myFind = function (callbackFn, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }

    const Obj = Object(this);

    const length = Obj.length >>> 0;

    if (typeof callbackFn !== 'function') {
      throw new TypeError('callbackFn must be a function');
    }

    for (let k = 0; k < length; k++) {
      const value = Obj[k];
      
      if (callbackFn.call(thisArg, value, k, Obj)) {
        return value; 
      }
    }

    return undefined;
};