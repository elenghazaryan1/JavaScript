
function findIndex(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }

    return -1;
}
let arr = [3,6,9,12];
console.log(findIndex(arr,9));