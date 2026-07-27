Function.prototype.myApply = function (context, argsArray) {
  context = context || globalThis;

  context = Object(context);

  const uniqueSymbol = Symbol('fn');

  context[uniqueSymbol] = this;

  const result = context[uniqueSymbol](...(argsArray || []));

  delete context[uniqueSymbol];

  return result;
};
