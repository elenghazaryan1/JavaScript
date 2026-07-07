
function returnNull(num) {

    let res = Number(num);

    if(Number.isNaN(res)) {
        return null;
    }
    return res;
}

console.log(returnNull("asfbb"));
console.log(returnNull("12"));