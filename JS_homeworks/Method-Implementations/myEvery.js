Array.prototype.myEvery = function(callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError('Array.prototype.every called on null or undefined');
  }
  
  if (typeof callbackFn !== 'function') {
    throw new TypeError(callbackFn + ' is not a function');
  }

  const O = Object(this);
  const len = O.length >>> 0; 

  for (let k = 0; k < len; k++) {
    if (k in O) {
      const kValue = O[k];
            const testResult = callbackFn.call(thisArg, kValue, k, O);
      
      if (!testResult) {
        return false;
      }
    }
  }

  return true;
};