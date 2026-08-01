function pipe(...funcs) {

    return function(a) {
        let result = a;
    
    for(let i = 0; i < funcs.length; i++) {
        result = funcs[i](result);
    }

    return result;
 }

}
const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const func = pipe(add5, add5, double, sub4); 
console.log(func(2));

