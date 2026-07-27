
function sumOfNums(num1,num2) {
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    } else {
        return "invalid input";
    }
}

console.log(sumOfNums(1,2));
console.log(sumOfNums(1,"hello"));
console.log(sumOfNums(1,"10"));