Function.prototype.myCall = function (context, ...args) {
  context = context ?? globalThis;

  if (typeof context !== "object" && typeof context !== "function") {
    context = Object(context);
  }

  const uniqueProp = Symbol("fn");

  context[uniqueProp] = this;

  const result = context[uniqueProp](...args);

  delete context[uniqueProp];

  return result;
};
