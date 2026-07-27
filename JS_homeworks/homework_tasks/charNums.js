
function numsCount(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count++;
    }

    return count;
}

console.log(numsCount("hello"));