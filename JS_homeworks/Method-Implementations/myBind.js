Function.prototype.myBind = function (context, ...boundArgs) {
  const targetFunction = this;

  if (typeof targetFunction !== 'function') {
    throw new TypeError('Function.prototype.myBind - what is trying to be bound is not callable');
  }

  return function (...newArgs) {
    return targetFunction.apply(context, [...boundArgs, ...newArgs]);
  };
};
