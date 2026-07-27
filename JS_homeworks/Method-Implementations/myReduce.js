Array.prototype.myReduce = function(callback,initialValue) {

   const array = this;
   const length = array.length;

   let argumentsLength = arguments.length;
   let hasInitialValue = argumentsLength > 1;

  let accumulator = hasInitialValue ? initialValue : undefined;
  let startIndex = 0;

  
    if(!hasInitialValue) {
       let foundFirstElement = false;
    
        for (let i = 0; i < length; i++) {
            if (i in array) {
            accumulator = array[i];
            startIndex = i + 1;
            foundFirstElement = true;
            break;
            }
        }
    }

    for (let i = startIndex; i < length; i++) {
        if (i in array) {
        accumulator = callback(accumulator, array[i], i, array);
        }
    }
    
    return accumulator;
};