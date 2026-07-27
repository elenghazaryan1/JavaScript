Array.prototype.myFindIndex = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }

    const Obj= Object(this);

    const length = Obj.length >>> 0; 
   for (let i = 0; i < length; i++) {
     const value = Obj[i]; 

      if (callback.call(thisArg, value, i, Obj)) {
        return i;
      }
    }

    return -1;
  };