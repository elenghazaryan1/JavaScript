function curry(cb) {
let collect = [];
 
    function next(...collect) {

        if (collect.length >= cb.length) {
            return cb(...collect);
        }

        return function(...args) {
            return next(...collect, ...args);
        };
    }

    return next;
}

const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;

const sumFunc = curry(sum);
const prodFunc = curry(product);


console.log(sumFunc(1)(2, 3)); 
console.log(sumFunc(1, 2)(3)); 
console.log(sumFunc(1, 2, 3));   
console.log(prodFunc(1, 2, 3, 4));   
console.log(prodFunc(1)(2, 3, 4));   
console.log(prodFunc(1, 2)(3, 4));   
console.log(prodFunc(1, 2, 3)(4));