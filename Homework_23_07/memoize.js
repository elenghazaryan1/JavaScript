function factorial(...args) {
 let res = 1;
 for (let i = 2; i <= args; ++i) {
   res *= i;
 }
 return res;
}

function memoize(cb) {

    let cache = {};

    return function(a) {

   if(a in cache) {
            return cache[a];
        } 
          let  result = cb(a);
            cache[a] = result;

            return result;
        }
    }      


const foo = memoize(factorial);
console.log(foo(5)); 
console.log(foo(5)); 
